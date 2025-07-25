import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, description, date }) => {
  return (
    <Link to="/desc" className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <div className="flex justify-between items-center mb-4 text-blue-500">
            <User size={16} />
            <span className="text-sm">{date}</span>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-gray-800 mb-3">{title}</h5>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
            <a href="#" className="text-gray-800 font-semibold uppercase text-sm hover:text-blue-500 transition-colors">
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

