import React from "react";

const FreeTrial = () => {
  return (
    <>
      <div className="md:container md:mx-auto my-36 px-2  sm:px-20">
        <div className="grid grid-cols-12 sm:gap-8  items-center">
          <h1
            className="text-[42px] sm:text-[60px] font-semibold text-[#2c3e4f]
        col-span-12
            sm:col-span-5
        "
          >
            Get a 7-day <br />{" "}
            <span className="text-pink-400"> free trial</span>
          </h1>
          <div
            className="trail-box 
            mt-5
            sm:mt-0
bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] p-4 sm:py-[50px] sm:pr-[45px] sm:pl-[45px]
 relative
border-4 border-[#f8e9ed]
col-span-12
sm:col-span-7 "
          >
            <p className="text-[#2c3e4f] text-[16px] sm:text-[18px] leading-9">
              Create an Our CMS account and get a free license. Unrestricted
              and loaded with all our features, it's suitable for any project,
              whether personal or commercial. Begin your journey with Our
              CMS today.
            </p>


            <button className="group relative m-1 cursor-pointer overflow-hidden rounded-lg border-2 border-pink-500 px-5 py-4 font-medium text-sm w-[160px] mt-8 bg-white ">
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span className="ease relative text-pink-500 transition duration-300 group-hover:text-[#fff]">
              Get Started
            </span>
          </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
