import React from 'react';

interface Testimonial {
  title: string;
  content: string;
  author: string;
  position: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    title: "Focus on core business operations",
    content: "As a growing company, we found the platform incredibly helpful with its comprehensive payment systems and customization options. The automated maintenance allows us to concentrate on expanding our operations.",
    author: "Sarah M.",
    position: "CEO",
    rating: 5
  },
  {
    title: "Excellent handling of high-volume traffic",
    content: "The platform has been transformative for our operations, effectively managing varying traffic levels and connecting users seamlessly. The efficient technology has helped us exceed our growth targets.",
    author: "Michael R.",
    position: "Vice President",
    rating: 5
  },
  {
    title: "Quick setup with full customization",
    content: "We were able to launch our transportation service rapidly with complete branding and localization features. The platform's intuitive setup process got us operational in minimal time.",
    author: "David K.",
    position: "Director",
    rating: 5
  },
  {
    title: "Long-term reliability",
    content: "Having used the platform for several years, we continue to be impressed by its stability, comprehensive feature set, and dedicated support team. The continuous improvements keep us competitive.",
    author: "Lisa P.",
    position: "Founder",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-[400px,1fr] gap-8">
        {/* Sticky left section */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Join 400+ businesses all over the world
          </h2>
          <p className="text-gray-400 text-2xl font-bold mb-8">
            Here's what our partners <br /> say about why they chose us
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors">
            Get started
          </button>
        </div>

        {/* Scrollable testimonials section */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
              <h3 className="text-2xl font-bold mb-4">{testimonial.title}</h3>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex flex-col space-y-2">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.position}</div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        className="stroke-blue-600"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 12l-3 3m0 0l-3-3m3 3V9"
                        className="stroke-blue-600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-blue-600 ml-1">Capterra</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;