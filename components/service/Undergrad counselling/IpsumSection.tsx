import React from 'react'

const IpsumSection = () => {
  return (
<div className="min-h-[500px] flex items-center justify-center bg-[#03336d] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-tight">
          <span className="inline-block pb-2">
            LOREM
             <img
                  src="/underline.png"
                  alt="underline"
                  className="w-full h-2"
                />
          </span>
          {" "}IPSUM IS SIMPLY DUMMY
          <br />
          TEXT OF THE PRINTING AND
        </h1>
      </div>
    </div>
  )
}

export default IpsumSection
