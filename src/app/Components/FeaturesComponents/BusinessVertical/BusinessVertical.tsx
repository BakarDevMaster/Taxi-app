import React from 'react';
import Image from 'next/image';

const BusinessVerticals = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className=" flex justify-between mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Launch <span className='text-[#FF5544]'>new business</span> {' '}
            
            <span className="text-[#FF5544] block">verticals</span>
          </h2>
          
          <div className="max-w-96">
            <p className="text-gray-800 text-lg mb-4">
            Use Onde to add delivery or courier services to your taxi services and turn your app into Super App.
            </p>
            {/* Green line below paragraph */}
            <div className="h-3 bg-[#FF5544] w-full"></div>
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

export default BusinessVerticals;