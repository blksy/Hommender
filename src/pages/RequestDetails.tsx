import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { getOrderById } from "../api/ordersRequests";
import Bg from "../assets/RequestDetails.bg.jpg";
import { ROUTES } from "../router/routes";
import { FormInput } from "../components/FormInput";
import { ResponseFormValues } from "../../types/types";

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: request,
    isLoading: requestLoading,
    error: requestError,
  } = useQuery({
    queryKey: ["request", id],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });

  const formik = useFormik<ResponseFormValues>({
    initialValues: {
      message: "",
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!request?.contact) {
        toast.error("Client email is missing. Unable to send response.");
        return;
      }

      try {
        const emailData = {
          to_email: request.contact,
          request_id: request.id,
          message: values.message,
        };

        await emailjs.send(
          "service_oxyaz2r",
          "template_1gcuelr",
          emailData,
          "2Blz82Tt3FQt7WT0F",
        );

        toast.success("Your response has been sent!");

        resetForm();

        setTimeout(() => {
          navigate(ROUTES.APP);
        }, 2000);
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send response. Please try again later.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (requestLoading) {
    return <p>Loading request details...</p>;
  }

  if (requestError) {
    return <p>Error loading request details...</p>;
  }

  if (!request) {
    return <p>No request data available.</p>;
  }

  const {
    additional_info,
    client_id,
    contact,
    description,
    location,
    id: requestId,
    type_of_request,
  } = request;

  const googleMapsLink = location
    ? `https://www.google.com/maps?q=${encodeURIComponent(location)}`
    : null;

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8 min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-black text-3xl font-bold text-center mb-6">
          Request Details - ID: {requestId}
        </h1>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-black">
          <p className="text-lg">
            <strong>Posted by Client: </strong>

            <Link
              to={`/app/clients/${client_id}`}
              className="text-blue-600 hover:underline"
            >
              {client_id}
            </Link>
          </p>

          <p className="text-lg">
            <strong>Type of Request: </strong>
            {type_of_request}
          </p>

          <p className="text-lg">
            <strong>Description: </strong>
            {description}
          </p>

          <p className="text-lg">
            <strong>Additional Info: </strong>
            {additional_info || "No additional info provided."}
          </p>

          <p className="text-lg">
            <strong>Location: {location} - </strong>

            {googleMapsLink ? (
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            ) : (
              "Location not provided."
            )}
          </p>

          <p className="text-lg">
            <strong>Contact: </strong>
            {contact}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-black">Respond to Request</h3>

          <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
            <FormInput
              formik={formik}
              accessor="message"
              label="Your Response"
              multiline
            />

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:bg-gray-400"
            >
              {formik.isSubmitting ? "Sending..." : "Send Response"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          to={ROUTES.REQUESTS}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Return to Requests
        </Link>
      </div>
    </div>
  );
};

export default RequestDetails;
