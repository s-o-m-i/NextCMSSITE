"use client"
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import PricingSwitchTwo from "./PricingSwitchTwo";
import PrimaryButton from "./PrimaryButton";
import { useTranslations } from "next-intl";
import { fetchData } from "@/utils/api";
const PricingSection = () => {
  const [pricingData, setPricingData] = useState()
  const [currentDuration, setCurrentDuration] = useState("monthly")
  const t = useTranslations("pricing")
  const fetchPricingData = async () => {
    const response = await fetchData({ table: 'users.get_subscription_plans()', params: false })
    setPricingData(response.data)
  }
  useEffect(() => {
    fetchPricingData()
  }, [])
  useEffect(() => {
    console.log("pricingData useState ===>", pricingData)
  }, [pricingData])
  return (
    <div className="md:container md:mx-auto pb-20 px-4  sm:px-20" id="pricing">
      <h1 className="sm:text-[52px] text-[#2c3e4f]  mb-14 text-[42px] font-[700]">{t("titleSliceOne")}<br /> {t("titleSliceTwo")}</h1>
      <div className="flex justify-center sm:justify-start my-10">

        <PricingSwitchTwo setCurrentDuration={setCurrentDuration} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-0 mt-14">

        {pricingData?.length > 0 && pricingData.map((data, index) => (
          <div key={index} className="flex justify-center ">
            <div
              className={`bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg py-5 px-5 w-full lg:w-[350px] h-[450px] relative  `}
            >
              <div className="flex items-center gap-4 mt-0">
                <div className={`w-[10px] h-[10px] blur-[5px] bg-[#e80a8d]`}></div>
                <p className={`text-lg font-semibold text-[#e80a8d]`}>{data.name_of_plan}</p>
              </div>

              <div className="flex items-end gap-2 my-8 relative">
                <p className={`text-[42px] font-semibold text-[#344767]  gap-2`}>
                  ${currentDuration === "yearly" ? data.yearly_price : currentDuration === "quarterly" ? data.quaterly_price : data.monthly_price}
                  <span className={`text-[14px]  text-[#2d2d2d] font-medium`}>
                    / monthly
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <div className="text-[#e80a8d] text-sm">
                  <FaCheck />
                </div>
                <p className="text-sm font-medium text-[#666666]">10 Reports</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="text-[#e80a8d] text-sm">
                  <FaCheck />
                </div>
                <p className="text-sm font-medium text-[#666666]">Unlimited Downloads</p>

              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="text-[#e80a8d] text-sm">
                  <FaCheck />
                </div>
                <p className="text-sm font-medium text-[#666666]">20 Emails Per Month</p>

              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="text-[#e80a8d] text-sm">
                  <FaCheck />
                </div>
                <p className="text-sm font-medium text-[#666666]">Unlimited Downloads</p>

              </div>

              <div className="absolute  left-5 right-5 bottom-5">
                <PrimaryButton text={"Get Plan"} />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PricingSection;
