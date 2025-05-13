
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types/products';
import { FREE_SHIPPING_THRESHOLD } from '../data/shipping';
import { MIN_PACKAGES, MIN_WEIGHT_KG } from '@/data/products';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  cartTotal: number;
  itemsCount: number;
  freeShippingRemaining: number;
  totalWeight: number;
  packageCount: number;
  meetsMinimumOrder: boolean;
  addMultipleToCart: (products: {product: Product, quantity: number}[]) => void;
  animateCartIcon: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [animateCartIcon, setAnimateCartIcon] = useState(0);

  // Get cart items from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error('Error parsing stored cart:', e);
      }
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    console.log("CartContext - addToCart called with product:", product.name);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
    
    // Trigger animation
    setAnimateCartIcon(prev => prev + 1);
  };

  const addMultipleToCart = (products: {product: Product, quantity: number}[]) => {
    console.log("CartContext - addMultipleToCart called with products:", products.map(p => p.product.name));
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      
      products.forEach(({ product, quantity }) => {
        const existingItemIndex = newItems.findIndex(item => item.product.id === product.id);
        
        if (existingItemIndex >= 0) {
          newItems[existingItemIndex].quantity += quantity;
        } else {
          newItems.push({ product, quantity });
        }
      });
      
      return newItems;
    });
    
    // Trigger animation
    setAnimateCartIcon(prev => prev + 1);
    
    // Open cart after adding multiple items
    setIsCartOpen(true);
  };

  const decreaseQuantity = (productId: string) => {
    console.log("CartContext - decreaseQuantity called for productId:", productId);
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          const newQuantity = Math.max(0, item.quantity - 1);
          return newQuantity === 0 
            ? null 
            : { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (productId: string) => {
    console.log("CartContext - removeFromCart called for productId:", productId);
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    console.log("CartContext - updateQuantity called:", productId, quantity);
    
    if (quantity <= 0) {
      console.log("CartContext - removing item because quantity <= 0");
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => {
      console.log("CartContext - current cart items:", prevItems);
      const newItems = prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      );
      console.log("CartContext - updated cart items:", newItems);
      return newItems;
    });
  };

  const clearCart = () => {
    console.log("CartContext - clearCart called");
    setCartItems([]);
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

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.product.price * item.quantity), 
    0
  );
  
  // Calculate total items count
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity, 
    0
  );
  
  // Calculate amount remaining for free shipping
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
  
  // Calculate total weight
  const totalWeight = cartItems.reduce(
    (total, item) => total + (item.product.weight * item.quantity), 
    0
  );
  
  // Count packages (considering quantities)
  const packageCount = cartItems.reduce(
    (count, item) => item.product.isPackage ? count + item.quantity : count, 
    0
  );
  
  // Check if order meets minimum requirements (either packages count or total weight)
  const meetsMinimumOrder = packageCount >= MIN_PACKAGES || totalWeight >= MIN_WEIGHT_KG;

  const value: CartContextType = {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    toggleCart,
    openCart,
    closeCart,
    cartTotal,
    itemsCount,
    freeShippingRemaining,
    totalWeight,
    packageCount,
    meetsMinimumOrder,
    addMultipleToCart,
    animateCartIcon,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
