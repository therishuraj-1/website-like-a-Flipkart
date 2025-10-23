import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Logine from './pages/Logine'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductList from './pages/ProductList'
import { CartProvider } from "./contexts/CartContext"

function App() {
 return (
  <CartProvider>

   <Router>
     <Header />
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/login' element={<Logine />} />
      
     </Routes>
     <Footer />
   </Router>
   </CartProvider>
  )
}

export default App
