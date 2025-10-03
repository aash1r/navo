import React from "react";
import Logo from "@/public/navoLogo.png";
import Image from "next/image";
import Book from "@/public/Navo-Book-Icon.png";
import Icon from "@/public/icon.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r md:mt-24 mt-20  bg-[#03336d]  min-h-[600px] flex items-center overflow-hidden">
        {/* Background Icon - Left Side */}
        <div className="absolute -left-28 md:-left-36 top-1/2 -translate-y-1/2 opacity-10">
          <Image
            src={Icon}
            width={700}
            height={500}
            className="md:w-[700px] md:h-[700px]"
            alt="icon"
          />
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl mt-5 sm:mt-0 font-bold leading-tight">
                  Undergrad Counseling
                  <br />
                  Success Starts
                </h1>
                <div className="flex items-center  text-3xl lg:text-4xl">
                  <span className="font-bold">With</span>
                  {/* <span className="font-bold text-green-400">navo</span> */}
                  <Image src={Logo} width={140} height={80} alt="logoLoading" />
                </div>
              </div>
              <Link href="/connect">
                <button className="group flex items-center gap-3 bg-gradient-to-r from-purple-600  to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white px-3 py-2 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  CONNECT WITH US
                  <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                    {/* <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-purple-600"
                  >
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                    <FaArrowRight size={25} className="text-black" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Right Side - Open Book Icon */}
            <div className="flex justify-center lg:justify-end">
              <Image src={Book} alt="book" height={400} width={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
