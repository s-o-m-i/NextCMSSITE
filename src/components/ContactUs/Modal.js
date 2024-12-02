'use client';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { IoIosClose } from 'react-icons/io';

export default function ThankYouModal({open,onClose}) {
  return (
    <>
     
     

      {/* Modal */}
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          className="fixed inset-0 bg-gray-500 bg-opacity-75"
        />

        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
          <DialogPanel className="relative w-full max-w-md rounded-lg bg-white shadow-lg transform transition-all">
            <div className="p-6">
              {/* Close Icon */}
              <div
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer text-2xl"
                onClick={onClose}
              >
                <IoIosClose />
              </div>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Thank You!
              </h2>
              <p className="mt-4 text-center text-gray-600">
                We appreciate you reaching out to us. Our team will get back to you shortly.
              </p>

              {/* Action Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={onClose}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
