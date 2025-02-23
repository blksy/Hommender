import React from "react";
import { FiUpload } from "react-icons/fi";
import Bg from "../assets/Profile.bg.jpg";
import DefPic from "../assets/Profile.def.jpg";
import { Review } from "../../types/types";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../router/routes";

const UserProfile: React.FC = () => {
  const { user } = useUser(); // Get user data from context

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
          <p className="text-gray-300">Role: {user.role}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-8">
        {/* Profile Details */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md opacity-90">
          <h3 className="text-lg font-medium mb-3 text-gray-800">
            Profile Details
          </h3>
          <ul className="list-none space-y-2 text-gray-700">
            {user.role === "specialist" && (
              <>
                <li>
                  <strong>Description:</strong> {user.description || "N/A"}
                </li>
                <li>
                  <strong>Services:</strong>{" "}
                  {user.services?.join(", ") || "N/A"}
                </li>
              </>
            )}
            <li>
              <strong>Address:</strong> {user.address || "N/A"}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone || "N/A"}
            </li>
          </ul>
          <div className="mt-6">
            <Link
              to={ROUTES.PROFILE_EDITION}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Reviews Section (for Specialists) */}
        {user.role === "specialist" && (
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md opacity-90">
            <h3 className="text-lg font-medium mb-3 text-gray-800">Reviews</h3>
            <p className="text-gray-600 mb-2">
              Overall Rating:{" "}
              <strong>{user.overallRating?.toFixed(1) || "N/A"}</strong>
            </p>
            <ul className="list-none space-y-2 text-gray-700">
              {user.reviews?.length ? (
                user.reviews.map((review: Review) => (
                  <li
                    key={review.id}
                    className="p-3 border rounded shadow-sm bg-gray-100"
                  >
                    <p>
                      <strong>Rating:</strong> {review.rating}/5
                    </p>
                    <p>
                      <strong>Comment:</strong> {review.comment}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Date:</strong>{" "}
                      {new Date(review.created_at).toDateString()}
                    </p>
                  </li>
                ))
              ) : (
                <p className="mb-4 text-gray-500">No reviews available</p>
              )}
            </ul>
            <Link
              to={ROUTES.CONTACT_FORM}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
