import React from 'react'

const CartItem = ({ item, onRemove, onBuyNow, onUpdateQuantity }) => {
  const priceNum = Number(String(item.price).replace(/[^0-9]/g, '')) || 0;
  const subtotal = priceNum * (item.quantity || 1);

  return (
    <div className='flex justify-between items-center border-b py-2'>
      <div className='flex items-center gap-4'>
        <img src={item.img} alt={item.title} className='w-20 h-20 object-cover rounded' />
        <div>
          <h3 className='font-semibold'>{item.title}</h3>
          <p>Price: {item.price}</p>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center border rounded overflow-hidden'>
          <button className='px-3' onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}>-</button>
          <div className='px-3'>{item.quantity || 1}</div>
          <button className='px-3' onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
        </div>

        <div className='w-24'>Subtotal: ₹{subtotal}</div>

        <div className='flex flex-col gap-2'>
          <button onClick={() => onRemove(item.id)} className='bg-red-500 text-white px-3 py-1 rounded'>Remove</button>
          <button onClick={() => onBuyNow(item)} className='bg-blue-600 text-white px-3 py-1 rounded'>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
