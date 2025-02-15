import { Link, useParams } from "react-router-dom";
import Bg from "../assets/RequestDetails.bg.jpg";
import { useQuery } from "@tanstack/react-query";
import { getServiceById } from "../api/serviceRequests";
import { ROUTES } from "../router/routes";

const ServiceDetails = () => {
  const { id } = useParams();

  const {
    data: service,
    isLoading: serviceLoading,
    error: serviceError,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id!),
    enabled: !!id,
  });

  if (serviceLoading) return <p>Loading service detials...</p>;
  if (serviceError) return <p>Error loading service details...</p>;
  if (!service) return <p>Service data not available</p>;

  const {
    additional_info,
    contact,
    description,
    id: serviceId,
    location,
    price,
    specialist_id,
    specialist_name,
    type_of_service,
  } = service;

  const googleMapsLink = location
    ? `https://www.google.com/maps?q=${encodeURIComponent(location)}`
    : null;

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8 min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-black text-3xl font-bold text-center mb-6">
          Service Details - ID: {serviceId}
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-black">
          <p className="text-lg mb-4">
            <strong>Posted by: </strong>
            {specialist_name}
          </p>
          <p className="text-lg mb-4">
            <strong>Serviceman Details: </strong>
            <Link
              to={`/app/specialists/${specialist_id}`}
              className="text-blue-600 hover:underline"
            >
              {specialist_id}
            </Link>
          </p>
          <p className="text-lg mb-4">
            <strong>Type of Service: </strong>
            {type_of_service}
          </p>
          <p className="text-lg mb-4">
            <strong>Description: </strong>
            {description}
          </p>
          <p className="text-lg mb-4">
            <strong>Additional Info: </strong>
            {additional_info || "No additional info provided."}
          </p>
          <p className="text-lg mb-4">
            <strong>Location: {location} - </strong>
            {googleMapsLink ? (
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            ) : (
              "Location not provided."
            )}
          </p>
          <p className="text-lg mb-4">
            <strong>Contact: </strong>
            {contact}
          </p>
          <p className="text-lg mb-4">
            <strong>Price: </strong>
            {price}$
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/app/contact_form"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Contact Me
          </Link>
          <Link
            to={ROUTES.SERVICES}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Return to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
