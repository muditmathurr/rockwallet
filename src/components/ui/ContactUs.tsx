// ui/ContactModal.tsx
import React from "react";
import Button from "./Button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUs: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-sm text-gray-600 text-center mb-6">We'd love to hear from you. Please fill out the form below.</p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <Button onClick={() => alert("Message sent!")}>Send Message</Button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
