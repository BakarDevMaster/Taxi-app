import React from 'react';
import Image from 'next/image';

const AppTreatmentSection = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Main Content */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          We treat your apps
          <br />
          <span className="text-emerald-500">like our own</span>
        </h2>
        <div className="space-y-2">
          <p className="text-gray-700 text-lg">Your results are our results.</p>
          <p className="text-gray-700 text-lg">This is how you know we&apos;ll strive for the best.</p>
        </div>
      </div>



      {/* Bottom Illustration */}
      <div className="flex justify-center px-4 md:px-0">
        <Image
          src="/api/placeholder/800/400"
          width={800}
          height={400}
          alt="Cars illustration with orbital path"
          className="w-full max-w-[800px] h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default AppTreatmentSection;