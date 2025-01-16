import { Link } from "react-router-dom";
import { RequestCardProps } from "../../types/types";
import { ROUTES } from "../router/routes";

const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  return (
    <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl text-black font-semibold mb-2">
          Type: {request.type_of_request}
        </h3>
        <p className="text-gray-600 mb-2">Location: {request.location}</p>
        <p className="text-gray-600 mb-4">Contact: {request.contact}</p>
        <Link
          to={ROUTES.REQUEST_DETAILS(request.id)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Respond to Request
        </Link>
      </div>
    </div>
  );
};

export default RequestCard;
