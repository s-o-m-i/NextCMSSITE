'use client'
import React, { useState } from 'react';

const PricingSwitch = () => {
  const [active, setActive] = useState('monthly'); 

  const handleDuration = (duration) => {
    setActive(duration); 
  };

  return (
    <>
    {/* <div
      className="bg-white w-[300px] h-10 flex justify-between items-center relative rounded-lg cursor-pointer overflow-hidden"
    >
      
      <div
        className={`absolute top-0 left-0 w-1/3 h-full rounded-lg transition-transform duration-300 shadow-md`}
        style={{
          transform:
            active === 'yearly'
              ? 'translateX(100%)'
              : active === 'quarterly'
              ? 'translateX(200%)'
              : 'translateX(0)',
          backgroundImage: 'linear-gradient(310deg, #7928ca, #ff0080)',
        }}
      />

      {/* Monthly option */}
      {/* <div
        onClick={() => handleDuration('monthly')}
        className="w-full py-2 flex justify-center items-center relative z-10"
      >
        <p
          className={`text-base font-${active === 'monthly' ? 'semibold' : 'normal'} ${
            active === 'monthly' ? 'text-white' : 'text-black'
          }`}
        >
          Monthly
        </p>
      </div>

      
      <div
        onClick={() => handleDuration('yearly')}
        className="w-full py-2 flex justify-center items-center relative z-10"
      >
        <p
          className={`text-base font-${active === 'yearly' ? 'semibold' : 'normal'} ${
            active === 'yearly' ? 'text-white' : 'text-black'
          }`}
        >
          Yearly
        </p>
      </div>

      
      <div
        onClick={() => handleDuration('quarterly')}
        className="w-full py-2 flex justify-center items-center relative z-10"
      >
        <p
          className={`text-base font-${active === 'quarterly' ? 'semibold' : 'normal'} ${
            active === 'quarterly' ? 'text-white' : 'text-black'
          }`}
        >
          Quarterly
        </p>
      </div> */}
    {/* </div> */}
<div className="button-box">
  <div className="button-yearly">
  <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-pink-600 bg-pink-100 border-pink-300 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-pink-800 focus:ring-2 dark:bg-pink-700 dark:border-pink-600"/>

    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">Default radio</label>
</div>
  </div>
</div>
    </>
  );
};

export default PricingSwitch;
