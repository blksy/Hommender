import { useUser } from "../hooks/useUser";
import { addService } from "../api/serviceRequests";
import { ROUTES } from "../router/routes";
import FormLayout from "../components/FormLayout";
import { FormInput } from "../components/FormInput";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ServiceInsert } from "../../types/types";

const AddService = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const formik = useFormik<ServiceInsert>({
    initialValues: {
      additional_info: "",
      contact: "",
      description: "",
      location: "",
      price: "",
      specialist_id: user?.id ?? "",
      specialist_name: user && "full_name" in user ? user.full_name : "",
      type_of_service: "",
    },

    onSubmit: async (values) => {
      try {
        await addService(values);
        toast.success("Service added successfully!");
        navigate(ROUTES.SERVICES);
      } catch (error) {
        console.error("Failed to add service:", error);
        toast.error("Failed to add service. Please try again.");
      }
    },
  });

  return (
    <FormLayout title="Add a New Service" onSubmit={formik.handleSubmit}>
      <FormInput
        formik={formik}
        accessor="type_of_service"
        label="Type of Service"
      />

      <FormInput
        formik={formik}
        accessor="description"
        label="Description"
        multiline
      />

      <FormInput formik={formik} accessor="price" label="Price" />

      <FormInput formik={formik} accessor="location" label="Location" />

      <FormInput formik={formik} accessor="contact" label="Contact" />

      <FormInput
        formik={formik}
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
