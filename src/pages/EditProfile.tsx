import { useFormik } from "formik";
import { useUser } from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Bg from "../assets/Profile.bg.jpg";
import { updateClientById } from "../api/clientsRequests";
import { updateSpecialistById } from "../api/specialistsRequests";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/routes";
import { Client, Specialist } from "../../types/types";

export default function EditProfile() {
  const { user } = useUser();
  const navigate = useNavigate();

  const isSpecialist = user?.role === "specialist";

  const specialistMutation = useMutation({
    mutationFn: (values: Partial<Specialist>) =>
      updateSpecialistById(values, user.id),
    onSuccess: (data) => {
      if (!data) {
        console.error("No data returned after updating specialist.");
        return;
      }
      console.log("Specialist updated successfully:", data);
      toast.success("Specialist updated successfully");
      navigate(ROUTES.PROFILE); // Redirect after success
    },
    onError: (error) => {
      toast.error("Failed to update specialist data");
      console.error("Failed to update specialist data", error);
    },
  });

  const clientMutation = useMutation({
    mutationFn: async (values: Partial<Client>) => {
      console.log("Updating client with values:", values, "User ID:", user.id);
      return updateClientById(values, user.id);
    },
    onSuccess: (data) => {
      if (!data) {
        console.error("No data returned after updating client.");
        return;
      }
      console.log("Client updated successfully:", data);
      toast.success("Client updated successfully");
      navigate(ROUTES.PROFILE); // Redirect after success
    },
    onError: (error) => {
      toast.error("Failed to update client data");
      console.error("Failed to update client data", error);
    },
  });

  const formik = useFormik({
    initialValues: {
      full_name: user?.full_name || "",
      phone: user?.phone || "",
      address: user?.address || "",
      ...(isSpecialist && {
        description: user?.description || "",
      }),
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const payload = isSpecialist
        ? values
        : { ...values, description: undefined };

      if (isSpecialist) {
        specialistMutation.mutate(payload);
      } else {
        clientMutation.mutate(payload);
      }
    },
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg w-96 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Profile Edition
        </h1>
        <form
          className="w-full flex flex-col items-center gap-4"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isSpecialist && (
            <textarea
              name="description"
              placeholder="Specialist Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            disabled={specialistMutation.isLoading || clientMutation.isLoading}
          >
            {specialistMutation.isLoading || clientMutation.isLoading
              ? "Updating..."
              : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
