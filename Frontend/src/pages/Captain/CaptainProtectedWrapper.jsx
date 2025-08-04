import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContex";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { isLoading, setIsLoading,  setCaptain } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });

  if (isLoading) {
    return ( 
      <div className="flex items-center justify-center">
      <span>Loading.......</span>
      </div>
    );
  }
  return <>{children}</>;
};

export default CaptainProtectedWrapper;
