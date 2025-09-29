"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwipeItem {
  id: number;
  image: string;
  title: string;
  details: string;
  category: string;
}

const swipeData: SwipeItem[] = [
  {
    id: 1,
    image: "/sw1.png",
    title: "Discover Your Edge Early",
    category: "You",
    details: `College admissions reward early, strategic preparation. We can help you:
    Assess your strengths, values & interests
    Craft an authentic personal brand
    Choose schools that match your goals
    Plan tests & academic milestones`,
  },
  {
    id: 2,
    image: "/sw2.png",
    title: "Build A Strong Resume",
    category: "You",
    details: `
    Admissions committees value depth and genuine engagement over extensive activity lists. We help students focus on pursuits that showcase genuine passion and leadership:
    Develop a focused extracurricular profile with clear progression
    Utilize summers strategically for high‑impact programs, internships, or projects

`,
  },
  {
    id: 3,
    image: "/sw3.png",
    title: "Build a Compelling Narrative ",
    category: "You",
    details: `Your personal story is your greatest strength. We help you build cohesive, memorable applications by:
Identifying unique essay themes
Crafting authentic personal statements & supplements
Aligning every component into one clear, compelling narrative
`,
  },
  {
    id: 4,
    image: "/sw4.png",
    title: "Apply with Strategy",
    category: "You",
    details: `Strategic planning and informed decisions outperform last‑minute efforts. We guide students through every critical choice:
Finalize a balanced safety, match, and reach school list
Develop Early Decision/Early Action strategies aligned with your goals
Demonstrate genuine interest via targeted essays, interviews, and follow‑up`,
  },

  {
    id: 5,
    image: "/sw5.png",
    title: "Secure Strong Recommendations",
    category: "You",
    details: `Effective recommendation letters showcase your character, not just your achievements:
Guide mentors to write vivid, specific testimonials
Equip recommenders with tailored insights into your impact and growth`,
  },

  {
    id: 6,
    image: "/sw6.png",
    title: "Finish Strong",
    category: "You",
    details: `Final details and professional follow‑through can set you apart:
Prepare for interviews with structured practice and confidence building
Manage post‑submission updates and deferrals professionally
Optimize waitlist chances with strategic positioning`,
  },
];

export default function Swiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDirection(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
    setDirection(diff > 0 ? "right" : "left");
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const threshold = 80; // Reduced threshold for mobile
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < swipeData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setDirection(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDirection(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
    setDirection(diff > 0 ? "right" : "left");
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < swipeData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setDirection(null);
  };

  const nextSlide = () => {
    if (currentIndex < swipeData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!isDragging) return;
      const diff = e.clientX - startX;
      setDragOffset(diff);
      setDirection(diff > 0 ? "right" : "left");
    };

    const handleMouseUpGlobal = () => {
      if (!isDragging) return;

      const threshold = 100;
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else if (dragOffset < 0 && currentIndex < swipeData.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }

      setIsDragging(false);
      setDragOffset(0);
      setDirection(null);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMoveGlobal);
      document.addEventListener("mouseup", handleMouseUpGlobal);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveGlobal);
      document.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, [isDragging, startX, dragOffset, currentIndex]);

  const detailLines = swipeData[currentIndex].details
    .split("\n")
    .filter((line) => line.trim() !== "");
  const introLine = detailLines[0];
  const bulletPoints = detailLines.slice(1);

  return (
    <div className="py-4 sm:py-8 mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <p className="font-['Poppins',Helvetica] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-12 tracking-tight text-center">
          HOW WE{" "}
          <span className="relative inline-block">
            WORK
            <img
              src="/underline.png"
              alt="underline"
              className="absolute -bottom-2 left-0 w-full h-2"
            />
          </span>
        </p>
        <p className="font-['Poppins',Helvetica] text-3xl text-gray-800 leading-relaxed mb-6 text-center">
          Your Roadmap to a Winning Application: The NAVO 6-Step Process
        </p>
        {/* <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start"> */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-center">
          {/* Content Section - First on large screens */}
          {/* <div className="w-full lg:flex-1 space-y-6 order-2 lg:order-1 mt-4 sm:mt-20"> */}
          <div className="w-full lg:flex-1 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {swipeData[currentIndex].category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {currentIndex + 1} / {swipeData.length}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-500 leading-tight">
                  {swipeData[currentIndex].title}
                </h2>

                {/* <p className="text-gray-700 leading-relaxed transition-all duration-500 text-base sm:text-lg">
                  {swipeData[currentIndex].details}
                </p> */}
                <div className="text-gray-700 leading-relaxed transition-all duration-500 text-base sm:text-lg space-y-3">
                  <p>{introLine}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop Navigation Controls */}
              <div className="hidden lg:flex items-center justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-gray-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {swipeData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={nextSlide}
                  disabled={currentIndex === swipeData.length - 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-gray-50"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Swiper Section - Second on large screens, First on mobile */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <div className="relative w-full max-w-lg sm:max-w-md lg:max-w-lg mx-auto">
              <div
                ref={containerRef}
                className="relative h-[600px] sm:h-[600px] lg:h-[700px] perspective-1000"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
              >
                {/* LEFT and RIGHT Arrows for large screens */}
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100 disabled:opacity-40"
                >
                  <ChevronLeft className="text-gray-800" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex === swipeData.length - 1}
                  className="flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100 disabled:opacity-40"
                >
                  <ChevronRight className="text-gray-800" />
                </button>

                {/* Swipeable images rendering below... */}

                {swipeData.map((item, index) => {
                  const isActive = index === currentIndex;
                  const isPrev = index < currentIndex;
                  const isNext = index > currentIndex;

                  let transform = "";
                  let zIndex = 0;
                  let opacity = 0;
                  const scale = 1;

                  if (isActive) {
                    const rotation = dragOffset * 0.05;
                    const translateX = dragOffset;
                    transform = `translateX(${translateX}px) rotateZ(${rotation}deg) scale(${scale})`;
                    zIndex = 10;
                    opacity = 1;
                  } else if (isPrev) {
                    transform =
                      "translateX(-15px) translateY(10px) rotateZ(-5deg) scale(0.92)";
                    zIndex = 5;
                    opacity = 0.6;
                  } else if (isNext) {
                    transform =
                      "translateX(15px) translateY(10px) rotateZ(5deg) scale(0.92)";
                    zIndex = 5;
                    opacity = 0.6;
                  }

                  return (
                    <div
                      key={item.id}
                      className="absolute inset-0 transition-all duration-300 ease-out flex justify-center items-center overflow-x-hidden"
                      style={{
                        transform,
                        zIndex,
                        opacity,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="w-[300px] h-[400px] sm:w-[420px] sm:h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-white">
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Action Buttons */}
              {/* <div className="flex justify-center items-center gap-6 mt-6 lg:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="w-12 h-12 rounded-full border-2 hover:bg-blue-200 hover:border-blue-200 disabled:opacity-30"
                >
                  <ChevronLeft className="h-5 w-5 text-blue-900" />
                </Button>

                <div className="flex gap-2">
                  {swipeData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-600 w-6"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  disabled={currentIndex === swipeData.length - 1}
                  className="w-12 h-12 rounded-full border-2 hover:bg-blue-200 hover:border-blue-200 disabled:opacity-30"
                >
                  <ChevronRight className="h-5 w-5 text-blue-900" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
