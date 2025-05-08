
import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartToggle: React.FC = () => {
  const { toggleCart, itemsCount, cartTotal } = useCart();

  return (
    <Button 
      onClick={toggleCart}
      variant="default"
      className="fixed bottom-6 right-6 z-30 shadow-lg bg-red-600 hover:bg-red-700 rounded-full h-16 w-16 md:h-auto md:w-auto md:rounded-lg md:px-4 md:py-2 md:bottom-auto md:top-4 md:right-4"
    >
      <ShoppingCart className="h-6 w-6 md:mr-2" />
      <span className="hidden md:inline">R$ {cartTotal.toFixed(2)}</span>
      {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemsCount}
        </span>
      )}
    </Button>
  );
};

export default CartToggle;
