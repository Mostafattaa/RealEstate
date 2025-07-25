import React from 'react';
import BlogCard from './BlogCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      image: "/src/assets/imgs/appartment.jpg",
      title: "Inside a Modern Luxury Apartment",
      description: "Join us as we take you on a full tour of this high-end apartment in New Cairo, packed with elegant design and smart living features.",
      date: "6/23"
    },
    {
      image: "/src/assets/imgs/Balcony.jpg",
      title: "Top 5 Real Estate Investment Tips",
      description: "Looking to invest in property? Discover the essential tips to make smart decisions and avoid common mistakes in Egypt's market.",
      date: "9/14"
    },
    {
      image: "/src/assets/imgs/Real-Estate-Consulting.jpg",
      title: "Exclusive First Look: Palm Hills Project",
      description: "We got early access to one of the most anticipated real estate projects. Come along for a sneak peek inside Palm Hills' newest phase.",
      date: "7/35"
    }
  ];

  return (
    <div id="blog" className="container mx-auto px-4 py-16">
      <div className="text-left mb-12">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Watch Our Blog</h1>
        <div className="flex justify-between items-center text-gray-500">
          <span>Real Insights from Real Locations</span>
          <Link to="/blog" className="flex items-center text-gray-800 font-medium hover:text-blue-500 transition-colors">
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

