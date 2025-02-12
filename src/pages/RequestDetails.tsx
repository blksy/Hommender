import { Link, useParams } from "react-router-dom";
import { getOrderById } from "../api/ordersRequests";
import Bg from "../assets/RequestDetails.bg.jpg";
import { useQuery } from "@tanstack/react-query";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ROUTES } from "../router/routes";

const RequestDetails = () => {
  const { id } = useParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const {
    data: request,
    isLoading: requestLoading,
    error: requestError,
  } = useQuery({
    queryKey: ["request", id],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });

  if (requestLoading) return <p>Loading request details...</p>;
  if (requestError) return <p>Error loading request details...</p>;
  if (!request) return <p>No request data available.</p>;

  const {
    additional_info,
    client_id,
    contact,
    description,
    location,
    id: requestId,
    type_of_request,
  } = request;

  const handleSendResponse = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8 min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
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
            <strong>Location: </strong>
            {location}
          </p>
          <p className="text-lg">
            <strong>Contact: </strong>
            {contact}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-black">Respond to Request</h3>
          <form ref={formRef} onSubmit={handleSendResponse} className="mt-4">
            <input type="hidden" name="to_email" value={contact} />
            <input type="hidden" name="request_id" value={requestId} />
            <textarea
              name="message"
              className="w-full p-2 rounded-xl border border-gray-300 resize-none h-40 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your response here..."
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:bg-gray-400"
            >
              {isSending ? "Sending..." : "Send Response"}
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
