import { Link } from "react-router-dom";
import { ServiceCardProps } from "../../types/types";
import { ROUTES } from "../router/routes";

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-full text-center leading-tight">
          {service.type_of_service}
        </div>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl text-black font-semibold mb-2">
          {service.specialist_name}
        </h3>
        <p className="text-gray-600 mb-2">Location: {service.location}</p>
        <p className="text-gray-600 mb-2">Price: {service.price} $</p>
        <p className="text-gray-600 mb-4">Contact: {service.contact}</p>
        <Link
          to={ROUTES.SERVICE_DETAILS(service.id)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
