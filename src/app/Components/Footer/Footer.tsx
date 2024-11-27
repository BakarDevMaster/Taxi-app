import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

type FooterLink = {
  title: string;
  href: string;
};

const Footer = () => {
  const mainLinks: FooterLink[] = [
    { title: 'Home', href: '/home' },
    { title: 'Glossary', href: '/glossary' },
    { title: 'Features', href: '/features' },
    { title: 'Products', href: '/products' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Service types', href: '/service-types' },
    { title: 'Agency', href: '/agency' },
    { title: 'Ride-hailing apps', href: '/ride-hailing-apps' },
    { title: 'Onde vs. Elluminati', href: '/onde-vs-elluminati' },
  ];

  const competitorLinks: FooterLink[] = [
    { title: 'Onde vs. Atom', href: '/onde-vs-atom' },
    { title: 'Mobility', href: '/mobility' },
    { title: 'Onde vs. Taxicaller', href: '/onde-vs-taxicaller' },
    { title: 'Onde vs. Jugnoo', href: '/onde-vs-jugnoo' },
    { title: 'Onde vs. Taximobility', href: '/onde-vs-taximobility' },
    { title: 'Onde vs. Yelowsoft', href: '/onde-vs-yelowsoft' },
    { title: 'Onde vs. iCabbi', href: '/onde-vs-icabbi' },
    { title: 'Onde vs. Autofleet', href: '/onde-vs-autofleet' },
    { title: 'Onde vs. Autocab', href: '/onde-vs-autocab' },
    { title: 'WhatsApp vs. Onde', href: '/whatsapp-vs-onde' },
  ];

  const resourceLinks: FooterLink[] = [
    { title: 'Case studies', href: '/case-studies' },
    { title: 'Learn', href: '/learn' },
    { title: 'Blog', href: '/blog' },
    { title: 'RRN', href: '/rrn' },
    { title: 'Factory', href: '/factory' },
    { title: 'About', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Events', href: '/events' },
    { title: 'Terms & Conditions', href: '/general-terms-and-conditions' },
  ];

  const appLinks: FooterLink[] = [
    { title: 'Privacy Policy', href: '/general-privacy-policy' },
    { title: 'Super App', href: '/super-app' },
    { title: 'Operator App', href: '/operator-app' },
    { title: 'My hub', href: '/my-hub' },
    { title: 'Web App', href: '/web-app' },
    { title: 'Driver App', href: '/driver-app' },
    { title: 'Customer app', href: '/customer-app' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Support', href: '/support' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black text-white px-4 py-12 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Logo, Description, Social */}
          <div className="lg:w-1/4">
            <Link href="/" className="inline-block">
              <Image
                src="/onde-logo.svg"
                alt="Onde Logo"
                width={120}
                height={40}
                className="mb-6"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-8">
              Onde, formerly known as TaxiStartup, is a brand that embodies humanity, ease,
              reliability and versatility as key values.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full text-black bg-white border border-gray-600 flex items-center justify-center hover:scale-105 duration-500 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
            
            <p className="text-sm text-gray-500">
              © 2017-2024 Onde
            </p>
          </div>

          {/* Right Section - Link Columns */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              {mainLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 mb-2 text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {competitorLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 mb-2 text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div>
              {resourceLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 mb-2 text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Column 4 */}
            <div>
              {appLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 mb-2 text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;