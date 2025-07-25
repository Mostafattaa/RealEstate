import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ image, title, rating, description, price, type = "card" }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} className="fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };

  if (type === "property") {
    return (
      <Link to="/desc" className="block">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">{description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-3 flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Location details here
            </p>
            <p className="text-sm text-gray-800 mb-3">
              Starting From <span className="text-lg font-bold text-red-600">{price}</span>
            </p>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <div className="flex items-center">
                <img 
                  src="/src/assets/imgs/user-blue-gradient_78370-4692.jpg" 
                  alt="Agent Avatar" 
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <span className="text-sm font-medium text-gray-800">Agent Name</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-green-600 hover:bg-gray-200 transition-colors cursor-pointer">
                <i className="fas fa-phone text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/desc" className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-44 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <div className="flex justify-center mb-2">
            {renderStars(rating)}
          </div>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="text-lg font-semibold text-gray-800">{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

