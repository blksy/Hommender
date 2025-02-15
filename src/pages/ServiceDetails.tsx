import Bg from "../assets/RequestDetails.bg.jpg";
const ServiceDetails = () => {
  return (
    <div
      className="page-container bg-cover bg-center text-white py-8 min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      Sevice details
    </div>
  );
};

export default ServiceDetails;
