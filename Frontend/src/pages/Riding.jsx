import React from 'react'
import { FaStar } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { MdPayment } from 'react-icons/md'
import { HiOutlineHome } from "react-icons/hi2";
import {Link} from "react-router-dom"

const Riding = () => {
  return (
     <div className="w-full h-screen">
        <div className="fixed top-4 right-6 bg-zinc-600 h-9 w-9 flex items-center justify-center rounded-full hover:opacity-85">
            <Link to="/home"> <HiOutlineHome /> </Link>
           
        </div>
        <div className="img-cont">
            <img 
            className='h-[35vh] w-full object-cover bg-center'
            src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67" alt="" />
        </div>
        <div className='h-1/2'>
          <div className="flex justify-between items-center w-full px-4 py-4 h-1/2">
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
          <div className="w-full flex flex-col gap-3 px-3 py-3">
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
            <button className='py-4 bg-green-500 hover:opacity-80 text-lg font-semibold text-[#fff] border-none rounded-lg'>Make Payment</button>
          </div>
        </div>
     </div>
  )
}

export default Riding