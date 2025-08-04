import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";

const WaitForDrivers = ({waitForDrivers}) => {
  return (
    <div className="main">
      {waitForDrivers && (
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
        className="fixed w-full bottom-0 bg-white px-2 z-10 translate-y-0"
      >
        <div className="">
          <div className="flex justify-between w-full">
            <div className="h-18 w-18 bg-zinc-800 rounded-full overflow-hidden">
              <img
                className="object-cover bg-center h-18 w-18 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zm4wwtHFvb6m5i56K7oDzk8p5S0Fn8MJcA&s"
                alt="#"
              />
            </div>
            <div className="details flex flex-col justify-end items-end">
              <h1 className="font-semibold text-lg text-gray-500">KIRAN</h1>
              <h2 className="font-bold text-2xl">M1 888 XX</h2>
              <p className="font-semibold text-lg text-gray-500">
                White Colore Suziku 400
              </p>
              <h3 className="flex items-center gap-3 font-semibold text-lg text-gray-500">
                {" "}
                <FaStar /> 4.9
              </h3>
            </div>
          </div>
          <div className="line w-full h-[1.5px] bg-zinc-500"></div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <div className="text-2xl"><RiUserLocationLine  /></div>
              <div>
                <h2 className="font-bold text-2xl">Pashupatinath Temple</h2>
                <h3 className="font-semibold text-md text-gray-500">
                  Pashupati Nath Road, Kathmandu 44621, Nepal
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-2xl"><GoLocation /></div>
              <div>
                <h2 className="font-bold text-2xl">Milan Choke</h2>
                <h3 className="font-semibold text-md text-gray-500">
                  themal Road, Kathmandu 441, Nepal
                </h3>
              </div>
            </div>
            <div className="line w-full h-[1.5px] bg-zinc-500"></div>
            <div className="flex items-center gap-5">
              <div className="text-2xl"><MdPayment /></div>
              <div>
                <h1 className="text-2xl font-bold"> $ 55.5</h1>
                <span className="text-md font-semibold text-gray-500">
                  Cash Cash
                </span>
              </div>
            </div>
            <div className="line w-full h-[1.5px] bg-zinc-500"></div>
          </div>
        </div>
      </motion.div>
      )} 
    </div>
  );
};

export default WaitForDrivers;
