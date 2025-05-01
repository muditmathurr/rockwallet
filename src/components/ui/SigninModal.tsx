import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Button from "./Button";

interface SigninModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SigninModal: React.FC<SigninModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <h2 className="text-3xl font-extrabold text-center mb-6">Create Your Account</h2>

        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
            <FaFacebook className="text-blue-600 text-2xl" />
            Sign up with Facebook
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
            <FaGithub className="text-gray-800 text-2xl" />
            Sign up with GitHub
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or sign up with email</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button onClick={() => alert("Signing up...")} className="w-full">
            Sign Up
          </Button>
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

export default SigninModal;
