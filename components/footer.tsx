"use client"


import {
    ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";import React from 'react'
import { Button } from "./ui/button";

export default function Footer() {
  // Column one links data
  const columnOneLinks = ["About Us", "Services", "Contact Us", "FAQs", "Blog"];

  // Column two links data
  const columnTwoLinks = [
    "Testimonials",
    "Partners",
    "Events",
    "Resources",
    "Support",
  ];
  // Social media links data
  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon className="w-6 h-6" /> },
    { name: "Instagram", icon: <InstagramIcon className="w-6 h-6" /> },
    { name: "Twitter", icon: <TwitterIcon className="w-6 h-6" /> },
    { name: "LinkedIn", icon: <LinkedinIcon className="w-6 h-6" /> },
    { name: "YouTube", icon: <YoutubeIcon className="w-6 h-6" /> },
  ];
  return (
    <div>
      <footer
        id="footer"
        className="flex flex-col w-full px-6 py-12 bg-[#03336d] text-white gap-16 lg:px-32 lg:py-20"
      >
        {/* Top Section: Logo + Newsletter */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-12">
          {/* Left: Logo & Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <img
              className="w-[196px] h-auto"
              alt="Navo Logo"
              src="/navoLogo.png"
            />
            <p className="text-white text-base leading-relaxed">
              Stay up to date on the latest features and releases by joining our
              newsletter.
            </p>
            <p className="text-white text-sm opacity-80">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right: Newsletter Form */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold font-roboto leading-tight">
                Get the Latest
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold font-roboto leading-tight">
                Educational Updates
              </h3>
              <span className="text-lg sm:text-base font-medium font-poppins">
                Sign Up For Our Newsletter
              </span>

              <div className="flex items-center w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="border-b-2 border-white bg-transparent px-4 py- text-white placeholder-gray-200 focus:outline-none focus:border-white w-full sm:w-64 text-sm sm:text-base"
                />
                <Button className="ml-4 bg-transparent hover:bg-blue-900 p-2 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </Button>
              </div>

              {/* <form className="flex flex-col sm:flex-row items-center w-full gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white text-[#03336d] rounded-full px-5 py-3 text-sm placeholder:text-gray-500 focus:outline-none w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="bg-white text-[#03336d] font-semibold rounded-full px-6 py-3 hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </form> */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Links */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column One */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Column One</h3>
            <nav className="flex flex-col gap-2 w-full">
              {columnOneLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm hover:underline text-white"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column Two */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Column Two</h3>
            <nav className="flex flex-col gap-2 w-full">
              {columnTwoLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm hover:underline text-white"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <nav className="flex flex-col gap-2 w-full">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 text-sm hover:underline text-white"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
