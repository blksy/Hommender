import { Link } from "react-router-dom";
import { SpecialistCardProps } from "../../types/types";
import DefPic from "../assets/Profile.def.jpg";
import { ROUTES } from "../router/routes";

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      {/* Profile Image at Top */}
      <div className="w-28 h-28">
        <img
          src={specialist.profilePic ?? DefPic}
          alt="profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-center w-full">
        <h3 className="text-xl font-semibold text-black mb-2 truncate">
          {specialist.full_name}
        </h3>
        <p className="text-gray-600 mb-2 break-words">
          <strong>Services:</strong>{" "}
          {specialist.services && specialist.services.length > 0
            ? specialist.services.join(", ")
            : "None"}
        </p>
        <p className="text-gray-600 mb-4 break-words">
          <strong>Phone:</strong> {specialist.phone}
        </p>
      </div>

      {/* Button at Bottom */}
      <Link
        to={ROUTES.SPECIALIST_DETAILS(specialist.id)}
        className="w-full text-center px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        View Specialist Details
      </Link>
    </div>
  );
};

export default SpecialistCard;
