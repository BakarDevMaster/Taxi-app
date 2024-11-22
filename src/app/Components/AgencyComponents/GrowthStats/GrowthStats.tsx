import React from 'react';

interface GrowthStatsProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const GrowthStats: React.FC<GrowthStatsProps> = ({
  subtitle = "Trust data, not words.",
  description = "We report on every single cent spent, each ad impression, and every app install. Our reports are detailed and visual."
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">You&apos;ll love</span>
            <span className="block">seeing your</span>
            <span className="text-[#00B354]">numbers grow</span>
          </h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{subtitle}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/api/placeholder/600/600" 
            alt="Growth statistics visualization" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GrowthStats;