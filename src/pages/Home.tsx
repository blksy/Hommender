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
      className="page-container-col"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <img src={Logo} alt="Logo" className="w-48 h-48 mb-8" />

      <h1 className="text-4xl font-bold mb-4 text-black">
        Welcome to Our Home Services Portal
      </h1>
      <p className="text-xl text-black font-bold text-center mb-8 max-w-2xl px-4">
        Whether you're looking to book a professional for cleaning, renovation,
        repairs, or any other home-related service, our platform connects you
        with trusted experts. You can easily post jobs, find specialists, and
        manage your home service needs all in one place.
      </p>

      <div className="flex flex-col items-center space-y-4">
        {linkItems.map((item) => (
          <Link key={item.label} to={item.to} className="btn-primary">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-bold text-black">
          Ready to transform your home? Get started now!
        </p>
      </div>
    </div>
  );
};

export default Home;
