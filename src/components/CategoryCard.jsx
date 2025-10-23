import React from 'react'
import cartIcons4 from '../assets/icons/mobile.jpg'
import cartIcon5 from '../assets/icons/electronics.jpg'
import cartIcon6 from '../assets/icons/fashion.jpg'
import cartIcon7 from '../assets/icons/tv.jpg'
import cartIcon8 from '../assets/icons/toys.jpg'
import cartIcon9 from '../assets/icons/sports.jpg'

const CategoryCard = () => {
  return (
    <div className='flex m-[20px] mt-[10px] gap-25 bg-gray-100 p-[30px] pl-[90px] font-bold' >
        <div><img src={cartIcons4} alt='Mobile' className='w-20 h-20 ' /><span>Mobile</span></div>
        <div><img src={cartIcon5} alt='Electronics' className='w-20 h-20' /><span>Electronics</span></div>
        <div><img src={cartIcon6} alt='Fashion' className='w-20 h-20' /><span>Fashion</span></div>
        <div><img src={cartIcon7} alt='Tv' className='w-20 h-20' /><span className='p-8'>Tv</span></div>
        <div><img src={cartIcon8} alt='Toys' className='w-20 h-20' /><span>Toys</span></div>
        <div><img src={cartIcon9} alt='Sports' className='w-20 h-20 ' /><span>Sports</span></div>

    </div>
  )
} 

export default CategoryCard
