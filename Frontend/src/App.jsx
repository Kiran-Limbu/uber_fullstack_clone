import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import UserLogin from './pages/Users/UserLogin';
import UserSingup from './pages/Users/UserSingup';
import CaptainLogin from './pages/Captain/CaptainLogin';
import CaptainSingup from './pages/Captain/CaptainSingup';

const App = () => {
  return (
   <div className='min-h-screen w-full overflow-hidden'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/singup" element={<UserSingup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-singup" element={<CaptainSingup />} />
    </Routes>
    
    </div>
  )
}

export default App;