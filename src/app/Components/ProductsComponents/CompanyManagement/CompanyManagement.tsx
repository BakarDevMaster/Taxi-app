import React from 'react';
import Image from 'next/image';

const CompanyManagementSystem = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[95%] mx-auto h-full">
      <div className="bg-white p-8 flex-1">
        <h1 className="text-4xl font-semibold mb-4">Company management <br />system (My hub)</h1>
        <p className="mb-4 text-xl font-bold">Find growth points to scale.</p>
        <p className="mb-4">Take control of your business with a powerful Onde company management system.</p>
        <ul className="list-disc pl-4 mb-4">
          <li>Manage drivers and operators</li>
          <li>Choose billing plans</li>
          <li>Get business performance reports</li>
          <li>Make data-driven decisions with analytics</li>
          <li>Create discount and referral programs to increase user acquisition</li>
        </ul>
        <div className="flex justify-start space-x-8">
        <button className="bg-[#00EF70] text-white h-[50px] px-6 rounded-md">
              Try for free
            </button>
          <button className="bg-white shadow-md text-neutral-950 h-[50px] px-6 rounded-md border border-neutral-300">
              Learn more
            </button>
        </div>
      </div>
      <div className="bg-gray-200 flex-1 relative">
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/Productsdata/comp.jpeg"
            alt="Company management system placeholder"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyManagementSystem;
