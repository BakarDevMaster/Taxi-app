import React from 'react';
import Image from 'next/image';

const RideHailingHero: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-4 px-4">
      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Heading with responsive size and proper spacing */}
        <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] leading-tight font-bold text-black mb-6">
        Choose <span className='text-[#00B354]'> the best</span>
          <br />
         <span className='text-[#00B354]'>ride-hailing platform</span> 
        </h1>

        {/* CTA Button */}
        <p className=" text-black text-base  px-8 py-2 ">
        Look through the list of the top ride-hailing platforms and white-label taxi apps to launch or scale <br /> your business. Choose the one that meets your needs best
        </p>

        {/* Image Container with proper aspect ratio */}
        <div className="relative w-full mt-8">
          {/* Placeholder for the actual image - you would replace this with your actual image */}
          <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto">
            <Image 
              src="/api/placeholder/400/300"
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

export default RideHailingHero;