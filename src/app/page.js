import Header from "@/components/Header";
import SectionTwo from "@/components/SectionTwo";
import FreeTrial from "@/components/FreeTrial";
import HelpSection from "@/components/HelpSection";
import LandingPage from "@/components/LandingPage";
import PricingSection from "@/components/PricingSection";
import ContactUs from "@/components/ContactUs";
import ShowCase from "@/components/ShowCase";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
export default function Home() {
  return (
    <>
      <div className="relative bg-hero">
      
        <div className="absolute bg-[rgba(0,0,0,.5)] w-full h-full"></div>
        <div className="md:container md:mx-auto pt-5  sm:px-20">
          <Header />
        </div>
        <LandingPage />
      </div>
      <SectionTwo />
      <ShowCase/>
      <PricingSection />
      <div className=" my-48">
      <Testimonials />

      </div>
      <Faqs/>
      <FreeTrial />
      <ContactUs/>
      {/* <HelpSection /> */}
      
  
      <Footer/>
      
    </>
  );
}
