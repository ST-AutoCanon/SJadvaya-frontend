// pages/ComingSoon.tsx
import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 p-6 text-center">
      {/* Icon / Illustration */}
      <div className="mb-6">
        <svg
          className="w-24 h-24 text-gray-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Coming Soon</h1>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-lg">
        This section is currently under construction. We’re working hard to
        bring you new and exciting content. Stay tuned!
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
