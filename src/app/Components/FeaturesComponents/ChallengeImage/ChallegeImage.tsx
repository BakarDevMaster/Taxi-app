import React from 'react';

const ChallengeImage = () => {
  return (
    <div 
      className="relative min-h-[500px] w-full bg-purple-700 bg-[url('/challenge-bg.png')] bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          We challenge you to find a better offer
        </h1>
        <p className="text-lg md:text-xl text-purple-100 mb-8">
          List of features available for every plan
        </p>
        <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
          Download
        </button>
      </div>
    </div>
  );
};

export default ChallengeImage;