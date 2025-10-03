"use client"
import { Button } from './ui/button';
import React, { useState } from 'react'
import { ArrowRight } from "lucide-react";

type AboveFooterProps = {
  ctaRef: React.RefObject<HTMLDivElement>; // 👈 type define
   isAboveFooter?: boolean;
};

const AboveFooter: React.FC<AboveFooterProps> = ({ ctaRef,isAboveFooter }) => {
 

  return (
    <div
      ref={ctaRef}
      className={`w-full bg-white border-t z-50 transition-all duration-200 ease-in-out ${
        isAboveFooter ? "relative" : "fixed bottom-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="font-medium text-gray-900 text-sm sm:text-base">
            Fill out our short form for a consultation to learn about Navo
            services.
          </p>
          <a href="/connect">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
              CONNECT WITH US
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboveFooter;
