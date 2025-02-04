import React from "react";
import Image from "next/image";

const DriverImage: React.FC = () => {
  return (
    <div id="webcrumbs"> 
      <div className="bg-white rounded-lg  p-10 flex gap-6 h-full">
        
        {/* Left Section */}
        <div className="flex flex-col ml-10 gap-6 w-[550px]">
          <h1 className="text-4xl font-semibold text-neutral-950">Driver app</h1>
          <p className="text-black text-xl font-semibold">Get more loyal drivers.</p>
          <p className="text-black">
            Launch iOS and Android Driver apps with your branding to make sure your drivers have 
            everything to get the job done.
          </p>
          <ul className="list-disc pl-6 text-black">
            <li>Easy online registration</li>
            <li>Obvious workflow</li>
            <li>Intelligent algorithm to assign orders</li>
            <li>All payment options</li>
            <li>Automated driver billing</li>
            <li>Passenger ratings</li>
            <li>In-app chat</li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-[#00EF70] text-white h-[50px] px-6 rounded-md">
              Try for free
            </button>
            <button className="bg-white shadow-md text-neutral-950 h-[50px] px-6 rounded-md border border-neutral-300">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1">
          <div className="relative w-full h-full min-h-[400px]"> 
            <Image
              src="/Productsdata/Driverimage.jpeg"
              alt="Mobile app"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>

      </div> 
    </div>
  );
};

export default DriverImage;
