import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/Users/UserLogin';
import UserSingup from './pages/Users/UserSingup';
import CaptainLogin from './pages/Captain/CaptainLogin';
import CaptainSingup from './pages/Captain/CaptainSingup';
import StartPage from './pages/StartPage';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/Users/UserLogout';
import CaptainHome from './pages/Captain/CaptainHome';
import CaptainProtectedWrapper from './pages/Captain/CaptainProtectedWrapper';
import CaptainLogout from './pages/Captain/CaptainLogout';

const App = () => {
  return (
   <div className='min-h-screen w-full overflow-hidden'>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/singup" element={<UserSingup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-singup" element={<CaptainSingup />} />
      <Route path="/home" element={
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      } />
    <Route path="/user/logout" element={ 
      <UserProtectedWrapper>
        <UserLogout />
      </UserProtectedWrapper> 
    } />
    <Route path="/captain-home" element={
      <CaptainProtectedWrapper>
        <CaptainHome />
      </CaptainProtectedWrapper>
    } />
  <Route path="/captain/logout" element={
      <CaptainProtectedWrapper>
        <CaptainLogout />
      </CaptainProtectedWrapper>
    } />

    </Routes>
    
    </div>
  )
}

export default App;