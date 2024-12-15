import { Link } from "react-router-dom";
import Bg from "../assets/Start.bg.jpg";
import { FcGoogle } from "react-icons/fc";

const Start = () => {
  return (
    <div
      className="page-container-col"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div
        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
        style={{
          maxWidth: "500px",
        }}
      >
        <h1 className="text-4xl font-bold mb-8">Welcome to Hommender</h1>

        <div className="flex flex-col space-y-4">
          <h2 className="text-center font-bold">
            Login if you have an existing account
          </h2>
          <Link
            to="/login"
            className="bg-blue-600 text-white text-center px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-blue-500"
          >
            Login
          </Link>
          <h2 className="text-center font-bold">Or register a new account</h2>
          <Link
            to="/register"
            className="bg-green-600 text-white text-center px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-green-500"
          >
            Register
          </Link>
          <button className="flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-lg text-lg border border-gray-300 shadow transition duration-300 ease-in-out hover:bg-gray-100">
            <FcGoogle className="mr-2 text-2xl" /> {/* Google icon */}
            Login with Google
          </button>
        </div>
      </div>
      {/* For testing purposes tbd */}
      <Link
        to="/app"
        className="bg-indigo-600 text-white text-center px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-indigo-500"
      >
        Go to Home
      </Link>
    </div>
  );
};
export default Start;
