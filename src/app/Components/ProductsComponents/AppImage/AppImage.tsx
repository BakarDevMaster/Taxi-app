import React from 'react';
import Image from 'next/image';

const AppImage = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-emerald-500 to-emerald-400 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Customer app
            </h1>
              {/* Store Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
              {/* App Store Button */}
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              {/* Google Play Button */}
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5l11.72 10-11.72 10c-.83 0-1.5-.67-1.5-1.5zm15.77-8.5l-2.87 2.44 2.87 2.44 2.23-1.89c.37-.31.37-.87 0-1.18l-2.23-1.81zm-13.27-7.5l10.27 8.73-10.27 8.73v-17.46z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
            {/* Subtitle */}
            <p className="text-xl text-white font-medium mb-4">
              App Store and Google Play booking apps.
              <br />
              Immediately available for locals and tourists.
            </p>
            
            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-8">
            Ride Click&apos;s taxi booking app is designed for ease of use, allowing customers to book a ride in just a few simple steps. The app&apos;s straightforward interface makes it easy for users to request a ride, helping you retain customers with every booking.
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

export default AppImage;