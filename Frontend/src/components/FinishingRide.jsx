import { motion } from "motion/react";
import { GoLocation } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { Link } from "react-router-dom"

const FinishingRide = ({ setFinishingRide, finishingRide }) => {
  return (
    <div className="main">
      {finishingRide && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
          className="fixed w-full bottom-0 bg-white px-2 z-10 h-[80vh] "
        >
          <div className="main">
            <h1 className="text-2xl font-semibold text-center py-2 pb-8">
            Finish this Ride
            </h1>
            <div className="main-box px-3 py-4 bg-yellow-400 rounded-lg mb-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    className="w-15 h-15 rounded-full object-cover bg-center overflow-hidden"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHL-O13ZZJj2rtmyemCxTBnsCu-5jBUex9Q&s"
                    alt="#"
                  />
                  <p className="font-semibold text-xl">Krunid Lama</p>
                </div>
                <div>
                  <h1 className="font-semibold text-lg">2.9KM</h1>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-5">
                <div className="text-2xl"><RiUserLocationLine /></div>
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
              <div className="mt-5 flex items-center justify-center">
                    <Link
                      className="py-3 px-5 w-full bg-green-700 font-semibold text-lg text-white rounded-lg cursor-pointer hover:opacity-85 text-center"
                      to="/captain-home"
                    >
                      Finish Ride
                    </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FinishingRide;
