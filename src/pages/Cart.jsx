import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../contexts/CartContext";
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return <h2 className="text-center mt-10">Your cart is empty 🛒</h2>;
  }

  const total = cartItems.reduce((sum, item) => {
    const price = Number(String(item.price).replace(/[^0-9]/g, '')) || 0;
    return sum + price * (item.quantity || 1);
  }, 0);

  const handleBuyNow = (item) => navigate('/checkout', { state: { singleItem: item } });
  const handleUpdateQty = (id, qty) => updateQuantity(id, qty);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={removeFromCart}
          onBuyNow={handleBuyNow}
          onUpdateQuantity={handleUpdateQty}
        />
      ))}
      <div className="mt-4 font-bold">Total: ₹{total}</div>
    </div>
  );
};

export default Cart;