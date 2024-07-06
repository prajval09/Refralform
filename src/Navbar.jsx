// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-500">Brand</a>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
