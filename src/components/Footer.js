import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: '#2c3741' }}>
        <div className="w-full mx-auto px-10" style={{ maxWidth: '90%' }}>
          <div className="mx-auto flex flex-wrap justify-center py-4 text-white">
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 flex flex-col items-start text-left mb-4">
              <h3 className="text-[20px] font-semibold leading-[1.5] tracking-[5px]">Webistry</h3>
              <p className="text-[12px] mt-3 text-[#c6c9cb]">2024 © Webistry. All rights reserved.<br />
                Privacy Policy
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 flex flex-col items-start text-left mb-4">
              <h3 className="text-[12px] font-semibold leading-[1.7] tracking-[5px]">EXPLORE</h3>
              <p className="text-[#c6c9cb] text-[14px] leading-[1.7]">Home</p>
              <p className="text-[#c6c9cb] text-[14px] leading-[1.7]">What we do</p>
              <p className="text-[#c6c9cb] text-[14px] leading-[1.7]">How we do it</p>
              <p className="text-[#c6c9cb] text-[14px] leading-[1.7]">Our work</p>
              <p className="text-[#c6c9cb] text-[14px] leading-[1.7]">Testimonials</p>
            </div>

            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 flex flex-col items-start text-left mb-4">
              <h3 className="text-[12px] font-semibold leading-[1.7] tracking-[5px] mb-2">GET IN TOUCH</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex items-center justify-center" style={{
                  padding: '5px',
                  borderRadius: '50%',
                  background: '#F93E93',
                  fontSize: '14px',
                }}>
                  <FaPhone />
                </div>
                <a href="tel:1-888-258-1363" className="text-[#c6c9cb] text-[14px] leading-[1.5]">1-888-258-1363</a>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex items-center justify-center" style={{
                  padding: '4px',
                  borderRadius: '50%',
                  background: '#FF5352',
                  fontSize: '16px',
                }}>
                  <MdOutlineMarkEmailUnread />
                </div>
                <a className="text-[#c6c9cb] text-[14px] leading-[2.2]">hello@webistry.com</a>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex items-center justify-center" style={{
                  padding: '5px',
                  borderRadius: '50%',
                  background: '#00C6F5',
                  fontSize: '14px',
                }}>
                  <FaLocationDot />
                </div>
                <a className="text-[#c6c9cb] text-[14px]">1350 Mazurette, Suite 318<br /> Montreal, Canada</a>
              </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 flex flex-col items-start text-left mb-4">
              <h3 className="text-[12px] font-semibold leading-[1.7] tracking-[5px]">
                LET&apos;S CONNECT
              </h3>
              <div className="flex justify-center space-x-6 mt-2 mb-6 leading-[1.7]">
                <FaFacebook className="text-xl" />
                <FaXTwitter className="text-xl" />
                <GrInstagram className="text-xl" />
                <FaLinkedin className="text-xl" />
              </div>
              <h3 className="text-[12px] font-semibold leading-[1.7] tracking-[5px]">
                WE ARE HIRING
              </h3>
              <div className="flex justify-center space-x-4 mt-2 leading-[1.7]">
                <PiBagSimpleFill className="text-xl" />
              </div>
            </div>
          </div>
          <div className="py-4" />
        </div>
      </div>
    </>
  );
};

export default Footer;
