import React from 'react';

const Navigationmenus: React.FC = () => {
 

  return (
    <div className="container mx-auto mt-10 mb-10">
  {" "}
  <div className="flex justify-center space-x-4">
    {" "}
    <a href="#" className="text-black font-semibold border-b-2 border-black">
      All regions
    </a>{" "}
    <a href="#" className="text-gray-500">
      Africa
    </a>{" "}
    <a href="#" className="text-gray-500">
      Americas
    </a>{" "}
    <a href="#" className="text-gray-500">
      Asia
    </a>{" "}
    <a href="#" className="text-gray-500">
      Australia and Oceania
    </a>{" "}
    <a href="#" className="text-gray-500">
      Europe
    </a>{" "}
    <a href="#" className="text-gray-500">
      Middle East
    </a>{" "}
  </div>{" "}
  <div className="flex justify-center mt-4 space-x-4">
    {" "}
    <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded">
      All types
    </button>{" "}
    <button className="text-gray-500">Female driver</button>{" "}
    <button className="text-gray-500">On-demand</button>{" "}
    <button className="text-gray-500">Ride-hailing</button>{" "}
    <button className="text-gray-500">Software</button>{" "}
    <button className="text-gray-500">Taxi</button>{" "}
  </div>{" "}
</div>

  );
};

export default Navigationmenus;
