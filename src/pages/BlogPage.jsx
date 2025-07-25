import React from 'react';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
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
    },
    {
      image: "/src/assets/imgs/appartment.jpg",
      title: "Modern Living Spaces Design",
      description: "Explore the latest trends in modern living spaces and how they're reshaping the real estate landscape.",
      date: "8/12"
    },
    {
      image: "/src/assets/imgs/Balcony.jpg",
      title: "Investment Opportunities in 2024",
      description: "Discover the best investment opportunities in real estate for the upcoming year.",
      date: "10/5"
    },
    {
      image: "/src/assets/imgs/Real-Estate-Consulting.jpg",
      title: "Sustainable Housing Solutions",
      description: "Learn about eco-friendly housing solutions that are changing the industry.",
      date: "11/18"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-gray-600">Real Insights from Real Locations</p>
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
    </div>
  );
};

export default BlogPage;

