import React, { useEffect, useState } from "react";
import { FiEdit2, FiMapPin, FiPhone, FiTrash, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import Bg from "../assets/Profile.bg.jpg";
import DefPic from "../assets/Profile.def.jpg";
import { ClientRequest, Service } from "../../types/types";
import { useUser } from "../hooks/useUser";
import { ROUTES } from "../router/routes";
import { deleteOrderById, fetchAllOrders } from "../api/ordersRequests";
import { deleteServiceById, fetchAllServices } from "../api/serviceRequests";

const UserProfile: React.FC = () => {
  const { user } = useUser();

  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (user?.role === "client") {
      fetchAllOrders()
        .then((data) => {
          setRequests(data.filter((request) => request.client_id === user.id));
        })
        .catch((error) => {
          console.error("Error fetching requests:", error);
        });
    }

    if (user?.role === "specialist") {
      fetchAllServices()
        .then((data) => {
          setServices(
            data.filter((service) => service.specialist_id === user.id),
          );
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
        });
    }
  }, [user]);

  const handleDeleteRequest = async (id: string) => {
    try {
      await deleteOrderById(id);

      setRequests((currentRequests) =>
        currentRequests.filter((request) => request.id !== id),
      );
    } catch (error) {
      console.error("Failed to delete request:", error);
    }
  };

  const handleDeleteService = async (id: string) => {
    try {
      await deleteServiceById(id);

      setServices((currentServices) =>
        currentServices.filter((service) => service.id !== id),
      );
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-700">Loading user data...</p>
      </div>
    );
  }

  const fullName = "full_name" in user ? user.full_name : "User";
  const address = "address" in user ? user.address : null;
  const phone = "phone" in user ? user.phone : null;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed px-4 py-8 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(
          rgba(15, 23, 42, 0.55),
          rgba(15, 23, 42, 0.72)
        ), url(${Bg})`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Profile header */}
        <section className="overflow-hidden rounded-2xl bg-white/95 shadow-xl">
          <div className="h-28 bg-gradient-to-r from-blue-700 to-blue-500 sm:h-36" />

          <div className="px-6 pb-6 sm:px-10">
            <div className="-mt-16 flex flex-col items-center gap-5 sm:flex-row sm:items-end">
              <img
                src={DefPic}
                alt={`${fullName} profile`}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
              />

              <div className="flex-1 text-center sm:pb-2 sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{fullName}</h1>

                <div className="mt-1 flex items-center justify-center gap-2 text-gray-500 sm:justify-start">
                  <FiUser />
                  <span className="capitalize">{user.role}</span>
                </div>
              </div>

              <Link
                to={ROUTES.PROFILE_EDITION}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                <FiEdit2 />
                Edit Profile
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile details */}
          <section className="rounded-2xl bg-white/95 p-6 shadow-xl lg:col-span-1">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Profile Details
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="text-gray-800">{address || "Not provided"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                  <FiPhone size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-gray-800">{phone || "Not provided"}</p>
                </div>
              </div>

              {user.role === "specialist" && "description" in user && (
                <div className="border-t border-gray-200 pt-5">
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    About
                  </p>

                  <p className="leading-relaxed text-gray-800">
                    {user.description || "No description provided"}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Client requests */}
          {user.role === "client" && (
            <section className="rounded-2xl bg-white/95 p-6 shadow-xl lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    My Requests
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Your currently published requests
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {requests.length}
                </span>
              </div>

              {requests.length > 0 ? (
                <div className="space-y-3">
                  {requests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <Link
                        to={ROUTES.REQUEST_DETAILS(request.id)}
                        className="min-w-0 flex-1"
                      >
                        <h3 className="font-semibold text-gray-900">
                          {request.type_of_request}
                        </h3>

                        <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                          <FiMapPin />
                          <span>{request.location}</span>
                        </div>
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDeleteRequest(request.id)}
                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-100 hover:text-red-700"
                        aria-label={`Delete ${request.type_of_request}`}
                      >
                        <FiTrash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border-2 border-dashed border-gray-200 p-10 text-center">
                  <p className="text-gray-500">
                    You haven't created any requests yet.
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Specialist services */}
          {user.role === "specialist" && (
            <section className="rounded-2xl bg-white/95 p-6 shadow-xl lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    My Services
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Services currently available on your profile
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {services.length}
                </span>
              </div>

              {services.length > 0 ? (
                <div className="space-y-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <Link
                        to={ROUTES.SERVICE_DETAILS(service.id)}
                        className="min-w-0 flex-1"
                      >
                        <h3 className="font-semibold text-gray-900">
                          {service.type_of_service || "Unnamed service"}
                        </h3>

                        <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                          <FiMapPin />
                          <span>
                            {service.location || "Location not provided"}
                          </span>
                        </div>
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDeleteService(service.id)}
                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-100 hover:text-red-700"
                        aria-label={`Delete ${
                          service.type_of_service || "service"
                        }`}
                      >
                        <FiTrash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border-2 border-dashed border-gray-200 p-10 text-center">
                  <p className="text-gray-500">
                    You haven't added any services yet.
                  </p>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
