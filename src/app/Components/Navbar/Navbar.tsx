'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isGoToOpen, setIsGoToOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensuring hydration by only rendering on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering on the server side
  if (!isClient) return null;

  return (
    <nav className="flex items-center px-6 sm:px-24 justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-4xl font-bold text-black cursor-pointer">onde</div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex ml-10 space-x-8 text-black text-base">
          <li>
            <Link href="/features" className="text-green-500 font-bold hover:text-green-600">
              Features
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-600 font-bold">
              Products
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-600 font-bold">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-gray-600 font-bold">
              Support
            </Link>
          </li>
          <li
            className="relative flex items-center space-x-1 hover:text-gray-600 cursor-pointer"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <span>Resources</span>
            <ChevronDown
              className={`w-4 h-4 text-black transition-transform ${
                isResourcesOpen ? 'rotate-180' : ''
              }`}
            />
            {isResourcesOpen && (
              <ul className="absolute top-full mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/guides">Guides</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/webinars">Webinars</Link>
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
          onMouseEnter={() => setIsLanguageOpen(true)}
          onMouseLeave={() => setIsLanguageOpen(false)}
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
            <ul className="absolute top-full mt-2 w-20 bg-white border border-gray-300 rounded-md shadow-lg">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">EN</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">FR</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">ES</li>
            </ul>
          )}
        </div>

        {/* Go To Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsGoToOpen(true)}
          onMouseLeave={() => setIsGoToOpen(false)}
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
            <ul className="absolute top-full mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/settings">Settings</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Try for Free Button */}
        <Link href="/signup">
          <button className="bg-[#1ee67b] text-white px-5 py-2 rounded-md hover:bg-[#00EF70]">
            Try for free
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
