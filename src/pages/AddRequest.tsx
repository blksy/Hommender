import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useFormik } from "formik";
import { addOrder } from "../api/ordersRequests";
import { ClientRequest, RequestFieldName } from "../../types/types";
import { toast } from "react-hot-toast";
import { ROUTES } from "../router/routes";
import FormLayout from "../components/FormLayout";
import { FormInput } from "../components/FormInput";
import { addRequestSchema } from "../validators";

const AddRequest = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      type_of_request: "",
      description: "",
      contact: user?.phone || "",
      location: "",
      additional_info: "",
      client_id: user?.id || "",
      client_name: user?.full_name || "",
    },
    validationSchema: addRequestSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await addOrder(values as ClientRequest);
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
      <div className="space-y-4 w-full max-w-xl mx-auto">
        {(
          [
            "type_of_request",
            "description",
            "contact",
            "location",
            "additional_info",
          ] as RequestFieldName[]
        ).map((field) => (
          <FormInput
            key={field}
            accessor={field}
            label={field
              .replace(/_/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            multiline={field === "description" || field === "additional_info"}
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Add Request
        </button>
      </div>
    </FormLayout>
  );
};

export default AddRequest;
