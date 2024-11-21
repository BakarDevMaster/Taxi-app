'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

const SetApart = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Scale your business indefinitely",
      answer: "Handling 2 million orders daily with 99% uptime, our solution has no daily limits, unlike others capped at 10,000 trips."
    },
    {
      question: "Get your apps to the top of app stores",
      answer: "Every Onde plan includes an App Store Optimization starter pack, plus access to our marketing experts for advanced ASO, ad creation, targeting, SMM, and more."
    },
    {
      question: "Get updates every month for free",
      answer: "Onde continuously enhances and updates features monthly to rival industry giants, offering unlimited payment gateways and local customizations. Every new feature is yours for free, forever. "
    },
    {
      question: "Experience superior customer support",
      answer: "You’ll never be left alone with Onde apps. You're always supported by a dedicated team ready to tackle any issues or questions—a rarity in the ride-hailing tech industry!You’ll never be left alone with Onde apps. You're always supported by a dedicated team ready to tackle any issues or questions—a rarity in the ride-hailing tech industry!"
    },
    {
      question: "Benefit from our expertise",
      answer: "With 13 years in ride-hailing, Onde brings a wealth of success-driven insights and best practices. Our platform comes with a commitment to your goals, offering dedicated support and expert guidance as if your business were our own."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Title section - takes 5 columns on large screens */}
        <div className="lg:col-span-5">
          <h1 className="text-5xl font-bold lg:sticky lg:top-24">
          What sets Onde apart 
          </h1>
          <div className='bg-red-600 h-60 mt-16'>
          <Image src={''} alt='' height={48} width={24}/>
          </div>     
        </div>

        {/* FAQ section - takes 7 columns on large screens */}
        <div className="mt-8 lg:mt-0 lg:col-span-7">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-4 text-left group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-xl font-bold pr-8">{item.question}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="pb-4 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetApart;