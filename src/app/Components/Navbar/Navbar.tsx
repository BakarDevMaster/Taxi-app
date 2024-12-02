'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isGoToOpen, setIsGoToOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('features'); // Track active link

  const router = useRouter();

  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const languageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const goToTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ensuring hydration by only rendering on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering on the server side
  if (!isClient) return null;

  // Function to handle active link
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    router.push(`/${link}`);
  };

  // Delay function to handle the dropdown close delay
  const handleMouseLeave = (setter: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    timeoutRef.current = setTimeout(() => {
      setter(false);
    }, 200); // Adjust delay as needed
  };

  // Clear timeout when mouse enters dropdown
  const handleMouseEnter = (setter: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setter(true);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center px-6 sm:px-24 justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        {/* Logo */}
        <div
          className="text-4xl font-bold text-black cursor-pointer"
          onClick={() => router.push('/')}
        >
          onde
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex ml-10 space-x-8 text-black text-base">
          <li>
            <span
              className={`font-bold hover:text-green-600 cursor-pointer ${activeLink === 'features' ? 'text-green-500' : ''}`}
              onClick={() => handleLinkClick('features')}
            >
              Features
            </span>
          </li>
          <li>
            <span
              className={`font-bold hover:text-gray-600 cursor-pointer ${activeLink === 'products' ? 'text-green-500' : ''}`}
              onClick={() => handleLinkClick('products')}
            >
              Products
            </span>
          </li>
          <li>
            <span
              className={`font-bold hover:text-gray-600 cursor-pointer ${activeLink === 'pricing' ? 'text-green-500' : ''}`}
              onClick={() => handleLinkClick('pricing')}
            >
              Pricing
            </span>
          </li>
          <li>
            <span
              className={`font-bold hover:text-gray-600 cursor-pointer ${activeLink === 'support' ? 'text-green-500' : ''}`}
              onClick={() => handleLinkClick('support')}
            >
              Support
            </span>
          </li>
          <li
            className="relative flex items-center space-x-1 hover:text-gray-600 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(setIsResourcesOpen, resourcesTimeoutRef)}
            onMouseLeave={() => handleMouseLeave(setIsResourcesOpen, resourcesTimeoutRef)}
          >
            <span>Resources</span>
            <ChevronDown
              className={`w-4 h-4 text-black transition-transform ${
                isResourcesOpen ? 'rotate-180' : ''
              }`}
            />
            {isResourcesOpen && (
              <ul
                className="absolute top-full mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg"
                onMouseEnter={() => handleMouseEnter(setIsResourcesOpen, resourcesTimeoutRef)}
                onMouseLeave={() => handleMouseLeave(setIsResourcesOpen, resourcesTimeoutRef)}
              >
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/mobile-app-marketing-agency')}>
                  Agency
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/aboutus')}>
                  About us
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/top-ride-hailing-platforms')}>
                  Ride-hailing apps
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/cases')}>
                  Case studies
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/learn')}>
                  Learn
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsLanguageOpen, languageTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setIsLanguageOpen, languageTimeoutRef)}
        >
          <div className="flex items-center space-x-1 cursor-pointer">
            <Globe className="w-5 h-5 text-black" />
            <span className="text-black">EN</span>
            <ChevronDown
              className={`w-4 h-4 text-black transition-transform ${
                isLanguageOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          {isLanguageOpen && (
            <ul
              className="absolute top-full mt-2 w-20 bg-white border border-gray-300 rounded-md shadow-lg"
              onMouseEnter={() => handleMouseEnter(setIsLanguageOpen, languageTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setIsLanguageOpen, languageTimeoutRef)}
            >
              <li className="p-2 hover:bg-gray-100 cursor-pointer">EN</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">FR</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">ES</li>
            </ul>
          )}
        </div>

        {/* Go To Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsGoToOpen, goToTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setIsGoToOpen, goToTimeoutRef)}
        >
          <button className="flex items-center border border-gray-400 px-3 py-1 rounded-md text-black hover:bg-gray-100">
            Go To
            <ChevronDown
              className={`ml-1 w-4 h-4 text-black transition-transform ${
                isGoToOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isGoToOpen && (
            <ul
              className="absolute top-full mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg"
              onMouseEnter={() => handleMouseEnter(setIsGoToOpen, goToTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setIsGoToOpen, goToTimeoutRef)}
            >
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/My hub')}>
                My hub
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/Operator app')}>
                Operator app
              </li>
            </ul>
          )}
        </div>

        {/* Try for Free Button */}
        <button
          className="bg-[#1ee67b] text-white px-5 py-2 rounded-md hover:bg-[#00EF70]"
          onClick={() => router.push('/signup')}
        >
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
