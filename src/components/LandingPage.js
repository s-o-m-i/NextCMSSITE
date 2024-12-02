"use client";
import React, { useEffect, useState } from "react";
import CMSDash from '../../public/images/cms-dash.png'
import Image from "next/image";
import { useTranslations } from "next-intl";

const LandingPage = () => {
  const t = useTranslations('HomePage');
  const buttonTranslations = useTranslations('buttons');
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(false)
  }, []);

  return (
    <>
      <div className="md:container md:mx-auto landing-page-height px-4  sm:px-20 flex items-center">
        {isMounted ? <h1>Loading ...</h1> :
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="flex flex-col tracking-wide">
              <div className="overflow-hidden ">
                <h1 className=" text-[36px] sm:text-[60px] md:text-[70px] font-semibold text-[#000] leading-[1.2] main-text capitalize same  power-in ">
                  {t("title").split(" ").map((text, index) => (
                    <React.Fragment key={index}>
                      {`${text} `}
                      {text === "Your" && <br />}
                    </React.Fragment>
                  ))}
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className=" text-[#666666] sm:px-2 text-[16px] sm:text-[18px] leading-7  w-full sm:w-[90%]  mt-5 z-[999] same fade-in power-in">
                  {t("desc")}
                </p>
              </div>
              <div className="overflow-hidden">
                <button className="mt-10  px-5 py-3 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br w-fit text-white same fade-in power-in">{buttonTranslations("getStarted")}</button>
              </div>
            </div>
            <div className="image-section sm:flex items-center justify-center hidden ">
              <Image
                src={CMSDash}
                className="shadow-lg hover:scale-[1.1] transition-all duration-300 ease-in-out resize-img"
              />
            </div>
          </div>}

      </div>
    </>
  );
};

export default LandingPage;
