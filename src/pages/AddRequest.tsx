import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { addOrder } from "../api/ordersRequests";
import { ClientRequest } from "../../types/types";
import { toast } from "react-hot-toast";
import { ROUTES } from "../router/routes";
import FormLayout from "../components/FormLayout";
import { FormInput } from "../components/FormInput";

const AddRequest = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<Partial<ClientRequest>>({
    additional_info: "",
    description: "",
    location: "",
    contact: "",
    client_id: "",
    client_name: user?.full_name || "",
    type_of_request: "",
  });

  useEffect(() => {
    if (user) {
      setRequestData((prevData) => ({
        ...prevData,
        client_id: user.id,
        client_name: user.full_name,
      }));
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addOrder(requestData as ClientRequest);
      toast.success("Request added successfully!");
      navigate(ROUTES.REQUESTS);
    } catch (error) {
      console.error("Failed to add request:", error);
      toast.error("Failed to add request. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <FormLayout title="Add a New Request" onSubmit={handleSubmit}>
      <FormInput
        formik={{
          values: requestData,
          handleChange,
          handleBlur: () => {},
          touched: {},
          errors: {},
        }}
        accessor="type_of_request"
        label="Type of Request"
      />
      <FormInput
        formik={{
          values: requestData,
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
          values: requestData,
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
          values: requestData,
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
          values: requestData,
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
        Add Request
      </button>
    </FormLayout>
  );
};

export default AddRequest;
