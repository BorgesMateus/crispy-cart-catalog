
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/products';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductImageCarousel from './ProductImageCarousel';
import { Package, Scale, Plus, Minus, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '@/contexts/CartContext';
import { useDebounce } from '@/hooks/useDebounce';
import { useToast } from '@/hooks/use-toast';

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { addToCart, decreaseQuantity, updateQuantity, cartItems } = useCart();
  const { toast } = useToast();
  
  // Get current quantity from cart
  const currentItem = cartItems.find(item => item.product.id === product.id);
  const quantity = currentItem ? currentItem.quantity : 0;
  
  // Separate state for input field value
  const [inputValue, setInputValue] = useState<string>(quantity.toString());
  
  // Create debounced version of the input value with 500ms delay
  const debouncedInputValue = useDebounce<string>(inputValue, 500);
  
  // Update input value when cart quantity changes
  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);
  
  // Update cart when the debounced input value changes
  useEffect(() => {
    const newQuantity = parseInt(debouncedInputValue) || 0;
    // Only update if the quantity has actually changed and is valid
    if (newQuantity !== quantity && newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    }
  }, [debouncedInputValue, product.id, quantity, updateQuantity]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputBlur = () => {
    // On blur, if value is valid, update the cart
    const newQuantity = parseInt(inputValue) || 0;
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    } else {
      // Reset to current quantity if invalid
      setInputValue(quantity.toString());
      if (inputValue !== '' && inputValue !== '0') {
        toast({
          title: "Quantidade inválida",
          description: "Por favor, insira um número maior que zero.",
          variant: "destructive"
        });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Apply value when Enter key is pressed (for desktop users)
    if (e.key === 'Enter') {
      const newQuantity = parseInt(inputValue) || 0;
      if (newQuantity > 0) {
        updateQuantity(product.id, newQuantity);
      } else {
        // Reset to current quantity if invalid
        setInputValue(quantity.toString());
        toast({
          title: "Quantidade inválida",
          description: "Por favor, insira um número maior que zero.",
          variant: "destructive"
        });
      }
      // Remove focus from the input field
      (e.target as HTMLInputElement).blur();
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id);
  };
  
  const handleApplyQuantity = () => {
    const newQuantity = parseInt(inputValue) || 0;
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    } else {
      // Reset to current quantity if invalid
      setInputValue(quantity.toString());
      toast({
        title: "Quantidade inválida",
        description: "Por favor, insira um número maior que zero.",
        variant: "destructive"
      });
    }
  };
  
  // Check if current input value is different from cart quantity
  const hasQuantityChanged = parseInt(inputValue) !== quantity;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {product.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-2">
          <ProductImageCarousel 
            images={product.images} 
            productName={product.name} 
            className="aspect-video rounded-lg overflow-hidden"
          />
        </div>
        
        <div className="mt-4 space-y-4">
          {product.extraInfo?.usageTips && (
            <div>
              <h3 className="text-sm font-medium text-gray-700">Dicas de uso:</h3>
              <p className="text-sm text-gray-600 mt-1">{product.extraInfo.usageTips}</p>
            </div>
          )}
          
          {product.extraInfo?.ingredients && (
            <div>
              <h3 className="text-sm font-medium text-gray-700">Ingredientes:</h3>
              <p className="text-sm text-gray-600 mt-1">{product.extraInfo.ingredients}</p>
            </div>
          )}
          
          {product.extraInfo?.funFact && (
            <div>
              <h3 className="text-sm font-medium text-gray-700">Você sabia?</h3>
              <p className="text-sm text-gray-600 mt-1">{product.extraInfo.funFact}</p>
            </div>
          )}
          
          {/* If no extraInfo at all, show a message */}
          {!product.extraInfo?.usageTips && 
           !product.extraInfo?.ingredients && 
           !product.extraInfo?.funFact && (
            <div>
              <p className="text-sm text-gray-500">Informações adicionais sobre este produto estarão disponíveis em breve.</p>
            </div>
          )}
          
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center">
              <Scale className="h-3 w-3 mr-1" />
              {product.weight.toFixed(2)}kg
            </span>
            {product.isPackage && (
              <span className="flex items-center">
                <Package className="h-3 w-3 mr-1" />
                Pacote
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-red-600">
              R$ {product.price.toFixed(2)}
            </span>
            <div className="flex items-center">
              <Button
                onClick={handleDecreaseQuantity}
                variant="outline"
                size="icon"
                className={`rounded-full h-8 w-8 ${quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={quantity === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex items-center">
                <Input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleKeyDown}
                  className="mx-2 h-8 w-12 px-2 text-center"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
                {hasQuantityChanged && (
                  <Button
                    onClick={handleApplyQuantity}
                    variant="outline"
                    size="sm"
                    className="ml-1 h-8 px-2"
                  >
                    <Check className="h-3 w-3 mr-1" /> Aplicar
                  </Button>
                )}
              </div>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
