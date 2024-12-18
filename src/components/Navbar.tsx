import { FaSearch } from "react-icons/fa";
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
          onClick={() => setSideNavToggle(!sideNavToggle)}
        />
        <span className="text-white font-bold text-3xl">Hommender</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center p1-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 mr-32 pl-12 rounded shadow outline-none hidden md:block"
            placeholder="type the service you're looking for.."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
