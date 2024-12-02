"use client"
import React, { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { useForm, ValidationError } from '@formspree/react';
import ThankYouModal from './ContactUs/Modal';
const ContactUs = () => {
  const [state, handleSubmit, reset] = useForm("mzzbvkgk");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const formElement = document.querySelector("#contact-form")
    if(formElement){
      const inputs = formElement.querySelectorAll("input, textarea")
      
      inputs.forEach((elem)=>{
        console.log(elem.value)
        elem.value=""
        console.log(elem.value)
      })
    }

    if (state.succeeded) {
      setIsModalOpen(true)
      reset()
    }
  }, [state.succeeded])
  return (
    <>
      <section id="contact-us" className="bg-white m-h-screen md:container mx-auto py-20 px-4  sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="">
            <h1 className='text-[42px] font-semibold text-[#2c3e4f]'>Let's Connect to <br /> Transform Your
              <span className='text-[#f472b6]'> Content! </span></h1>
            <p className='w-[75%] mt-5 text-[#666666]'>Reach out to explore how our CMS can streamline your content management and elevate your workflow!"</p>
          </div>
          <form
          id='contact-form'
            onSubmit={handleSubmit}
            className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-field border-b border-[#f472b6] py-2">
                <label htmlFor="first_name" className="block mb-2 text-[16px] font-medium text-[#2c3e4f]">First Name</label>
                <input name='first-name' type="text" id="first_name" placeholder="First Name"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-gray-500 focus:outline-none focus:ring-0 placeholder:text-sm" required />
              </div>
              <div className="input-field border-b border-[#f472b6] py-2">
                <label htmlFor="last_name" className="block mb-2 text-[16px] font-medium text-[#2c3e4f]">Last Name</label>
                <input name='last-name' type="text" id="last_name" placeholder="Last Name"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-gray-500 focus:outline-none focus:ring-0 placeholder:text-sm" required />
              </div>
            </div>
            <div className="input-field border-b border-[#f472b6] py-2">
              <label htmlFor="email" className="block mb-2 text-[16px] font-medium text-[#2c3e4f]">Email</label>
              <input name='email' type="email" id="email" placeholder="Email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-gray-500 focus:outline-none focus:ring-0
                   placeholder:text-sm" required />
            </div>
            <div className="input-field border-b border-[#f472b6] py-2">
              <label htmlFor="phone" className="block mb-2 text-[16px] font-medium text-[#2c3e4f]">Phone Number</label>
              <input name='phone-number' type="tel" id="phone" placeholder="Phone Number"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-gray-500 focus:outline-none focus:ring-0 placeholder:text-sm" required />
            </div>
            <div className="input-field border-b border-[#f472b6] py-2">
              <label htmlFor="message" className="block mb-2 text-[16px] font-medium text-[#2c3e4f]">Message</label>
              <textarea name='message' id="message" placeholder="Your Message" rows="4"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-gray-500 focus:outline-none focus:ring-0
                   placeholder:text-sm" required></textarea>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="text-center " type="submit" disabled={state.submitting}>
              <PrimaryButton text={"Send Message"} />
            </div>
          </form>
        </div>
      </section>
      {isModalOpen && <ThankYouModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

export default ContactUs