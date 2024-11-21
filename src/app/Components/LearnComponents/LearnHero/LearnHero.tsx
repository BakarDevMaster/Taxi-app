import React from "react";
import Image from "next/image";

const LearnHero: React.FC = () => {
  return (
    <div className="flex mb-16 items-center justify-center px-4">
      <div className="w-full bg-[#E31A60] h-[60vh] flex flex-col md:flex-row items-center justify-center rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
           Learn
          </h1>
          <ul className="space-y-4 text-2xl font-bold text-white">
            <li className="flex items-start gap-3">
              
              <p>Guides, successful customer cases, and much more.</p>
            </li>
           
          </ul>
          
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 flex justify-center items-center relative">
          <div className="w-full max-w-xs">
            <div className="aspect-[9/19] rounded-xl h-[500px] w-96 overflow-hidden shadow-lg">
              {/* Replace with an actual image */}
              <Image
                src="/path/to/your-image.jpg" // Replace with the actual image path
                alt="Consultation"
               height={48}
               width={96}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnHero;
