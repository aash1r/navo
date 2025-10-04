import NavogateUniverse from "@/components/navogateUniverse";
import GradeNineToElevenSection from "@/components/service/Undergrad counselling/GradeNineToElevenSection";
import GradeSection from "@/components/service/Undergrad counselling/GradeSection";
import GradeSevenToEigthSection from "@/components/service/Undergrad counselling/GradeSevenToEigthSection";
import GradeTwelve_Thirteen_Section from "@/components/service/Undergrad counselling/GradeTwelve_Thirteen_Section";
import HeroSection from "@/components/service/Undergrad counselling/HeroSection";
import IpsumSection from "@/components/service/Undergrad counselling/IpsumSection";
import Transfer from "@/components/service/Undergrad counselling/Transfer";
import WeWorkSection from "@/components/service/Undergrad counselling/WeWorkSection";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMeta } from "react-icons/si"; // Meta (Special from Simple Icons)
const page = () => {
  return (
    <>
      <HeroSection />
      <GradeSection />
      <IpsumSection />
      <GradeSevenToEigthSection />
      <GradeNineToElevenSection />
      <GradeTwelve_Thirteen_Section />
      <Transfer />
      <NavogateUniverse />
      <WeWorkSection />

      {/* Footer Start */}
      <footer
        id="footer"
        className="bg-[#03336d] text-white px-6 py-12 lg:px-0 lg:py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className=" md:flex  justify-between ">
            <div className="space-y-6">
              <img
                className="w-[150px] h-auto"
                alt="Navo Logo"
                src="/navoLogo.png"
              />

              <div className="space-y-3">
                <p className="text-white text-base leading-relaxed">
                  Stay up to date on the latest features and releases by joining
                  our newsletter.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>

              <div className="pt-4">
                <img
                  className="w-[150px] h-auto"
                  alt="KHDA Certification"
                  src="/khda-logo.png"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Quick Links
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                    >
                      ABOUT US
                    </a>
                    <a
                      href="#"
                      className="block border-b w-fit  text-white/80 hover:text-white transition-colors text-sm"
                    >
                      SERVICES
                    </a>
                    <a
                      href="#"
                      className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                    >
                      EXPLORE
                    </a>
                    <a
                      href="#"
                      className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                    >
                      MYNAVOPORTAL
                    </a>
                  </nav>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Others
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                    >
                      PARTNERS
                    </a>
                    <a
                      href="#"
                      className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                    >
                      TESTIMONIALS
                    </a>
                    <a
                      href="#"
                      className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                    >
                      TERMS & CONDITIONS
                    </a>
                    <a
                      href="#"
                      className="block border-b w-fit  text-white/80 hover:text-white transition-colors text-sm"
                    >
                      PRIVACY POLICY
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 lg:gap-16">
            <p className="text-white/80 text-sm flex items-center gap-2">
              ©2024 All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574014345229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-500 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/navo.ed?igsh=eGd5ZDVuZjBrdGs="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-sky-400 transition-colors"
              >
                <SiMeta size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@navo1482?_t=ZS-8zxyInM47Hj&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-red-500 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
