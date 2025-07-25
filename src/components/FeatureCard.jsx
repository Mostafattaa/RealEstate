import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-5 text-left min-h-44 hover:shadow-lg transition-shadow duration-300">
      <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center mb-3 hover:bg-red-700 transition-colors">
        <i className={`${icon} text-white`}></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;

