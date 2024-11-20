import React from 'react';

const PricingHero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
     

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 ">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-center text-[#808080] mb-16">
          Plans & Pricing
        </h1>

        {/* Devices Image */}
        <div className="relative max-w-[1000px] mx-auto">
          <div className="w-full aspect-[16/9] relative">
            <img
              src="/api/placeholder/1000/563"
              alt="Multiple device interfaces showing booking system and map views"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;