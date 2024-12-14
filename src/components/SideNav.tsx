import Logo from "../assets/Logo.png";
import { GiMonkeyWrench } from "react-icons/gi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserWorker, GrLogout } from "react-icons/gr";
import { FaHome, FaPhoneSquare, FaUserCircle } from "react-icons/fa";
import SideNavItem from "./SideNavItem";

interface SideNavProps {
  sideNavToggle: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ sideNavToggle }) => {
  return (
    <div
      className={`fixed h-full bg-blue-800 px-4 py-2 transition-transform duration-500 ${
        sideNavToggle ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "16rem" }}
    >
      <div className="my-2 mb-4">
        <img src={Logo} alt="Logo" className="w-20 h-20 ml-20" />
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <SideNavItem to="/app" icon={FaHome} label="Home" />
        <SideNavItem to="/app/profile" icon={FaUserCircle} label="Profile" />
        <SideNavItem
          to="/app/services"
          icon={GiMonkeyWrench}
          label="Services"
        />
        <SideNavItem
          to="/app/specialists"
          icon={GrUserWorker}
          label="Specialists"
        />
        <SideNavItem to="/app/requests" icon={MdTask} label="Requests" />
        <SideNavItem to="/app/clients" icon={FaPeopleGroup} label="Clients" />
        <SideNavItem
          to="/app/about"
          icon={BsFillQuestionSquareFill}
          label="About"
        />
        <SideNavItem to="/app/contact" icon={FaPhoneSquare} label="Contact" />
        <SideNavItem to="/" icon={GrLogout} label="Logout" />
      </ul>
    </div>
  );
};
export default SideNav;
