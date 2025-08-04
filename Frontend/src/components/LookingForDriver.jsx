import { motion } from "motion/react"
import ubercar from "../assets/images/uber-car.webp"
import { RiUserLocationLine } from "react-icons/ri"
import { GoLocation } from "react-icons/go"
import { MdPayment } from "react-icons/md"

const LookingForDriver = ({ lookingForRide }) => {
  return (
   <div className="main">
      {lookingForRide && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
          className="fixed w-full bottom-0 bg-white px-2 z-10"
        >
          <div className="">
            <h1 className="text-2xl font-semibold text-center py-2">
              Looking For a Driver 
            </h1>
            <div className="flex justify-center items-center">
              <img className="h-40 bg-center" src={ubercar} alt="#" />
            </div>
            <div className="line w-full h-[1.5px] bg-zinc-500"></div>
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-5">
                <div className="text-2xl">
                <RiUserLocationLine  />
                </div>
                <div>
                <h2 className="font-bold text-2xl">Pashupatinath Temple</h2>
                <h3 className="font-semibold text-md text-gray-500">Pashupati Nath Road, Kathmandu 44621, Nepal</h3>
                </div>
              </div>
               <div className="flex items-center gap-5">
                <div className="text-2xl">
                <GoLocation />
                </div>
                <div>
                <h2 className="font-bold text-2xl">Milan Choke</h2>
                <h3 className="font-semibold text-md text-gray-500">themal Road, Kathmandu 441, Nepal</h3>
                </div>
              </div>
               <div className="line w-full h-[1.5px] bg-zinc-500"></div>
              <div className="flex items-center gap-5">
                <div className="text-2xl">
                    <MdPayment />
                </div>
                <div>
                    <h1 className="text-2xl font-bold"> $ 55.5</h1>
                    <span className="text-md font-semibold text-gray-500">Cash Cash</span>
                </div>
              </div>
               <div className="line w-full h-[1.5px] bg-zinc-500"></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default LookingForDriver