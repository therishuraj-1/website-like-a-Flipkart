import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/icons/shopping-cart.png'
import cartIcon2 from '../assets/icons/logo.png'
import cartIcon3 from '../assets/icons/view.png'
import { CartContext } from '../contexts/CartContext'

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const count = cartItems.reduce((s, i) => s + (i.quantity || 1), 0);

  return (
    <div className='header flex justify-around items-center p-2 bg-gray-200 h-16'>

      <div><Link to='/'><img src={cartIcon2} alt="logo" className='w-20 h-14'/></Link></div>
      <div><input className='w-[500px] h-10 bg-gray-300 font-bold' type="search" placeholder="Search..." /></div>
      <div className='flex items-center'><Link to='/cart' className='flex items-center'><img src={cartIcon} alt="cart" className='w-5 h-5'/><span className='font-bold ml-2'>Cart ({count})</span></Link></div>
  <div className='flex'><Link to='/login' className='flex items-center gap-2'><img src={cartIcon3} alt="logo" className='w-5 h-5'/><span className='font-bold'>login</span></Link></div>

    </div>
  )
}

export default Header
