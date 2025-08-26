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

      {/* Track Record Section */}
      <section
        ref={sectionRef}
        className="bg-white py-16 md:py-24 px-6 lg:px-24"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="font-['Poppins',Helvetica] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-12 tracking-tight">
            NAVO&apos;s TRACK RECORD : PROVEN SUCCESS
          </h1>
          <p className="font-['Poppins',Helvetica] text-3xl text-gray-800 leading-relaxed mb-6">
            When Strategy Meets Talent, Admissions Say Yes
          </p>
          <p className="font-['Poppins',Helvetica] text-xl text-gray-800 leading-relaxed mb-6">
            With hundreds of students coached, 80% early acceptance success,
            100% students got admission and millions in scholarships awarded, we
            don’t just guide — we deliver.These results aren't exceptions —
            they’re the NAVO standard.
          </p>

          <div className="bg-white py-4 px-4 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#03336d]/90">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-center py-6 px-4 flex flex-col justify-center items-center"
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

      {/* Main Content */}
      <Swiper />

      {/* Our Services */}
      <div className="bg-blue-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight font-['Poppins',Helvetica]">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 mb-4 uppercase">
              Our Services
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
