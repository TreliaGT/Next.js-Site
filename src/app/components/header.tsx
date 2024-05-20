// Header.js
"use client";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="py-4 shadow">
      <div className="container mx-auto flex justify-between items-center relative">
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
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
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
