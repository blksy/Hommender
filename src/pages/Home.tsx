import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Bg from "../assets/Home.bg.jpg";

const linkItems = [
  { to: "/", label: "Post a Service" },
  { to: "/", label: "Post a Request" },
  { to: "/app/specialists", label: "Contact Specialists" },
];

const Home = () => {
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

      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-black text-center">
        Welcome to Our Home Services Portal
      </h1>
      <p className="text-base lg:text-xl text-black font-bold text-center mb-6 lg:mb-8 max-w-2xl px-4">
        Whether you're looking to book a professional for cleaning, renovation,
        repairs, or any other home-related service, our platform connects you
        with trusted experts. You can easily post jobs, find specialists, and
        manage your home service needs all in one place.
      </p>

      <div className="flex flex-col items-center space-y-4">
        {linkItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="btn-primary w-full max-w-xs text-center"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 lg:mt-12 text-center">
        <p className="text-sm lg:text-lg font-bold text-black">
          Ready to transform your home? Get started now!
        </p>
      </div>
    </div>
  );
};
export default Home;
