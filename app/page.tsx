"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TestimonialSlider } from "@/components/testimonial-slider";
import {

  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Hash,
  Volume2,
  VolumeOff,
} from "lucide-react";

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"
import { SiTiktok } from "react-icons/si";

import NavoStellerSection from "@/components/NavoStellerSection";
import Swiper from "@/components/swiper-section";
import CounselorsHelpStudents from "@/components/counselors-help-students";

import NavogateUniverse from "@/components/navogateUniverse";
import Link from "next/link";
import Header from "@/components/header";
import WhatWeDo from "@/components/whatWeDo";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import emailjs from "emailjs-com";

const data = [
  { name: "Students", percentage: 550, signs: "+" },
  {
    name: "Years of Experience",
    percentage: 15,
    signs: "+",
  },
  { name: "Regions Covered", percentage: 8, signs: "+" },
  { name: "Student Nationalities", percentage: 10, signs: "+" },
  { name: "Top Acceptances", percentage: 3000, signs: "+" },
  { name: "Better Ods", percentage: 10, signs: "x" },
  { name: "Financial Aid", percentage: 30, signs: "m" },
  { name: "More STEM Acceptances", percentage: 5, signs: "x" },
];

export default function Component() {
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const phoneNumber = "923250341777"; // Format: countrycode + number
  const message = encodeURIComponent(
    "How can we help you today?"
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


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[30rem] sm:h-[30rem] md:h-[30rem] lg:h-[40rem]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/NavoVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20" />

        {/* Sound Toggle Button */}
        {/* Toggle Button for Mute/Unmute */}
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (videoRef.current) {
                videoRef.current.muted = !isMuted;
              }
            }}
            className={`relative inline-flex h-[40px] w-[85px] items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isMuted ? "bg-[#03336d]" : "bg-transparent"
            }`}
          >
            {/* Unmute icon on the left */}
            <Volume2 className="absolute left-1 w-[20px] text-white ml-1" />

            {/* Mute icon on the right */}
            <VolumeOff className="absolute right-1 w-[20px] text-white mr-1" />
            {/* Moving circle */}
            <span
              className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform duration-200 ${
                isMuted ? "translate-x-12" : "translate-x-1"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* How We Work Section */}
      <Swiper />

      {/* Track Record Section */}
      <section ref={sectionRef} className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
          {/* Main Title */}
          <h1 className="font-['Poppins',Helvetica] font-black text-3xl sm:text-3xl md:text-3xl lg:text-6xl text-[#03336d] leading-tight mb-12 tracking-tight">
            OUR{" "}
            <span className="relative inline-block">
              TRACK
              <img
                src="/underline.png"
                alt="underline"
                className="absolute -bottom-2 left-0 w-full h-2"
              />
            </span>{" "}
            RECORD
          </h1>
          <p className="font-['Poppins',Helvetica] text-3xl text-gray-800 leading-relaxed mb-6">
            When Strategy Meets Talent, Admissions Say Yes
          </p>
          <p className="font-['Poppins',Helvetica] text-xl text-gray-800 leading-relaxed mb-6">
            With hundreds of students coached, 80% early acceptance success,
            100% students got admission and millions in scholarships awarded, we
            don't just guide — we deliver. These results aren't exceptions —
            they're the NAVO standard.
          </p>

          <div className="py-4 px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#03336d]/90">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-center py-6 px-8 flex flex-col justify-center items-center"
                >

                  <h2 className="text-[54px] sm:text-[58px] md:text-[72px] font-extrabold text-[#03336d] leading-tight">
                    {item.name === "Financial Aid"
                      ? `$${counts[index]}`
                      : counts[index]}
                    <span className="text-[42px]">{item.signs}</span>
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
      <WhatWeDo />

      {/* Service Section */}
      {/* <CounselorsHelpStudents /> */}

      {/* NAVO STELLAR Section */}
      <div className="sm:pt-0 md:pt-60 lg:pt-0">
        <NavoStellerSection />
      </div>

      {/* Navogate Your Universe section */}
      <NavogateUniverse />

      {/* Testimonial Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <TestimonialSlider />
      </div>

      {/* Contact Information Section */}
    <div className="py-16 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-gray-100 w-full">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
    
    {/* Address */}
    <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-5">
        <MapPin className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#03336d] transition-transform duration-300 hover:scale-110" />
      </div>
      <p className="font-['Roboto',Helvetica] text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed">
        Office 88, 6th Floor, Rasis Business Center, Al Barsha 1, Dubai.
      </p>
      <br />
      <p className="font-['Roboto',Helvetica] text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed">
        41-C, Khayaban-e-Bukhari, Phase 6, DHA, Karachi, Pakistan.
      </p>
    </div>

    {/* Phone */}
    <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-5">
        <Phone className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#03336d] transition-transform duration-300 hover:scale-110" />
      </div>
      <a
        href="tel:+971553277414"
        className="block text-gray-800 font-medium text-base md:text-lg lg:text-xl hover:text-[#03336d] transition duration-300"
      >
        +971 55 3277414
      </a>
      <br />
      <a
        href="tel:+923250341777"
        className="block text-gray-800 font-medium text-base md:text-lg lg:text-xl hover:text-[#03336d] transition duration-300"
      >
        +92 32 50341777
      </a>
    </div>

    {/* Email */}
    <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-5">
        <Mail className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#03336d] transition-transform duration-300 hover:scale-110" />
      </div>
      <a
        href="mailto:hello@navoconsulting.com"
        className="block text-gray-800 font-medium text-base md:text-lg lg:text-xl hover:text-[#03336d] transition duration-300"
      >
        connect@navo.work
      </a>
    </div>

    {/* Social Media */}
    <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-5">
        <Hash className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#03336d] transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="flex justify-center flex-wrap gap-5 md:gap-6">
        <a href="https://www.facebook.com/profile.php?id=61574014345229" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 text-3xl md:text-4xl transition-transform transform hover:scale-125 duration-300">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/navo.ed?igsh=eGd5ZDVuZjBrdGs=" target="_blank" rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-500 text-3xl md:text-4xl transition-transform transform hover:scale-125 duration-300">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/navo-ed/" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 text-3xl md:text-4xl transition-transform transform hover:scale-125 duration-300">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
          className="text-blue-600 hover:text-[#03336d] text-3xl md:text-4xl transition-transform transform hover:scale-125 duration-300">
          <FaTwitter />
        </a>
        <a href="https://www.tiktok.com/@navo1482?_t=ZS-8zxyInM47Hj&_r=1" target="_blank" rel="noopener noreferrer"
          className="text-red-500 hover:text-[#03336d] text-3xl md:text-4xl transition-transform transform hover:scale-125 duration-300">
          <SiTiktok />
        </a>
      </div>
    </div>

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
            <a href="/connect">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
                CONNECT WITH US
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
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

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
