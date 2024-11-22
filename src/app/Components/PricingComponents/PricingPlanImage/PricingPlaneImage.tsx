import React from 'react';

const PricingPlaneSection = () => {
  return (
    <div className="mx-[100px] my-8">
      <div className="relative min-h-[500px] w-full bg-purple-700 overflow-hidden">
        {/* Background placeholder image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800">
          {/* Decorative element placeholders */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
            {/* Placeholder for the car and robot graphics */}
            <div className="w-full h-full bg-purple-600/20 backdrop-blur-sm" />
          </div>
        </div>

        {/* Content container */}
        <div className="relative">
          <div className="ml-16 py-16 md:py-24">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Need a custom <br /> plan?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-thin mb-12 max-w-2xl">
                Share your goals and challenges with us, and we&apos;ll create <br /> a custom plan tailored to your needs.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xl lg:text-2xl font-semibold px-12 py-7 rounded-lg transition-colors duration-200">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlaneSection;