import React from 'react';
import Image from 'next/image';

const WebAppImge = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-[#FFB70B] to-[#d4980c] overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Web app <span className='text-2xl font-semibold'>for hotels, restaurants, bars and receptions</span>
            </h1>
        
        
            {/* Description */}
            <p className="text-white/90 text-lg max-w-lg leading-relaxed mb-8">
            Finding a good business partner is very important, and we will keep your partnership safe and sound with our Web app.
            Create permanent address and custom POI (point of interest) name, manage your business on tablet, desktop and mobile. You can offer not only instant orders but also pre-booking to provide services whenever clients need it. One click is enough to book your service.
            </p>
            
          
            
            {/* Try for free button */}
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Try for free
            </button>
          </div>
          
          {/* Right Content - Phone Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 max-w-sm mx-auto">
            <div className="relative w-full aspect-[400/800]">
              <Image
                src="/api/placeholder/400/800"
                alt="Mobile app interface"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-contain transform rotate-12 lg:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppImge;