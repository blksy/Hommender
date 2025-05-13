import { Link } from "react-router-dom";
import { ClientCardProps } from "../../types/types";
import DefPic from "../assets/Profile.def.jpg";
import { ROUTES } from "../router/routes";

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex items-center space-x-4 max-w-sm">
      <div className="flex-shrink-0">
        <img
          src={DefPic}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-black font-semibold mb-2">
          {client.full_name}
        </h3>
        <p className="text-gray-600 mb-2">Address: {client.address}</p>
        <p className="text-gray-600 mb-4">Phone: {client.phone}</p>
        <Link
          to={ROUTES.CLIENT_DETAILS(client.id)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ClientCard;
