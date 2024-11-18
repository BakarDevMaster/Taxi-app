import type { FC } from 'react';

const WhiteLabel: FC = () => {
  return (
    <footer className="w-full py-24 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-5xl lg:text-6xl xl:text-8xl font-semibold mb-8">
          White label solution
        </h1>
        
        <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl font-semibold leading-normal lg:leading-normal xl:leading-tight">
          <span className="text-gray-400">for any on-demand service, whether it is a </span>
          <span className="text-indigo-600">taxi</span>
          <span className="text-gray-600">, </span>
          <span className="text-green-500">ride-hailing</span>
          <span className="text-gray-600">, </span>
          <span className="text-amber-500">healthcare services</span>
          <span className="text-gray-600">, </span>
          <span className="text-pink-500">ride booking</span>
          <span className="text-gray-600"> or even a </span>
          <span className="text-cyan-500">pet care</span>
        </p>
      </div>
    </footer>
  );
};

export default WhiteLabel;