import React from "react";
import { FaCheck } from "react-icons/fa6";
import PricingSwitchTwo from "./PricingSwitchTwo";
import PrimaryButton from "./PrimaryButton";
const PricingSection = () => {
  return (
    <div className="md:container md:mx-auto pb-20 px-4  sm:px-20" id="pricing">


<h1 className="sm:text-[52px] text-[#2c3e4f]  mb-14 text-[32px] font-[700]">Get started on <br/> MaintainX today</h1>
<div className="flex justify-center sm:justify-start my-10">

{/* <PricingSwitch/> */}
<PricingSwitchTwo/>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-0 mt-14">
        <div className="flex justify-center">
        <div
          className={`bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg py-5 px-5 w-full lg:w-[350px] h-[450px] relative `}
        >
          <div className="flex items-center gap-4 mt-0">
            <div className={`w-[10px] h-[10px] blur-[5px] bg-[#e80a8d]`}></div>
            <p className={`text-lg font-semibold text-[#e80a8d]`}>Basic Plan</p>
          </div>

          <div className="flex items-end gap-2 my-8 relative">
            <p className={`text-[42px] font-semibold text-[#344767]  gap-2`}>
              $100
              <span className={`text-[14px]  text-[#2d2d2d] font-medium`}>
               / monthly
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">10 Reports</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">20 Emails Per Month</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>


          {/* <button
  className="absolute left-5 right-5 bottom-5 py-2 px-3 border border-pink-500 rounded-md text-[#e80a8d] 
       hover:bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
         hover:text-white transition duration-300 ease-in-out">
  Get Plan
</button> */}
<div className="absolute  left-5 right-5 bottom-5">
  <PrimaryButton text={"Get Plan"}/>
</div>

        </div>
        </div>
        <div className="flex justify-center">
        <div
          className={`bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg py-5 px-5 w-full lg:w-[350px] h-[450px] relative `}
        >
          <div className="flex items-center gap-4 mt-0">
            <div className={`w-[10px] h-[10px] blur-[5px] bg-[#e80a8d]`}></div>
            <p className={`text-lg font-semibold text-[#e80a8d]`}>Standard Plan</p>
          </div>

          <div className="flex items-end gap-2 my-8 relative">
            <p className={`text-[42px] font-semibold text-[#344767]  gap-2`}>
              $100
              <span className={`text-[14px]  text-[#2d2d2d] font-medium`}>
               / monthly
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">10 Reports</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">20 Emails Per Month</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>


          <div className="absolute  left-5 right-5 bottom-5">
  <PrimaryButton text={"Get Plan"}/>
</div>

        </div>
        </div>

        <div className="flex justify-center">
        <div
          className={`bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg py-5 px-5 w-full lg:w-[350px] h-[450px] relative `}
        >
          <div className="flex items-center gap-4 mt-0">
            <div className={`w-[10px] h-[10px] blur-[5px] bg-[#e80a8d]`}></div>
            <p className={`text-lg font-semibold text-[#e80a8d]`}>Premium Plan</p>
          </div>

          <div className="flex items-end gap-2 my-8 relative">
            <p className={`text-[42px] font-semibold text-[#344767]  gap-2`}>
              $100
              <span className={`text-[14px]  text-[#2d2d2d] font-medium`}>
               / monthly
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">10 Reports</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">20 Emails Per Month</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>


          <div className="absolute  left-5 right-5 bottom-5">
  <PrimaryButton text={"Get Plan"}/>
</div>

        </div>
        </div>
     
      </div>
    </div>
  );
};

export default PricingSection;
