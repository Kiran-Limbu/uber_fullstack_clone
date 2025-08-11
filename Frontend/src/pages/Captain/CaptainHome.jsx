import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import uberlogo from "../../assets/images/Uber-logo.png";
import CaptainDetails from "../../components/CaptainDetails";
import { useState } from "react";
import RidePopup from "../../components/RidePopup";
import ConfirmRidePupup from "../../components/ConfirmRidePupup";

function CaptainHome() {
  const [ridePopup, setRidePopup] = useState(true);
  const [confirmRidePopup, setConfirmRidePopup] = useState(false);
  return (
    <div className="w-full h-screen">
      <div className="fixed top-4 flex justify-between w-screen px-5">
        <div>
          <img className="h-17" src={uberlogo} alt="" />
        </div>
        <div className=" bg-zinc-600 h-9 w-9 flex items-center justify-center rounded-full">
          <Link
          to="/captain-login"
          >
            <LuLogOut />
          </Link>
        </div>
      </div>
      <div className="img-cont">
        <img
          className="h-[50vh] w-full object-cover bg-center"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt="#"
        />
      </div>
      <div className="main-box">
        <CaptainDetails />
      </div>
      <div className="Ride-Popup">
        <RidePopup
          setRidePopup={setRidePopup}
          ridePopup={ridePopup}
          setConfirmRidePopup={setConfirmRidePopup}
        />
      </div>
      <div className="Confirm-Ride-Popup">
        <ConfirmRidePupup
          setConfirmRidePopup={setConfirmRidePopup}
          confirmRidePopup={confirmRidePopup}
          setRidePopup={setRidePopup}
        />
      </div>
    </div>
  );
}

export default CaptainHome;
