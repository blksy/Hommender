import Logo from "../assets/Logo.png";
import Bg from "../assets/About.bg.jpg";

const About = () => {
  return (
    <div
      className="page-container flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex justify-center mb-6 lg:mb-0">
        <img src={Logo} alt="Logo" className="w-52 h-52 lg:w-72 lg:h-72" />
      </div>
      <div className="flex-1 max-w-xl lg:max-w-2xl">
        <p className="text-lg lg:text-xl text-black bg-white bg-opacity-80 p-8 font-bold rounded-2xl shadow-lg">
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
