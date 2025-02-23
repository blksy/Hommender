import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { addService } from "../api/serviceRequests";
import { Service } from "../../types/types";
import { ROUTES } from "../router/routes";
import FormLayout from "../components/FormLayout";
import { FormInput } from "../components/FormInput";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<Partial<Service>>({
    additional_info: "",
    contact: "",
    description: "",
    location: "",
    price: "",
    specialist_id: user?.id || "",
    specialist_name: user?.full_name || "",
    type_of_service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addService(serviceData as Service);
      toast.success("Service added successfully!");
      navigate(ROUTES.SERVICES);
    } catch (error) {
      console.error("Failed to add service:", error);
      toast.error("Failed to add service. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormLayout title="Add a New Service" onSubmit={handleSubmit}>
      <FormInput
        formik={{
          values: serviceData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="type_of_service"
        label="Type of Service"
      />
      <FormInput
        formik={{
          values: serviceData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="description"
        label="Description"
        multiline
      />
      <FormInput
        formik={{
          values: serviceData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="price"
        label="Price"
      />
      <FormInput
        formik={{
          values: serviceData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="location"
        label="Location"
      />
      <FormInput
        formik={{
          values: serviceData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="contact"
        label="Contact"
      />
      <FormInput
        formik={{
          values: serviceData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="additional_info"
        label="Additional Info"
        multiline
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
      >
        Add Service
      </button>
    </FormLayout>
  );
};

export default AddService;
