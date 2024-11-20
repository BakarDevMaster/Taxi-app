import React from 'react';
import Link from 'next/link';

interface PricingHeaderProps {
  title?: string;
  subtitle?: string;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({
  subtitle = "to find the optimal plan for you"
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
      Choose a plan for your  <br /> ride-hailing business
      </h1>
      <p className="text-lg md:text-lg text-gray-700">
        <Link 
          href="/contact" 
          className="text-emerald-500 hover:text-emerald-600 underline transition-colors duration-200"
        >
          Contact us
        </Link>
        {" "}
        {subtitle}
      </p>
    </div>
  );
};

export default PricingHeader;