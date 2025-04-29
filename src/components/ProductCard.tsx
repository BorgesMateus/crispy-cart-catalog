
import React from 'react';
import { Product } from '../types/products';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, decreaseQuantity, cartItems } = useCart();
  
  const currentItem = cartItems.find(item => item.product.id === product.id);
  const quantity = currentItem ? currentItem.quantity : 0;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.svg"; // Default image if product image fails to load
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-white text-catalog-primary font-bold px-2 py-1 rounded-full text-xs">
          {product.category}
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <p className="text-xl font-bold text-catalog-primary">
          R$ {product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <Button
            onClick={() => decreaseQuantity(product.id)}
            variant="outline"
            size="icon"
            className={`rounded-full h-8 w-8 ${quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={quantity === 0}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="mx-2 font-medium w-6 text-center">{quantity}</span>
          <Button
            onClick={() => addToCart(product)}
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
