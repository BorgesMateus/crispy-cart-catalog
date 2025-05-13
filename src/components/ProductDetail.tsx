
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
import { Package, Scale, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '@/contexts/CartContext';

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
  
  // Get current quantity from cart
  const currentItem = cartItems.find(item => item.product.id === product.id);
  const quantity = currentItem ? currentItem.quantity : 0;
  const [inputValue, setInputValue] = useState<string>(quantity.toString());
  
  // Update input value when cart quantity changes
  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputBlur = () => {
    const newQuantity = parseInt(inputValue) || 0;
    updateQuantity(product.id, newQuantity);
    setInputValue(newQuantity.toString());
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id);
  };

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
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="mx-2 h-8 w-12 px-2 text-center"
              />
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
