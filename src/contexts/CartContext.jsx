import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const STORAGE_KEY = 'flipcart_cart_v1';

  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to read cart from localStorage', e);
      return [];
    }
  }); 

  const addToCart = (product) => {
    console.log('addToCart called with', product);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };


  const clearCart = () => setCartItems([]);

  const updateQuantity = (productId, quantity) => {
    setCartItems((prev) => prev.map(item => item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item));
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to write cart to localStorage', e);
    }
  }, [cartItems]);


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};