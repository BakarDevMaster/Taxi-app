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
      title: "Customizable Driver Plans",
      description: "Easily adjust services to match your business needs",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Performance Insights",
      description: "Understand metrics and identify opportunities for growth",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Marketing Campaigns",
      description: "Launch flexible promotions to attract users",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Fixed Fare Zones",
      description: "Offer predictable pricing for zone-based rides",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Corporate Partnerships",
      description: "Build relationships with businesses for client-sponsored trips",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Accessibility on Any Device",
      description: "Manage operations from your phone, tablet, or desktop",
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