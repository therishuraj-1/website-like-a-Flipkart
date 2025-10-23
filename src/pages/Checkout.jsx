import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const singleItem = location?.state?.singleItem || null;

  const [form, setForm] = useState({
    name: '',
    address1: '',
    address2: '',
    city: '',
    pincode: '',
    phone: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (!cartItems || cartItems.length === 0) {
    // if singleItem is provided we allow checkout even if cart is empty
    if (!singleItem) return <div className='p-6'><h2 className='text-2xl'>Your cart is empty</h2></div>;
  }

  const total = singleItem
    ? (Number(String(singleItem.price).replace(/[^0-9]/g, '')) || 0) * (singleItem.quantity || 1)
    : cartItems.reduce((sum, item) => {
        const price = Number(String(item.price).replace(/[^0-9]/g, '')) || 0;
        return sum + price * (item.quantity || 1);
      }, 0);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const validateForm = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!form.address1.trim()) return 'Address is required';
    if (!form.city.trim()) return 'City is required';
    if (!/^[0-9]{4,6}$/.test(form.pincode)) return 'Enter a valid pincode';
    if (!/^[0-9]{7,15}$/.test(form.phone)) return 'Enter a valid phone number';
    return null;
  };

  const placeOrder = () => {
    const err = validateForm();
    if (err) {
      alert(err);
      return;
    }


    const id = 'ORD' + Date.now();
    setOrderId(id);
    setOrderPlaced(true);
    // if singleItem checkout, remove only that item from cart, else clear whole cart
    if (singleItem) {
      removeFromCart(singleItem.id);
    } else {
      clearCart();
    }
  };

  if (orderPlaced) {
    return (
      <div className='p-6'>
        <h2 className='text-2xl font-bold mb-4'>Thank you — your order is placed!</h2>
        <p className='mb-2'>Order ID: <strong>{orderId}</strong></p>
        <p className='mb-2'>We will deliver to:</p>
        <div className='border p-4 rounded'>
          <div>{form.name}</div>
          <div>{form.address1}{form.address2 ? ', ' + form.address2 : ''}</div>
          <div>{form.city} - {form.pincode}</div>
          <div>Phone: {form.phone}</div>
        </div>
        <div className='mt-4'>
          <button onClick={() => navigate('/')} className='px-4 py-2 bg-blue-600 text-white rounded'>Continue shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Checkout</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <h3 className='font-semibold mb-2'>Shipping address</h3>
          <div className='flex flex-col gap-2'>
            <input name='name' value={form.name} onChange={onChange} placeholder='Full name' className='p-2 border rounded' />
            <input name='address1' value={form.address1} onChange={onChange} placeholder='Address line 1' className='p-2 border rounded' />
            <input name='address2' value={form.address2} onChange={onChange} placeholder='Address line 2 (optional)' className='p-2 border rounded' />
            <input name='city' value={form.city} onChange={onChange} placeholder='City' className='p-2 border rounded' />
            <input name='pincode' value={form.pincode} onChange={onChange} placeholder='Pincode' className='p-2 border rounded' />
            <input name='phone' value={form.phone} onChange={onChange} placeholder='Phone' className='p-2 border rounded' />
          </div>
        </div>

        <div>
          <h3 className='font-semibold mb-2'>Order summary</h3>
          <div className='border rounded p-3'>
            {singleItem ? (
              <div key={singleItem.id} className='flex items-center gap-3 border-b py-2'>
                <img src={singleItem.img} alt={singleItem.title} className='w-16 h-16 object-cover rounded' />
                <div>
                  <div className='font-semibold'>{singleItem.title}</div>
                  <div>{singleItem.price} x {singleItem.quantity || 1}</div>
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className='flex items-center gap-3 border-b py-2'>
                  <img src={item.img} alt={item.title} className='w-16 h-16 object-cover rounded' />
                  <div>
                    <div className='font-semibold'>{item.title}</div>
                    <div>{item.price} x {item.quantity || 1}</div>
                  </div>
                </div>
              ))
            )}

            <div className='mt-3 font-bold'>Total: ₹{total}</div>
            <button onClick={placeOrder} className='mt-4 px-4 py-2 bg-green-600 text-white rounded'>Place order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
