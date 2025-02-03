import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Component/Signup'
import Home from './Component/Home'
import Login from './Component/Login'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
