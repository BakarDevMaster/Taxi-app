// MarketingCTA.tsx
'use client';

import React from 'react';

interface MarketingCTAProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const MarketingCTA: React.FC<MarketingCTAProps> = ({
  title = "Join forces with the\nOnde marketing team!",
  buttonText = "Promote my app",
  onButtonClick = () => {},
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 whitespace-pre-line leading-tight">
          {title}
        </h1>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-6 rounded-lg text-lg md:text-xl transition-colors duration-200 mb-12"
        >
          {buttonText}
        </button>

        {/* Placeholder for the airplane with graph image */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="aspect-[2/1] w-full">
            <img
              src="/api/placeholder/800/400"
              alt="Growth visualization"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCTA;