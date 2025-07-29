import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSingup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandlerUser = (e) => {
    e.preventDefault();
    setCaptainData({
      username: {
      firstName: firstName,
      lastName: lastName
      },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="w-full h-screen py-4 bg-zinc-300">
      <div className="flex items-center justify-center ">
        <form
          onSubmit={(e) => {
            submitHandlerUser(e);
          }}
          className="rounded-lg flex flex-col items-center gap-7 py-5"
          action=""
        >
          <h1 className="text-4xl tracking-tighter leading-none font-bold pb-5">
            Create New Account As Captain
          </h1>
          <div className="flex justify-center gap-3">
            <input
              className="w-fit px-3 py-3 border-zinc-800 border-[1px] rounded-lg"
              required
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              type="text"
              placeholder="Firstname"
            />
            <input
              className="w-fit px-3 py-3 border-zinc-800 border-[1px] rounded-lg"
              required
              type="text"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              placeholder="Lastname"
            />
          </div>
          <input
            className="w-1/2 px-8 py-3 border-zinc-800 border-[1px] rounded-lg"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Your Email"
          />
          <input
            className="w-1/2 px-8 py-3 border-zinc-800 border-[1px] rounded-lg"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button className="bg-zinc-700 w-1/2 py-3 rounded-md text-white font-semibold text-md cursor-pointer  hover:opacity-95 transition-all">
            Login
          </button>
          <div className="font-semibold text-md opacity-80">
            Already Have An Account ?{" "}
            <Link className="underline text-blue-700" to="/captain-login">
              Login
            </Link>
          </div>

          <footer className="opacity-50 text-sm font-semibold w-1/2 tracking-tight leading-none">
            By continuing, you agree to Uber's{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and acknowledge you've read our{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.{" "}
            <span className="underline cursor-pointer">
              {" "}
              Notice at collection.
            </span>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default CaptainSingup;
