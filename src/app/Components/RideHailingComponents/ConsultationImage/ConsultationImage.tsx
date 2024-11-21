import React from "react";
import Image from "next/image";

const ConsultationImage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-6xl bg-green-600 h-[84vh] flex flex-col md:flex-row items-center justify-center rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find a ride-hailing solution <br /> that is right for your business
          </h1>
          <ul className="space-y-4 text-lg text-white">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-white text-green-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                1
              </span>
              <p>Book a free consultation call</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-white text-green-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                2
              </span>
              <p>Discuss your current business status and goals</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-white text-green-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                3
              </span>
              <p>
                Consult our team to see if Onde platform fits your business
                needs. If not, we’ll recommend a different solution
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-white text-green-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                4
              </span>
              <p>Make an informed decision about your business</p>
            </li>
          </ul>
          <button className="mt-10 bg-white text-black py-4 px-6 rounded-lg text-xl font-bold hover:bg-gray-800">
            Request a free consultation
          </button>
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

export default ConsultationImage;
