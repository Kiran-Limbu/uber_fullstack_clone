import ubercar from "../assets/images/uber-car.webp";
import { FaRegUser } from "react-icons/fa";
import ubermoto from "../assets/images/uber-moto.jpeg";
import uberauto from "../assets/images/uber-auto.jpeg";
import { MdClear } from "react-icons/md";
import {motion, AnimatePresence} from "motion/react"


const VehicleChoosingPanel = ({ setVehiclePanel, vehiclePanel, setSelectedVehiclePanel }) => {
  return (
    <div>
        <AnimatePresence>
        {vehiclePanel && (
        <div className="main">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
            className="fixed w-full bottom-0 z-10 bg-white px-2"
          >
            <div className="flex justify-between items-center px-5">
              <p className="font-semibold text-2xl px-2 py-3">
                Choose Your Vehicle
              </p>
              <span
                onClick={() => {
                  setVehiclePanel(false);
                }}
                className="text-2xl"
              >
                <MdClear />
              </span>
            </div>
            {/* uber Car */}
            <div
            onClick={() =>{
              setVehiclePanel(false);
              setSelectedVehiclePanel(true)
            }}
            className="flex items-center justify-between border-2 w-full border-white active:border-black bg-gray-200 rounded-2xl p-2 mb-3">
              <img className="h-15" src={ubercar} alt="#" />
              <div className="w-1/2">
                <div className="flex items-center gap-4">
                  <h1 className="font-bold text-2xl ">UberGo</h1>
                  <span>
                    <FaRegUser />
                  </span>
                  5
                </div>
                <h2 className="font-semibold">2 min away</h2>
                <p className="font-semibold text-gray-500 text-sm">
                  Affordable, compact rides
                </p>
              </div>
              <span className="text-lg font-semibold">$22.69</span>
            </div>
            {/* uber motercycle */}
            <div 
              onClick={() =>{
                setVehiclePanel(false);
              setSelectedVehiclePanel(true)
            }}
            className="flex items-center justify-between border-2 w-full border-white active:border-black bg-gray-200 rounded-2xl p-2 mb-3">
              <img className="h-15" src={ubermoto} alt="#" />
              <div className="w-1/2">
                <div className="flex items-center gap-4">
                  <h1 className="font-bold text-2xl ">UberMoto</h1>
                  <span>
                    <FaRegUser />
                  </span>
                  1
                </div>
                <h2 className="font-semibold">1 min away</h2>
                <p className="font-semibold text-gray-500 text-sm">
                  Affordable, compact rides
                </p>
              </div>
              <span className="text-lg font-semibold">$2.69</span>
            </div>
            {/* Uber Auto */}
            <div
            onClick={() =>{
              setVehiclePanel(false);
              setSelectedVehiclePanel(true)
            }}
            className="flex items-center justify-between border-2 w-full border-white active:border-black bg-gray-200 rounded-2xl p-2 mb-3">
              <img className="h-15" src={uberauto} alt="#" />
              <div className="w-1/2">
                <div className="flex items-center gap-4">
                  <h1 className="font-bold text-2xl ">UberAuto</h1>
                  <span>
                    <FaRegUser />
                  </span>
                  2
                </div>
                <h2 className="font-semibold">5 min away</h2>
                <p className="font-semibold text-gray-500 text-sm">
                  Affordable, Auto rides
                </p>
              </div>
              <span className="text-lg font-semibold">$8.9</span>
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
      </div>
  )
}

export default VehicleChoosingPanel