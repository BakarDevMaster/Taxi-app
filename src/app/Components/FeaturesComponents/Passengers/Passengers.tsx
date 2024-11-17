// FeatureSection.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard = ({ title, description, imageSrc }: FeatureCardProps) => (
    <div className="flex flex-col space-y-4">
      <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}> {/* 16:9 ratio */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
  

const  Passengers = () => {
  const features = [
    {
      title: "User-friendly design and usability",
      description: "multiple drop-offs, favorite addresses, built-in in-app chat with drivers, and more!",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "All possible ordering options",
      description: "instant ordering, pre-ordering, order for corporate clients, etc.",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Safety features",
      description: "real-time tracking, option to share your ride with friends, SOS button",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "All payment methods available",
      description: "cash, debit card, credit card, MTN method, terminal, dozens of payment gateways, Customer Wallet.",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "App stability in any conditions",
      description: "rush hours or high demand season, it doesn’t matter - we have 99.8 uptime!",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Regular updates",
      description: "for Android and iOS at no extra fees",
      imageSrc: "/api/placeholder/300/300",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-gray-300">
            How will Onde <span className="font-semibold text-black">help retain
            </span>
          </h2>
          <h2 className="text-4xl font-semibold text-black">passengers?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passengers;