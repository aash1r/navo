"use client";
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
export default function WeWorkSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <div className="md:min-h-screen my-12 md:my-20 bg-[#E5ECF3BD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            HOW WE{" "}
            <span className="relative inline-block">
              WORK
              <img
                src="/underline.png"
                alt="underline"
                className="w-full h-2"
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4">
            Your Roadmap to a Winning Application: The NAVO 6-Step Process
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-blue-900">
            {!isVideoPlaying ? (
              // Thumbnail with Play Button
              <div className="relative aspect-video bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop"
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <FaPlay className="text-blue-900 text-2xl sm:text-3xl ml-2" />
                  </button>
                </div>
              </div>
            ) : (
              // Video Player
              <div className="relative aspect-video">
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title="How We Work Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Close Button */}
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10"
                >
                  <FaTimes className="text-white text-xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
