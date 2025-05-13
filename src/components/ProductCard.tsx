
import React, { useState, useEffect } from 'react';
import { Product } from '../types/products';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Plus, Minus, Package, Scale, Eye, Check } from 'lucide-react';
import { Input } from './ui/input';
import ProductImageCarousel from './ProductImageCarousel';
import ProductDetail from './ProductDetail';
import { useDebounce } from '../hooks/useDebounce';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, decreaseQuantity, updateQuantity, cartItems } = useCart();
  const { toast } = useToast();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Find this product in cart to get current quantity
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
    <>
      <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative overflow-hidden">
          <ProductImageCarousel 
            images={product.images} 
            productName={product.name} 
            className="aspect-square"
          />
          <div className="absolute top-2 right-2 bg-white text-red-600 font-bold px-2 py-1 rounded-full text-xs">
            {product.category}
          </div>
          {product.featured && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white font-bold px-2 py-1 rounded-full text-xs">
              Destaque
            </div>
          )}
        </div>
        <CardContent className="flex-grow pt-4">
          <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.description}</p>
          <div className="flex items-center gap-3 mb-2 text-xs text-gray-500">
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
          <p className="text-xl font-bold text-red-600">
            R$ {product.price.toFixed(2)}
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDetailOpen(true)}
            className="text-xs flex items-center mt-2 text-blue-600 hover:text-blue-700 p-0 h-auto"
          >
            <Eye className="h-3 w-3 mr-1" />
            Ver Mais
          </Button>
        </CardContent>
        <CardFooter className="pt-0 flex justify-between items-center">
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
        </CardFooter>
      </Card>
      
      <ProductDetail 
        product={product} 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
      />
    </>
  );
};

export default ProductCard;
