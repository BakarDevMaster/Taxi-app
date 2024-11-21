// components/DreamImage.tsx
import React from 'react';

const DreamImage: React.FC = () => {
  return (
    <div>
      <section className="relative max-w-6xl mx-auto bg-purple-900 mb-12 text-white py-12">
        {/* Heading Section */}
        <div className="text-center px-4 md:px-0 mb-8">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Get everything you’ve dreamed of for <br /> your ride-hailing business
          </h1>
          <p className="text-xl mt-4 max-w-lg mx-auto">
            It’s a demo version of the apps. Play around and test the features you can’t break anything.
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition">
            Try Onde for free
          </button>
        </div>
      </section>

      {/* Image Section */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full">
        <div className="h-24 bg-gray-300 rounded-lg mx-auto w-72 md:w-96" />
      </div>
    </div>
  );
};

export default DreamImage;
