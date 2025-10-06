import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const serviceCards = [
  {
    icon: "/Navo-Book-Icon.png",
    title: "UNDERGRADUATE COUNSELING",
    path: "undergraduate",
    description:
      "Expert guidance for high school students navigating college admissions from building a school list to crafting standout applications.",
  },
  {
    icon: "/Navo-Bird-Icon.png",
    title: "GRADUATE COUNSELLING",
    path: "graduate",
    description:
      "Strategic support for applicants pursuing Master's, MBA, or PhD programs — from selecting programs to perfecting personal statements and CVs.",
  },
];
export default function WhatWeDo() {
  return (
    <>
      <div className="flex items-center justify-center gap-2.5 pt-16 pb-8 md:pb-0 px-4 md:px-8 lg:px-[118px] relative self-stretch w-full mb-[90px] sm:mb-0 lg:mb-0">
        <div className="flex flex-col w-full max-w-[1139px] min-h-[493px] md:h-[493px] items-center gap-6 md:gap-[38px] relative">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#03336d] text-[32px] md:text-[45px] lg:text-[55.8px] text-center tracking-[0] leading-[normal] px-4">
            WHAT{" "}
            <span className="relative inline-block">
              WE
              <img
                src="/underline.png"
                alt="underline"
                className="absolute -bottom-2 left-0 w-full h-2"
              />
            </span>{" "}
            DO
          </h2>

          <div className="flex flex-col lg:flex-row w-full max-w-[1120px] items-center lg:items-start justify-center gap-24 md:gap-32 pt-[22px] pb-0 px-4 md:px-0 relative flex-[0_0_auto]">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="group relative w-full max-w-[350px] md:max-w-[400px] lg:w-[510.72px] h-[280px] md:h-[300px] lg:h-[325.53px] cursor-pointer"
              >
                {/* Purple card - bottom layer */}
                <div
                  className="absolute w-full max-w-[350px] md:max-w-[460px] lg:w-[510px] top-[52px] md:top-[52px] lg:top-[48px] h-[220px] md:h-[240px] lg:h-[270px] 
  bg-gradient-to-br from-[#635AD9] to-[#FF4848] 
  border-0 rounded-[20px] opacity-0 group-hover:opacity-100 
  transition-all duration-500 ease-in-out 
  transform translate-y-2 group-hover:translate-y-0 
  z-10 left-1/2 -translate-x-1/2"
                />

                {/* Gray card - middle layer */}
                <div
                  className="absolute top-[78px] md:top-[78px] lg:top-[76px] 
  left-1/2 -translate-x-1/2
  w-full max-w-[350px] md:max-w-[460px] lg:w-[510px] 
  h-[200px] md:h-[220px] lg:h-[250px] 
  bg-[#c8dbfb]
  border-0 rounded-[20px] 
  opacity-40 group-hover:opacity-100 
  transition-opacity duration-500 ease-in-out 
  z-20"
                ></div>

                {/* Main blue card - top layer */}

                <Card
                  className="group 
  absolute top-0 left-1/2 -translate-x-1/2 
  w-full max-w-[320px] md:max-w-[389px] lg:w-[444px] h-[280px] md:h-[300px] lg:h-[326px] 
  bg-gradient-to-br from-[#B3D2FF] to-[#336DBF] 
  border-0 rounded-[20px] overflow-hidden 
  transition-transform duration-500 ease-in-out z-30
  hover:scale-x-105
  group-hover:bg-gradient-to-br group-hover:from-[#03336D] group-hover:to-[#0073FF]
  "
                >
                  <CardContent className="p-4 md:p-5 lg:p-6 flex flex-col h-full relative">
                    {/* Icon */}
                    <div className="mb-4 md:mb-5 lg:mb-6">
                      <Image
                        height={80}
                        alt="icons"
                        width={80}
                        src={service.icon}
                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] text-white/80 group-hover:text-white"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="[font-family:'Arial-Black',Helvetica] font-black text-white text-[16px] md:text-[17px] lg:text-[19.1px] leading-[24px] md:leading-[28px] lg:leading-[34.1px] max-w-[400px] group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt- [font-family:'Arial-Regular',Helvetica] font-normal text-white/80 text-[12px] md:text-[13px] lg:text-[14.2px] leading-[16px] md:leading-[17px] lg:leading-[18.1px] group-hover:text-white/90">
                      {service.description}
                    </p>
                    <Link
                      href={service.path}
                      className="relative z-10 mt-auto w-full py-2 md:py-2.5 lg:py-3 rounded-full text-sm md:text-base
  bg-white text-black font-semibold transition
  group-hover:bg-gradient-to-br group-hover:from-[#635AD9] group-hover:to-[#FF4848]
  group-hover:text-white group-hover:opacity-90 text-center block"
                    >
                      View Details
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
