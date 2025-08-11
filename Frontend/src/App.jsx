import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/Users/UserLogin";
import UserSingup from "./pages/Users/UserSingup";
import CaptainLogin from "./pages/Captain/CaptainLogin";
import CaptainSingup from "./pages/Captain/CaptainSingup";
import StartPage from "./pages/StartPage";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainHome from "./pages/Captain/CaptainHome";
import CaptainProtectedWrapper from "./pages/Captain/CaptainProtectedWrapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/singup" element={<UserSingup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-singup" element={<CaptainSingup />} />
        <Route path="/riding" element={<Riding />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route path="/captain-riding" element={<CaptainRiding />} />
      </Routes>
    </div>
  );
};

export default App;
