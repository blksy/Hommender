import { useQuery } from "@tanstack/react-query";

import Bg from "../assets/Services.bg.jpg";
import ServiceCard from "../components/ServiceCard";
import { fetchAllServices } from "../api/serviceRequests";

const Services = () => {
  const {
    data: services = [],
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
      className="min-h-screen bg-cover bg-center bg-fixed px-4 py-8 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(
          rgba(15, 23, 42, 0.55),
          rgba(15, 23, 42, 0.7)
        ), url(${Bg})`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Available Services</h1>

          <p className="mt-2 text-gray-200">
            Find the right specialist for your home.
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white/95 p-10 text-center shadow-lg">
            <p className="text-gray-500">
              No services are currently available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
