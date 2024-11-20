import React from 'react';
import Image from 'next/image';

const BrickImage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white px-4 md:px-8 lg:px-16 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Text Container */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block mb-2">Follow</span>
            <span className="block mb-2">the Brick Road</span>
            <span className="block text-emerald-500">to Success</span>
          </h1>
        </div>
        
        {/* Car Image Container */}
        <div className="relative mt-8 md:mt-0 md:absolute md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 aspect-[16/9]">
          <div className="w-full h-full relative">
            <Image
              src="/api/placeholder/800/450"
              alt="Modern car illustration"
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

export default BrickImage;