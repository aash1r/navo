"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { TestimonialSlider } from "@/components/testimonial-slider";
import {
  Headphones,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import NavoStellerSection from "@/components/NavoStellerSection";
import Swiper from "@/components/swiper-section";
import CounselorsHelpStudents from "@/components/counselors-help-students";
import { FaWhatsapp } from "react-icons/fa";
import NavogateUniverse from "@/components/navogateUniverse";
import Link from "next/link";
import Header from "@/components/header";

const data = [
  { name: "Students", percentage: 750, signs: "+" },
  {
    name: "elite university admissions",
    percentage: 120,
    signs: "+",
  },
  { name: "Students got admissions", percentage: 100, signs: "%" },
  { name: "Acceptances", percentage: 900, signs: "+" },
  { name: "Acceptances over 10 years", percentage: 3400, signs: "+" },
  { name: "More likely to be accepted", percentage: 10, signs: "x" },
  { name: "Results", percentage: 100, signs: "%" },
  { name: "Acceptances", percentage: 80, signs: "%" },
];

export default function Component() {
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // const [counts, setCounts] = useState(data.map(() => 0));
  // useEffect(() => {
  //   const intervals = data.map((item, index) => {
  //     const increment = Math.ceil(item.percentage / 50); // adjust speed
  //     return setInterval(() => {
  //       setCounts((prev) => {
  //         const newCounts = [...prev];
  //         if (newCounts[index] < item.percentage) {
  //           newCounts[index] = Math.min(
  //             newCounts[index] + increment,
  //             item.percentage
  //           );
  //         }
  //         return newCounts;
  //       });
  //     }, 30); // delay between updates
  //   });

  //   return () => intervals.forEach((interval) => clearInterval(interval));
  // }, []);

  const [counts, setCounts] = useState(data.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          data.forEach((item, index) => {
            const increment = Math.ceil(item.percentage / 100); // slower
            const interval = setInterval(() => {
              setCounts((prev) => {
                const newCounts = [...prev];
                if (newCounts[index] < item.percentage) {
                  newCounts[index] = Math.min(
                    newCounts[index] + increment,
                    item.percentage
                  );
                }
                return newCounts;
              });
            }, 30);

            // Clear interval after more time to match slower animation
            setTimeout(() => clearInterval(interval), 5000);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const phoneNumber = "923360348013"; // Format: countrycode + number
  const message = encodeURIComponent(
    "Hi Aman, I saw your project and wanted to connect!"
  );

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current && ctaRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Simple check: if footer is visible in viewport, switch to relative
        const shouldBeAboveFooter = footerRect.top < viewportHeight;

        setIsAboveFooter(shouldBeAboveFooter);
      }
    };

    // Simple throttling without debouncing to prevent stutter
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[30rem] sm:h-[30rem] md:h-[30rem] lg:h-[40rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/NavoVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* How We Work Section */}
      <Swiper />

      {/* Track Record Section */}
      <section
        ref={sectionRef}
        className="bg-blue-50 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
          {/* Main Title */}
          <h1 className="font-['Poppins',Helvetica] font-black text-3xl sm:text-3xl md:text-3xl lg:text-6xl text-[#03336d] leading-tight mb-12 tracking-tight">
            OUR TRACK RECORD 
          </h1>
          <p className="font-['Poppins',Helvetica] text-3xl text-gray-800 leading-relaxed mb-6">
            When Strategy Meets Talent, Admissions Say Yes
          </p>
          <p className="font-['Poppins',Helvetica] text-xl text-gray-800 leading-relaxed mb-6">
            With hundreds of students coached, 80% early acceptance success,
            100% students got admission and millions in scholarships awarded, we
            don't just guide — we deliver.These results aren't exceptions —
            they're the NAVO standard.
          </p>

          <div className="py-4 px-4 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#03336d]/90">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-center py-6 px-4 flex flex-col justify-center items-center"
                >
                  <h2 className="text-[32px] sm:text-[58px] md:text-[60px] font-extrabold text-[#03336d] leading-none">
                    {counts[index]}
                    <span className="text-[16px] sm:text-[28px] md:text-[30px] align-bottom">
                      {item.signs}
                    </span>
                  </h2>
                  <br />

                  <p className="text-lg text-[#03336d] mb-2 leading-tight">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <div className="bg-white-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Poppins',Helvetica] font-bold text-4xl sm:text-5xl md:text-6xl text-[#03336d] mb-12 tracking-tight">
            WHAT WE <span className="underline decoration-yellowCust underline-offset-4">DO</span>
          </h2>

          <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Undergraduate Counseling Card */}
            <div className="group w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 rounded-3xl p-8 h-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <div className="flex flex-col items-start text-left h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 11.8 12.8 14 10 14S5 11.8 5 9V7H3V9C3 12.9 6.1 16 10 16V22H14V16C17.9 16 21 12.9 21 9Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-['Poppins',Helvetica] font-bold text-xl sm:text-2xl mb-4 uppercase">
                      Undergraduate Counseling
                    </h3>
                    <p className="text-white/90 font-['Poppins',Helvetica] text-sm sm:text-base leading-relaxed mb-8">
                      Expert guidance for high school students navigating the complex college admissions process to secure admissions at top-tier institutions.
                    </p>
                  </div>
                  
                  {/* Button */}
                  <Button className="w-full bg-white group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 text-blue-900 group-hover:text-white border-0 font-['Poppins',Helvetica] font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Graduate Counseling Card */}
            <div className="group w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 group-hover:from-blue-800 group-hover:via-purple-700 group-hover:to-pink-700 rounded-3xl p-8 h-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <div className="flex flex-col items-start text-left h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-['Poppins',Helvetica] font-bold text-xl sm:text-2xl mb-4 uppercase">
                      Graduate Counseling
                    </h3>
                    <p className="text-white/90 font-['Poppins',Helvetica] text-sm sm:text-base leading-relaxed mb-8">
                      Strategic support for applicants pursuing Master's, MBA, PhD, and other graduate programs by perfecting personal statements and CVs.
                    </p>
                  </div>
                  
                  {/* Button */}
                  <Button className="w-full bg-white group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 text-blue-900 group-hover:text-white border-0 font-['Poppins',Helvetica] font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      {/* <CounselorsHelpStudents /> */}

      {/* NAVO STELLAR Section */}
      <div>
        <NavoStellerSection />
      </div>

      {/* Navogate Your Universe section */}
      <NavogateUniverse />

      {/* Testimonial Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <TestimonialSlider />
      </div>

      {/* Contact Information Section */}
      <div className="py-28 px-6 md:px-16 lg:px-24 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"> */}
          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-7">
              <Mail className="w-16 h-16" />
            </div>
            <h3 className="font-['Roboto',Helvetica] font-bold text-[#03336d] text-[37px] text-center leading-[48.2px] mt-[-1.16px] mb-7">
              Email
            </h3>
            <p className="font-['Roboto',Helvetica] font-normal text-black text-[18.5px] text-center leading-[27.8px] mb-7">
              Feel free to reach out to us with any questions or inquiries.
            </p>
            <a
              href="mailto:hello@navoconsulting.com"
              className="font-['Roboto',Helvetica] font-normal text-black text-[18.5px] text-center leading-[27.8px] underline w-full"
            >
              hello@navoconsulting.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-7">
              <Phone className="w-16 h-16" />
            </div>
            <h3 className="font-['Roboto',Helvetica] font-bold text-[#03336d] text-[37px] text-center leading-[48.2px] mt-[-1.16px] mb-7">
              Phone
            </h3>
            <p className="font-['Roboto',Helvetica] font-normal text-black text-[18.5px] text-center leading-[27.8px] mb-7">
              Give us a call for immediate assistance or to schedule a
              consultation.
            </p>
            <a
              href="tel:+15551234567"
              className="font-['Roboto',Helvetica] font-normal text-black text-[18.5px] text-center leading-[27.8px] underline w-full"
            >
              +1 (555) 123-4567
            </a>
          </div>

          {/* Office */}
          <div className="text-center">
            <div className="flex justify-center mb-7">
              <MapPin className="w-16 h-16" />
            </div>
            <h3 className="font-['Roboto',Helvetica] font-bold text-[#03336d] text-[37px] text-center leading-[48.2px] mt-[-1.16px] mb-7">
              Office
            </h3>
            <p className="font-['Roboto',Helvetica] font-normal text-black text-[18.5px] text-center leading-[27.8px] mb-7">
              Visit our office for a face-to-face meeting or to drop off
              documents.
            </p>
            <span className="font-['Roboto',Helvetica] font-normal text-black text-[18.5px] text-center leading-[27.8px] underline w-full">
              Somewhere in DHA
            </span>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* Sticky CTA Section */}
      <div
        ref={ctaRef}
        className={`w-full bg-white border-t z-50 transition-all duration-200 ease-in-out ${
          isAboveFooter ? "relative" : "fixed bottom-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="font-medium text-gray-900 text-sm sm:text-base">
              Fill out our short form for a consultation to learn about Navo
              services.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
              Connect with us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        id="footer"
        className="bg-[#03336d] text-white px-6 py-12 lg:px-32 lg:py-16"
      >
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
                  Stay up to date on the latest features and releases by joining our newsletter.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>

              {/* KHDA Certification Badge */}
              <div className="pt-4">
                <div className="bg-white rounded-lg p-4 w-fit">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#8B1538] text-white px-3 py-2 rounded text-sm font-bold">
                      DUBAI
                    </div>
                    <div className="text-[#8B1538] text-sm">
                      <div className="font-bold">OFFICIALLY APPROVED BY</div>
                      <div className="font-bold text-lg">KHDA</div>
                      <div className="text-xs">PERMIT NUMBER 632607</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                <nav className="space-y-3">
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    ABOUT US
                  </a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    SERVICES
                  </a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    EXPLORE
                  </a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    MYNAVOPORTAL
                  </a>
                </nav>
              </div>

              {/* Others */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Others</h3>
                <nav className="space-y-3">
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    PARTNERS
                  </a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    TESTIMONIALS
                  </a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    TERMS & CONDITIONS
                  </a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                    PRIVACY POLICY
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Social */}
          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/80 text-sm">
              ©2024 All rights reserved
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
