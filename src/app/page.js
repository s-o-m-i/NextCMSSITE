import Header from "@/components/Header";
import SectionTwo from "@/components/SectionTwo";
import FreeTrial from "@/components/FreeTrial";
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
      <div className="md:container md:mx-auto pt-1 sm:px-20  sticky top-0 z-[999]">
        <Header />
      </div>
      <LandingPage />
      <SectionTwo />
      <ShowCase />
      <PricingSection />
      <div className=" my-48">
        <Testimonials />
      </div>
      <Faqs />
      <FreeTrial />
      <ContactUs />
      <Footer />

    </>
  );
}
