import React, { useState } from "react";
import logo from "../assets/images/Uber-logo.png";
import { AnimatePresence, motion } from "motion/react";
import { RiArrowDownWideLine } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehicleChoosingPanel from "../components/VehicleChoosingPanel";
import SelectedVehicle from "../components/SelectedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDrivers from "../components/WaitForDrivers";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [selectedVehiclePanel, setSelectedVehiclePanel] = useState(false);
  const [lookingForRide , setLookingForRide] = useState(false);
  const [watingForDriver , setWatingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="relative">
        <img
          className="w-23 bg-center object-cover absolute top-3 left-5"
          src={logo}
          alt=""
        />
        <img
          className="h-screen w-screen bg-center object-cover"
          src="https://conference.caswe-acfts.ca/wp-content/uploads/2024/06/Map-des-restos-1-1024x632.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full flex flex-col justify-end h-screen">
        <div className="bg-[#eeee] h-[30%] ">
          <h1 className="text-3xl font-bold tracking-tight px-5 py-2">
            Find a trip
          </h1>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col px-5 gap-2 md:w-1/2"
          >
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
              className="bg-gray-400 px-13 py-3 rounded-md w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-gray-400 px-13 py-3 rounded-md w-full"
              type="text"
              placeholder="Enter your destaination"
            />
          </form>
        </div>
        <AnimatePresence>
          {panelOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "70%" }}
              exit={{ height: 0 }}
              transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
              className=" bg-zinc-300 p-5"
            >
              <div
                onClick={() => setPanelOpen(false)}
                className="absolute top-0 right-0 px-6 py-5 text-3xl"
              >
                <RiArrowDownWideLine />
              </div>

              <LocationSearchPanel
                vehiclePanel={vehiclePanel}
                setVehiclePanel={setVehiclePanel}
                setPanelOpen={setPanelOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <VehicleChoosingPanel
        vehiclePanel={vehiclePanel}
        setVehiclePanel={setVehiclePanel}
        setSelectedVehiclePanel={setSelectedVehiclePanel}
        selectedVehiclePanel={selectedVehiclePanel}
      />

      <SelectedVehicle
        setSelectedVehiclePanel={setSelectedVehiclePanel}
        selectedVehiclePanel={selectedVehiclePanel}
        setLookingForRide={setLookingForRide}
      />

      <LookingForDriver
      lookingForRide={lookingForRide}
      />

      <WaitForDrivers
      watingForDriver={watingForDriver}
      />

    </div>
  );
};

export default Home;
