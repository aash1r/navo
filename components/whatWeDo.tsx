import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCapIcon, UserIcon } from "lucide-react";
const serviceCards = [
  {
    icon: GraduationCapIcon,
    title: "UNDERGRADUATE COUNSELING",
    description:
      "Expert guidance for high school students navigating college admissions from building a school list to crafting standout applications.",
  },
  {
    icon: UserIcon,
    title: "GRADUATE COUNSELLING",
    description:
      "Strategic support for applicants pursuing Master's, MBA, or PhD programs — from selecting programs to perfecting personal statements and CVs.",
  },
];
export default function WhatWeDo() {
  return (
    <>
      <div className="flex h-[522px] items-center justify-center gap-2.5 pt-[3px] pb-0 px-[118px] relative self-stretch w-full">
        <div className="flex flex-col w-[1139px] h-[493px] items-center gap-[38px] relative ml-[-4.50px] mr-[-4.50px]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#03336d] text-[55.8px] text-center tracking-[0] leading-[normal]">
            WHAT WE DO
          </h2>

          <div className="flex w-[1120px] items-start justify-center gap-8 pt-[22px] pb-0 px-0 relative flex-[0_0_auto]">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="group relative w-[510.72px] h-[325.53px] cursor-pointer"
              >
                {/* Purple card - bottom layer */}
                <div className="absolute w-[510px] top-[56px] h-[270px] bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 border-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-10"></div>

                {/* Gray card - middle layer */}
                <div
                  className="absolute w-[510px] top-[76px] h-[250px] 
  bg-[#c8dbfb]
  border-0 rounded-[20px] 
  opacity-40 group-hover:opacity-100 
  transition-opacity duration-500 ease-in-out 
  rounded-[20px] z-20"
                ></div>

                {/* Main blue card - top layer */}

                <Card
                  className="group 
  absolute top-0 left-1/2 -translate-x-1/2 
  w-[444px] h-[326px] 
  bg-gradient-to-br from-[#6BA3F5] to-[#96c3f7] 
  border-0 rounded-[20px] overflow-hidden 
  transition-transform duration-500 ease-in-out z-30
  hover:scale-x-105
  group-hover:bg-gradient-to-br group-hover:from-[#1E3A8A] group-hover:to-[#1E40AF]
  "
                >
                  <CardContent className="p-6 flex flex-col h-full relative">
                    {/* Icon */}
                    <div className="mb-6">
                      <service.icon className="w-[60px] h-[60px] text-white/80 group-hover:text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="[font-family:'Arial-Black',Helvetica] font-black text-white text-[19.1px] leading-[34.1px] max-w-[400px] group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 [font-family:'Arial-Regular',Helvetica] font-normal text-white/80 text-[14.2px] leading-[18.1px] group-hover:text-white/90">
                      {service.description}
                    </p>

                    <button
                      className="relative z-10 mt-auto w-full py-3 rounded-full 
  bg-white text-black 
  font-semibold transition
  group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-red-500 group-hover:text-white group-hover:opacity-90"
                    >
                      View Details
                    </button>
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
