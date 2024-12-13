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
  

const FeatureSection = () => {
  const features = [
    {
      title: "Your Branding",
      description: "Ensure your service stands out with a recognizable and unique identity.",
      imageSrc: "/api/placeholder/300/300",
    },
    {
      title: "Discount and Referral Programs",
      description: "Encourage word-of-mouth promotion by rewarding users for sharing your service.",
      imageSrc: "/Featuresdata/Discount.jpeg",
    },
    {
      title: "ASO and Marketing Services",
      description: "Drive app store downloads and convert them into active passengers.",
      imageSrc: "/Featuresdata/ASO.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-gray-300">
            How will Ride Click <span className="font-semibold text-black">get you</span>
          </h2>
          <h2 className="text-4xl font-semibold text-black">more passengers?</h2>
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

export default FeatureSection;