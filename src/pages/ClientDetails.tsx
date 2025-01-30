import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Bg from "../assets/SpecialistDetails.bg.jpg";
import { getClientById } from "../api/clientsRequests";
import { fetchAllOrders } from "../api/ordersRequests";

const ClientDetails = () => {
  const { id } = useParams();

  const {
    data: client,
    isLoading: clientLoading,
    error: clientError,
  } = useQuery({
    queryKey: ["client", id],
    queryFn: () => getClientById(id),
    enabled: !!id,
  });

  const {
    data: requests = [],
    isLoading: requestsLoading,
    error: requestsError,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: fetchAllOrders,
  });

  if (clientLoading) return <p>Loading client details...</p>;
  if (clientError) return <p>Error loading client details</p>;
  if (!client) return <p>No client data available.</p>;

  const { full_name, role, phone, address, id: clientId } = client;

  const clientRequests = requests.filter(
    (request) => request.client_id === clientId || request.contact === phone
  );

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8 min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-black text-3xl font-bold text-center mb-6">
          Details of Client No: {clientId}
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Details Section */}
          <div className="flex-1 text-black bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg text-black">
                <strong>Full name:</strong> {full_name}
              </p>
              <p className="text-lg text-black">
                <strong>Role:</strong> {role}
              </p>
              <p className="text-lg text-black">
                <strong>Phone:</strong> {phone}
              </p>
              <p className="text-lg text-black">
                <strong>Address:</strong> {address}
              </p>
            </div>

            {/* Contact Me */}
            <div className="mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-all">
                Contact Me
              </button>
            </div>
          </div>

          {/* Requests Section */}
          <div className="flex-1">
            {requestsLoading && <p>Loading requests...</p>}
            {requestsError && <p>Error loading requests</p>}

            {clientRequests.length > 0 ? (
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-black">
                <h3 className="text-2xl font-bold mb-4">
                  Requests made by Client
                </h3>
                <ul className="space-y-4">
                  {clientRequests.map(
                    ({
                      id,
                      type_of_request,
                      description,
                      location,
                      additional_info,
                    }) => (
                      <li
                        key={id}
                        className="p-4 bg-white shadow-md rounded-lg"
                      >
                        <p>
                          <strong>Type:</strong> {type_of_request}
                        </p>
                        <p>
                          <strong>Description:</strong> {description}
                        </p>
                        <p>
                          <strong>Location:</strong> {location}
                        </p>
                        {additional_info && (
                          <p>
                            <strong>Additional Info:</strong> {additional_info}
                          </p>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <p className="text-black text-lg">
                No requests found for this client.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/app/clients"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Back to Clients
        </Link>
      </div>
    </div>
  );
};

export default ClientDetails;
