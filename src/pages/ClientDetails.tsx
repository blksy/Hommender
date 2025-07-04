import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Bg from "../assets/SpecialistDetails.bg.jpg";
import { getClientById } from "../api/clientsRequests";
import { fetchAllOrders } from "../api/ordersRequests";
import { ROUTES } from "../router/routes";

const ClientDetails = () => {
  const { id } = useParams();

  const {
    data: client,
    isLoading: clientLoading,
    error: clientError,
  } = useQuery({
    queryKey: ["client", id],
    queryFn: () => getClientById(id!),
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

  const googleMapsLink = address
    ? `https://www.google.com/maps?q=${encodeURIComponent(address)}`
    : null;

  return (
    <div
      className="page-container bg-cover bg-center text-white py-6 min-h-screen flex flex-col items-center overflow-y-auto"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mx-2">
        <h1 className="text-black text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Details of Client No: {clientId}
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Details Section */}
          <div className="flex-1 text-black bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="bg-white p-4 rounded-lg shadow space-y-3 text-sm sm:text-base">
              <p>
                <strong>Full name:</strong> {full_name}
              </p>
              <p>
                <strong>Role:</strong> {role}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>Address:</strong> {address}{" "}
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
            </div>
          </div>

          {/* Requests Section */}
          <div className="flex-1">
            {requestsLoading && <p>Loading requests...</p>}
            {requestsError && <p>Error loading requests</p>}

            {clientRequests.length > 0 ? (
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md text-black">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Requests made by {full_name}
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
                        className="bg-white shadow-md rounded-lg transition hover:scale-[1.01]"
                      >
                        <Link
                          to={ROUTES.REQUEST_DETAILS(id)}
                          className="block rounded-lg p-4 hover:bg-blue-50 hover:text-blue-700"
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
                              <strong>Additional Info:</strong>{" "}
                              {additional_info}
                            </p>
                          )}
                        </Link>
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

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-7xl px-4">
        <Link
          to="/app/contact_form"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-center"
        >
          Contact Me
        </Link>
        <Link
          to="/app/clients"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-center"
        >
          Back to Clients
        </Link>
      </div>
    </div>
  );
};

export default ClientDetails;
