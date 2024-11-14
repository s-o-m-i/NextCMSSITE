"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import Slider component with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Testimonials() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Only render Slider after component is mounted on the client
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    if (!isMounted) return null;

    return (
        <div className="lg:container mx-auto px-4 sm:px-0" id="partners">

<h1 className="text-[38px] text-[#2c3e4f] text-center mb-14 font-[700]">Testimonials</h1>
            <style jsx global>{`
                .slick-prev:before, .slick-next:before {
                    color: #404041; 
                }
                .slick-dots li button:before {
                    font-size: 10px; 
                    color: #1fc3f3; 
                    opacity: 1; 
                }
                .slick-dots li.slick-active button:before {
        font-size: 15px; 
        color: #1fc3f3; 
    }
            `}</style>
            <div className="w-[85%] sm:w-[85%] md:w-[90%] lg:w-[60%] mx-auto mb-20">
                <Slider {...settings}>
                    <div>
                        <div className="w-[90%] mx-auto text-center">
                            <h6 className='text-[#404041] text-[15px] font-semibold uppercase mt-4 tracking-[3px] leading-[1.2]'>Thibault Imbert</h6>
                            <p className='tracking-[1.5px]  mb-[-0.25rem]'>Director, Growth Marketing</p>
                            <p className='text-[#585858] mt-5'>“They have the most updated knowledge and skill set in the digital market.”</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto text-center">
                            <h6 className='text-[#404041] text-[15px] font-semibold uppercase mt-4 tracking-[3px] leading-[1.2]'>Tracy Haefner</h6>
                            <p className='tracking-[1.5px] mb-[-0.25rem]'>Director, Growth Marketing</p>
                            <p className='text-[#585858] mt-5'>“Conveying the right balance between expert design and marketing skills, Webistry has earned their client&rsquo;s trust by generating high-yielding branding solutions that have resulted in an increased conversion rate.”</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto text-center">
                            <h6 className='text-[#404041] text-[15px] font-semibold uppercase mt-4 tracking-[3px] leading-[1.2]'>Carrie Li</h6>
                            <p className='tracking-[1.5px] mb-[-0.25rem]'>Director, Growth Marketing</p>
                            <p className='text-[#585858] mt-5'>“The team at Webistry delivers high-quality work quickly. They’re flexible and handle limitations or restrictions in stride.”</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto text-center">
                            <h6 className='text-[#404041] text-[15px] font-semibold uppercase mt-4 tracking-[3px] leading-[1.2]'>Sabrina Jiang</h6>
                            <p className='tracking-[1.5px] mb-[-0.25rem]'>Director, Growth Marketing</p>
                            <p className='text-[#585858] mt-5'>“The team at Webistry delivers high-quality work quickly. They’re flexible and handle limitations or restrictions in stride.”</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto text-center">
                            <h6 className='text-[#404041] text-[15px] font-semibold uppercase mt-4 tracking-[3px] leading-[1.2]'>Rajiv Ragu</h6>
                            <p className='tracking-[1.5px] mb-[-0.25rem]'>Director, Growth Marketing</p>
                            <p className='text-[#585858] mt-5'>“Fantastic agency! The Webistry team is highly knowledgeable about all things digital and marketing and they are a great resource for any stage web startup/company. The founders Stefano & Jonathan are super awesome and pleasant to work with and come with years of expertise.”</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto text-center">
                            <h6 className='text-[#404041] text-[15px] font-semibold uppercase mt-4 tracking-[3px] leading-[1.2]'>Bill Farrel</h6>
                            <p className='tracking-[1.5px] mb-[-0.25rem]'>Director, Growth Marketing</p>
                            <p className='text-[#585858] mt-5'>“These guys are worth every penny. Excellent results (very high CVRs, good CPA, [and] lots of new customers!). The Webistry co-founders are hands-on, creative, and keep tweaking throughout. Their attentiveness to the campaigns and my crazy ideas have exceeded my expectations month after month.”</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Testimonials;
