import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import bgImage from "../assets/images/bg-image.avif"
import icon from '../assets/images/Uber-logo.png'

const StartPage = () => {
  return (
    <div className="w-full h-screen">
      <div 
      style={{ backgroundImage: `url(${bgImage})`}}
      className="w-full h-[75vh] bg-cover bg-center bg-no-repeat">
        <img
          className="h-20 px-7"
          src={icon}
          alt="#"
        />
      </div>
      <div className="flex flex-col gap-9 px-10 pt-9">
        <h1 className="text-black font-bold text-3xl tracking-tighter leading-none">Get Started With Uber</h1>
        <Link
          to="/login"
          className="flex justify-around items-center w-full md:w-[30vw] py-3 text-md text-white cursor-pointer text-center font-semibold bg-zinc-800 rounded-lg hover:opacity-95 transition-all">
          Continue
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
