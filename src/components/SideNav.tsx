import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { GiMonkeyWrench } from "react-icons/gi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { FaHome, FaPhoneSquare } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="w-72 bg-blue-600 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <img src={Logo} alt="Logo" className="w-20 h-20 ml-20" />
        <h1 className="text-2xl text-white font-bold ml-12 ">Hommender</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/" className="px-3">
            <FaHome className="inline-block w-10 h-8 mr-2 -mt-2"></FaHome>
            Home
          </Link>
        </li>
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/services" className="px-3">
            <GiMonkeyWrench className="inline-block w-10 h-8 mr-2 -mt-2"></GiMonkeyWrench>
            Services
          </Link>
        </li>
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/specialists" className="px-3">
            <GrUserWorker className="inline-block w-10 h-8 mr-2 -mt-2"></GrUserWorker>
            Specialists
          </Link>
        </li>
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/requests" className="px-3">
            <MdTask className="inline-block w-10 h-8 mr-2 -mt-2"></MdTask>
            Requests
          </Link>
        </li>
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/clients" className="px-3">
            <FaPeopleGroup className="inline-block w-10 h-8 mr-2 -mt-2"></FaPeopleGroup>
            Clients
          </Link>
        </li>
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/about" className="px-3">
            <BsFillQuestionSquareFill className="inline-block w-10 h-8 mr-2 -mt-2"></BsFillQuestionSquareFill>
            About
          </Link>
        </li>
        <li className="mb-4 rounded hover:shadow hover:bg-blue-200 py-2 transition duration-500 cursor-pointer">
          <Link to="/contact" className="px-3">
            <FaPhoneSquare className="inline-block w-10 h-8 mr-2 -mt-2"></FaPhoneSquare>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
