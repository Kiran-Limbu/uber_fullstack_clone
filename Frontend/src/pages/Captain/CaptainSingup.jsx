import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContex";
import axios from "axios";

const CaptainSingup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { captain, setCaptain } = useContext(GlobalContext);

  const [vehiclecolor, setVehiclecolor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const submitHandlerCaptain = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehiclecolor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehiclecolor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="w-full h-screen bg-zinc-300">
      <div className="flex items-center justify-center w-full flex-wrap">
        <form
          onSubmit={(e) => {
            submitHandlerCaptain(e);
          }}
          className="rounded-lg flex flex-col items-center gap-3 py-4 px-5"
          action=""
        >
          <h1 className="text-4xl tracking-tight leading-none font-bold pb-5">
            Create New Account As Captain
          </h1>
          <div className="flex justify-center gap-3 w-full px-5">
            <input
              className="w-1/2 px-3 py-3 border-zinc-800 border-[1px] rounded-lg"
              required
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              type="text"
              placeholder="Firstname"
            />
            <input
              className="w-1/2 px-3 py-3 border-zinc-800 border-[1px] rounded-lg"
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
          <p className="font-semibold text-3xl leading-none tracking-tighter my-5">Your Vehicle Information :</p>
          <div className="flex gap-3">
            <input
              type="text"
              className="w-1/2 placeholder:text-md px-4 border-zinc-800 border-[1px] rounded-lg"
              required
              placeholder="Vehicle Color"
              value={vehiclecolor}
              onChange={(event) => {
                setVehiclecolor(event.target.value);
              }}
            />
            <input
              type="text"
              className="w-1/2 placeholder:text-md px-4 py-3 border-zinc-800 border-[1px] rounded-lg"
              required
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(event) => {
                setVehiclePlate(event.target.value);
              }}
            />
          </div>
          <div className="flex gap-3">
            <input
              type="number"
              className="w-1/2 placeholder:text-md px-4 border-zinc-800 border-[1px] rounded-lg"
              required
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(event) => {
                setVehicleCapacity(event.target.value);
              }}
            />
            <select
              required
              className="w-1/2 placeholder:text-md px-4 py-3 border-zinc-800 border-[1px] rounded-lg"
              value={vehicleType}
              onChange={(event) => {
                setVehicleType(event.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car"> Car </option>
              <option value="auto"> Auto </option>
              <option value="motorcycle">Motorcycle</option>{" "}
            </select>
          </div>
          <button className="bg-zinc-700 my-4 w-1/2 py-3 rounded-md text-white font-semibold text-md cursor-pointer  hover:opacity-95 transition-all">
            Create Account
          </button>
          <div className="font-semibold text-md opacity-80">
            Already Have An Account ?{" "}
            <Link className="underline text-blue-700" to="/captain-login">
              Login
            </Link>
          </div>

          <footer className="opacity-50 text-sm font-semibold max-w-full tracking-tight leading-none">
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
