import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

import "./index.css"
import Background from './components/Background'
import { ClerkProvider } from '@clerk/react'
import Generate from './pages/Generate'
import Community from './pages/Community'
import MyGeneration from './pages/MyGeneration'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider 
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        appearance={{
            variables: {
                colorPrimary: "#4f39f6",
            }
        }}>
      <Background />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/generate' element={<Generate />} />
          <Route path='/community' element={<Community />} />
          <Route path='/mygeneration' element={<MyGeneration />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
