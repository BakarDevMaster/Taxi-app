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
      title: "Simple and User-Friendly Design",
      description: "Includes multiple drop-offs, favorite addresses, and in-app chat for smooth interaction.",
      imageSrc: "/Featuresdata/loc.jpeg",
    },
    {
      title: "Flexible Booking Options",
      description: "Instant orders, pre-orders, and bookings for corporate clients made easy.",
      imageSrc: "/Featuresdata/preorder.jpeg",
    },
    {
      title: "Comprehensive Safety Measures",
      description: "Real-time tracking, shareable ride details, and an SOS button for added peace of mind.",
      imageSrc: "/Featuresdata/safety.jpeg",
    },
    {
      title: "Multiple Payment Methods",
      description: "Supports cash, credit/debit cards, and local payment gateways for convenience.",
      imageSrc: "/Featuresdata/payment.jpeg",
    },
    {
      title: "High Reliability",
      description: " With 99.8% uptime, the app works seamlessly during rush hours or high demand.",
      imageSrc: "/Featuresdata/rel.jpeg",
    },
    {
      title: "Frequent Updates",
      description: "Regular app updates for a better user experience at no additional cost.",
      imageSrc: "/Featuresdata/update.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-gray-300">
            How will Ride Click <span className="font-semibold text-black">help retain
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