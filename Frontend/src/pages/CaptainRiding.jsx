import React, { useState } from "react";
import { Link } from "react-router-dom";
import uberlogo from "../assets/images/Uber-logo.png";
import { LuLogOut } from "react-icons/lu";
import { RiArrowDownWideFill } from "react-icons/ri";
import FinishingRide from "../components/FinishingRide";

const CaptainRiding = () => {
    const [finishingRide , setFinishingRide] = useState(false);
  return (
    <div className="w-full h-screen">
      <div className="fixed top-4 flex justify-between w-screen px-5">
        <div>
          <img className="h-17" src={uberlogo} alt="Uber Logo" />
        </div>
        <div className=" bg-zinc-600 h-9 w-9 flex items-center justify-center rounded-full">
          <Link to="/captain-login">
            <LuLogOut />
          </Link>
        </div>
      </div>
      <div className="img-cont">
        <img
          className="h-[70vh] w-full object-cover bg-center"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className="h-full bg-amber-300 px-5">
        <div 
        onClick={() =>{
            setFinishingRide(true);
        }}
        className="text-3xl flex items-center justify-center rotate-180">
            <RiArrowDownWideFill />
        </div>
        <div className="flex items-center justify-center gap-5 pt-10">
        <h1 className="text-xl font-semibold">4 KM Away</h1>
        <div>
        <button 
        onClick={()=>{
            setFinishingRide(true);
        }}
        className="w-full py-3 px-5 bg-green-700 font-semibold text-lg text-white rounded-lg cursor-pointer hover:opacity-85 text-center">
          Complete Ride
        </button>
        </div>
        </div>
      </div>
      <div className="Finishing-Ride-Panel">
        <FinishingRide setFinishingRide={setFinishingRide} finishingRide={finishingRide} />
      </div>
    </div>
  );
};

export default CaptainRiding;
