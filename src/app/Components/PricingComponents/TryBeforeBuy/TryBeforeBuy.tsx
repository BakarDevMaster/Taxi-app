import React from 'react';

const TryBeforeBuy = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Hero image with circuit pattern and icon */}
        <div className="w-full max-w-2xl h-48 md:h-64 relative">
          <img 
            src="/api/placeholder/800/300"
            alt="Circuit board pattern with Onde icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description text */}
        <p className="text-gray-600 text-lg md:text-xl">
          Find answers to your questions about the Onde solution
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Try before you buy
        </h2>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-8 py-6  bg-green-500 text-white shadow-xl rounded-lg hover:bg-green-600 transition-colors font-medium">
            Try Onde for free
          </button>
          <button className="px-8 py-6 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-xl border border-gray-200">
            Book a Demo call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryBeforeBuy;