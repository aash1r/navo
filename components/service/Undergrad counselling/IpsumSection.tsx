import React from "react";

const IpsumSection = () => {
  return (
    <div className="md:min-h-[350px] py-10 md:py-0 flex items-center justify-center bg-gradient-to-tr from-[#03336D] to-[#0073FF] px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-tight">
          <span className="inline-block ">
            LOREM
            <img
              src="/underline11.png"
              alt="underline"
              className="w-28 md:w-72 h-2"
            />
          </span>{" "}
          IPSUM IS SIMPLY DUMMY
          <br />
          TEXT OF THE PRINTING AND
        </h1>
      </div>
    </div>
  );
};

export default IpsumSection;
