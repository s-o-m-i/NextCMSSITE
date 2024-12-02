"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      { question: "What do we do?", answer: "Yes, MaintainX Enterprise allows you to manage multiple plants or facilities within the same platform. You can also create customized reporting dashboards to track KPIs across multiple sites on the same screen." },
      { question: "How do we support clients?", answer: "We offer round-the-clock support, training, and consulting services to ensure that clients get the most out of the platform." },
      { question: "Does MaintainX support multiple sites?", answer: "We offer round-the-clock support, training, and consulting services to ensure that clients get the most out of the platform." },
      { question: "What makes us unique?", answer: "Our platform is user-friendly, scalable, and tailored to meet the specific needs of enterprise-level organizations." }
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
    <>
      <section id="faqs " className="md:container md:mx-auto px-4  sm:px-20 py-5 mt-20">
        <div className="grid grid-cols-12">
          <div className="faq-text col-span-12 sm:col-span-4">
            <h1 className="text-[42px] sm:text-[42px] text-[#2c3e4f] font-[700]">
              Frequently Asked Questions
            </h1>
            <h3 className="text-[22px] text-[#2c3e4f] font-medium mt-5">
              Still need help? Chat to us.
            </h3>
          
          </div>
          <div className="faq-text col-span-12  sm:col-span-8 mt-5 sm:mt-0">

          {faqs.map((faq, index) => (
        <div
          key={index}
          className="faq-box bg-[#FAFAFA] py-4 px-6 rounded-lg mb-4 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex items-center gap-4">
            <div className="icon-box text-[24px] text-[#e80a8d]">
              {openIndex === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
            <h1 className="text-[20px] text-[#2c3e4f] font-[700]">{faq.question}</h1>
          </div>

          <div
            className={`ml-10 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
