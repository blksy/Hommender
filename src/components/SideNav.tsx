import Logo from "../assets/Logo.png";
import { GiMonkeyWrench } from "react-icons/gi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserWorker, GrLogout } from "react-icons/gr";
import { FaHome, FaPhoneSquare, FaUserCircle } from "react-icons/fa";
import SideNavItem from "./SideNavItem";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { SideNavProps } from "../../types/types";

const navItems = [
  { to: "/app", icon: FaHome, label: "Home" },
  { to: "/app/profile", icon: FaUserCircle, label: "Profile" },
  { to: "/app/services", icon: GiMonkeyWrench, label: "Services" },
  { to: "/app/specialists", icon: GrUserWorker, label: "Specialists" },
  { to: "/app/requests", icon: MdTask, label: "Requests" },
  { to: "/app/clients", icon: FaPeopleGroup, label: "Clients" },
  { to: "/app/about", icon: BsFillQuestionSquareFill, label: "About" },
  { to: "/app/contact", icon: FaPhoneSquare, label: "Contact" },
  { to: "/", icon: GrLogout, label: "Logout" },
];

const SideNav: React.FC<SideNavProps> = ({
  sideNavToggle,
  setSideNavToggle,
}) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div
      onMouseLeave={() => setSideNavToggle(false)}
      className={`fixed h-full bg-blue-700 px-4 py-2 transition-transform duration-500 z-10 ${
        sideNavToggle ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "16rem" }}
    >
      <div className="my-2 mb-4">
        <img src={Logo} alt="Logo" className="w-20 h-20 ml-20" />
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        {navItems.map((item) => (
          <SideNavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            onClick={() => {
              if (item.label === "Logout") handleLogout();
              setSideNavToggle(false);
            }}
          />
        ))}
      </ul>
    </div>
  );
};
export default SideNav;
