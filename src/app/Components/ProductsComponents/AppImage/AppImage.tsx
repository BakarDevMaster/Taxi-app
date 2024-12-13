import React from "react";
import Image from "next/image";

const  AppImage: React.FC = () => {
  return (
    <div id="webcrumbs"> 
      <div className="bg-white rounded-lg  p-10 flex gap-6 h-full">
        
        {/* Left Section */}
        <div className="flex flex-col ml-10 gap-6 w-[550px]">
          <h1 className="text-4xl font-semibold text-neutral-950">Customer app</h1>
          <p className="text-black text-xl font-semibold">Grow user base.</p>
          <p className="text-black">
          Launch iOS and Android Customer apps with your branding to attract and retain passengers.
          </p>
          <ul className="list-disc pl-6 text-black">
            <li>Intuitive, easy-to-use design</li>
            <li>Any language, any location</li>
            <li>Simple ordering process</li>
            <li>In-app chat</li>
            <li>App stability in any condition</li>
            <li>Maintained and updated every month</li>
            <li>All payment options: cash, card, terminal, 10+ payment gateways</li>
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
              src="/Productsdata/customerimage.jpeg"
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

export default AppImage;
