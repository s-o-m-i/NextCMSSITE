'use client'
import React, { useState } from "react";

const PricingSwitchTwo = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  return (
    <div className="button-box">
      <div className="flex items-center gap-4 mb-4">
        
        
        <div className={`flex items-center py-2 px-3 transition-all duration-300 ease-in-out  ${selectedOption === 'monthly'?"bg-[#ea4199] text-white":"text-black"} rounded-md`}  onClick={() => setSelectedOption("monthly")}>
          <input
            id="monthly-radio"
            type="radio"
            name="subscription"
            value="monthly"
            checked={selectedOption === "monthly"}
           className=" checked:bg-pink-500 text-pink-500 focus:outline-none focus:border-none"
          />
          <label htmlFor="monthly-radio" className="ml-2 text-sm font-medium ">
            Monthly
          </label>
        </div>

        
        <div className={`flex items-center py-2 px-3 transition-all duration-300 ease-in-out   ${selectedOption === 'yearly'?"bg-[#ea4199] text-white":"text-black"} rounded-md`}  onClick={() => setSelectedOption("yearly")}>
          <input
            id="yearly-radio"
            type="radio"
            name="subscription"
            value="yearly"
            checked={selectedOption === "yearly"}
            className=" checked:bg-pink-500 text-pink-500 focus:outline-none focus:border-none"
           
          />
          <label htmlFor="yearly-radio" className="ml-2 text-sm font-medium ">
            Yearly
          </label>
        </div>

        
        <div className={`flex items-center py-2 px-3 transition-all duration-300 ease-in-out   ${selectedOption === 'quarterly'?"bg-[#ea4199] text-white":"text-black"} rounded-md`}  onClick={() => setSelectedOption("quarterly")}>
          <input
            id="quarterly-radio"
            type="radio"
            name="subscription"
            value="quarterly"
            checked={selectedOption === "quarterly"}
             className=" checked:bg-pink-500 text-pink-500 focus:outline-none focus:border-none"
          />
          <label htmlFor="quarterly-radio" className="ml-2 text-sm font-medium ">
            Quarterly
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default PricingSwitchTwo;
