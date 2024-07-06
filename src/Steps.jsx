// src/components/Steps.jsx
import React from 'react';
import { FaUserPlus, FaGift, FaCoins } from 'react-icons/fa';

const steps = [
  { icon: FaUserPlus, text: 'Submit referrals easily via our website\'s referral section.' },
  { icon: FaGift, text: 'Earn rewards once your referral joins an Accredian program.' },
  { icon: FaCoins, text: 'Both parties receive a bonus 30 days after program enrollment.' },
];

const Steps = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">How Do I Refer?</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col items-center">
                <step.icon className="text-blue-500 text-4xl mb-4" />
                <p className="text-gray-700">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
