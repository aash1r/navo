"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const destinations = [
  {
    name: "Avoid the common pitfalls of the college admissions process",
    bgColor: "bg-red-500",
  },
  {
    name: "Write compelling college essays that wow admissions officers",
    bgColor: "bg-blue-600",
  },
  {
    name: "Submit powerful letters of recommendation filled with specifics",
    bgColor: "bg-green-600",
  },
  {
    name: "Show interest in schools appropriately",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Demonstrate a singular hook rather than well-roundedness",
    bgColor: "bg-purple-600",
  },
  {
    name: "Seek out unique extracurricular activities and summer plans",
    bgColor: "bg-orange-500",
  },
  {
    name: "Select the right universities to which to apply",
    bgColor: "bg-pink-600",
  },
  {
    name: "Strategize on an Early Decision/Early Action plan",
    bgColor: "bg-teal-600",
  },
  {
    name: "Overcome inherent discrimination in the admissions process",
    bgColor: "bg-indigo-500",
  },
  {
    name: "Prep for the SAT / ACT and other standardized tests",
    bgColor: "bg-emerald-600",
  },
  {
    name: "Help students earn admission to top graduate schools and prep schools",
    bgColor: "bg-cyan-600",
  },
];

export default function CounselorsHelpStudents() {
  const [showAll, setShowAll] = useState(false);

  const displayedDestinations = showAll
    ? destinations
    : destinations.slice(0, 8);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex-1 text-center">
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-[#03336d] text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-[56px] md:leading-[68px] tracking-[-0.5px]">
              NAVO COACH&apos;S COLLEGE
              <br />
              COUNSELORS HELP STUDENTS:
            </h2>
          </div>

          <Button
            variant="ghost"
            className="text-[#03336d] hover:text-[#03336d] hover:bg-transparent p-0 h-auto font-medium ml-4"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See all"}
            {showAll ? (
              <ArrowDownRight className="ml-2 h-4 w-4" />
            ) : (
              <ArrowUpRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {displayedDestinations.map((destination, index) => (
            <div
              key={`${destination.name}-${index}`}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${destination.bgColor}`}
            >
              {/* Colored Block */}
              <div className="relative aspect-[4/3] w-full flex items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-md md:text-lg lg:text-xl tracking-wide leading-snug">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show transition message when expanding */}
        {showAll && destinations.length > 8 && (
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Showing all {destinations.length} destinations
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
