import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProduct } from '../utils/Api'

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext)
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getProduct(id)
      .then(p => { if (mounted) setProduct(p); })
      .catch(err => console.error(err))
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false };
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
  };
  
  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };


  if (loading) return <div className='p-6'>Loading...</div>;
  if (!product) return <div className='p-6'>Product not found</div>;

  return (
    <div className='p-6'>
      <div className='flex gap-8 items-start'>
        <img src={product.img} alt={product.title} className='w-90 h-110 ' />
        <div>
          <h2 className='text-3xl font-bold'>{product.title}</h2>
          <p className='text-xl text-green-700 font-semibold mt-2'>From ₹{product.price}</p>
          <p className='mt-4 text-gray-700'>{product.description}</p>

          <div className='mt-6 flex gap-3'>
            <button className='px-4 py-2 bg-blue-600 text-white rounded' onClick={handleAddToCart}>Add to cart</button>
            <button className='px-4 py-2 bg-green-300  rounded' onClick={handleBuyNow}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
