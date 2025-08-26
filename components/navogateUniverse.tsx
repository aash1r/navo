import React from 'react'
import { Button } from './ui/button'

export default function NavogateUniverse() {
  return (
    <div>
       {/* Conquest Section */}
            <section className="bg-[#03336d] py-20 px-6 lg:px-24 relative overflow-hidden">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="font-['Poppins',Helvetica] font-black text-5xl sm:text-8xl text-white leading-none tracking-tight mb-8">
                  <span className="block">NAVOGATE YOUR</span>
                  <span className="block relative">
                    <span className="underline decoration-yellowCust underline-offset-4">
                      UNIVERSE
                    </span>
                  </span>
                  <span className="block">WITH US</span>
                </h1>
      
                <div className="max-w-3xl mx-auto mb-12">
                  <p className="font-['Poppins',Helvetica] text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-12">
                    If you're interested in Navo's college counseling, fill
                    <br />
                    out our complimentary consultation form and we'll be
                    <br />
                    in touch.
                  </p>
      
                  <a href='/connect' className="uppercase bg-yellowCust hover:bg-yellowCust/90 text-blue-900 font-['Poppins',Helvetica] font-normal text-md px-12 py-4 transition-all duration-300 transform hover:scale-105 rounded-xl">
                    Connect
                  </a>
                </div>
              </div>
            </section>
    </div>
  )
}
