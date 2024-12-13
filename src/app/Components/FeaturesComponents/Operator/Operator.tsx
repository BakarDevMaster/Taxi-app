import React from 'react';
import Image from 'next/image';

const Operator = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-0">
            Simplify Order{' '}
            <span className="text-[#FFB300] block">Management</span>
          </h2>
          
          <div className="max-w-md">
            <p className="text-gray-800 text-lg mb-4">
              Streamline incoming orders and distribute them efficiently among drivers with the taxi dispatch system.
            </p>
            {/* Green line below paragraph */}
            <div className="h-3 bg-[#FFB300] w-full"></div>
          </div>
        </div>

        {/* Single Image Container */}
        <div className="relative w-[90%] md:w-[90%] lg:w-[90%] aspect-[4/2] rounded-lg overflow-hidden mx-auto">
          <Image 
            src="/Featuresdata/operator.jpeg"
            alt="Customer app showcase with interface and users"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1536px) 80vw, 1536px"
          />
        </div>
      </div>
    </section>
  );
};

export default Operator;
