import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const ListingPage = () => {
  const [filters, setFilters] = useState({
    keyword: '',
    propertyType: 'All Types',
    location: '',
    priceRange: 'Any Price',
    sellRent: 'Both',
  });

  const properties = [
  {
    image: "/src/assets/imgs/steptodown.com949075.jpg",
    title: "Renovated Apartment",
    description: "Single Apartment",
    location: "New York",
    price: 1000,
    type: "Apartment",
    sellRent: "Rent",
  },
  {
    image: "/src/assets/imgs/steptodown.com978318.jpg",
    title: "New Building",
    description: "Villa",
    location: "Los Angeles",
    price: 1500,
    type: "Villa",
    sellRent: "Sell",
  },
  {
    image: "/src/assets/imgs/steptodown.com790696.jpg",
    title: "Renovated Grand Villa",
    description: "Grand Villa",
    location: "Miami",
    price: 1650000,
    type: "Villa",
    sellRent: "Sell",
  },
  {
    image: "/src/assets/imgs/House-6.jpg",
    title: "Modern Villa",
    description: "Luxury with pool & garden",
    location: "San Francisco",
    price: 1800000,
    type: "Villa",
    sellRent: "Sell",
  },
  {
    image: "/src/assets/imgs/House-7.jpg",
    title: "Family House",
    description: "Perfect for families",
    location: "Chicago",
    price: 950,
    type: "House",
    sellRent: "Rent",
  },
  {
    image: "/src/assets/imgs/House-8.jpg",
    title: "Town House",
    description: "Stylish and compact",
    location: "Boston",
    price: 1200000,
    type: "Townhouse",
    sellRent: "Sell",
  },
  {
    image: "/src/assets/imgs/appartment.jpg",
    title: "City Apartment",
    description: "Modern apartment with city view",
    location: "Seattle",
    price: 700,
    type: "Apartment",
    sellRent: "Rent",
  },
  {
    image: "/src/assets/imgs/House-11.jpg",
    title: "Countryside Cottage",
    description: "Peaceful and quiet",
    location: "Vermont",
    price: 650000,
    type: "House",
    sellRent: "Sell",
  },
  {
    image: "/src/assets/imgs/House-2.jpg",
    title: "Beachfront Bungalow",
    description: "Steps from the ocean",
    location: "San Diego",
    price: 2000,
    type: "House",
    sellRent: "Rent",
  },
  {
    image: "/src/assets/imgs/House-3.jpg",
    title: "Downtown Loft",
    description: "Loft-style apartment",
    location: "New York",
    price: 1300,
    type: "Apartment",
    sellRent: "Sell",
  },
  {
    image: "/src/assets/imgs/House-4.jpg",
    title: "Luxury Penthouse",
    description: "Top-floor skyline views",
    location: "Las Vegas",
    price: 3000,
    type: "Villa",
    sellRent: "Sell",
  }
];

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filterProperties = () => {
    return properties.filter((property) => {
      const keywordMatch =
        property.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        property.description.toLowerCase().includes(filters.keyword.toLowerCase());

      const typeMatch =
        filters.propertyType === 'All Types' || property.type === filters.propertyType;

      const sellRentMatch =
        filters.sellRent === 'Both' || property.sellRent === filters.sellRent;

      const locationMatch = property.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

              const priceMatch = (() => {
          const price = property.price;
          switch (filters.priceRange) {
            case 'Any Price':
              return true;
            case '0-1000':
              return price <= 1000;
            case '1001-500000':
              return price > 1000 && price <= 500000;
            case '500001-1000000':
              return price > 500000 && price <= 1000000;
            case '1000001+':
              return price > 1000000;
            default:
              return true;
          }
        })();

      return keywordMatch && typeMatch && sellRentMatch && locationMatch && priceMatch;
    });
  };

  const filteredProperties = filterProperties();

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Property Listings</h1>
          <p className="text-gray-600">Find your perfect property from our extensive collection</p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">Keyword</label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                value={filters.keyword}
                onChange={handleFilterChange}
                placeholder="Enter keyword"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Enter location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select
                id="priceRange"
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">             
                <option value="Any Price">Any Price</option>
                <option value="0-1000">$0 - $1K</option>
                <option value="1001-500000">$1K - $500K</option>
                <option value="500001-1000000">$500K - $1M</option>
                <option value="1000001+">$1M+</option>
              </select>

            </div>

            <div>
              <label htmlFor="sellRent" className="block text-sm font-medium text-gray-700 mb-1">Sell/Rent</label>
              <select
                id="sellRent"
                name="sellRent"
                value={filters.sellRent}
                onChange={handleFilterChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Both</option>
                <option>Sell</option>
                <option>Rent</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {filteredProperties.length} Properties Found
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              description={property.description}
              price={`$${property.price}`}
              type={property.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
