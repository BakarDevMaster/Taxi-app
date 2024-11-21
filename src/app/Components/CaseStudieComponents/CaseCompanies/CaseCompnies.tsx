// components/CaseCompanies.tsx
import React from 'react';

const CaseCompanies: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-200 p-4">
      <h1 className="text-6xl font-bold text-center mb-4">See why 200+ <br />
      companies</h1>
      <p className="text-center text-lg font-bold mb-6">
        choose Onde for business
      </p>
      <button className="bg-black text-white py-6 px-8 rounded shadow-2xl font-bold text-xl">
        Try for free
      </button>
    </div>
  );
};

export default CaseCompanies;
