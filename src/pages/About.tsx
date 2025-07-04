import Logo from "../assets/Logo.png";
import Bg from "../assets/About.bg.jpg";

const About = () => {
  return (
    <div
      className="page-container flex flex-col lg:flex-row items-center justify-center gap-6 p-4 sm:p-6"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src={Logo}
          alt="Logo"
          className="w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 object-contain"
        />
      </div>

      <div className="w-full max-w-2xl">
        <p className="text-base sm:text-lg lg:text-xl text-black bg-white bg-opacity-80 p-4 sm:p-8 font-bold rounded-2xl shadow-lg text-center">
          Our app is your ultimate portal for home services, connecting skilled
          specialists with clients in need of quality solutions. Whether you're
          looking to book a professional for cleaning, renovation, repairs, or
          any other home-related service, our platform simplifies the process.
          We empower clients to find trusted experts and specialists to showcase
          their skills and grow their business, all in one convenient space.
          With user-friendly tools for posting jobs, managing inquiries, and
          facilitating seamless communication, our app ensures a hassle-free
          experience for everyone involved. Transforming homes has never been
          easier!
        </p>
      </div>
    </div>
  );
};

export default About;
