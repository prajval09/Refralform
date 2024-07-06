// src/components/FAQ.jsx
import React from 'react';

const faqs = [
  { question: 'What is the referral program?', answer: 'Our referral program allows you to earn rewards by referring friends to our programs.' },
  { question: 'How do I refer?', answer: 'You can refer by filling out the referral form on our website.' },
  { question: 'What are the benefits?', answer: 'Both you and your referred friend will receive bonuses after enrollment.' },
];

const FAQ = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">{faq.question}</h4>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
