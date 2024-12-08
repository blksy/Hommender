import Logo from "../assets/Logo.png";
import { GiMonkeyWrench } from "react-icons/gi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserWorker, GrLogout } from "react-icons/gr";
import { FaHome, FaPhoneSquare, FaUserCircle } from "react-icons/fa";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  return (
    <div className="w-64 bg-gradient-to-l from-cyan-500 via-purple-300 to-blue-500 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <img src={Logo} alt="Logo" className="w-20 h-20 ml-20" />
        {/* <h1 className="text-2xl text-white font-bold ml-12 ">Hommender</h1> */}
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <SideNavItem to="/" icon={FaHome} label="Home" />
        <SideNavItem to="/profile" icon={FaUserCircle} label="Profile" />
        <SideNavItem to="/services" icon={GiMonkeyWrench} label="Services" />
        <SideNavItem
          to="/specialists"
          icon={GrUserWorker}
          label="Specialists"
        />
        <SideNavItem to="/requests" icon={MdTask} label="Requests" />
        <SideNavItem to="/clients" icon={FaPeopleGroup} label="Clients" />
        <SideNavItem
          to="/about"
          icon={BsFillQuestionSquareFill}
          label="About"
        />
        <SideNavItem to="/contact" icon={FaPhoneSquare} label="Contact" />
        <SideNavItem to="/" icon={GrLogout} label="Logout" />
      </ul>
    </div>
  );
};
export default SideNav;
