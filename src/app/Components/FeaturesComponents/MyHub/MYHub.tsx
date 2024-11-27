import React from 'react';
import Image from 'next/image';

const MyHub = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className=" flex justify-between mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Identify Key Growth Areas{' '}
            
            <span className="text-[#E91E63] block mt-2"> My Hub Admin Panel</span>
          </h2>
          
          <div className="max-w-96">
            <p className="text-gray-800 text-lg mb-4">
            A robust admin panel to oversee drivers, operators, and services while analyzing performance to guide decisions.
            </p>
            {/* Green line below paragraph */}
            <div className="h-3 bg-[#E91E63] w-full"></div>
          </div>
        </div>

        {/* Single Image Container */}
        <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
          <Image 
            src="/api/placeholder/2400/1200"
            alt="Customer app showcase with interface and users"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>
      </div>
    </section>
  );
};

export default MyHub;