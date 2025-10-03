"use client"


import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {

  const footerRef = useRef<HTMLDivElement>(null);

  
const [email, setEmail] = useState("");
const [status, setStatus] = useState("");

const handleSubscribe = () => {
  if (!email) {
    setStatus("Please enter a valid email");
    return;
  }

  emailjs
    .send(
      "service_0i6cqah", // replace with EmailJS service ID
      "template_xv0y10k", // replace with EmailJS template ID
      { email }, // template params
      "x2Rj-TukOxeJQEB38" // replace with EmailJS public key
    )
    .then(() => {
      setStatus("✅ Subscribed successfully!");
      setEmail("");
    })
    .catch(() => setStatus("❌ Failed to subscribe. Try again."));
};
  return (   
      <footer
        ref={footerRef}
        id="footer"
        className="bg-[#03336d] text-white px-6 py-12 lg:px-32 lg:py-16"
      >
          {/* Footer */}
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Left Section: Logo, Newsletter & Certification */}
            <div className="space-y-6">
              {/* Logo */}
              <img
                className="w-[150px] h-auto"
                alt="Navo Logo"
                src="/navoLogo.png"
              />

              {/* Newsletter Text */}
              <div className="space-y-3">
                <p className="text-white text-base leading-relaxed">
                  Stay up to date on the latest features and releases by joining
                  our newsletter.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>

              {/* KHDA Certification Logo */}
              <div className="pt-4">
                <img
                  className="w-[150px] h-auto"
                  alt="KHDA Certification"
                  src="/khda-logo.png"
                />
              </div>
            </div>

            {/* Right Section: Navigation Links */}
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              {/* Input Box with Arrow Button */}
              <div className="flex items-center bg-transparent max-w-md mx-auto sm:mx-0 border-b border-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow py-2 text-gray-200 placeholder-gray-400 bg-transparent focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="text-white py-2 transition-colors"
                >
                  →
                </button>
              </div>

              {/* Links Section in Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Quick Links
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      ABOUT US
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      SERVICES
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      EXPLORE
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      MYNAVOPORTAL
                    </a>
                  </nav>
                </div>

                {/* Others */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Others
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      PARTNERS
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      TESTIMONIALS
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      TERMS & CONDITIONS
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors text-sm"
                    >
                      PRIVACY POLICY
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Social */}
          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/80 text-sm">©2024 All rights reserved</p>

            
          </div>
        </div>
      </footer>
   
  );
}
