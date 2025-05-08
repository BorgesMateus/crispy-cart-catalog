
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, CartItem } from '../types/products';
import { toast } from '../components/ui/sonner';
import { FREE_SHIPPING_THRESHOLD } from '@/data/shipping';

interface CartContextData {
  cartItems: CartItem[];
  cartTotal: number;
  itemsCount: number;
  isCartOpen: boolean;
  freeShippingRemaining: number;
  addToCart: (product: Product) => void;
  decreaseQuantity: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.name} adicionado ao carrinho`, {
          description: 'Clique no carrinho para ver os detalhes.',
          action: {
            label: "Ver Carrinho",
            onClick: () => setIsCartOpen(true)
          },
        });
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === productId);
      
      if (!existingItem) return prev;
      
      if (existingItem.quantity === 1) {
        return prev.filter(item => item.product.id !== productId);
      } else {
        return prev.map(item => 
          item.product.id === productId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === productId);
      
      if (!existingItem) return prev;
      
      return prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      );
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartTotal,
      itemsCount,
      isCartOpen,
      freeShippingRemaining,
      addToCart,
      decreaseQuantity,
      updateQuantity,
      removeFromCart,
      toggleCart,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
