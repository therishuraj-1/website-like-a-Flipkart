import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../utils/Api'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then((res) => { if (mounted) setProducts(res); })
      .catch((err) => console.error('Failed to load products', err))
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false };
  }, []);

  if (loading) return <div className='p-6'>Loading products...</div>;

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>All Products</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {products.map(p => (
          <Link to={`/product/${p.id}`} key={p.id} className='block border rounded p-3 hover:shadow'>
            <img src={p.img} alt={p.title} className='w-full h-40 object-cover mb-2' />
            <div className='font-semibold'>{p.title}</div>
            <div className='text-green-700'>From ₹{p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList
