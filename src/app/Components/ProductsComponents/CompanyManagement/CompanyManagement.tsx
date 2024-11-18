// components/CompanyManagementSystem.tsx
import React from 'react';

const CompanyManagementSystem: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-purple-500">
      {/* Background Image with blur effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-blur-[5px]" style={{ backgroundImage: 'url(/placeholder.jpg)' }}></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-white px-6 md:px-12">
        <div className="max-w-screen-xl w-full flex justify-center items-center">
          {/* Main Content Section */}
          <div >
          <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Company management system
              </h1>
          </div>
         
            {/* Left Section (Text and Heading) */}
            <div className="w-full md:w-[75%]  mb-8 flex space-x-10 md:mb-0 pr-4">
              
              <p className="text-lg md:text-xl mb-6">
                Operate your business smoothly with a powerful Onde company management system. Manage drivers and operators, choose the right billing plan and get all reports 24/7 straight to your computer.
              </p>
              <p className="text-lg md:text-xl mb-6">
                With powerful analytics, you can make data-driven decisions and make your business as efficient as possible. User-friendly design makes the panel really joyful to use.
              </p>
            </div>
            
            {/* Right Section (Text, Button, and Referral Text) */}
            <div className="w-full md:w-1/2 ">
             
              <button className="bg-white hover:bg-blue-700 text-black py-3 px-6 rounded-lg text-lg mb-4">
                Try for free
              </button>
              <p className="text-sm md:text-base">
                Create referral programs to increase user acquisition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyManagementSystem;
