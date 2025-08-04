import { CiLocationOn } from "react-icons/ci";


const LocationSearchPanel = ({setVehiclePanel, setPanelOpen}) => {
  
  const places = [
  {
    name: "Kathmandu Durbar Square",
    address: "Durbar Square, Kathmandu 44600, Nepal"
  },
  {
    name: "Pokhara Lakeside",
    address: "Lakeside Rd, Pokhara 33700, Nepal"
  },
  {
    name: "Pashupatinath Temple",
    address: "Pashupati Nath Road, Kathmandu 44621, Nepal"
  },
  {
    name: "Swayambhunath Stupa",
    address: "Swayambhu, Kathmandu 44600, Nepal"
  },
  {
    name: "Bhaktapur Durbar Square",
    address: "Durbar Square, Bhaktapur 44800, Nepal"
  }
];
  return (
    <div>
      {
        places.map((items, index) =>(
          <div 
          onClick={() =>{
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          key={index} 
          className="flex items-center gap-3 border-2 border-gray-300 active:border-black px-2 py-2 rounded-xl">
            <span className='text-2xl'><CiLocationOn /></span>
            <h1 className='font-semibold text-md '>{items.name}, {items.address} </h1>
        </div>
        ))
      }
        
    </div>
  )
}

export default LocationSearchPanel