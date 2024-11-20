import React from 'react';

interface Expert {
  title: string;
  description: string;
}

const ExpertsSection = () => {
  const experts: Expert[] = [
    {
      title: "Digital marketer",
      description: "Creates Google and Facebook ad campaigns that generate leads and installs like a well-oiled machine"
    },
    {
      title: "Brand manager",
      description: "Unlocks your brand's unique value and translates it into an inspiring creative idea for the ad campaigns"
    },
    {
      title: "Copywriter",
      description: "Creates ad copy that sells (and also gets stuck in your head like a catchy song)"
    },
    {
      title: "ASO manager",
      description: "Finds the best keywords for the app stores that get your apps to the top of search results. Follows the progress and tweaks keywords to give your apps the best possible ranking"
    },
    {
      title: "Digital designer",
      description: "Creates ad banners and videos that cut through the noise. Crafts persuasive visuals that make your brand shine and your app irresistible"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Our in-house experts
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert, index) => (
          <div 
            key={index}
            className={`${
              index >= 3 ? 'lg:col-span-1.5' : ''
            }`}
          >
            <div className="h-full p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-black">
                {expert.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {expert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;