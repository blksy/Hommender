import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Bg from "../assets/Home.bg.jpg";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { user } = useUser();

  return (
    <div
      className="page-container-col flex flex-col items-center p-6"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-32 h-32 lg:w-48 lg:h-48 mb-6 lg:mb-8"
      />

      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-white text-center">
        Welcome to Our Home Services Portal
      </h1>
      <p className="text-base lg:text-xl text-white font-bold text-center mb-6 lg:mb-8 max-w-2xl px-4">
        Whether you're looking to book a professional for cleaning, renovation,
        repairs, or any other home-related service, our platform connects you
        with trusted experts. You can easily post jobs, find specialists, and
        manage your home service needs all in one place.
      </p>

      {user && (
        <div className="flex flex-col items-center space-y-4">
          {user.role === "client" && (
            <Link
              to="/app/requests/add_request"
              className="btn-primary w-full max-w-xs text-center"
            >
              Post a Request
            </Link>
          )}
          {user.role === "specialist" && (
            <Link
              to="/app/services/add_service"
              className="btn-primary w-full max-w-xs text-center"
            >
              Post a Service
            </Link>
          )}
          <Link
            to={
              user.role === "specialist" ? "/app/clients" : "/app/specialists"
            }
            className="btn-primary w-full max-w-xs text-center"
          >
            {user.role === "specialist"
              ? "Contact Clients"
              : "Contact Specialists"}
          </Link>
        </div>
      )}

      <div className="mt-8 lg:mt-12 text-center">
        <p className="text-sm lg:text-lg font-bold text-white">
          Ready to transform your home? Get started now!
        </p>
      </div>
    </div>
  );
};

export default Home;
