import React from "react";




const BusinessScale = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-[500px,1fr] gap-8">
        {/* Sticky left section */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Onde is a set of white-label apps that{" "}
            <span className="text-[#00B354]">
              helps your <br />
              business
            </span>{" "}
            scale and become <br /> a market leader
          </h2>
          <p className="text-[black] text-md  my-4">
            Use Onde to enter the ride-hailing market with a reliable,
            ready-to-brand platform that minimizes upfront costs and technical
            challenges, empowering you to focus on growing your taxi business.
          </p>
          <button className="bg-[#00EF70] text-white text-xl px-8 py-6 rounded-lg hover:bg-emerald-600 font-bold transition-colors">
            Try Onde for free
          </button>
          <p className="text-xs mt-2">
            It’s a demo version of the apps <br />
            Play around and test the features: you can’t break anything
          </p>
        </div>

        {/* Scrollable testimonials section */}
        <div className="space-y-12">
          <div className="bg-purple-600 text-white p-6  h-52 flex flex-col sm:flex-row items-center gap-8 max-w-5xl  shadow-lg">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">2 million</h1>
              <p className="text-lg">processed orders daily</p>
            </div>
           
          </div>
          <div className="bg-purple-600 text-white p-6  h-52 flex flex-col sm:flex-row items-center gap-8 max-w-5xl  shadow-lg">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">99,98%</h1>
              <p className="text-lg">system uptime</p>
            </div>
           
          </div>
          <div className="bg-purple-600 text-white p-6  h-52 flex flex-col sm:flex-row items-center gap-8 max-w-5xl  shadow-lg">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">400+</h1>
              <p className="text-lg">companies powered by Onde</p>
            </div>
           
          </div>
          <div className="bg-purple-600 text-white p-6  h-52 flex flex-col sm:flex-row items-center gap-8 max-w-5xl  shadow-lg">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">20+</h1>
              <p className="text-lg">market leader partners</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessScale;
