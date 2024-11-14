import React from 'react'

const PrimaryButton = ({text}) => {
  return (
    <>
    
    <button className={`button-primary w-full py-[12px] px-[5px] sm:px-[40px] relative mr-5 overflow-hidden font-medium text-gray-600 bg-white border border-pink-200 rounded-lg shadow-inner group `}>
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-1 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-0 group-hover:opacity-10 group-hover:translate-x-0 z-10"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-8 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-0 group-hover:opacity-10 group-hover:translate-x-0 z-10"></span>
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#f140a1] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#f140a1] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-to-r from-[#f140a1] from-20% via-[#f140a1] via-40% to-[#f140a1] to-70% opacity-0 group-hover:opacity-40 "></span>
                <span className={`relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center w-full text-[12px] sm:text-[16px] `}> <p className='w-full px-4 sm:px-0'>{text}</p> </span>
            </button>
    </>
  )
}

export default PrimaryButton