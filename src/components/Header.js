"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {

  


  useGSAP(() => {
    gsap.from(".anime-nav, .logo, .nav-item", {
      y: -350, // Adjusted initial y-position for a more pronounced effect
      duration: 1, // Duration of the animation
      opacity: 0, // Start with opacity 0
      ease: "power3.out", // Smoother easing function
      stagger: 0.3, 
    });
  });

  return (
    <>
      <div
        className=" flex items-center justify-between p-4 md:p-6
     lg:py-4 rounded-lg 
     relative z-[999]
     text-[white]
     my-navbar
     "
      >
        <div className="logo text-4xl font-medium ">CMS</div>
        <nav className="hidden md:flex anime-nav items-center space-x-6 bg-[#23303d] py-3 px-[80px] rounded-xl ">
          <a href="#pricing" className="text-[16px]  transition duration-300 transform hover:scale-[1.1] hover:text-[#000] hover:bg-white rounded-lg px-2 py-1">
            Pricing
          </a>
          <a href="#partners" className="text-[16px]  transition duration-300 transform hover:scale-[1.1] hover:text-[#000] hover:bg-white rounded-lg px-2 py-1"  >
            Partners
          </a>
          <a href="" className="text-[16px]  transition duration-300 transform hover:scale-[1.1] hover:text-[#000] hover:bg-white rounded-lg px-2 py-1">
            Company
          </a>
        </nav>

        <button className="nav-item group relative m-1 cursor-pointer overflow-hidden rounded-lg border-1 border-[#23303d] px-3 py-3 font-medium text-md   bg-[#23303d]">
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#fff] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative text-[#fff] transition duration-300 group-hover:text-[#23303d]">
         <a href="#contact-us"> Contact Us</a>  
          </span>
        </button>

        {/* <div className="text-[white] bg-[#181C14] p-4 md:p-6
     lg:py-4 rounded-lg">
        <h5 className="">Contact Us</h5>
        
</div> */}
      </div>
    </>
  );
};

export default Header;
