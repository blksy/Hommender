import { Link } from "react-router-dom";
import Bg from "../assets/Start.bg.jpg";

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
            In order to access the portal You should:
            <br />
            Login if you have an existing account
          </h2>
          <Link to="/login" className="btn-primary text-center">
            Login
          </Link>
          <h2 className="text-center font-bold">Or register a new account</h2>
          <Link
            to="/register"
            className="bg-green-600 text-white text-center px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-green-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Start;
