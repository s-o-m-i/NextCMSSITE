import Image from 'next/image'
import React from 'react'
import CmsDashboard from '../../public/images/cms-dash.png'
import CmsDashboardDark from '../../public/images/cms-dark.png'
import CmsDashBottom from '../../public/images/cms-dashbottom.png'
import CmsDashSubsDark from '../../public/images/cms-subs-dark.png'
import CmsDashSubs from '../../public/images/cms-subs.png'
import ImageModal from './ImageModal'

const ShowCase = () => {
    return (
        <div className="md:container md:mx-auto  py-20  px-4 sm:px-20">
            <h1 className="text-[42px] sm:text-[52px] text-[#23303d] text-center font-semibold">CMS Showcase </h1>
            <div className="flex justify-center mb-20">

                <p className="text-[16px] sm:text-[22px] sm:w-[55%] text-[#23303d] text-center mt-5">
                    Explore our CMS in action—powerful tools, intuitive design, and flexible features that simplify content management and elevate your workflow.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                <div className="image-card h-full w-full shadow-xl rounded-xl hover:scale-[1.1] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <ImageModal
                        image={CmsDashboard} />
                    <Image
                        src={CmsDashboard}
                        alt="CMS Showcase"
                        objectFit={"cover"}
                        className="h-full w-full rounded-xl"
                    />
                </div>
                <div className="image-card h-full w-full shadow-xl rounded-xl hover:scale-[1.1] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <ImageModal
                        image={CmsDashboardDark} />
                    <Image
                        src={CmsDashboardDark}
                        alt="CMS Showcase"
                        objectFit={"cover"}
                        className="h-full w-full rounded-xl"
                    />
                </div>
                <div className="image-card h-full w-full shadow-xl rounded-xl hover:scale-[1.1] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <ImageModal
                        image={CmsDashBottom} />
                    <Image
                        src={CmsDashBottom}
                        alt="CMS Showcase"
                        objectFit={"cover"}
                        className="h-full w-full rounded-xl"
                    />
                </div>
                <div className="image-card h-full w-full shadow-xl rounded-xl hover:scale-[1.1] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <ImageModal
                        image={CmsDashBottom} />
                    <Image
                        src={CmsDashBottom}
                        alt="CMS Showcase"
                        objectFit={"cover"}
                        className="h-full w-full rounded-xl"
                    />
                </div>
                <div className="image-card h-full w-full shadow-xl rounded-xl hover:scale-[1.1] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <ImageModal
                        image={CmsDashSubsDark} />
                    <Image
                        src={CmsDashSubsDark}
                        alt="CMS Showcase"
                        objectFit={"cover"}
                        className="h-full w-full rounded-xl"
                    />
                </div>
                <div className="image-card h-full w-full shadow-xl rounded-xl hover:scale-[1.1] transition-all duration-300 ease-in-out relative overflow-hidden">
                    <ImageModal
                        image={CmsDashSubs} />
                    <Image
                        src={CmsDashSubs}
                        alt="CMS Showcase"
                        objectFit={"cover"}
                        className="h-full w-full rounded-xl"
                    />
                </div>
            </div>

        </div>
    )
}

export default ShowCase