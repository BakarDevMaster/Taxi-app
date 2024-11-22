import React from 'react';

const MarketingTrustSection = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto min-h-screen bg-white">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <div className="sticky top-0 pt-4 pb-6 bg-white z-10">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Why should you{' '}
            <span className="text-emerald-500">trust us</span> with your
            marketing?
          </h1>
        </div>
        
        <div className="overflow-y-auto scrollbar-hide max-h-[calc(100vh-180px)]">
          {/* Anti-agency concept */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Anti-agency concept
            </h2>
            <p className="text-gray-600 mb-4">
              We have a revenue-sharing business model, which means we profit when our partners are successful.
            </p>
            <p className="text-gray-600">
              We earn from your long-term profitability, not from a one-time marketing service. We focus on attracting more passengers for your app while maintaining sustainable growth.
            </p>
          </div>

          {/* Niche expertise */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Niche ride-hailing expertise
            </h2>
            <p className="text-gray-600 mb-4">
              We've worked in the ride-hailing industry for more than a decade. We know it inside out, and we're happy to share this knowledge.
            </p>
            <p className="text-gray-600">
              We measure performance thoroughly. Every campaign and every event is tracked with product analytics tools.
            </p>
          </div>

          {/* Digital expertise */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Strong digital expertise
            </h2>
            <p className="text-gray-600 mb-4">
              We keep in touch with you and your team during all marketing activities, give tips on how to perform better, and warn about red flags.
            </p>
            <p className="text-gray-600">
              Our digital marketers find leads for Onde and convert them to become our loyal customers. More than 250 companies use the Onde platform worldwide.
            </p>
            <p className="text-gray-600">
              These same people will work hard to promote your apps, attract drivers, persuade passengers, and make your brand a legend in your geographical area.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <img 
            src="/api/placeholder/400/800" 
            alt="Marketing Visual" 
            className="h-auto max-h-[90vh] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingTrustSection;