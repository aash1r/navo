"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const phoneNumber = "923250341777"; // Format: countrycode + number
  const message = encodeURIComponent("How can we help you today?");

  useEffect(() => {
    setIsMounted(true);
    // Show the button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-95"
      }`}
    >
      <button
        onClick={handleClick}
        className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        
        {/* WhatsApp icon */}
        <FaWhatsapp className="w-8 h-8 relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </button>
    </div>
  );
}
