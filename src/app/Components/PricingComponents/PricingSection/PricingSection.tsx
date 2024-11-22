'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';


const PricingCard = ({
  title,
  price,
  description,
  features,
  additionalFeatures,
  imageSrc,
  isPopular,
  buttonText = "Let's chat"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full md:w-72 p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 min-h-[700px] flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute -top-3 right-4 bg-purple-700 text-white px-4 py-1 rounded-full text-sm">
          Most popular
        </div>
      )}

      <div
        className={`w-12 h-12 mb-4 relative transform transition-all duration-300 ${
          isHovered ? 'translate-x-5 opacity-80' : 'translate-x-0 opacity-100'
        }`}
      >
        <Image
          src="/api/placeholder/48/48"
          alt={title}
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="mb-6">
        <span className="text-2xl font-bold">${price}</span>
        <span className="text-gray-500 text-sm ml-1">one-time fee</span>
      </div>

      <button className="w-full bg-green-500 text-white py-2 rounded-lg mb-4 hover:bg-green-600 transition-colors">
        {buttonText}
      </button>

      <a href="#" className="text-sm text-gray-600 hover:underline block mb-6">
        Try 14-days for free
      </a>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}

        {additionalFeatures && (
          <>
            <div className="text-sm text-gray-700 mt-4 mb-2">
              Everything in the Starting plan, plus:
            </div>
            {additionalFeatures.map((feature, index) => (
              <div key={`additional-${index}`} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "Starting up",
      price: "4,500",
      description: "For companies looking to launch a ride-hailing business in just 1month",
      imageSrc: "/images/car.svg", // Add your image paths here
      buttonText: "Start Onde now",
      features: [
        "Unlimited users and drivers",
        "Driver and Customer apps (iOS & Android) with your branding",
        "Order management panel",
        "Admin panel to control your team, launch marketing campaigns and manage app settings",
        "Performance reports and integrated analytics",
        "In-app marketing",
        "Dedicated account manager, 24/7 technical support",
        "App Store Optimization (3 months)"
      ]
    },
    {
      title: "Professional",
      price: "8,500",
      description: "For companies looking to launch fast and build their customer base rapidly",
      imageSrc: "/images/car-pro.svg",
      isPopular: true,
      features: [
        "Unlimited users and drivers",
        "Driver and Customer apps (iOS & Android) with your branding",
        "Order management panel"
      ],
      additionalFeatures: [
        "Customer acquisition and campaign setup to 5k customer app installs"
      ]
    },
    {
      title: "Expert",
      price: "23,000",
      description: "For companies looking to launch fast, build a driver base, and grow their customer base",
      imageSrc: "/images/car-expert.svg",
      features: [
        "Unlimited users and drivers",
        "Driver and Customer apps (iOS & Android) with your branding",
        "Order management panel"
      ],
      additionalFeatures: [
        "Premium App Store Optimization",
        "Customer and driver acquisition and campaign setup, up to 15k app installs in total"
      ]
    },
    {
      title: "Super App",
      price: "6,500",
      description: "For companies looking to launch both ride-hailing and delivery apps",
      imageSrc: "/images/bike.svg",
      features: [
        "Unlimited users and drivers",
        "Driver and Customer apps (iOS & Android) with your branding",
        "Order management panel"
      ],
      additionalFeatures: [
        "Delivery platform",
        "Web and app solutions for vendors"
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-gray-600 pb-1 border-b-2 border-dotted border-gray-600">
          View all plan features
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
