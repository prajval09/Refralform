// src/components/ReferralBenefits.jsx
import React, { useState } from 'react';
import { FaArrowRight, FaUserFriends, FaChartLine, FaClipboardList } from 'react-icons/fa';

const programs = [
  { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹7,000', refereeBonus: '₹9,000' },
  { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹9,000', refereeBonus: '₹11,000' },
  { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹10,000', refereeBonus: '₹10,000' },
  { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹10,000', refereeBonus: '₹10,000' },
  { name: 'Executive Program in Product Management', referrerBonus: '₹10,000', refereeBonus: '₹10,000' },
  { name: 'Advanced Certification in Product Management', referrerBonus: '₹10,000', refereeBonus: '₹10,000' },
  { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹10,000', refereeBonus: '₹10,000' },
];

const categories = [
  { name: 'All Programs', icon: FaClipboardList },
  { name: 'Product Management', icon: FaChartLine },
  { name: 'Strategy & Leadership', icon: FaUserFriends },
  { name: 'Business Management', icon: FaClipboardList },
  { name: 'Fintech', icon: FaChartLine },
  { name: 'Senior Management', icon: FaUserFriends },
  { name: 'Data Science', icon: FaClipboardList },
  { name: 'Digital Transformation', icon: FaChartLine },
  { name: 'Business Analytics', icon: FaUserFriends },
];

const ReferralBenefits = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">What Are The Referral Benefits?</h3>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <div className="w-full md:w-1/4 bg-white rounded-lg shadow-lg p-4">
            <ul>
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`p-3 flex items-center cursor-pointer rounded-md mb-2 transition-colors duration-200 ${selectedCategory === category.name ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <category.icon className="mr-3" />
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-4 text-left">Programs</th>
                  <th className="p-4 text-left">Referrer Bonus</th>
                  <th className="p-4 text-left">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {programs
                  .filter(program => selectedCategory === 'All Programs' || program.name.includes(selectedCategory))
                  .map((program, index) => (
                    <tr key={index} className="border-b hover:bg-blue-50 transition-colors duration-200">
                      <td className="p-4">{program.name}</td>
                      <td className="p-4">{program.referrerBonus}</td>
                      <td className="p-4">{program.refereeBonus}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md flex items-center" onClick={onOpenModal}>
            Refer Now
            <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralBenefits;
