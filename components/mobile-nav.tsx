"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const phoneNumber = "923250341777"; // Format: countrycode + number
  const message = encodeURIComponent("");

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
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

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`uppercase font-bold text-gray-700 hover:text-gray-900`}
              >
                Services ▾
              </button>

              {/* Dropdown menu */}
              {servicesOpen && (
                <div className="absolute left-0 mt-0 w-80 bg-white shadow-lg rounded-lg py-2 z-50">
                  <Link
                    href="/undergraduate"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Undergraduate Counselling
                  </Link>

                  <Link
                    href="/services/graduate"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Graduate & MBA
                  </Link>
                </div>
              )}
            </div>

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
