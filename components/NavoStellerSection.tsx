"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialVideos = [
  {
    id: 1,
    thumbnail: "/testimonial-thumbnails/zarain.jpg",
    video: "/Navo Zarain Testimonial.mp4",
    // name: "Zarain"
  },
  {
    id: 2,
    thumbnail: "/testimonial-thumbnails/hasan.jpg",
    video: "/Navo Hasan Testimonial.mp4",
    // name: "Hasan"
  },
  {
    id: 3,
    thumbnail: "/testimonial-thumbnails/zannirah.jpg",
    video: "/Zannirah rehman.mp4",
    // name: "Zannirah Rehman"
  },
  {
    id: 4,
    thumbnail: "/testimonial-thumbnails/ahmed.jpg",
    video: "/Ahmed tariq.mp4",
    // name: "Ahmed Tariq"
  },
  {
    id: 5,
    thumbnail: "/testimonial-thumbnails/sarmad.jpg",
    video: "/Sarmad mirza- parent.mp4",
    // name: "Sarmad Mirza (Parent)"
  }
];

export default function ImageSliderSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialVideos.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
  };

  const openModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Get 4 consecutive videos in circular manner for display
  const visibleVideos = [
    testimonialVideos[startIndex % testimonialVideos.length],
    testimonialVideos[(startIndex + 1) % testimonialVideos.length],
    testimonialVideos[(startIndex + 2) % testimonialVideos.length],
    testimonialVideos[(startIndex + 3) % testimonialVideos.length],
  ];

  return (
    <>
      <div className="bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <h1 className="font-['Poppins',Helvetica] font-bold text-[#03336d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-4">
              NAVO <span className="relative inline-block">
                STELLAR
                <img 
                  src="/underline.png" 
                  alt="underline" 
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="font-['Poppins',Helvetica] text-lg sm:text-xl text-gray-600">Stand Out, Get In, Succeed.</p>
          </div>

          {/* Image Slider Section */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <Button
              onClick={handlePrev}
              className="absolute left-0 z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>

            {/* Video Thumbnails Container */}
            <div className="flex gap-3 sm:gap-4 justify-center items-center px-16">
              {visibleVideos.map((video, idx) => (
                <div
                  key={video.id}
                  className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] shadow-lg"
                  onClick={() => openModal(video.video)}
                >
                  {/* Video Thumbnail */}
                  <video
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    muted
                    preload="metadata"
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg">
                      <Play className="h-4 w-4 sm:h-6 sm:w-6 text-blue-900 fill-blue-900" />
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
                <source src={selectedVideo} type="video/mp4" />
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
