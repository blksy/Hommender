import { useState } from "react";
import emailjs from "emailjs-com";
import Bg from "../assets/Contact.bg.jpg";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/routes";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.fullName,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    emailjs
      .send(
        "service_oxyaz2r",
        "template_1gcuelr",
        emailData,
        "2Blz82Tt3FQt7WT0F"
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response);
          toast.success("Your message has been sent!");
          setFormData({ fullName: "", phoneNumber: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
    setTimeout(() => navigate(ROUTES.APP), 2000);
  };
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-blue-300 via-blue-500 to-blue-400 p-6"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg lg:text-2xl font-bold mb-4 text-center">
          If you have any questions, feel free to contact our developers
        </h2>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="contact-label w-full"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="contact-label w-full"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-label w-full"
            placeholder="Write your message here..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
