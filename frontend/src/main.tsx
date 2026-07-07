import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
import { Signin } from './pages/Signin'
import Login from './pages/Login'

import "./index.css"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Toolbar />

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  </StrictMode>,
)
