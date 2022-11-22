import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Cart } from '../pages/Cart/Cart'
import Checkout from '../pages/Checkout/Checkout'
import { Food } from '../pages/Foods/Food'
import { Home } from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'

export const PagesRouters = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/foods" element={<Food />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>

  )
}
