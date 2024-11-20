import React from 'react';

const PricingStates = () => {
  const stats = [
    {
      number: '2',
      suffix: 'million',
      description: 'processed orders daily',
      barColor: 'bg-green-500'
    },
    {
      number: '99,98',
      suffix: '%',
      description: 'system uptime',
      barColor: 'bg-purple-500'
    },
    {
      number: '400',
      suffix: '+',
      description: 'companies powered by Onde',
      barColor: 'bg-pink-500'
    },
    {
      number: '20',
      suffix: '+',
      description: 'market leader partners',
      barColor: 'bg-yellow-500'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline">
              <span>{stat.number}</span>
              <span className="text-gray-400 ml-1">{stat.suffix}</span>
            </div>
            <div className="text-sm md:text-base text-gray-600 mb-3">
              {stat.description}
            </div>
            <div className={`h-3 w-full ${stat.barColor}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingStates;