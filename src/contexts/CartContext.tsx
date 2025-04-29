import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types/products';
import { toast } from '@/components/ui/sonner';
import { FREE_SHIPPING_THRESHOLD } from '../data/products';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  itemsCount: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  freeShippingRemaining: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [freeShippingRemaining, setFreeShippingRemaining] = useState<number>(FREE_SHIPPING_THRESHOLD);

  // Calculate totals whenever cart changes
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    setCartTotal(total);
    setItemsCount(count);
    setFreeShippingRemaining(Math.max(0, FREE_SHIPPING_THRESHOLD - total));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        // Product exists in cart, increment quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Product doesn't exist in cart, add it
        return [...currentItems, { product, quantity: 1 }];
      }
    });

    toast(`${product.name} adicionado ao carrinho`, {
      description: `R$ ${product.price.toFixed(2)}`,
      position: 'top-right'
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.product.id !== productId)
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.product.id === productId
      );

      if (existingItemIndex === -1) return currentItems;

      const updatedItems = [...currentItems];
      const item = updatedItems[existingItemIndex];

      if (item.quantity === 1) {
        // If quantity is 1, remove the item
        return updatedItems.filter(item => item.product.id !== productId);
      } else {
        // Otherwise, decrease quantity by 1
        updatedItems[existingItemIndex] = {
          ...item,
          quantity: item.quantity - 1
        };
        return updatedItems;
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        cartTotal,
        itemsCount,
        isCartOpen,
        toggleCart,
        closeCart,
        openCart,
        freeShippingRemaining
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
