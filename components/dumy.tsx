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

export default function Component() {
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

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
      <header className="absolute top-0 left-0 w-full bg-transparent z-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
          {/* Left Links (Desktop only) */}
          <nav className="hidden md:flex absolute left-0 space-x-6 lg:space-x-8 font-bold">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Explore
            </a>
          </nav>

          {/* Center Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
            NAVO
          </h1>

          {/* Right Links (Desktop only) */}
          <div className="hidden md:flex absolute right-0 items-center space-x-6 lg:space-x-8 font-bold">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Log In
            </a>
            <button className="flex items-center gap-2 bg-[#03336d] text-white px-4 py-2 rounded-lg font-semibold">
              Signup
              <span className="bg-white p-1 rounded-sm">
                <ArrowUpRight className="w-4 h-4 text-[#03336d]" />
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden absolute right-4">
            {/* <MobileNav /> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[28rem] sm:h-[28rem] md:h-[28rem] lg:h-[36rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/Ive-Coach-Hero-Video_210726-no-sound2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Track Record Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="font-['Poppins',Helvetica] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-12 tracking-tight">
            NAVO'S COLLEGE
            <br />
            ADMISSIONS <span className="relative inline-block">
              TRACK
              <img 
                src="/underline.png" 
                alt="underline" 
                className="absolute -bottom-2 left-0 w-full h-auto"
              />
            </span> RECORD
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-['Poppins',Helvetica] text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
              The percentage of Navo's package clients over the last 10 years
              <br />
              who earned admission to the following schools in the Early round.
            </p>

            <p className="font-['Poppins',Helvetica] text-lg md:text-xl text-gray-700">
              At most of these schools, we typically have{" "}
              <span className="relative">
                <span className="font-bold text-[#03336d]">
                  1-4 applicants annually
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 block"></span>
              </span>
              .
            </p>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-16">
            {/* Row 1 */}
            <div className="text-center border-r border-gray-300 last:border-r-0 lg:border-r">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Harvard University
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                750<span className="text-4xl md:text-5xl">+</span>
                <span className="text-lg md:text-2xl lg:text-4xl">
                  {" "}
                  students{" "}
                </span>
              </div>
            </div>

            <div className="text-center border-r border-gray-300 last:border-r-0 lg:border-r">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Yale University
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                100<span className="text-4xl md:text-5xl">%</span>
                <span className="text-lg md:text-2xl lg:text-4xl">
                  {" "}
                  students got admissions{" "}
                </span>
              </div>
            </div>

            <div className="text-center border-r border-gray-300 last:border-r-0 lg:border-r">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Princeton University
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                120<span className="text-4xl md:text-5xl">+</span>
                <span className="text-lg md:text-2xl lg:text-4xl">
                  {" "}
                  elite university admissions{" "}
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Columbia University
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                900<span className="text-4xl md:text-5xl">+</span>
                <span className="text-lg md:text-2xl lg:text-4xl">
                  {" "}
                  acceptances{" "}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 my-12"></div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center border-r border-gray-300 last:border-r-0 lg:border-r">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Dartmouth College
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                3400<span className="text-4xl md:text-5xl">+</span>
                <span className="text-lg md:text-2xl lg:text-4xl">
                  {" "}
                  acceptances over 10 years{" "}
                </span>
              </div>
            </div>

            <div className="text-center border-r border-gray-300 last:border-r-0 lg:border-r">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Brown University
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                10<span className="text-4xl md:text-5xl">x</span>
                <span className="text-lg md:text-2xl lg:text-4xl">
                  {" "}
                  more likely to be accepted{" "}
                </span>
              </div>
            </div>

            <div className="text-center border-r border-gray-300 last:border-r-0 lg:border-r">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                University of Pennsylvania
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                88<span className="text-4xl md:text-5xl">%</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-['Poppins',Helvetica] text-xl md:text-2xl text-[#03336d] font-semibold mb-6">
                Cornell University
              </h3>
              <div className="font-['Poppins',Helvetica] font-black text-6xl md:text-7xl lg:text-8xl text-[#03336d]">
                71<span className="text-4xl md:text-5xl">%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Swiper />

      {/* Service Section */}
      <CounselorsHelpStudents />

      {/* NAVO STELLAR Section */}
      <div>
        <NavoStellerSection />
      </div>

      {/* Your Universe With Us */}
      <div className="bg-blue-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight font-['Poppins',Helvetica]">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 mb-4">
              Navogate
            </span>
            <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-normal leading-snug mt-2">
              Your Universe With Us
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="w-full sm:w-[325px]">
              <Button
                variant="outline"
                className="w-full font-['Poppins',Helvetica] bg-white text-blue-900 hover:bg-gray-50 border-0 text-base sm:text-lg lg:text-xl font-semibold py-10 px-10 rounded-lg h-auto transition-colors"
              >
                Undergraduate Counseling
              </Button>
            </div>
            <div className="w-full sm:w-[325px]">
              <Button
                variant="outline"
                className="w-full font-['Poppins',Helvetica] bg-white text-blue-900 hover:bg-gray-50 border-0 text-base sm:text-lg lg:text-xl font-semibold py-10 px-10 rounded-lg h-auto transition-colors"
              >
                Graduate Counseling
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Section */}
      <section className="w-full bg-gray-50 py-16 px-6 md:py-24 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center gap-6 w-full md:max-w-[672px]">
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-[-0.5px] leading-tight text-[#03336d]">
              We invest in the student&apos;s potential
            </h2>

            <p className="font-['Poppins',Helvetica] text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
              Here at Navo we focus on students where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <Button className="bg-[#03336d] hover:bg-[#03336d]/90 text-white rounded-lg px-5 py-3 font-['Poppins',Helvetica] font-medium text-base w-full sm:w-auto">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="rounded-lg px-5 py-3 font-['Poppins',Helvetica] font-medium text-gray-800 text-base border-gray-200 w-full sm:w-auto"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Image (Visible on all screens, stacked on mobile) */}
          <div
            className="w-full md:w-[520px] h-60 sm:h-72 md:h-80 rounded-3xl shadow-shadow-xl bg-cover bg-center"
            style={{ backgroundImage: "url(/investment.png)" }}
          />
        </div>
      </section>

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

      {/* Conquest Section */}
      <section className="bg-[#03336d] py-20 px-6 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-['Poppins',Helvetica] font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight mb-8">
            <span className="block">TOWARD THE</span>
            <span className="block relative">
              <span className="relative">
                CONQUEST OF
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-7 w-full h-3 sm:h-4 md:h-5 bg-yellow-400"></div>
              </span>
            </span>
            <span className="block">ADMISSION</span>
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="font-['Poppins',Helvetica] text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-12">
              If you're interested in Navo's college counseling, fill
              <br />
              out our complimentary consultation form and we'll be
              <br />
              in touch.
            </p>

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#03336d] font-['Poppins',Helvetica] font-bold text-lg sm:text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-2 text-center leading-[48px] font-roboto">
            Get the Latest
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 sm:mb-8 text-center leading-[48px] font-roboto">
            Educational Updates
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-blue-900 font-medium text-lg sm:text-base font-poppins">
              Sign Up For Our Newsletter
            </span>
            <div className="flex items-center w-full sm:w-auto">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="border-b-2 border-blue-900 bg-transparent px-4 py- text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-900 w-full sm:w-64 text-sm sm:text-base"
              />
              <Button className="ml-4 bg-transparent hover:bg-gray-200 p-2 transition-colors">
                <ArrowRight className="w-5 h-5 text-blue-900" />
              </Button>
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
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
              CONNECT WITH US
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        id="footer"
        className="flex flex-col w-full gap-10 px-6 py-12 bg-[#03336d] text-white sm:gap-12 md:flex-row md:flex-wrap md:gap-x-16 md:gap-y-10 lg:gap-20 lg:px-[174px] lg:py-20"
      >
        <div className="w-full md:w-[calc(50%-32px)] lg:w-[500px]">
          <div className="flex flex-col items-start gap-6">
            <img
              className="w-[196.73px] h-[47.5px]"
              alt="Navo Logo"
              src="/logo.png"
            />
            <p className="text-white font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]">
              Stay up to date on the latest features and releases by joining our
              newsletter.
            </p>
            <div className="flex flex-col items-start gap-4 w-full">
              <p className="text-white font-text-tiny-normal text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white font-text-regular-semi-bold text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)]">
              Column One
            </h3>
            <nav className="flex flex-col items-start w-full">
              {columnOneLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-start px-0 py-2 w-full text-white font-text-small-normal text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white font-text-regular-semi-bold text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)]">
              Column Two
            </h3>
            <nav className="flex flex-col items-start w-full">
              {columnTwoLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-start px-0 py-2 w-full text-white font-text-small-normal text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white font-text-regular-semi-bold text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)]">
              Follow us
            </h3>
            <nav className="flex flex-col items-start w-full">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 px-0 py-2 w-full"
                >
                  {social.icon}
                  <span className="text-white font-text-small-normal text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap hover:underline">
                    {social.name}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
