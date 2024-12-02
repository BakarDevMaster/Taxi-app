// components/AboutUs.tsx
import { FC } from 'react';

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

// interface Feature {
//   title: string;
//   description: string;
// }

const AboutUs: FC = () => {
  const coreValues: CoreValue[] = [
    {
      title: 'Innovation',
      description: 'We constantly strive to improve our technology to meet the evolving needs of the ride-hailing industry.',
      icon: '🚀',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, listening to their feedback and incorporating their ideas into our solutions.',
      icon: '🤝',
    },
    {
      title: 'Reliability',
      description: 'We are committed to providing a stable and dependable platform for businesses and users alike.',
      icon: '🛡️',
    },
    {
      title: 'Customer-Centric Approach',
      description: 'Our focus is on creating value for our customers, ensuring their success is at the heart of everything we do.',
      icon: '❤️',
    },
  ];

  const differentiators = [
    'Tailored to Your Brand',
    'Focus on Growth',
    'Seamless Integration',
    'Comprehensive Support',
    'Reliability You Can Count On',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white text-white">

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Welcome to Ride Click
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Our mission is to create seamless, reliable, and efficient transportation experiences while providing the tools you need to grow and succeed in the competitive ride-hailing market.
          </p>
          <p className="text-lg text-gray-400">
            At Ride Click, we believe that great technology should be easy to use and accessible to everyone. Whether you&apos;re booking a ride, managing drivers, or expanding your business, our platform is built to meet your needs.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Ride Click is a team of passionate innovators, developers, and problem-solvers committed to transforming how ride-hailing businesses operate. We&apos;ve combined cutting-edge technology with real-world expertise to build a platform that empowers businesses to deliver exceptional services to their users.
            </p>
            <p>
              From small local operators to large-scale enterprises, we work with companies worldwide to help them streamline their operations, enhance customer satisfaction, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">For Passengers</h3>
              <p className="text-gray-300">
                We put convenience, safety, and reliability first. Our branded customer apps for iOS and Android make booking a ride quick and easy. Passengers can enjoy multiple payment options, live tracking, and features like sharing their trip details with friends for added security.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">For Drivers</h3>
              <p className="text-gray-300">
                We understand that drivers are the backbone of any ride-hailing service. With our Driver App, drivers get the tools they need to work efficiently, from real-time notifications to flexible ride acceptance options. Features like gamification keep drivers motivated, while transparent earnings and easy payouts ensure they&apos;re always in control.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">For Businesses</h3>
              <p className="text-gray-300">
                Ride Click provides a comprehensive management solution that simplifies dispatching, monitoring, and analytics. Our admin panel, My Hub, gives businesses the power to oversee operations, set custom fare zones, launch marketing campaigns, and collaborate with corporate clients—all from a single platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where ride-hailing services are accessible, reliable, and sustainable. By empowering businesses with the right tools, we aim to create a future where transportation is convenient for passengers, rewarding for drivers, and profitable for operators.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to help ride-hailing businesses grow by offering innovative technology and unmatched support. We&apos;re here to remove barriers, simplify processes, and provide everything you need to build a successful transportation business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Ride Click?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="font-semibold text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Looking Ahead</h2>
          <p className="text-gray-400 text-center">
            As the ride-hailing industry continues to evolve, so does Ride Click. We&apos;re constantly working to add new features, improve existing ones, and explore new opportunities to support our clients. Whether it&apos;s expanding into delivery services or exploring partnerships with corporate clients, we&apos;re always looking for ways to help you stay ahead of the curve.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Join Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Ready to revolutionize the ride-hailing industry with us? Reach out today to learn more about our platform and how we can help you grow your business.
          </p>
          <a href="mailto:contact@rideclick.com" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-semibold">
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
