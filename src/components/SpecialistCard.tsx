import { SpecialistCardProps } from "../../types/types";
import DefPic from "../assets/Profile.def.jpg";

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
      <div className="flex-shrink-0">
        <img
          src={DefPic || specialists.profilepic}
          alt="profile"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl text-black font-semibold mb-2">
          {specialist.fullName}
        </h3>
        <p className="text-gray-600 mb-2">
          Services:{" "}
          {specialist.services && specialist.services.length > 0
            ? specialist.services.join(", ")
            : "None"}
        </p>
        <p className="text-gray-600 mb-4">Phone: {specialist.phone}</p>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={() => alert("Specialist details to be implemented")}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SpecialistCard;
