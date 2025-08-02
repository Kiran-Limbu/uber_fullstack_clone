import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContex";
import axios from "axios";
import { Loader } from "rsuite";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { setIsLoading, isLoading, setUser} = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (!token) {
      navigate("/login");
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
     .then((response) =>{
      if(response.status === 200){
        setUser(response.data.user);
        setIsLoading(false);
      }
    })
    .catch( err =>{
      console.log(err);
      navigate('/login');
    })
  }, [token])
   

    if(isLoading){
      <div className="flex items-center justify-center">
            <Loader size="md" content="Medium" />
      </div>
    }

  return <>{children}</>;
};

export default UserProtectedWrapper;
