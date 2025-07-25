import React from 'react';
import { Star, MapPin, Phone, Mail, Bed, Bath, Square } from 'lucide-react';

const DescPage = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Modern Luxury Villa</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-gray-600">(4.8/5)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>123 Oak Street, Downtown City, CA 90210</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-red-600">$750/night</div>
        </div>

        {/* Property Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="h-96 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/imgs/House-6.jpg" 
              alt="Property Main" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 h-96">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/src/assets/imgs/House-7.jpg" 
                alt="Property View 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/src/assets/imgs/House-8.jpg" 
                alt="Property View 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/src/assets/imgs/appartment.jpg" 
                alt="Property View 3" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/src/assets/imgs/Balcony.jpg" 
                alt="Property View 4" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2">
            {/* Property Features */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Features</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Bed size={20} className="text-gray-600" />
                  <span>4 Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} className="text-gray-600" />
                  <span>3 Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square size={20} className="text-gray-600" />
                  <span>2,500 sq ft</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This stunning modern villa offers the perfect blend of luxury and comfort. Located in a prime neighborhood, 
                this property features spacious rooms, high-end finishes, and beautiful outdoor spaces. The open-plan living 
                area is perfect for entertaining, while the private bedrooms provide peaceful retreats.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-600">
                <li>• Swimming Pool</li>
                <li>• Private Garden</li>
                <li>• Garage Parking</li>
                <li>• Modern Kitchen</li>
                <li>• Air Conditioning</li>
                <li>• Security System</li>
                <li>• High-Speed Internet</li>
                <li>• Laundry Room</li>
              </ul>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location</h2>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Agent */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Agent</h2>
              
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/imgs/user-blue-gradient_78370-4692.jpg" 
                  alt="Agent" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">John Anderson</h3>
                  <p className="text-gray-600">Real Estate Agent</p>
                  <div className="flex items-center mt-1">
                    {renderStars(5)}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-2" />
                  <span>john@realestate.com</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Call Agent
                </button>
                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  Send Message
                </button>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescPage;

