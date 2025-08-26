"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Headphones, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const phoneNumber = "923360348013"; // Format: countrycode + number
  const message = encodeURIComponent(
    "Hi Aman, I saw your project and wanted to connect!"
  );

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="max-[1023px]:flex hidden items-center justify-center text-gray-900 hover:text-gray-600"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-6 mt-6">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              Explore
            </a>
            <a
              href="/connect"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              Connect
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              MyNavoPortal
            </a>
            <button
              onClick={handleClick}
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2 flex items-center space-x-2"
            >
              <span>
                <FaWhatsapp className="text-green-500 w-6 h-6" />{" "}
              </span>
              <span>WhatsApp</span>
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
