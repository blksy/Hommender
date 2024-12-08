import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-l from-blue-500 via-purple-300 to-cyan-500 px-4 py-3 flex justify-between ml-64">
      <div className="flex items-center text-x1">
        <FaBars className="text-white me-4 cursor-pointer" />
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
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
