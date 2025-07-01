import { FaBars } from "react-icons/fa6";
import { NavbarProps } from "../../types/types";

const Navbar: React.FC<NavbarProps> = ({ sideNavToggle, setSideNavToggle }) => {
  return (
    <div
      className={`bg-blue-700 px-4 py-3 flex justify-between transition-all duration-300 ${
        sideNavToggle ? "ml-64" : "ml-0"
      }`}
    >
      <div className="flex items-center text-x1">
        <FaBars
          className="text-white me-4 cursor-pointer"
          onMouseEnter={() => setSideNavToggle(true)}
        />
        <span className="text-white font-bold text-3xl">Hommender</span>
      </div>
    </div>
  );
};

export default Navbar;
