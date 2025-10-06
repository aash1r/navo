"use client";
import React, { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen]= useState(false)
  const phoneNumber = "923250341777"; // Format: countrycode + number
  const message = encodeURIComponent("");

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      {/* Header */}
      <header
        className={`top-0   left-0 w-full z-50 transition-all duration-300
    ${mobileOpen ? "fixed bg-white shadow-md" : "absolute bg-transparent"}
    max-[1023px]:fixed max-[1023px]:bg-white max-[1023px]:shadow-md
  `}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center mt-6 text-xl">
          {/* Left Links (Desktop only) */}
          <nav className="hidden min-[1024px]:flex absolute left-0 space-x-6 lg:space-x-8 font-bold uppercase">
            <Link
              href="/"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`uppercase font-bold ${
                  isHomePage
                    ? "text-white hover:text-gray-400"
                    : "text-gray-900 hover:text-gray-600"
                }`}
              >
                Services ▾
              </button>

              {/* Dropdown menu */}
              {servicesOpen && (
                <div className="absolute left-0 mt-0 w-80 bg-white shadow-lg rounded-lg py-2 z-50">
                  
                  <Link
                    href="/undergraduate"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                      Undergraduate Counselling
                  </Link>


                  <Link
                    href="/services/Undergraduate"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Graduate & MBA
                  </Link>
                </div>
              )}
            </div>
            
            
            <Link
              href="#"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              Explore
            </Link>
          </nav>

          {/* Center Logo */}

          {/* Mobile logo (always /logo1.jpg) */}
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="NAVO"
              width={160}
              height={80}
              className="absolute left-1/2 transform -translate-x-1/2 mt-[-35px] block max-[1023px]:block min-[1024px]:hidden"
            />
          </Link>

          {/* Desktop logo (changes by page) */}
          <Link href="/">
            <Image
              width={160}
              height={80}
              src={isHomePage ? "/navoLogo.png" : "/logo1.png"}
              alt="NAVO"
              className="w-24 sm:w-40 absolute left-1/2 transform -translate-x-1/2 mt-[-30px] hidden min-[1024px]:block"
            />
          </Link>

          {/* Right Links (Desktop only) */}
          <div className="hidden min-[1024px]:flex absolute right-0 items-center space-x-6 lg:space-x-8 font-bold uppercase">
            <Link
              href="/connect"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              Connect
            </Link>
            <Link
              href="#"
              className={
                isHomePage
                  ? "text-white hover:text-gray-400 transition-colors"
                  : "text-gray-900 hover:text-gray-600 transition-colors"
              }
            >
              MyNavoPortal
            </Link>
            <button
              onClick={handleClick}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <FaWhatsapp className="text-green-500 w-10 h-10" />
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
