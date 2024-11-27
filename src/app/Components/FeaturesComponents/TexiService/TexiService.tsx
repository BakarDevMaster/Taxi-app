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
  

const  TexiServices = () => {
  const features = [
    {
      title: "Quick Document Registration",
      description: "Hassle-free onboarding for drivers",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Intuitive Interface",
      description: "No complex learning curves—easy for everyone to use",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Efficient Ride Allocation",
      description: "Smart algorithms reduce idle time for drivers",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Familiar Features",
      description: "Includes notifications, in-app chat, and quick access buttons for convenience",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Reliable Performance",
      description: "High uptime and regular maintenance ensure smooth operation",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Secure Communication",
      description: "Keeps driver-passenger interactions safe and private",
      imageSrc: "/api/placeholder/300/300",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-gray-300">
          Why Drivers<span className="font-semibold text-black"> Prefer
            </span>
          </h2>
          <h2 className="text-4xl font-semibold text-black">Ride Click?</h2>
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

export default TexiServices;