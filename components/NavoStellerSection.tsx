"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = ["/ns1.png", "/ns2.png", "/ns3.png"];

export default function ImageSliderSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Get 3 consecutive images in circular manner
  const visibleImages = [
    images[startIndex % images.length],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <>
      <div className="bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <h1 className="font-['Poppins',Helvetica] font-bold text-[#03336d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-4">
              NAVO <span className="relative">
                STELLAR
                <span className="underline decoration-yellowCust underline-offset-4"></span>
              </span>
            </h1>
            <p className="font-['Poppins',Helvetica] text-lg sm:text-xl text-gray-600">Stand Out, Get In, Succeed.</p>
          </div>

          {/* Image Slider Section */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <Button
              onClick={() => setStartIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-0 z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>

            {/* Image Container */}
            <div className="flex gap-4 sm:gap-6 justify-center items-center px-16">
              {visibleImages.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] shadow-lg"
                  onClick={openModal}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Student ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Play className="h-6 w-6 text-blue-900 fill-blue-900" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <Button
              onClick={handleNext}
              className="absolute right-0 z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-2 sm:p-4">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <Button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 sm:p-2 h-auto w-auto transition-colors"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Video Player */}
            <div className="relative w-full">
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain"
                controls
                autoPlay
                preload="metadata"
                playsInline
              >
                <source src="/placeholder-video.mp4" type="video/mp4" />
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
}
