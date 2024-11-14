import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

const HelpSection = () => {
  return (
    <>
      <div className="help-wrapper pt-22 py-32">
        <div className="grid grid-cols-2">
          <div className="help-left flex items-center justify-center">
            <div className="help-box w-[500px] py-24 px-8 flex flex-col items-center shadow-lg rounded-xl">
              <div className="icon-box flex justify-center items-center text-[50px] mb-3 w-[90px] h-[90px] rounded-[50%] bg-[#D3F4E9] text-[#28CB90]">
                <FaHandsHelping />
              </div>
              <h2 className="text-[22px] font-bold text-[#2c3e4f] text-center">
                Need help? We’re here
              </h2>
              <p className="text-[18px] text-[#67748E] text-center mt-5">
                The team that created Our CMS is here to help with tech issues
                that come up. Available to all Our CMS customers via the Service
                Desk.
              </p>
            </div>
          </div>
          <div className="help-right flex items-center justify-center">
            <div className="help-box w-[500px] py-24 px-8 flex flex-col items-center shadow-lg rounded-xl">
              <div className="icon-box flex justify-center items-center text-[50px] mb-3 w-[90px] h-[90px] rounded-[50%] bg-[#FEF6D4] text-[#F1C40E]">
                <HiOutlineLightBulb />
              </div>
              <h2 className="text-[22px] font-bold text-[#2c3e4f] text-center">
                Have an idea for an Our CMS feature?
              </h2>
              <p className="text-[18px] text-[#67748E] text-center mt-5">
                The team that created Our CMS is here to help with tech issues
                that come up. Available to all Our CMS customers via the Service
                Desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSection;
