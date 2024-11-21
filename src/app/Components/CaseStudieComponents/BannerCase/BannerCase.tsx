// components/BannerStudie.tsx
import React from 'react';

const BannerStudie: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-200 p-4">
      <h1 className="text-5xl font-bold text-center mb-4">More than 200 applications</h1>
      <p className="text-center text-lg font-bold mb-6">
        in more than 60 countries scale their business with Onde <br /> solution. Our main goal is to provide a great product and <br />we believe that local companies can provide better <br /> service to locals than overseas giants.
      </p>
      <button className="bg-black text-white py-6 px-8 rounded shadow-2xl font-bold text-xl">
        Schedule a call
      </button>
    </div>
  );
};

export default BannerStudie;
