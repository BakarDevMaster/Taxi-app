// components/PricingHero.jsx

import React from 'react';
import Image from 'next/image';

const PricingHero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-center text-[#808080] mb-16">
          Plans & Pricing
        </h1>

        {/* Devices Image */}
        <div className="relative max-w-[1300px] mx-auto">
          <div className="w-full aspect-[16/7] relative">
            <Image
              src="/Pricingdata/prihome.jpeg"
              alt="Multiple device interfaces showing booking system and map views"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
