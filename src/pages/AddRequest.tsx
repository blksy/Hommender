import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { addOrder } from "../api/ordersRequests";
import { toast } from "react-hot-toast";
import { ROUTES } from "../router/routes";
import FormLayout from "../components/FormLayout";
import { FormInput } from "../components/FormInput";
import { useFormik } from "formik";
import { ClientRequestInsert } from "../../types/types";

const AddRequest = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const formik = useFormik<ClientRequestInsert>({
    initialValues: {
      additional_info: "",
      description: "",
      location: "",
      contact: "",
      client_id: user?.id ?? "",
      client_name: user && "full_name" in user ? user.full_name : "",
      type_of_request: "",
    },

    onSubmit: async (values) => {
      try {
        await addOrder(values);
        toast.success("Request added successfully!");
        navigate(ROUTES.REQUESTS);
      } catch (error) {
        console.error("Failed to add request:", error);
        toast.error("Failed to add request. Please try again.");
      }
    },
  });

  return (
    <FormLayout title="Add a New Request" onSubmit={formik.handleSubmit}>
      <FormInput
        formik={formik}
        accessor="type_of_request"
        label="Type of Request"
      />

      <FormInput
        formik={formik}
        accessor="description"
        label="Description"
        multiline
      />

      <FormInput formik={formik} accessor="contact" label="Contact" />

      <FormInput formik={formik} accessor="location" label="Location" />

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
        Add Request
      </button>
    </FormLayout>
  );
};

export default AddRequest;
