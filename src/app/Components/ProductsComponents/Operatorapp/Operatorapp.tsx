// components/Operatorapp.tsx
import React from 'react';

const Operatorapp: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-[#454444]">
      {/* Background Image with blur effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-blur-[5px]" style={{ backgroundImage: 'url(/placeholder.jpg)' }}></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-white px-6 md:px-12">
        <div className="max-w-screen-xl w-full flex justify-center items-center">
          {/* Main Content Section */}
          <div >
          <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Operator app
              </h1>
          </div>
         
            {/* Left Section (Text and Heading) */}
            <div className="w-full md:w-[75%]  mb-8 flex space-x-10 md:mb-0 pr-4">
              
              <p className="text-lg md:text-xl mb-6">
              Functional and intuitive interface of the system helps operators to provide a quicker more efficient service by collecting all orders on one dashboard, listed and sorted by relevancy.
              </p>
              <p className="text-lg md:text-xl mb-6">
              Address search works like a swiss clock — we spend a lot of effort to make it effective and easy-to-use. Worldwide geo-coding is only available in our taxi software.
              </p>
            </div>
            
            {/* Right Section (Text, Button, and Referral Text) */}
            <div className="w-full md:w-1/2 ">
             
              <button className="bg-white hover:bg-blue-700 text-black py-3 px-6 rounded-lg text-lg mb-4">
                Try for free
              </button>
              <p className="text-sm md:text-base">
              All the information needed about the order: from order history to specific notes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operatorapp;
