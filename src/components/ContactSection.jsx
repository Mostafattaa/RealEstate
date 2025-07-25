import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    enquiry: 'Appartment',
    personalRole: 'Buyer',
    personalName: '',
    emailAddress: '',
    howToAddress: 'Mr',
    maxPrice: '$900',
    minSize: '50'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Real Estate Enquiry Form</h2>
      <p className="text-gray-500 text-center mb-12">Register your Enquiry Here</p>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="bg-white p-6 w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="enquiry" className="block font-bold text-sm mb-1 text-gray-800">Enquiry Type</label>
              <select
                id="enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
              >
                <option>Appartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>

            <div className="flex gap-5">
              <div className="flex-1">
                <label htmlFor="personalRole" className="block font-bold text-sm mb-1 text-gray-800">Personal Role</label>
                <select
                  id="personalRole"
                  name="personalRole"
                  value={formData.personalRole}
                  onChange={handleChange}
                  className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Agent">Agent</option>
                  <option value="Investor">Investor</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="personalName" className="block font-bold text-sm mb-1 text-gray-800">Personal Name</label>
                <input
                  type="text"
                  id="personalName"
                  name="personalName"
                  value={formData.personalName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
                />
              </div>
            </div>

            <div>
              <label htmlFor="emailAddress" className="block font-bold text-sm mb-1 text-gray-800">Email Address</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="info@awdajkn.com"
                className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="howToAddress" className="block font-bold text-sm mb-1 text-gray-800">How to Address You</label>
              <select
                id="howToAddress"
                name="howToAddress"
                value={formData.howToAddress}
                onChange={handleChange}
                className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>

            <div className="flex gap-5">
              <div className="flex-1">
                <label htmlFor="maxPrice" className="block font-bold text-sm mb-1 text-gray-800">Max Price</label>
                <select
                  id="maxPrice"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
                >
                  <option>$900</option>
                  <option>$1500</option>
                  <option>$2000</option>
                  <option>$3000</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="minSize" className="block font-bold text-sm mb-1 text-gray-800">Min Size(sqFr)</label>
                <select
                  id="minSize"
                  name="minSize"
                  value={formData.minSize}
                  onChange={handleChange}
                  className="w-full p-4 text-sm border border-gray-300 rounded bg-gray-50 text-gray-800"
                >
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>500</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-red-600 text-white text-sm border-none rounded cursor-pointer mt-6 mb-16 hover:bg-red-700 transition-colors"
            >
              Submit Your Enquiry
            </button>
          </form>
        </div>
        
        <div className="w-full max-w-2xl h-full rounded-lg overflow-hidden">
          <img
            src="/src/assets/imgs/steptodown.com209877.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

