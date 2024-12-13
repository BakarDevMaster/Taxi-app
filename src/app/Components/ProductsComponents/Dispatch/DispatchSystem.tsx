import React from "react";
import Image from "next/image";

const DispatchSystem: React.FC = () => {
  return (
    <div id="webcrumbs"> 
      <div className="bg-white rounded-lg  p-10 flex gap-6 h-full">
        
        {/* Left Section */}
        <div className="flex flex-col ml-10 gap-6 w-[550px]">
          <h1 className="text-4xl font-semibold text-neutral-950">Dispatch system (Operator app)</h1>
          <p className="text-black text-xl font-semibold">Simplify order management.</p>
          <p className="text-black">
          Let operators provide a quicker and more efficient service by collecting all orders on one dashboard, listed and sorted by relevancy.
          </p>
          <ul className="list-disc pl-6 text-black">
            <li>Keep track of drivers activities and availability</li>
            <li>Find any order in seconds</li>
            <li>Enjoy efficient address search and world geocoding</li>
            <li>Track all order events and details</li>
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
              src="/Productsdata/dispatch.jpeg"
              alt="operator app"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>

      </div> 
    </div>
  );
};

export default DispatchSystem;
