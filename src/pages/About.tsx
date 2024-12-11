import Logo from "../assets/Logo.png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl from-blue-300 via-blue-500 to-blue-400">
      <img src={Logo} alt="Logo" className="w-72 h-72 mb-8" />
      <p className="text-center px-6 max-w-2xl text-xl text-white">
        Our app is your ultimate portal for home services, connecting skilled
        specialists with clients in need of quality solutions. Whether you're
        looking to book a professional for cleaning, renovation, repairs, or any
        other home-related service, our platform simplifies the process. We
        empower clients to find trusted experts and specialists to showcase
        their skills and grow their business, all in one convenient space. With
        user-friendly tools for posting jobs, managing inquiries, and
        facilitating seamless communication, our app ensures a hassle-free
        experience for everyone involved. Transforming homes has never been
        easier!
      </p>
    </div>
  );
};

export default About;
