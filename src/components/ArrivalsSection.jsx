import React from 'react';
import PropertyCard from './PropertyCard';

const ArrivalsSection = () => {
  const properties = [
    {
      image: "/src/assets/imgs/House-6.jpg",
      title: "Modern Villa",
      rating: 5,
      description: "Spacious villa with luxury and modern amenities.",
      price: "$750/night"
    },
    {
      image: "/src/assets/imgs/House-7.jpg",
      title: "Family House",
      rating: 3.5,
      description: "Perfect for families, with a big backyard and modern kitchen.",
      price: "$420/night"
    },
    {
      image: "/src/assets/imgs/House-8.jpg",
      title: "Town House",
      rating: 4.5,
      description: "Stylish townhouse in a vibrant neighborhood near downtown.",
      price: "$590/night"
    },
    {
      image: "/src/assets/imgs/appartment.jpg",
      title: "Apartment",
      rating: 2.5,
      description: "Modern apartment with city views and premium facilities.",
      price: "$210/night"
    }
  ];

  return (
    <section id="arrivals" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            What Type Of Hotels You Are Generally Looking For?
          </h3>
          <p className="text-gray-600">We Offer A Wide Range Of Variety</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              rating={property.rating}
              description={property.description}
              price={property.price}  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArrivalsSection;

