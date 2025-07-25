import React from 'react';

const MapSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-left mb-12">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Search Your Location</h1>
        <div className="text-gray-500">
          <span>You Can Drag To Look Out</span>
        </div>
      </div>

      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110402.47840409056!2d31.2075836!3d30.0595568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fd9c57d1541%3A0x1ce50d0bcff06d38!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1689940835269!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        ></iframe>
        
        <form className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black/60 rounded-full px-5 py-3 shadow-lg flex items-center gap-3 w-11/12 max-w-2xl">
          <input
            type="search"
            placeholder="Enter a Location, Or Locality Or Area Name"
            className="flex-1 border-none outline-none bg-transparent text-white placeholder-white text-sm"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white border-none px-4 py-2 rounded-full cursor-pointer font-medium hover:bg-gray-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapSection;

