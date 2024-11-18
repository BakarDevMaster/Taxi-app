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
  

const  HubServices = () => {
  const features = [
    {
      title: "Flexible admin panel",
      description: "easily set up and customize driver plans and services",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Business performance metrics",
      description: "understand your business metrics and see growth points",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Marketing campaigns",
      description: "launch flexible marketing campaigns",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Set up fixed fare zones",
      description: "fixed fare zones allow you to charge set prices for traveling between zones",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Partner with corporate clients",
      description: "cooperate with companies that are willing to pay for the trips of their employees or customers",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Work from any device",
      description: "access from your phone, tablet, laptop, or desktop computer",
      imageSrc: "/api/placeholder/300/300",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
       
        
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

export default HubServices;