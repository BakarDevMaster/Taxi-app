import React from 'react';
import Image from 'next/image';

const ASOMarketingSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Mockups */}
        <div className="grid grid-cols-12 gap-8 ">
          {/* Left Content */}
          <div className="col-span-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              App Store Optimization (ASO)
            </h1>
            <p className="text-gray-600 mb-6">
              High search results are essential for your app to succeed. Apps with higher ASO are more visible and get more installs.
            </p>
            <p className="text-gray-600">
              We find and test keywords that gain as many free installs as possible, and fine keywords according to changes in the app store ranking algorithms.
            </p>
          </div>
          
          {/* Right Image Mockups */}
          <div className="col-span-8 relative h-[500px]">
            <div className="relative h-full w-full">
              <Image
                src="/api/placeholder/800/500"
                alt="App store mockups"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Marketing Services Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Apple Search Ads */}
          <div className="col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Apple Search Ads
            </h2>
            <p className="text-gray-600">
              We use Apple Search Ads to make your ad look just like an app preview show up in the app store search results.
            </p>
            <p className="text-gray-600 mt-4">
              This is a great way to get noticed by people who search for fast service in the App Store. And they are very likely to convert into customers.
            </p>
          </div>

          {/* Google App Campaigns */}
          <div className="col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Google App Campaigns
            </h2>
            <p className="text-gray-600">
              Billions of people can see your ads on Google platforms.
            </p>
            <p className="text-gray-600 mt-4">
              We create campaigns for Google Search, YouTube, Gmail, Google Play, other news sites, blogs and other websites on the internet.
            </p>
          </div>

          {/* Facebook Ads */}
          <div className="col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Facebook Ads
            </h2>
            <p className="text-gray-600">
              More than 2 billion people use Facebook daily. Facebook ads can bring any number of customers in a short time.
            </p>
            <p className="text-gray-600 mt-4">
              We analyze your existing data and show your banners and video to people who are similar to them. These users are more likely to convert into customers.
            </p>
          </div>
        </div>

        {/* Bottom App Showcase Section */}
        <div className="grid grid-cols-12 gap-8 mt-24">
          {/* Left App Screenshots */}
          <div className="col-span-8">
            <div className="grid grid-cols-8 gap-8">
              
                <Image
                  src="/api/placeholder/400/800"
                  alt="App showcase left"
                  fill
                  className="object-contain"
                />
            
           
            </div>
          </div>

          {/* Right Complex Solution */}
          <div className="col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Complex solution to skyrocketing your app
            </h2>
            <p className="text-gray-600">
              We combine ASO + Paid ads to boost each other and create a world of app installs. The more paid installs you get, the more organic installs you get, all because the general app store algorithms are already tuned by users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASOMarketingSection;