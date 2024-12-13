import React from 'react';
import Image from 'next/image';

const WebBooking = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[95%] mx-auto h-full">
      <div className="bg-white p-8 flex-1">
        <h1 className="text-4xl font-semibold mb-4">Web booking app</h1>
        <p className="mb-4 text-xl font-bold">Expand customer base.<br/>For hotels, restaurants, bars and receptions.
</p>
        <p className="mb-4">Partner with other businesses and get the most out of these partnerships with Web app.</p>
        <ul className="list-disc pl-4 mb-4">
          <li>Manage your business on tablet, desktop, and mobile</li>
          <li>Allow to order a service with one click</li>
          <li>Offer both instant orders and pre-orders</li>
        
          <li>Make your services available to Huawei, Windows Phone, and laptop users</li>
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
            src="/Productsdata/webbooking.jpeg"
            alt="webapp"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WebBooking;
