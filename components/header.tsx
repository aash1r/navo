"use client";

import React, { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);

  const phoneNumber = "923360348013"; // Format: countrycode + number
  const message = encodeURIComponent(
    "Hi Aman, I saw your project and wanted to connect!"
  );

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      {/* Header */}
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-300
    ${mobileOpen ? "fixed bg-white shadow-md" : "absolute bg-transparent"}
    max-[1023px]:fixed max-[1023px]:bg-white max-[1023px]:shadow-md
  `}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center mt-6 text-xl">
          {/* Left Links (Desktop only) */}
          <nav className="hidden min-[1024px]:flex absolute left-0 space-x-6 lg:space-x-8 font-bold uppercase">
            <a
              href="#"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              About Us
            </a>
            <a
              href="#"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              Services
            </a>
            <a
              href="#"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              Explore
            </a>
          </nav>

          {/* Center Logo */}
          {/* <a href="/">
            <img
              src={isHomePage ? "/navoLogo.png" : "/logo1.jpg"}
              alt="NAVO"
              className="w-24 sm:w-40 absolute left-1/2 transform -translate-x-1/2 mt-[-30px]"
            />
          </a> */}
          {/* Mobile logo (always /logo1.jpg) */}
          <a href="/">
            <img
              src="/logo1.png"
              alt="NAVO"
              className="w-40 absolute left-1/2 transform -translate-x-1/2 mt-[-35px] block max-[1023px]:block min-[1024px]:hidden"
            />
          </a>

          {/* Desktop logo (changes by page) */}
          <a href="/">
            <img
              src={isHomePage ? "/navoLogo.png" : "/logo1.png"}
              alt="NAVO"
              className="w-24 sm:w-40 absolute left-1/2 transform -translate-x-1/2 mt-[-30px] hidden min-[1024px]:block"
            />
          </a>

          {/* Right Links (Desktop only) */}
          <div className="hidden min-[1024px]:flex absolute right-0 items-center space-x-6 lg:space-x-8 font-bold uppercase">
            <a
              href="/connect"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              Connect
            </a>
            <a
              href="#"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              MyNavoPortal
            </a>
            <button
              onClick={handleClick}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <FaWhatsapp className="text-green-500 w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="max-[1023px]:block hidden absolute right-4">
            <MobileNav open={mobileOpen} setOpen={setMobileOpen} />
          </div>
        </div>
      </header>
    </div>
  );
}
