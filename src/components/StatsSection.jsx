import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "3000+", label: "Homes For Retail" },
    { number: "7894+", label: "House For Rent" },
    { number: "125$", label: "Starting Price" },
    { number: "700+", label: "Our Anually Sales" }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 border border-gray-100 py-5 text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-3xl text-gray-800 font-semibold">{stat.number}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

