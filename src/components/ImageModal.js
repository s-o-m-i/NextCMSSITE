'use client'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import { IoIosClose } from "react-icons/io";

export default function ImageModal({ image }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 absolute -bottom-[70px] left-2 image-opener transition-all duration-300 ease-in-out">Open Image</button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center sm:p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform mt-14 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in  sm:w-full sm:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white  pb-4 pt-5 sm:p-6  h-full sm:h-[600px] ">
                <div className="close-icon text-red-500 flex justify-end mb-2 transition-all duration-200 ease-in-out  h-[40px] cursor-pointer text-[30px] hover:text-[40px]" onClick={() => setOpen(false)}>
              <IoIosClose />
                </div>
        
                <Image
                  src={image}
                  alt="CMS Showcase"
                  objectFit={"cover"}
                  className="h-full w-full sm:rounded-xl pb-10"
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
