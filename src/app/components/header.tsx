// Header.js
"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeFixed = scrollTop > 0;
      setIsScrolled(shouldBeFixed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header   className={`py-4 text-white ${
      isScrolled ? 'fixed top-0 z-50 text-white w-full' : ''
    }`}>
      <div className="container mx-auto flex justify-between items-center relative ">
        {/* Logo */}
        <div>
          <Link href="/">
            {/* <Image
              src="/icons/Peppermint.svg"
              alt="Logo"
              className="h-20 mr-2"
              width={100}
              height={24}
              priority
            /> */}
          </Link>
        </div>
        {/* Menu */}
        <nav className="sm:block">
          <ul
            className={`sm:flex sm:space-x-10 transition-all duration-300 menu  ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}>
            <li className="border-2 rounded-full border-white py-3 px-5">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="border-2 rounded-full border-white py-3 px-5">
              <Link href="/portfolio" >
                Portfolio
              </Link>
            </li>
            <li className="border-2 rounded-full border-white py-3 px-5">
              <Link href="/about" >
                About
              </Link>
            </li>
            <li className="border-2 rounded-full border-white py-3 px-5">
              <Link href="/contact" >
                Contact
              </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-400 mr-20 hover:bg-gray-700 transition-all p-3 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
