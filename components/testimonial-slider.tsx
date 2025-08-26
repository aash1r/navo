"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the testimonial data structure
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  institutionLogo: string;
  image: string;
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    quote:
      "Navo has been a game-changer for my college application process. The expert consultants provided invaluable guidance and support, helping me navigate through the complexities of the admissions journey.",
    name: "John Doe",
    role: "PHD Student",
    institutionLogo: "/university-logo.png",
    image: "/avatar-image1.png?height=48&width=48",
  },
  {
    quote:
      "Working with Navo was the best decision I made during my college application process. Their personalized approach and deep understanding of what universities look for helped me secure admission to my dream school.",
    name: "Sarah Johnson",
    role: "Undergraduate",
    institutionLogo: "/university-logo.png",
    image: "/avatar-image2.png?height=48&width=48",
  },
  {
    quote:
      "The counselors at Navo truly understand the nuances of college admissions. They helped me craft a compelling narrative that highlighted my unique strengths and experiences, which I believe made all the difference.",
    name: "Michael Chen",
    role: "Graduate Student",
    institutionLogo: "/university-logo.png",
    image: "/avatar-image3.png?height=48&width=48",
  },
  {
    quote:
      "I was feeling overwhelmed by the college application process until I found Navo. Their step-by-step guidance and expert advice transformed my applications and helped me stand out from the crowd.",
    name: "Emily Rodriguez",
    role: "Freshman",
    institutionLogo: "/university-logo.png",
    image: "/avatar-image4.png?height=48&width=48",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stars */}
      <div className="flex justify-center mb-6 sm:mb-8">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-current"
          />
        ))}
      </div>

      {/* Navigation and Content */}
      <div className="relative">
        {/* Navigation Arrows */}
        <Button
          onClick={handlePrevious}
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 rounded-xl bg-blue-900 hover:bg-blue-800 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center p-0 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </Button>

        <Button
          onClick={handleNext}
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 rounded-xl bg-blue-900 hover:bg-blue-800 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center p-0 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </Button>

        {/* Testimonial Content */}
        <div className="sm:mx-16">
          <div className="relative w-full">
            <div className="transition-all duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className={cn(
                    "font-roboto font-medium text-lg sm:text-xl text-gray-800 leading-relaxed mb-8 sm:mb-12 text-center transition-opacity duration-500",
                    currentIndex === index
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  )}
                >
                  "{testimonial.quote}"
                </blockquote>
              ))}
            </div>
          </div>

          {/* Profile */}
          <div className="flex flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-roboto font-semibold text-gray-900">
                  {currentTestimonial.name}
                </div>
                <div className="font-roboto text-gray-600 text-sm">
                  {currentTestimonial.role}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                className="w-[2px] h-[75px]"
                alt="Divider"
                src="/divider.svg"
              />
            </div>

            <div className="flex items-center space-x-2">
              <img
                className="w-[125.09px] h-[70.36px] object-cover"
                alt="uni logo"
                src={currentTestimonial.institutionLogo || "/placeholder.svg"}
              />
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-blue-900" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4 sm:hidden">
            <Button
              onClick={handlePrevious}
              className="rounded-lg bg-blue-900 hover:bg-blue-800 h-10 w-10 flex items-center justify-center p-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </Button>
            <Button
              onClick={handleNext}
              className="rounded-lg bg-blue-900 hover:bg-blue-800 h-10 w-10 flex items-center justify-center p-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
