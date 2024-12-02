'use client';
import { CheckIcon, LanguageIcon } from '@heroicons/react/24/solid';
import * as Select from '@radix-ui/react-select';
import { useEffect, useState, useTransition } from 'react';
import { setUserLocale } from '@/services/locale';

export default function LocaleSwitcherSelect({
    defaultValue,
    items,
    label
}) {
    const [isPending, startTransition] = useTransition();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [language, setLanguage] = useState(false);
    function handleChange(value) {
        setLanguage(false)
        const locale = value;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    function onChange(value) {
        setLanguage(false)
        const locale = value;
        startTransition(() => {
            setUserLocale(locale);
        });
    }


    useEffect(() => {
        function checkScreenSize() {
            setIsSmallScreen(window.innerWidth < 768)
        }
        window.addEventListener("resize", checkScreenSize)
        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [isSmallScreen])

    return (
        <div className="relative">
            {!isSmallScreen ? (
            <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
                <Select.Trigger
                    aria-label={label}
                >
                    <button className="nav-item group relative cursor-pointer overflow-hidden rounded-lg border-1 border-[#23303d] px-3 py-1 font-medium text-md   ">
                        <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#00000040] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
                        <span className="ease relative text-black sm:text-[#fff] transition duration-300  sm:group-hover:text-[#fff] group-hover:text-[#000]">
                            <Select.Icon>
                                <LanguageIcon className="h-6 w-6 text-black sm:text-white transition-colors 
            sm:group-hover:text-white group-hover:text-black" />
                            </Select.Icon>

                        </span>
                    </button>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content
                        align="end"
                        className="min-w-[8rem] overflow-hidden rounded-sm bg-white py-1 shadow-md"
                        position="popper"
                    >
                        <Select.Viewport>
                            {items.map((item) => (
                                <Select.Item
                                    key={item.value}
                                    className="flex cursor-default items-center px-3 py-2 text-base data-[highlighted]:bg-slate-100"
                                    value={item.value}
                                >
                                    <div className="mr-2 w-[1rem]">
                                        {item.value === defaultValue && (
                                            <CheckIcon className="h-5 w-5 text-slate-600" />
                                        )}
                                    </div>
                                    <span className="text-slate-900">{item.label}</span>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                        <Select.Arrow className="fill-white text-white" />
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
            ):(
                <>
                <div className="language_dropDown" onClick={() => setLanguage(!language)}>
                    Language
                </div>
    
                {language && (
                    <>
                        <div className="dropDown_box mt-3 shadow-md w-fit p-4 rounded-md">
                            <h5 className='' onClick={() => handleChange("en")}>English</h5>
                            <h5 className='mt-2' onClick={() => handleChange("ar")}>Arabic</h5>
                        </div>
                    </>
                )}
                </>
            )
        }


        </div>
    );
}
