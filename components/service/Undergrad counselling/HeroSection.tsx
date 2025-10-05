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
      <div className="relative bg-gradient-to-r md:mt-24 mt-20   bg-[#03336d]  md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Icon - Left Side */}
        <div className="absolute -left-16 md:-left-32 md:top-1/2 top-1/3   -translate-y-1/2 opacity-10">
          <Image
            src={Icon}
            width={700}
            height={500}
            className="md:w-[700px] h-[350px] w-[350px] md:h-[700px]"
            alt="icon"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="grid  lg:grid-cols-2 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8  ">
              <div className="">
                <h1 className="text-4xl lg:text-6xl mt-5 sm:mt-0 font-bold ">
                  Undergrad Counseling
                  <br />
                  Success Starts
                </h1>
                <div className="flex items-center  text-3xl lg:text-4xl">
                  <span className="font-bold">With</span>
                  <Image src={Logo} width={140} height={80} alt="logoLoading" />
                </div>
              </div>
              <Link href="/connect">
                <button className="group flex text-sm items-center md:mt-12 gap-3 bg-gradient-to-r from-[#635AD9]  to-[#FF4848] hover:from-[#FF4848] hover:to-[#635AD9] text-white md:px-3 md:py-2 px-2 py-1 rounded-full font-semibold md:text-lg transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl">
                  CONNECT WITH US
                  <div className="bg-white/80  rounded-full md:p-3 p-1 group-hover:translate-x-1 transition-transform">
            
                    <FaArrowRight size={20} className="text-black" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Right Side - Open Book Icon */}
            <div className="flex justify-center  lg:justify-end">
              <Image src={Book} alt="book" height={400} width={500}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
