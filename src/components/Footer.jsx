import React from 'react'

const Footer = () => (
  <footer className='bg-gray-100 mt-8 p-6 text-center'>
    <div className='container mx-auto'>
      <div className='mb-2'>© {new Date().getFullYear()} Shopnow. All rights reserved.</div>
      <div className='text-sm text-gray-600'>Contact: support@shop.example | Phone: +91 12345 67890</div>
    </div>
  </footer>
)

export default Footer
