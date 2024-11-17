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
      title: "Effortless document registration",
      description: "in any country",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Intuitive and driver-friendly interface",
      description: "no learning required!",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Smart algorithm",
      description: "to minimize driver’s idle time",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Familiar Uber-like features",
      description: "real-time notifications, in-app chat, quick access buttons for frequent actions, etc.",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "High app performance",
      description: "99.8% uptime, regular updates and app maintenance",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Secure communication",
      description: "with customers",
      imageSrc: "/api/placeholder/300/300",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-gray-300">
          Why will  <span className="font-semibold text-black">drivers choose
            </span>
          </h2>
          <h2 className="text-4xl font-semibold text-black">your taxi service?</h2>
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