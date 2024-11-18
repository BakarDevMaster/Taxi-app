import React from 'react';
import Image from 'next/image';

const TourPlateformorm: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-16 md:pt-24 px-4">
      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Heading with responsive size and proper spacing */}
        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight font-bold text-black mb-12">
          Take a tour of the
          <br />
          Onde platform
        </h1>

        {/* CTA Button */}
        <button className="bg-[#00EF70] hover:bg-[#00E676]/90 text-white text-2xl font-semibold px-8 py-6 rounded-md ">
          Get a 14-day free trial
        </button>

        {/* Image Container with proper aspect ratio */}
        <div className="relative w-full mt-16">
          {/* Placeholder for the actual image - you would replace this with your actual image */}
          <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto">
            <Image 
              src="/api/placeholder/1200/675"
              alt="Onde platform illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPlateformorm ;