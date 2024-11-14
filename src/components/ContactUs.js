import React from 'react'
import PrimaryButton from './PrimaryButton'

const ContactUs = () => {
  return (
    
<>




<section id="contact-us" className="bg-white m-h-screen md:container mx-auto py-20">

{/* <h2 className="text-[#2c3e4f] text-[42px] font-bold text-center mb-4">Contact Us</h2>
<div className="flex justify-center">

    <p className="text-[#2c3e4f] text-sm w-full sm:w-[40%]  mb-8 text-center ">
      Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
    </p>
</div> */}


<div  className=" flex justify-center items-center mt-10">



  <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-[#2c3e4f] text-[42px] font-bold text-center mb-10">Contact Us</h2>
    <form action="#" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="input-field">
          <label htmlFor="first_name" className="block mb-2 text-sm font-semibold text-[#2c3e4f]">First Name</label>
          <input type="text" id="first_name" placeholder="First Name"
                 className="bg-[#f7f8fa] border border-[#e1e3e5] text-[#2c3e4f] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-500" required />
        </div>
        <div className="input-field">
          <label htmlFor="last_name" className="block mb-2 text-sm font-semibold text-[#2c3e4f]">Last Name</label>
          <input type="text" id="last_name" placeholder="Last Name"
                 className="bg-[#f7f8fa] border border-[#e1e3e5] text-[#2c3e4f] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-500" required />
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-[#2c3e4f]">Email</label>
        <input type="email" id="email" placeholder="Email"
               className="bg-[#f7f8fa] border border-[#e1e3e5] text-[#2c3e4f] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-500" required />
      </div>
      <div className="input-field">
        <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-[#2c3e4f]">Phone Number</label>
        <input type="tel" id="phone" placeholder="Phone Number"
               className="bg-[#f7f8fa] border border-[#e1e3e5] text-[#2c3e4f] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-500" required />
      </div>
      <div className="input-field">
        <label htmlFor="message" className="block mb-2 text-sm font-semibold text-[#2c3e4f]">Message</label>
        <textarea id="message" placeholder="Your Message" rows="4"
                  className="bg-[#f7f8fa] border border-[#e1e3e5] text-[#2c3e4f] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-500" required></textarea>
      </div>
      <div className="text-center ">






        {/* <button type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br text-white font-semibold text-lg transition duration-300">
          Send Message
        </button> */}


<PrimaryButton text={"Send Message"}/>

      </div>
    </form>
  </div>
  </div>
</section>


</>

  )
}

export default ContactUs