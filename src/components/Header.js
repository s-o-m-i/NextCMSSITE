'use client'
import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale } from "next-intl";
import Drawer from "./Drawer";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const locale = useLocale();
  return (
    <div className="overflow-hidden">
      <div
       className={`flex items-center justify-between py-4 md:py-6
        lg:py-4 rounded-lg relative z-[999] text-[black] my-navbar power-in h-[80px]
        px-4
        ${isScrolled ? "bg-pink-500 shadow-md transition-all duration-300 px-10" : "bg-transparent"}
        ${locale === "ar" ? "pl-8":""}
      `}
      >
        <div className={`logo text-4xl font-medium   ${isScrolled ?"text-white":"text-black"}`}>CMS</div>
        <nav className="hidden md:flex anime-nav items-center space-x-6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br py-2 px-[80px] rounded-xl">
          <button className="nav-item group relative cursor-pointer overflow-hidden rounded-lg border-1 border-[#23303d] px-3 py-1 font-medium text-md   ">
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#00000040] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span className="ease relative text-[#fff] transition duration-300 group-hover:text-[#fff]">
              <a href="#pricing">Pricing</a>
            </span>
          </button>
          <button className="nav-item group relative cursor-pointer overflow-hidden rounded-lg border-1 border-[#23303d] px-3 py-1 font-medium text-md   ">
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#00000040] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span className="ease relative text-[#fff] transition duration-300 group-hover:text-[#fff]">
              <a href="#services">Services</a>
            </span>
          </button>
          <button className="nav-item group relative cursor-pointer overflow-hidden rounded-lg border-1 border-[#23303d] px-3 py-1 font-medium text-md   ">
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#00000040] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span className="ease relative text-[#fff] transition duration-300 group-hover:text-[#fff]">
              <a href="#"> Product</a>
            </span>
          </button>
          <LocaleSwitcher />
        </nav>
        <div className="w-[180px] hidden md:flex">
          <a href="#contact-us">
          <PrimaryButton text={"Contact Us"} />
          </a>
        </div>
        <div className="sm:hidden block">

        <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
