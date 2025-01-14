import { useQuery } from "@tanstack/react-query";
import Bg from "../assets/Services.bg.jpg";
import ServiceCard from "../components/ServiceCard";
import { fetchAllServices } from "../api/serviceRequests";

const Services = () => {
  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["service"],
    queryFn: fetchAllServices,
  });

  if (error) {
    return <p>Cannot get services</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
