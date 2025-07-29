import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  
  const submitHandlerUser  = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

    
  
  return (
    <div className="w-full h-screen px-7 py-9">
      <div className="flex items-center justify-center">
        <form onSubmit={(e) =>{
          submitHandlerUser(e);
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
            onChange={(event) =>{
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="User Email"
          />
          <input
            className="w-full px-8 py-3 border-zinc-800 border-[1px] rounded-lg"
            required
            value={password}
            onChange={(event) =>{
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button className="bg-zinc-700 w-full py-3 rounded-md text-white font-semibold text-md cursor-pointer  hover:opacity-95 transition-all">
            Login
          </button>
          <div className="font-semibold text-md opacity-80">
            Dont't Join Uber Yet ?  {' '}
                <Link className="underline text-blue-700" to="/singup">
                    Sing up
              </Link>
          </div>

          <Link
            to="/captain-login"
            className="bg-sky-500 w-full py-3 mt-7 text-center rounded-md text-white font-semibold text-md cursor-pointer  hover:opacity-70 transition-all"
          >
            Sing in As Cpatain
          </Link>
        </form>
      </div> 
    </div>
  );
};

export default UserLogin;
