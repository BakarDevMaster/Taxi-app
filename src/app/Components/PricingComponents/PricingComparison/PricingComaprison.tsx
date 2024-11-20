// types.ts
type PlanFeature = {
    name: string;
    includedIn: {
      startingUp: boolean;
      professional: boolean;
      expert: boolean;
      superApp: boolean;
    };
  };
  
  type OptionalFeature = {
    name: string;
    price: number;
  };
  
  type Plan = {
    name: string;
    monthlyFee: number;
    features: PlanFeature[];
    optionalFeatures: OptionalFeature[];
    revenueShareFee: string;
    delivery?: boolean;
  };
  
  // PricingComparison.tsx
  import React from 'react';
  import { CheckCircle2, XCircle } from 'lucide-react';
  
  const features: PlanFeature[] = [
    {
      name: "iOS & Android Customer and Driver apps",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Web app for customers",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Your branding",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Operator app/Dispatch system",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Internal analytics and reports",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Google Analytics + Firebase",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "AppsFlyer Integration",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: false
      }
    },
    {
      name: "Free app updates",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Any language, any location",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Dedicated account manager",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "24/7 technical support",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: true,
        superApp: true
      }
    },
    {
      name: "Premium support",
      includedIn: {
        startingUp: false,
        professional: false,
        expert: true,
        superApp: false
      }
    },
    {
      name: "Basic App Store Optimization for 3 months",
      includedIn: {
        startingUp: true,
        professional: true,
        expert: false,
        superApp: true
      }
    },
    {
      name: "Premium App Store Optimization for 6 months",
      includedIn: {
        startingUp: false,
        professional: false,
        expert: true,
        superApp: false
      }
    }
  ];
  
  const optionalFeatures: OptionalFeature[] = [
    { name: "URL Customization", price: 520 },
    { name: "Extra Driver Docs", price: 320 },
    { name: "Fixed-rate zones", price: 480 },
    { name: "Driver auto payouts", price: 480 }
  ];
  
  const plans: Plan[] = [
    {
      name: "Starting up",
      monthlyFee: 99,
      features: features,
      optionalFeatures: optionalFeatures,
      revenueShareFee: "% of the trip cost"
    },
    {
      name: "Professional",
      monthlyFee: 99,
      features: features,
      optionalFeatures: optionalFeatures,
      revenueShareFee: "% of the trip cost"
    },
    {
      name: "Expert",
      monthlyFee: 99,
      features: features,
      optionalFeatures: optionalFeatures,
      revenueShareFee: "% of the trip cost"
    },
    {
      name: "Super App",
      monthlyFee: 259,
      features: features,
      optionalFeatures: optionalFeatures,
      revenueShareFee: "% of the trip cost and the cart total",
      delivery: true
    }
  ];
  
  export default function PricingComparison() {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Compare pricing plans and choose your best fit
        </h1>
  
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="col-span-1"></div>
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`col-span-1 px-4 py-2 text-center ${
                    index === 1 ? "rounded-t-lg bg-green-50" : ""
                  }`}
                >
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                </div>
              ))}
            </div>
  
            {/* Features */}
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-5 gap-4 ${
                  index % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <div className="col-span-1 p-4">{feature.name}</div>
                {Object.values(feature.includedIn).map((included, planIndex) => (
                  <div
                    key={planIndex}
                    className={`col-span-1 p-4 flex justify-center items-center ${
                      planIndex === 1 ? "bg-green-50" : ""
                    }`}
                  >
                    {included ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            ))}
  
            {/* Optional Features */}
            {optionalFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-5 gap-4 ${
                  index % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <div className="col-span-1 p-4">
                  {feature.name}
                  <span className="text-gray-500"> (optional)</span>
                </div>
                {plans.map((_, planIndex) => (
                  <div
                    key={planIndex}
                    className={`col-span-1 p-4 text-center ${
                      planIndex === 1 ? "bg-green-50" : ""
                    }`}
                  >
                    ${feature.price}
                  </div>
                ))}
              </div>
            ))}
  
            {/* Delivery Row */}
            <div className="grid grid-cols-5 gap-4 bg-gray-50">
              <div className="col-span-1 p-4">Delivery</div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`col-span-1 p-4 flex justify-center items-center ${
                    index === 1 ? "bg-green-50" : ""
                  }`}
                >
                  {plan.delivery ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
  
            {/* Monthly Support Fee */}
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-1 p-4">Monthly support fee</div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`col-span-1 p-4 text-center ${
                    index === 1 ? "bg-green-50" : ""
                  }`}
                >
                  ${plan.monthlyFee}
                </div>
              ))}
            </div>
  
            {/* Revenue Share Fee */}
            <div className="grid grid-cols-5 gap-4 bg-gray-50">
              <div className="col-span-1 p-4">Revenue share fee</div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`col-span-1 p-4 text-center ${
                    index === 1 ? "bg-green-50" : ""
                  }`}
                >
                  {plan.revenueShareFee}
                </div>
              ))}
            </div>
  
            {/* CTA Buttons */}
            <div className="grid grid-cols-5 gap-4 mt-6">
              <div className="col-span-1"></div>
              {plans.map((_, index) => (
                <div
                  key={index}
                  className={`col-span-1 p-4 ${
                    index === 1 ? "bg-green-50" : ""
                  }`}
                >
                  <button className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                    Let's discuss
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Footnotes */}
        <div className="mt-6 text-sm text-gray-500">
          <p>* numbers can be different depending on the launch area</p>
          <p>** will be calculated from the trip cost in local currency and then converted to USD</p>
        </div>
      </div>
    );
  }