// src/components/ReferNowModal.jsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ThankYouPopup from './ThankYouPopup';

const ReferNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', friendName: '', friendEmail: '' });
 const [showPopup, setshowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await fetch('http://localhost:3000/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message, close modal)
        onClose();
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
    setshowPopup(true)
    // onClose();

  };

  const handleClosePopup = () => {
    setshowPopup(false);
  };
  

  if (!isOpen) return null;
  console.log(isOpen);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Refer a Friend</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="friendName" className="block text-gray-700">Friend's Name</label>
            <input
              type="text"
              id="friendName"
              name="friendName"
              value={formData.friendName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="friendEmail" className="block text-gray-700">Friend's Email</label>
            <input
              type="email"
              id="friendEmail"
              name="friendEmail"
              value={formData.friendEmail}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      {showPopup && <ThankYouPopup onClose={handleClosePopup} />}
    </div>
  );
};


export default ReferNowModal;
