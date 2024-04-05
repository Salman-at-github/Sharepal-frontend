import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-red-600 text-6xl mb-4">
        <AiOutlineWarning />
      </div>
      <p className="text-xl font-semibold mb-2 text-center">Oops! Something went wrong.</p>
      <p className="text-gray-600 text-center">{message}</p>
    </div>
  );
};

export default Error;
