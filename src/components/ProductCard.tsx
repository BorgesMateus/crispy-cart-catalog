
import React, { useState, useEffect } from 'react';
import { Product } from '../types/products';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Plus, Minus, Package, Scale, Eye } from 'lucide-react';
import { Input } from './ui/input';
import ProductImageCarousel from './ProductImageCarousel';
import ProductDetail from './ProductDetail';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, decreaseQuantity, updateQuantity, cartItems } = useCart();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Find this product in cart to get current quantity
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
    // Ensure the displayed value matches what's in the cart
    setInputValue(newQuantity.toString());
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id);
  };

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
