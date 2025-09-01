"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronsLeft, ChevronsRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialVideos = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/8X_as5BV4TE/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/8X_as5BV4TE",
    videoId: "8X_as5BV4TE",
    // name: "Zarain"
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/jdKkSLBnGUg/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/jdKkSLBnGUg",
    videoId: "jdKkSLBnGUg",
    // name: "Hasan"
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/rrKmIwTm7V8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/rrKmIwTm7V8",
    videoId: "rrKmIwTm7V8",
    // name: "Zannirah Rehman"
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/--3Ip-WUsz8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/--3Ip-WUsz8",
    videoId: "--3Ip-WUsz8",
    // name: "Ahmed Tariq"
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/u3DYjUBbcs8/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/u3DYjUBbcs8",
    videoId: "u3DYjUBbcs8",
    // name: "Sarmad Mirza (Parent)"
  },
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
    setSelectedVideo("");
  };

  // Get videos for display - responsive count based on screen size
  const getVisibleVideos = () => {
    // Show 2 videos on mobile, 3 on tablet, 4 on desktop
    const counts = { mobile: 2, tablet: 3, desktop: 4 };
    const videos = [];
    for (let i = 0; i < counts.desktop; i++) {
      videos.push(testimonialVideos[(startIndex + i) % testimonialVideos.length]);
    }
    return videos;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <>
      <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="font-['Poppins',Helvetica] font-bold text-[#03336d] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-3 sm:mb-4 px-2">
              NAVO{" "}
              <span className="relative inline-block">
                STELLAR
                <img
                  src="/underline.png"
                  alt="underline"
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="font-['Poppins',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Stand Out, Get In, Succeed.
            </p>
          </div>

          {/* Image Slider Section */}
          <div className="relative flex items-center justify-center">
            {/* Left Shadow Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Right Shadow Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Left Arrow */}
            <ChevronsLeft
              onClick={handlePrev}
              className="text-[#03336d] w-12 h-12 sm:w-16 sm:h-16 cursor-pointer"
            />

            {/* <Button
              onClick={handlePrev}
              className="absolute left-0 sm:left-2 z-20 bg-transparent hover:bg-transparent flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20"
            >
              <ChevronsLeft className="text-[#03336d] w-12 h-12 sm:w-16 sm:h-16 cursor-pointer" />
            </Button> */}

            {/* Video Thumbnails Container */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center items-center px-12 sm:px-14 md:px-16">
              {visibleVideos.map((video, idx) => {
                // Responsive visibility classes
                let visibilityClass = "";
                if (idx >= 2) {
                  visibilityClass = "hidden md:block";
                }
                if (idx >= 3) {
                  visibilityClass = "hidden lg:block";
                }

                return (
                  <div
                    key={video.id}
                    className={`relative w-[80px] xs:w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] xl:w-[160px] aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] shadow-lg ${visibilityClass}`}
                    onClick={() => openModal(video.video)}
                  >
                    {/* Video Thumbnail */}
                    <Image
                      src={video.thumbnail}
                      alt={`Testimonial ${video.id}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 90px, (max-width: 768px) 110px, (max-width: 1024px) 130px, 160px"
                      onError={(e) => {
                        // Fallback to medium quality thumbnail if maxres/hqdefault fails
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('hqdefault')) {
                          target.src = target.src.replace('hqdefault.jpg', 'mqdefault.jpg');
                        } else if (target.src.includes('maxresdefault')) {
                          target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
                        }
                      }}
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg">
                        <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-900 fill-blue-900" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <ChevronsRight
              onClick={handleNext}
              className="text-[#03336d] w-12 h-12 sm:w-16 sm:h-16 cursor-pointer"
            />

            {/* <Button
              onClick={handleNext}
              className="absolute right-0 sm:right-2 z-20 bg-transparent hover:bg-transparent flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20"
            >
              <ChevronsRight className="text-[#03336d] w-12 h-12 sm:w-16 sm:h-16" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-3 sm:p-4 md:p-6">
          <div className="relative w-full max-w-[90vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <Button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 sm:p-1.5 md:p-2 h-auto w-auto transition-colors"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* YouTube Player */}
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={`${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
}
