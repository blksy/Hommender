import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-gray-200 to-gray-400 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Home Services Portal
      </h1>

      <div className="flex flex-col space-y-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-blue-500"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-green-500"
        >
          Register
        </Link>
        <Link
          to="/app"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-indigo-500"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Start;
