import { useState } from "react";
import { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    subject: "",
    message: "",
    attachments: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-lg lg:text-2xl font-bold mb-4 text-center">
        If you have any additional questions, feel free to ask, I'll respond as
        soon as possible.
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
          required
          className="contact-label w-full"
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
          required
          className="contact-label w-full"
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
          required
          className="contact-label w-full"
          placeholder="Write your message here..."
          rows="4"
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
          className="contact-label w-full"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="btn-primary w-full"
      >
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
