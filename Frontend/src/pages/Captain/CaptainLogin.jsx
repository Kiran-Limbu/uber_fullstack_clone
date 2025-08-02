import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContex";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain, isLoading } = useContext(GlobalContext)

  const navigate = useNavigate();

  const submitHandlerCaptain = async (e) => {
    e.preventDefault();
    
    const captain = {
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home')
    }
    setEmail("");
    setPassword("");
  };


  return (
    <div className="w-full h-screen px-7 py-9 ">
      <div className="flex items-center justify-center">
        <form
          onSubmit={(e) => {
            submitHandlerCaptain(e);
          }}
          className="bg-zinc-300 rounded-lg flex flex-col items-center gap-7 px-10 py-13"
          action=""
        >
          <h1 className="text-4xl tracking-tighter leading-none font-bold">
            Wellcome To Uber
          </h1>
          <input
            className="w-full px-8 py-3 border-zinc-800 border-[1px] rounded-lg"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Captain Email"
          />
          <input
            className="w-full px-8 py-3 border-zinc-800 border-[1px] rounded-lg"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button className="bg-zinc-700 w-full py-3 rounded-md text-white font-semibold text-md cursor-pointer  hover:opacity-95 transition-all">
            Login
          </button>
          <div className="font-semibold text-md opacity-80">
            Register As Captain{" "}
            <Link className="underline text-blue-700" to="/captain-singup">
              resister
            </Link>
          </div>

          <Link
            to="/login"
            className="bg-green-500 w-full py-3 mt-7 text-center rounded-md text-white font-semibold text-md cursor-pointer  hover:opacity-70 transition-all"
          >
            Sing in As User
          </Link>
        </form>
      </div>
    </div>
  );
};
export default CaptainLogin;
