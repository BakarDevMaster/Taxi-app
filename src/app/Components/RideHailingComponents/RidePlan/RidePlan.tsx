import React from "react";

const RidePlan: React.FC = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12">
      {/* Title Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Think <span className="text-purple-600">twice</span>,{" "}
          <span className="text-green-500">choose wisely</span>
        </h1>
        <p className="mt-6  text-gray-600">
          At Onde, we provide a high-quality solution for our international
          partners. Many of our partners have grown into companies with hundreds
          of thousands of monthly rides. They're now the leaders in their
          markets. That's how we know our technology is reliable and scalable.
          Though, have a look: here's how Onde's platform differs from other
          white-label taxi platforms.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-left font-semibold"></th>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-center font-semibold">
                Onde
              </th>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-center font-semibold">
                TaxiCaller™
              </th>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-center font-semibold">
                Atom Mobility™
              </th>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-center font-semibold">
                TaxiMobility™
              </th>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-center font-semibold">
                Jugnoo™
              </th>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-center font-semibold">
                Yelowsoft.com
              </th>
            </tr>
          </thead>
          <tbody>
            {/* First Row */}
            <tr>
              <td className="border border-gray-200 px-4 py-4 font-medium text-left">
                Positioning
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                A set of white-label apps required for ride-hailing businesses
                with the ability to connect a delivery app and on-demand
                services
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                Taxi dispatch system
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                Help to launch and scale vehicle-sharing and ride-hailing
                businesses
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                Car rental & booking software
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                No-code interfaces for on-demand transport apps
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                Operating system for taxi and delivery services
              </td>
            </tr>

            {/* Second Row */}
            <tr>
              <td className="border border-gray-200 px-4 py-4 font-medium text-left">
                Availability of free product version
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                ✅
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">❓</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">❓</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">❓</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">❓</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">❓</span>
              </td>
            </tr>
            {/* Third Row */}
            <tr>
              <td className="border border-gray-200 px-4 py-4 font-medium text-left">
                Customer and Driver apps (iOS & Android)
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                ✅
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">✅</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">✅</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">✅</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">✅</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span className="text-gray-500">✅</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-center mt-10 gap-4">
          {/* Button 1 */}
          <button className="px-6 py-4 text-white text-xl font-bold bg-green-500 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Try Onde for free
          </button>
          {/* Button 2 */}
          <button className="px-6 py-4 text-black text-xl font-bold bg-white border rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Book a Demo call
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePlan;
