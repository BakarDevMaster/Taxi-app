'use client'
import React from "react";

const CaseStudies: React.FC = () => {
  const images = [
    { id: 1, src: "/image1.jpg", alt: "Case Study 1", logo: "Pink Taxi" },
    { id: 2, src: "/image2.jpg", alt: "Case Study 2", logo: "Almeny" },
    { id: 3, src: "/image3.jpg", alt: "Case Study 3", logo: "Company Logo" },
    // Add more images as needed
  ];

  return (
    <section className="bg-white py-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">Check Case studies</h2>
        <p className="text-gray-600 mt-2">
          Discover how taxi companies worldwide compete with <br /> Uber, Bolt, and
          other industry giants with Onde's solution under the hood.
        </p>
      </div>

      {/* Horizontal Scrollable Image Carousel */}
      <div className="overflow-x-scroll whitespace-nowrap px-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="inline-block w-72 mx-2 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            <div className="bg-white text-black font-semibold text-center py-2">
              {image.logo}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-10 gap-4">
        <button className="px-8 py-6 shadow-2xl text-black text-xl font-bold bg-white border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Show all case studies
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
