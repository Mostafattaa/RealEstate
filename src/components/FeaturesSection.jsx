import React from 'react';
import FeatureCard from './FeatureCard';
import { ChevronRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-user",
      title: "Prime Location:",
      description: "Discover Serenity With Properties Strategically Located For Convenience And Tranquility."
    },
    {
      icon: "fas fa-chart-line",
      title: "Smart Investments:",
      description: "Secure Your Future With Properties That Promise Not Just A Home But Long-Term Financial Growth."
    },
    {
      icon: "fas fa-leaf",
      title: "Nature's Embrace:",
      description: "Live Green With Eco-friendly Designs And Green Spaces, Immersing Yourself In Nature's Embrace."
    },
    {
      icon: "fas fa-home",
      title: "Modern Comforts:",
      description: "Luxury Redefined In Meticulously Designed Spaces With Contemporary Features For Opulent Living."
    },
    {
      icon: "fas fa-users",
      title: "Community Living:",
      description: "Connect And Thrive In Vibrant Communities, Fostering Lasting Connections And Shared Experiences."
    },
    {
      icon: "fas fa-smile",
      title: "Peace Of Mind:",
      description: "Enjoy Peace Of Mind With Our Reliable Support Team, Ensuring A Smooth Journey To Your Perfect Home."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <section className="mb-20">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Find Everything All In One Place
          </h1>
          <div className="flex justify-between items-center text-gray-500">
            <span>Detailed Cards</span>
            <a href="#" className="flex items-center text-gray-800 font-medium hover:text-red-600 transition-colors">
              View All <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;

