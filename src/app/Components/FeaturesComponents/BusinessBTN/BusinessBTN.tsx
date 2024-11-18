import React from 'react';

interface CTAButtonProps {
  buttonText?: string;
  subtitleText?: string;
  onClick?: () => void;
}

const BusinessBTN: React.FC<CTAButtonProps> = ({
  buttonText = "Learn more about Super App",
  subtitleText = "",
  onClick
}) => {
  return (
    <div className="w-full py-8 px-2 flex flex-col items-center">
      <button
        onClick={onClick}
        className="bg-[#20f583] hover:bg-[#00EF70] text-white font-bold
                 px-8 py-6 rounded-lg shadow-lg  
                   text-lg sm:text-xl
                 w-full max-w-[360px]"
      >
        {buttonText}
      </button>
      <p className="text-gray-600 mt-3 text-xs sm:text-xs w-72 text-center">
        {subtitleText}
      </p>
    </div>
  );
};

export default BusinessBTN;