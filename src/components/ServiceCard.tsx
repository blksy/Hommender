import { FiArrowRight, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ServiceCardProps } from "../../types/types";
import { ROUTES } from "../router/routes";

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/95 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-5 text-white">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-100">
          Service
        </p>

        <h2 className="text-xl font-bold leading-tight">
          {service.type_of_service || "Unnamed service"}
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1 space-y-4">
          <div className="flex items-start gap-3">
            <FiUser className="mt-1 shrink-0 text-blue-600" />

            <div>
              <p className="text-xs font-medium uppercase text-gray-400">
                Specialist
              </p>

              <p className="font-medium text-gray-800">
                {service.specialist_name || "Specialist not specified"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FiMapPin className="mt-1 shrink-0 text-blue-600" />

            <div>
              <p className="text-xs font-medium uppercase text-gray-400">
                Location
              </p>

              <p className="text-gray-700">
                {service.location || "Not provided"}
              </p>
            </div>
          </div>

          {service.contact && (
            <div className="flex items-start gap-3">
              <FiPhone className="mt-1 shrink-0 text-blue-600" />

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Contact
                </p>

                <p className="text-gray-700">{service.contact}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-lg font-bold text-gray-900">
              {service.price ? `${service.price} zł` : "Ask for price"}
            </p>
          </div>

          <Link
            to={ROUTES.SERVICE_DETAILS(service.id)}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Details
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
