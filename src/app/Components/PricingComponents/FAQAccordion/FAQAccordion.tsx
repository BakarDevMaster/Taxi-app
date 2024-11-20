'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "I don't have the budget to purchase a ride-hailing platform, do you have any options for me?",
      answer: "Yes, try Onde Light is a taxi platform that requires no initial payment or set-up fee. Onde Light allows you to use your branding for panels and apps to promote your brand and grow before investing."
    },
    {
      question: "What is the pricing model of the Onde solution? Are there any additional or hidden fees?",
      answer: "Onde’s pricing model consists of a one-time fee, followed by a monthly percentage revenue share. There are no fleet size limits, and feature updates are included in the package. There are no hidden fees, however, you may choose additional services for additional fees. To find out more, please contact our business development team."
    },
    {
      question: "What type of license is provided with the purchase?",
      answer: "The purchase provides a revocable, non-exclusive, assignable, worldwide, sub-licensable, and non-compensated license regarding the Partner's Data to Onde for the Service’s functioning. You can find more information here: https://onde.app/onde-terms-and-conditions "
    },
    {
      question: "Do you have fleet size or limitations for the number of orders or drivers?",
      answer: "No, we don't have any limitations. Our pricing model includes a one-time fee followed by a monthly percentage revenue share, with no fleet size limits or restrictions on the number of orders."
    },
    {
      question: "Is Onde's pricing model flexible?",
      answer: "Yes, Onde's pricing model is flexible. Talk to us about it."
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
            Frequently asked questions about pricing
          </h1>
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

export default FAQAccordion;