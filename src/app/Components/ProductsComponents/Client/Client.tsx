import React from 'react';
import Image from 'next/image';

const Client = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-16 pt-16 pb-32">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl  font-semibold text-gray-900 leading-tight">
            Request an access to millions of clients and smartphones users
          </h1>
        </div>
        
        {/* CTA Button */}
        <div className="flex-shrink-0">
          <button className="bg-purple-600 text-white px-10 py-6 rounded-lg text-2xl font-semibold hover:bg-purple-700 transition-colors">
            Start free trial
          </button>
        </div>
      </div>

      {/* Illustration Container */}
      <div className="absolute bottom-0 px-16 left-0 right-0 w-full h-48">
        <div className="relative w-full h-full">
          <Image
            src="/api/placeholder/1200/200"
            alt="Bridge illustration with vehicle"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Client;