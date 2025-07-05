import { addService } from "../api/serviceRequests";
import { FieldName, Service } from "../../types/types";
import { ROUTES } from "../router/routes";
import FormLayout from "../components/FormLayout";
import { FormInput } from "../components/FormInput";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addServiceSchema } from "../validators";
import { useUser } from "../context/UserContext";

const AddService = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      type_of_service: "",
      description: "",
      price: "",
      location: "",
      contact: user?.phone || "",
      additional_info: "",
      specialist_id: user?.id || "",
      specialist_name: user?.full_name || "",
    },
    validationSchema: addServiceSchema,
    onSubmit: async (values) => {
      try {
        await addService(values as Service);
        toast.success("Service added!");
        navigate(ROUTES.SERVICES);
      } catch {
        toast.error("Failed to add service");
      }
    },
  });

  return (
    <FormLayout title="Add a New Service" onSubmit={formik.handleSubmit}>
      <div className="space-y-4 w-full max-w-xl mx-auto">
        {(
          [
            "type_of_service",
            "description",
            "price",
            "location",
            "contact",
            "additional_info",
          ] as FieldName[]
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
          Add Service
        </button>
      </div>
    </FormLayout>
  );
};

export default AddService;
