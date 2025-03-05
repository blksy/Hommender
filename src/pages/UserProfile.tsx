import React, { useEffect, useState } from "react";
import { FiTrash, FiUpload } from "react-icons/fi";
import Bg from "../assets/Profile.bg.jpg";
import DefPic from "../assets/Profile.def.jpg";
import { ClientRequest, Service } from "../../types/types";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../router/routes";
import { deleteOrderById, fetchAllOrders } from "../api/ordersRequests";
import { deleteServiceById, fetchAllServices } from "../api/serviceRequests";

const UserProfile: React.FC = () => {
  const { user } = useUser(); // Get user data from context
  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (user?.role === "client") {
      fetchAllOrders()
        .then((data) => {
          setRequests(data.filter((req) => req.client_id === user.id));
        })
        .catch((error) => console.error("Error fetching requests:", error));
    } else if (user?.role === "specialist") {
      fetchAllServices()
        .then((data) => {
          setServices(
            data.filter((service) => service.specialist_id === user.id)
          );
        })
        .catch((error) => console.error("Error fetching services:", error));
    }
  }, [user]);

  const handleDeleteRequest = async (id: string) => {
    try {
      await deleteOrderById(id);
      setRequests(requests.filter((req) => req.id !== id));
    } catch (error) {
      console.error("Failed to delete request:", error);
    }
  };

  const handleDeleteService = async (id: string) => {
    try {
      await deleteServiceById(id);
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-700">Loading user data...</p>
      </div>
    );
  }

  return (
    <div
      className="p-5 w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center mb-6 px-8">
        <div className="relative">
          <img
            src={user.profilePic || DefPic}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-2 border-gray-300"
          />
          <label
            htmlFor="upload-profile-picture"
            className="absolute bottom-2 right-2 bg-white rounded-full p-2 cursor-pointer shadow-md"
          >
            <FiUpload />
          </label>
          <input
            id="upload-profile-picture"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="ml-6">
          <h2 className="text-2xl font-semibold text-white">
            {user.full_name}
          </h2>
          <p className="text-white">Role: {user.role}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md opacity-90">
          <h3 className="text-lg font-medium mb-3 text-gray-800">
            Profile Details
          </h3>
          <ul className="list-none space-y-2 text-gray-700">
            <li>
              <strong>Address:</strong> {user.address || "N/A"}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone || "N/A"}
            </li>
          </ul>
        </div>

        {user.role === "client" && (
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md opacity-90">
            <h3 className="text-lg font-medium mb-3 text-gray-800">
              My Requests
            </h3>
            <ul className="list-none space-y-2 text-gray-700">
              {requests.length > 0 ? (
                requests.map((request) => (
                  <li
                    key={request.id}
                    className="p-3 border rounded shadow-sm bg-gray-100 flex justify-between items-center"
                  >
                    <Link
                      to={ROUTES.REQUEST_DETAILS(request.id)}
                      className="text-blue-600 hover:underline"
                    >
                      {request.type_of_request} - {request.location}
                    </Link>
                    <button
                      onClick={() => handleDeleteRequest(request.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash />
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No requests available</p>
              )}
            </ul>
          </div>
        )}

        {user.role === "specialist" && (
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md opacity-90">
            <h3 className="text-lg font-medium mb-3 text-gray-800">
              My Services
            </h3>
            <ul className="list-none space-y-2 text-gray-700">
              {services.length > 0 ? (
                services.map((service) => (
                  <li
                    key={service.id}
                    className="p-3 border rounded shadow-sm bg-gray-100 flex justify-between items-center"
                  >
                    <Link
                      to={ROUTES.SERVICE_DETAILS(service.id)}
                      className="text-blue-600 hover:underline"
                    >
                      {service.type_of_service} - {service.location}
                    </Link>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash />
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No services available</p>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center mt-6">
        <Link
          to={ROUTES.PROFILE_EDITION}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
