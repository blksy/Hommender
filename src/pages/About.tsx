import Logo from "../assets/Logo.png";
import Bg from "../assets/About.bg.jpg";

const About = () => {
  return (
    <div
      className="page-container"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="flex-1 flex justify-center">
        <img src={Logo} alt="Logo" className="w-90 h-90 " />
      </div>
      <div className="flex-1 text-right max-w-2xl">
        <p className="text-xl text-black bg-white bg-opacity-70 mr-72 p-6 font-bold">
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
