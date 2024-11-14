"use client"
import React from "react";

import { BsStack } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { GoStopwatch } from "react-icons/go";
import { ImHappy } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTwo = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
        
      gsap.from('.service-card', {
        y: 500,
        opacity:0,
        duration: 2,
        ease: 'power2.inOut',
        stagger: 1, 
        scrollTrigger: {
            trigger: '.services-container',
            // scroller:".section-two-wrapper",
        start:"top 80%",
        end:"top 10%",
        scrub: true,
            
        }
    });


    gsap.from(".content-card",{
x:-300,
duration:1,
opacity:0,
scrollTrigger:{
  trigger:".section-two-wrapper",
  start:"top 80%",
  end:"top 10%",
  scrub:true,
  
}
    })

    },
    // { scope: container }
);
  
  return (
    <div className="section-two-wrapper sm:min-h-screen bg-white relative">
      <div className="md:container md:mx-auto  sm:px-20">
        <div className="grid grid-cols-12 mt-24">
          <div className="content-card bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] p-[50px_35px_35px_35px] relative col-span-12 sm:col-span-8">
            <div className="w-[70px] h-[70px] rounded-[50%] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br absolute -top-[35px] flex items-center justify-center text-white text-[30px]">
              <FaLaptopCode />
            </div>
            <h1 className="text-[#2c3e4f] text-[26px] sm:text-[30px] font-bold">
              Built for Business Insights, Trusted by Professionals
            </h1>

            <p className="text-[#2c3e4f] text-[18px] mt-[30px] leading-9">
              Businesses and teams love it for its simplicity, and so do their
              decision-makers. Thousands of companies across industries like
              retail, healthcare, and manufacturing rely on our CMS to
              effortlessly monitor and manage their sales, inventory, and
              performance analytics—streamlining their operations with real-time
              data at their fingertips.
            </p>
          </div>

          <div className="count col-span-12 sm:col-span-4  flex items-center justify-center">
            <div className="">
              <h1 className="text-[70px] text-[#2c3e4f] font-bold">300k+</h1>
              <h5 className="text-[18px]">Websites Built by Happy Customers</h5>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h2 className="text-[32px] text-[#2c3e4f] text-center font-bold mt-24">
            Services
          </h2>
          <h2 className="text-[22px] text-[#2c3e4f] text-center font-medium mb-24">
            Finally, A Content Management System That…
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-12 services-container mt-20 sm:mt-0">
         


<div className="service-card bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] p-[50px_35px_35px_35px] relative">
              <div className="w-[60px] h-[60px] rounded-[50%] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br absolute -top-[35px] flex items-center justify-center text-white text-[20px]">
              <BsStack />
              </div>
              <h1 className="text-[#2c3e4f] text-[22px] font-bold">
              Fits Your Tech Stack
              </h1>

              <p className="text-[#2c3e4f] text-[18px] mt-[30px] leading-9">
                Our CMS is simple from the core, so onboarding your team and
                onboarding new hires is quicker and easier.
              </p>
            </div>


            <div className="service-card bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] p-[50px_35px_35px_35px] relative">
              <div className="w-[60px] h-[60px] rounded-[50%] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br absolute -top-[35px] flex items-center justify-center text-white text-[20px]">
                <IoBookOutline />
              </div>
              <h1 className="text-[#2c3e4f] text-[22px] font-bold">
                Is Easy To Learn
              </h1>

              <p className="text-[#2c3e4f] text-[18px] mt-[30px] leading-9">
                Our CMS is simple from the core, so onboarding your team and
                onboarding new hires is quicker and easier.
              </p>
            </div>

            <div className="service-card bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] p-[50px_35px_35px_35px] relative">
              <div className="w-[60px] h-[60px] rounded-[50%] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br absolute -top-[35px] flex items-center justify-center text-white text-[20px]">
                <GoStopwatch />
              </div>
              <h1 className="text-[#2c3e4f] text-[22px] font-bold">
                Saves You Time
              </h1>

              <p className="text-[#2c3e4f] text-[18px] mt-[30px] leading-9">
                Our CMS is simple from the core, so onboarding your team and
                onboarding new hires is quicker and easier.
              </p>
            </div>
            <div className="service-card bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] p-[50px_35px_35px_35px] relative">
              <div className="w-[60px] h-[60px] rounded-[50%] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br absolute -top-[35px] flex items-center justify-center text-white text-[20px]">
                <ImHappy />
              </div>
              <h1 className="text-[#2c3e4f] text-[22px] font-bold">
                Keeps Clients Happy
              </h1>

              <p className="text-[#2c3e4f] text-[18px] mt-[30px] leading-9">
                Our CMS is simple from the core, so onboarding your team and
                onboarding new hires is quicker and easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
