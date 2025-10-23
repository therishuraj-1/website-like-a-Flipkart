import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logine = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const usersRaw = localStorage.getItem('flipcart_users')
    const users = usersRaw ? JSON.parse(usersRaw) : []
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      localStorage.setItem('flipcart_user', JSON.stringify(user))
      alert('Login successful')
      navigate('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleLogin} className='flex flex-col gap-3'>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='p-2 border rounded' />
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='p-2 border rounded' />
        <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>Login</button>
      </form>
    </div>
  )
}

export default Logine
