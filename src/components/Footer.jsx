import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="flex flex-wrap justify-between px-8 py-12 gap-6">
        <div className="flex-1 min-w-56">
          <h3 className="text-xl font-semibold text-gray-800 mb-5 relative">Contact Us</h3>
          <ul className="space-y-3 list-none p-0">
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-gray-300 mt-1 flex-shrink-0" />
              567 Royal Avenue, Grand Harbor Suites, Tranquil Springs
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <Phone size={16} className="text-gray-300 flex-shrink-0" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <Mail size={16} className="text-gray-300 flex-shrink-0" />
              Info@Tranquilestate.Com
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-56">
          <h3 className="text-xl font-semibold text-gray-300 mb-5">Category</h3>
          <ul className="space-y-3 list-none p-0">
            {['Villas', 'Condos', 'Houses', 'Offices', 'Retail', 'Apartments'].map((item) => (
              <li key={item} className="text-sm">
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-56">
          <h3 className="text-xl font-semibold text-gray-300 mb-5">Properties</h3>
          <ul className="space-y-3 list-none p-0">
            {['Buy', 'Sell', 'Rent', 'Landlords', 'New Homes', 'Overseas Properties'].map((item) => (
              <li key={item} className="text-sm">
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-56">
          <h3 className="text-xl font-semibold text-gray-300 mb-5">Agents And Office</h3>
          <ul className="space-y-3 list-none p-0">
            {['Find And Office', 'Find An Agent', 'Careers', 'Franchising', 'Head Office'].map((item) => (
              <li key={item} className="text-sm">
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center px-8 py-10 border-t border-gray-200 gap-4">
        <div className="flex items-center text-gray-300 font-bold">
          <img src="/src/assets/imgs/logo.png" alt="Estate Logo"   width="50" height="50" className=" mr-2" />
          <span></span>
        </div>
        
        <div className="text-sm text-center  flex-grow text-gray-300">
          All Rights Reserved @ 2025
        </div>
        
        <div className="flex gap-5">
          <a href="#" className="text-gray-300 text-sm hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-300 text-sm hover:text-blue-500 transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

