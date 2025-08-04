import { motion } from "motion/react";
import { GoLocation } from "react-icons/go";
import ubercar from "../assets/images/uber-car.webp";
import { MdPayment } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";

const SelectedVehicle = ({ selectedVehiclePanel, setLookingForRide, setSelectedVehiclePanel}) => {
  return (
    <div className="main">
      {selectedVehiclePanel && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
          className="fixed w-full bottom-0 bg-white px-2 z-10 h-[85vh]"
        >
          <div className="">
            <h1 className="text-2xl font-semibold text-center py-2">
              Confirm Your Ride
            </h1>
            <div className="flex justify-center items-center">
              <img className="h-40 bg-center" src={ubercar} alt="#" />
            </div>
            <div className="line w-full h-[1.5px] bg-zinc-500"></div>
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-5">
                <div className="text-2xl">
                  <RiUserLocationLine />
                </div>
                <div>
                  <h2 className="font-bold text-2xl">Pashupatinath Temple</h2>
                  <h3 className="font-semibold text-md text-gray-500">
                    Pashupati Nath Road, Kathmandu 44621, Nepal
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-2xl">
                  <GoLocation />
                </div>
                <div>
                  <h2 className="font-bold text-2xl">Milan Choke</h2>
                  <h3 className="font-semibold text-md text-gray-500">
                    themal Road, Kathmandu 441, Nepal
                  </h3>
                </div>
              </div>
              <div className="line w-full h-[1.5px] bg-zinc-500"></div>
              <div className="flex items-center gap-5">
                <div className="text-2xl">
                  <MdPayment />
                </div>
                <div>
                  <h1 className="text-2xl font-bold"> $ 55.5</h1>
                  <span className="text-md font-semibold text-gray-500">
                    Cash Cash
                  </span>
                </div>
              </div>
              <div className="line w-full h-[1.5px] bg-zinc-500"></div>
              <button
                onClick={() =>{
                  setSelectedVehiclePanel(false),
                   setLookingForRide(true)
                }}
                className="py-3 px-5 bg-green-700 font-semibold text-lg text-white rounded-lg cursor-pointer hover:opacity-85"
              >
                Confirm{" "}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SelectedVehicle;
