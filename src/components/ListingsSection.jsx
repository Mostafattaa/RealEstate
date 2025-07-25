import React from 'react';
import PropertyCard from './PropertyCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListingsSection = () => {
  const properties = [
    {
      image: "/src/assets/imgs/steptodown.com949075.jpg",
      title: "Renovated Apartment",
      description: "Single Apartment",
      price: "1000$"
    },
    {
      image: "/src/assets/imgs/steptodown.com978318.jpg",
      title: "New Building",
      description: "Villa",
      price: "1500$"
    },
    {
      image: "/src/assets/imgs/steptodown.com790696.jpg",
      title: "Renovated Grand Villa",
      description: "Grand Villa",
      price: "1200$"
    },
    {
      image: "/src/assets/imgs/steptodown.com749218.jpg",
      title: "Grand Villa Restored",
      description: "Grand Villa",
      price: "1300$"
    },
    {
      image: "/src/assets/imgs/steptodown.com875634.jpg",
      title: "Renovated Apartment",
      description: "Grand Villa",
      price: "1800$"
    },
    {
      image: "/src/assets/imgs/steptodown.com625648.jpg",
      title: "Renovated Apartment",
      description: "Double Room Apartment",
      price: "1000$"
    }
  ];

  return (
    <section id="listing" className="py-20">
      <div className="container mx-auto px-4">
        <header className="text-left mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Find Your Dream Property in Our Listings
          </h2>
          <div className="flex justify-between items-center text-gray-500">
            <span>Certified Places Selected by Our Team</span>
            <Link to="/listing" className="flex items-center text-gray-800 font-medium hover:text-red-600 transition-colors">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              description={property.description}
              price={property.price}
              type="property"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;

