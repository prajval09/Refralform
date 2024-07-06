// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="text-blue-500">Terms & Conditions</a> | <a href="#" className="text-blue-500">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
