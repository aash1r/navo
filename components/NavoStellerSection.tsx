"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronsLeft, ChevronsRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialVideos = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/8X_as5BV4TE/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/8X_as5BV4TE",
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/jdKkSLBnGUg/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/jdKkSLBnGUg",
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/rrKmIwTm7V8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/rrKmIwTm7V8",
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/--3Ip-WUsz8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/--3Ip-WUsz8",
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/u3DYjUBbcs8/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/u3DYjUBbcs8",
  },
];

export default function ImageSliderSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(2);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialVideos.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length
    );
  };

  const openModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null); // ⛔ iframe unmount hoga → video stop ho jayegi
  };

  // responsive count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const visibleVideos = testimonialVideos
    .slice(startIndex, startIndex + visibleCount)
    .concat(
      testimonialVideos.slice(
        0,
        Math.max(0, startIndex + visibleCount - testimonialVideos.length)
      )
    );

  return (
    <>
      {/* Slider */}
      <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <ChevronsLeft
              onClick={handlePrev}
              className="absolute left-0 sm:-left-10 text-[#03336d] 
               w-10 h-10 sm:w-12 sm:h-12 cursor-pointer z-10"
            />

            <div className="flex gap-3 sm:gap-4 md:gap-5 justify-center items-center px-6 sm:px-10">
              {visibleVideos.map((video) => (
                <div
                  key={video.id}
                  className="relative w-[150px] sm:w-[200px] md:w-[220px] lg:w-[240px] aspect-[3/4] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer hover:scale-[1.02] shadow-lg transition-transform"
                  onClick={() => openModal(video.video)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={`Testimonial ${video.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white/90 rounded-full p-2 sm:p-3">
                      <Play className="h-4 w-4 sm:h-6 sm:w-6 text-blue-900 fill-blue-900" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ChevronsRight
              onClick={handleNext}
              className="absolute right-0 sm:-right-10 text-[#03336d] 
               w-10 h-10 sm:w-12 sm:h-12 cursor-pointer z-10"
            />
          </div>
        </div>
      </div>

      {/* Modal with manual close */}
     {isModalOpen && selectedVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
    <div className="relative w-full max-w-[90vw] sm:max-w-2xl lg:max-w-4xl rounded-lg overflow-hidden shadow-2xl">
      
      {/* ❌ Close Button Overlay */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-20 z-50 bg-black/70 hover:bg-black/90 text-white rounded-full p-2"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Video Frame */}
      <div className="relative w-full aspect-video">
        <iframe
          key={selectedVideo} 
          className="w-full h-full"
          src={`${selectedVideo}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}

    </>
  );
}
