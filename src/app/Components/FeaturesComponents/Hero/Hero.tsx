'use client';

import React, { useState } from 'react';

// Define prop types for the ChallengeRow component
interface ChallengeRowProps {
  text: string;
  color: string;
}

const ChallengeRow: React.FC<ChallengeRowProps> = ({ text, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-2">
        <span className={`text-lg font-semibold ${isHovered ? `${color.replace('bg-', 'text-')}` : 'text-black'}`}>
          {text}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-180' : 'rotate-0'} ${isHovered ? `${color.replace('bg-', 'text-')}` : 'text-gray-400'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      {/* Line below text */}
      <div
        className={`w-full h-0.5 mt-2 transition-all duration-300 ease-in-out ${isHovered ? `${color}` : 'bg-gray-300'}`}
      />
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="mx-auto pt-4 px-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-[80px] font-bold">
        Simplify Your Taxi 
          <br />
          Operations with Ride Click
        </h1>
        <p className="text-lg  mx-auto text-gray-600">
        We make running your ride-hailing business easier by automating operations 

          <br />
          and providing practical solutions to improve efficiency, keep your users engaged, and help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-3 text-black gap-8 mt-16">
        <ChallengeRow text="Grow user base" color="bg-emerald-500" />
        <ChallengeRow text="Get more loyal drivers" color="bg-purple-500" />
        <ChallengeRow text="Simplify order management" color="bg-yellow-500" />
      </div>

      <div className="grid grid-cols-3 text-black gap-8">
        <ChallengeRow text="Find growth points to scale" color="bg-pink-500" />
        <ChallengeRow text="Expand customer base" color="bg-sky-500" />
        <ChallengeRow text="Launch new business verticals" color="bg-red-500" />
      </div>
    </div>
  );
};

export default Hero;
