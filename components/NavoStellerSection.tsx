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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 lg:gap-8">
            {/* Logo Title */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <h1 className="font-poppins font-bold text-[#03336d] text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[75px] xl:text-[80px] leading-tight tracking-tight">
                NAVO <br />
                STELLAR
              </h1>
              <p className="text-2xl">Stand Out. Get In. Succeed.</p>
            </div>

            {/* Text and Image Section */}
            <div className="w-full bg-white px-1 sm:px-3 lg:px-1">
              {/* Image Row with Arrow Button */}
              <div className="relative flex items-center justify-center lg:justify-end min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                {/* Image Slider */}
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-transform duration-500 ease-in-out overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                  {visibleImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative w-[90px] sm:w-[110px] md:w-[140px] lg:w-[170px] xl:w-[200px] 2xl:w-[225px] aspect-[225/336] rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                      onClick={openModal}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Student ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 90px, (max-width: 768px) 110px, (max-width: 1024px) 140px, (max-width: 1280px) 170px, (max-width: 1536px) 200px, 225px"
                      />

                      {/* Play Button Overlay - Hidden on mobile, shown on hover for larger screens */}
                      <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 lg:p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-blue-900 fill-blue-900" />
                        </div>
                      </div>

                      {/* Always visible play button for mobile */}
                      <div className="sm:hidden absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg">
                          <Play className="h-5 w-5 text-blue-900 fill-blue-900" />
                        </div>
                      </div>

                      {/* Touch feedback for mobile */}
                      <div className="sm:hidden absolute inset-0 active:bg-black/10 transition-colors duration-150" />
                    </div>
                  ))}
                </div>

                {/* Arrow Button with responsive positioning */}
                <Button
                  onClick={handleNext}
                  className="absolute top-1/2 right-1 sm:right-2 md:right-0 lg:right-[-1.5rem] xl:right-[-2rem] -translate-y-1/2 
rounded-lg bg-blue-900 hover:bg-blue-800 active:bg-blue-700
h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 
flex items-center justify-center p-0 transition-all duration-200 shadow-lg hover:shadow-xl z-10
touch-manipulation"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
                </Button>
              </div>
            </div>
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
