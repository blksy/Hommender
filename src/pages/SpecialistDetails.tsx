import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Bg from "../assets/SpecialistDetails.bg.jpg";
import { getSpecialistById } from "../api/specialistsRequests";
import { fetchAllServices } from "../api/serviceRequests";
import { ROUTES } from "../router/routes";

const SpecialistDetails = () => {
  const { id } = useParams();

  const {
    data: specialist,
    isLoading: specialistLoading,
    error: specialistError,
  } = useQuery({
    queryKey: ["specialist", id],
    queryFn: () => getSpecialistById(id!),
    enabled: !!id,
  });

  const {
    data: services = [],
    isLoading: servicesLoading,
    error: servicesError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: fetchAllServices,
  });

  if (specialistLoading) return <p>Loading specialist details...</p>;
  if (specialistError) return <p>Error loading specialist details</p>;
  if (!specialist) return <p>No specialist data available.</p>;

  const {
    full_name,
    role,
    phone,
    description,
    address,
    id: specialistId,
    reviews = [],
  } = specialist;

  const specialistServices = services.filter(
    (service) => service.specialist_id === specialistId
  );

  return (
    <div
      className="page-container bg-cover bg-center text-white py-6 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-4">
        Details of Specialist No: {specialistId}
      </h1>

      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-auto max-h-[65vh] mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Details Section */}
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow text-black text-sm sm:text-base">
            <div className="bg-white p-4 rounded-lg shadow space-y-3">
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
                <strong>Address:</strong> {address}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex-1">
            {servicesLoading && <p>Loading services...</p>}
            {servicesError && <p>Error loading services</p>}
            {specialistServices.length > 0 ? (
              <div className="bg-gray-100 p-4 rounded-lg shadow text-black text-sm sm:text-base">
                <h3 className="text-xl font-bold mb-4">
                  Services by {full_name}
                </h3>
                <ul className="space-y-4">
                  {specialistServices.map(
                    ({ id, type_of_service, description, price }) => (
                      <li key={id} className="p-4 bg-white shadow rounded-lg">
                        <p>
                          <strong>Type:</strong> {type_of_service}
                        </p>
                        <p>
                          <strong>Description:</strong> {description}
                        </p>
                        <p>
                          <strong>Price:</strong> ${price}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <p className="text-black">
                No services found for this specialist.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full max-w-5xl bg-gray-100 p-4 rounded-lg shadow text-black mb-6 overflow-auto max-h-[30vh]">
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
        {specialist?.reviews && specialist.reviews.length > 0 ? (
          <ul className="space-y-4">
            {specialist.reviews.map(({ id, reviewer, rating, comment }) => (
              <li key={id} className="p-4 bg-white shadow-md rounded-lg">
                <p>
                  <strong>Reviewer:</strong> {reviewer}
                </p>
                <p>
                  <strong>Rating:</strong> {rating} ⭐
                </p>
                <p>
                  <strong>Comment:</strong> {comment}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available for this specialist.</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/app/contact_form"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Contact Me
        </Link>
        <Link
          to={ROUTES.REVIEW_ADD(specialistId)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Write a review
        </Link>
        <Link
          to={ROUTES.SPECIALISTS}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Back to Specialists
        </Link>
      </div>
    </div>
  );
};

export default SpecialistDetails;
