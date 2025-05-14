import { Link } from "react-router-dom";
import { SpecialistCardProps } from "../../types/types";
import DefPic from "../assets/Profile.def.jpg";
import { ROUTES } from "../router/routes";

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
      <div className="flex-shrink-0">
        <img
          src={specialist.profilePic ?? DefPic}
          alt="profile"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl text-black font-semibold mb-2">
          {specialist.full_name}
        </h3>
        <p className="text-gray-600 mb-2">
          Services:{" "}
          {specialist.services && specialist.services.length > 0
            ? specialist.services.join(", ")
            : "None"}
        </p>
        <p className="text-gray-600 mb-4">Phone: {specialist.phone}</p>
        <Link
          to={ROUTES.SPECIALIST_DETAILS(specialist.id)}
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 text-center"
        >
          View Specialist Details
        </Link>
      </div>
    </div>
  );
};

export default SpecialistCard;
