import { IoTimeOutline, IoSpeedometerOutline } from "react-icons/io5"
import { MdOutlineEventNote } from "react-icons/md"

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex justify-between items-center w-full px-5 py-5">
          <div className="flex rounded-full gap-3 items-center">
            <img
              className="object-cover bg-center h-14 w-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zm4wwtHFvb6m5i56K7oDzk8p5S0Fn8MJcA&s"
              alt="#"
            />
            <div>
              <h1 className="font-semibold text-lg">KIRAN LIMBU</h1>
              <h3 className="font-semibold text-md text-gray-500">@limbu</h3>
            </div>
          </div>
          <div>
            <span className="font-bold text-2xl">$22.69</span>
            <p className="font-semibold text-md text-gray-500">Earned</p>
          </div>
        </div>
        <div className="bg-gray-400 text-center flex justify-between px-3 rounded-md py-5 opacity-95 mx-3">
          <div className="flex flex-col items-center gap-2">
            <IoTimeOutline style={{ fontSize: "25px" }} />
            <h3 className="font-bold text-2xl text-zinc-800">10.2</h3>
            <p className="font-semibold text-sm text-gray-500">HOURS ONLINE</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IoSpeedometerOutline style={{ fontSize: "25px" }} />
            <h3 className="font-bold text-2xl text-zinc-800">10.2</h3>
            <p className="font-semibold text-sm text-gray-500">HOURS ONLINE</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MdOutlineEventNote style={{ fontSize: "25px" }} />
            <h3 className="font-bold text-2xl text-zinc-800">10.2</h3>
            <p className="font-semibold text-sm text-gray-500">HOURS ONLINE</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails