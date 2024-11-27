'use client';
import React, { useState } from 'react';

const MigrationHeader = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      color: 'bg-emerald-500',
      number: '1',
      text: 'Schedule a personalized demo.',
      numberBg: 'bg-emerald-400',
    },
    {
      color: 'bg-purple-600',
      number: '2',
      text: 'Import driver data and earnings, and send invites to join the platform.',
      numberBg: 'bg-purple-500',
    },
    {
      color: 'bg-pink-500',
      number: '3',
      text: 'Launch Customer and Driver apps on the App Store and Google Play.',
      numberBg: 'bg-pink-400',
    },
    {
      color: 'bg-cyan-500',
      number: '4',
      text: 'Redirect your existing app users to the new platform.',
      numberBg: 'bg-cyan-400',
    },
    {
      color: 'bg-amber-500',
      number: '5',
      text: 'Start managing orders with Ride Click.',
      numberBg: 'bg-amber-400',
    },
  ];

  return (
    <section className="w-full mx-auto px-4 py-16 text-center">
      <div className="space-y-6">
        <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold">
        Migrate to Ride Click 
          <br />
          with Confidence
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
        Switching to Ride Click is a seamless process that ensures all your data, drivers, and passengers are transitioned smoothly.
        </p>

        <div className="flex flex-col px-16 md:flex-row gap-2 mt-8 h-[400px] md:h-[300px] transition-all duration-300">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-lg ${card.color} transition-all duration-500 ease-in-out overflow-hidden
                ${
                  hoveredIndex === index
                    ? 'md:w-[40%] h-[400px] md:h-full'
                    : 'md:w-[15%] h-[60px] md:h-full'
                }
                ${index === 0 && hoveredIndex === null ? 'md:w-[40%]' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute top-4 left-4 space-y-4">
                <div
                  className={`${card.numberBg} w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {card.number}
                </div>
                <div
                  className={`text-white text-left transition-opacity duration-300
                  ${
                    hoveredIndex === index || (index === 0 && hoveredIndex === null)
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold max-w-[300px] leading-tight">
                    {card.text}
                  </h3>
                </div>
              </div>

              <div
                className={`absolute bottom-8 left-8 transition-opacity duration-300
                ${
                  hoveredIndex === index || (index === 0 && hoveredIndex === null)
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Book a demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationHeader;
