import { Link } from 'react-router-dom';
import React from 'react'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
    <nav className="text-sm text-gray-500 mb-6">
      <Link to="/" className="hover:underline text-black">Home</Link>
      <span className="mx-2">/</span>
      <span className="font-semibold">404 Error</span>
    </nav>

    <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">404 Not Found</h1>
    <p className="text-gray-600 mb-6">Your visited page not found. You may go home page.</p>

    <Link
      to="/"
      className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition duration-300"
    >
      Back to home page
    </Link>
  </div>
);
};

export default NotFound