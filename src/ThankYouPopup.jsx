// ThankYouPopup.jsx

import React from 'react';

const ThankYouPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg mb-8">Your referral has been submitted successfully.</p>
        <button onClick={onClose} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default ThankYouPopup;
