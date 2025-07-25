import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center text-center pt-20">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img 
          src="/src/assets/imgs/back3.jpg" 
          alt="Modern Building" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
          <p className="text-xl mb-8">
            Find Hotels As Low As $199, <span className="text-yellow-400 italic">Limited Time Offer!</span>
          </p>
          
          <form className="bg-black/40 backdrop-blur-md rounded-lg p-6 flex flex-wrap justify-center gap-4">
            <div className="flex-1 min-w-36">
              <label htmlFor="keyword" className="block text-white text-sm mb-1">Enter Keyword</label>
              <input 
                id="keyword" 
                type="text" 
                placeholder="Enter keyword" 
                className="w-full p-3 bg-white/10 border-none rounded text-white placeholder-gray-300"
              />
            </div>
            
            <div className="flex-1 min-w-36">
              <label htmlFor="property" className="block text-white text-sm mb-1">Property Type</label>
              <select id="property" className="w-full p-3 bg-white/10 border-none rounded text-white">
                <option className="bg-gray-700">All Types</option>
                <option className="bg-gray-700">Apartment</option>
                <option className="bg-gray-700">House</option>
                <option className="bg-gray-700">Villa</option>
                <option className="bg-gray-700">Office</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-36">
              <label htmlFor="location" className="block text-white text-sm mb-1">Location</label>
              <input 
                id="location" 
                type="text" 
                placeholder="Enter location" 
                className="w-full p-3 bg-white/10 border-none rounded text-white placeholder-gray-300"
              />
            </div>
            
            <div className="flex-1 min-w-36">
              <label htmlFor="price" className="block text-white text-sm mb-1">Price</label>
              <select id="price" className="w-full p-3 bg-white/10 border-none rounded text-white">
                <option className="bg-gray-700">Any Price</option>
                <option className="bg-gray-700">$0 - $500k</option>
                <option className="bg-gray-700">$500k - $1M</option>
                <option className="bg-gray-700">$1M+</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-36">
              <label htmlFor="sellrent" className="block text-white text-sm mb-1">Sell/Rent</label>
              <select id="sellrent" className="w-full p-3 bg-white/10 border-none rounded text-white">
                <option className="bg-gray-700">Both</option>
                <option className="bg-gray-700">Sell</option>
                <option className="bg-gray-700">Rent</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-36">
              <button 
                type="submit" 
                className="w-full mt-6 p-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

