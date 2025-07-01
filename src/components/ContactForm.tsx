import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Bg from "../assets/ServiceRequest.bg.jpg";
import { ROUTES } from "../router/routes";
import { useNavigate } from "react-router-dom";
import { ContactFormData } from "../../types/types";
import InputMask from "react-input-mask";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    subject: "",
    message: "",
    attachments: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        attachments: file,
      }));
    }
  };

  const isValidPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/[^\d]/g, "");
    return cleaned.length >= 9 && cleaned.length <= 15;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const minMessageLength = 10;

    if (!formData.fullName.trim()) {
      toast.error("Full name is required.");
      return;
    }

    if (!isValidPhoneNumber(formData.phoneNumber)) {
      toast.error("Please enter a valid phone number (at least 9 digits).");
      return;
    }

    if (!formData.subject.trim()) {
      toast.error("Subject is required.");
      return;
    }

    if (
      !formData.message.trim() ||
      formData.message.trim().length < minMessageLength
    ) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    toast.success("Your message has been sent!");
    console.log("Form Data Submitted:", formData);
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
      <h2 className="text-lg lg:text-3xl font-bold mb-4 text-center text-white">
        If you have any additional questions, feel free to ask, I'll respond as
        soon as possible.
      </h2>

      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
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
          <InputMask
            mask="+99 999 999 9999"
            maskChar=" "
            value={formData.phoneNumber}
            onChange={handleChange}
          >
            {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input
                {...inputProps}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="e.g. +48 123 456 789"
              />
            )}
          </InputMask>

          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter the subject of your message"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Write your message here..."
            rows={4}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="attachments"
            className="block text-sm font-medium text-gray-700"
          >
            Attachments (Optional)
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
