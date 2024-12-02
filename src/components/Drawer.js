"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import LocaleSwitcher from "./LocaleSwitcher";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <div
        className="text-center text-pink-600 text-3xl z-20 relative"
        onClick={toggleDrawer}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`drawer-box bg-white text-black fixed top-0 transition-all duration-500 ease-in-out z-20 ${
          isOpen ? "left-0 opacity-100 w-[300px]" : "-left-[100%] opacity-0 w-0"
        } h-screen p-4`}
      >
        {/* Drawer Content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-pink-600">CMS</h1>
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <a
              href="#pricing"
              className="text-lg text-black hover:text-pink-600"
              onClick={closeDrawer}
            >
              Pricing
            </a>
            <a
              href="#services"
              className="text-lg text-black hover:text-pink-600"
              onClick={closeDrawer}
            >
              Services
            </a>
            <a
              href="#product"
              className="text-lg text-black hover:text-pink-600"
              onClick={closeDrawer}
            >
              Product
            </a>
          </nav>
          {/* Locale Switcher */}
          <div>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
