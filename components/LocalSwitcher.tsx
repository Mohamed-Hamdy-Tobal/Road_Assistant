'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'

const LocalSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname()
    const [, , currentLocalePath] = pathname.split('/')
    const localActive = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const onSelectChange = (nextLocal: string) => {
        // router.replace(`/${nextLocal}`);
        // router.push(`/${nextLocal}/${currentLocalePath}`)
        currentLocalePath ? router.push(`/${nextLocal}/${currentLocalePath}`) : router.replace(`/${nextLocal}`);
        setIsOpen(false);
    };

    // useEffect(() => {

    //     const windowToggle = (event: any) => {
    //         // setIsOpen(false);
    //         event.target.className === 'switch-lang' || event.target.className === 'switch-icon' || event.target.className === 'switch' || event.target.className === 'main-switch' ? null: setIsOpen(false)
    //         console.log(event.target.className === 'switch-lang')
    //         console.log(event.target.className === 'switch-icon')
    //         console.log(event.target.className === 'main-switch')
    //         console.log(event.target.className === 'switch')
    //         console.log(event)
    //         console.log(event.target)
    //         console.log(event.target.className)
    //         console.log(event.target.classList)
    //     }

    //     window.addEventListener("click", windowToggle)     

    //     // document.addEventListener("click", (event:any) => {

    //     //     // event.target.className === 'switch-lang' && event.target.className === 'switch-icon' && event.target.className === 'switch' && event.target.className === 'main-switch' ? setIsOpen(false): null
    //     // })

    //     return () => {
    //         window.removeEventListener('click', windowToggle);
    //     };
    // },[])

    useEffect(() => {
        const windowToggle = (event: any) => {
            const allowedClasses = ['switch-lang', 'switch-icon', 'main-switch', 'switch'];

            if (!allowedClasses.some(className => event.target.classList.contains(className))) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", windowToggle);

        return () => {
            window.removeEventListener('click', windowToggle);
        };
    }, []);

    return (
        <div className="relative inline-block main-switch">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`py-2 switch px-4 cursor-pointer flex items-center text-[#fff] bg-transparent outline-none border-none`}
            >   
                <span className="mr-2 switch-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                <span className='switch-lang'>{localActive == 'en'? "EN":"AR"}</span>
            </button>

            {isOpen && (
                <div className="absolute mt-1 w-20 bg-white border border-gray-100 rounded-md shadow-lg">
                    <div
                        onClick={() => onSelectChange('en')}
                        className={`py-2 px-4 cursor-pointer hover:bg-gray-300 ${localActive === 'en' ? 'bg-[#ddd]' : ''
                            }`}
                    >
                        EN
                    </div>
                    <div
                        onClick={() => onSelectChange('ar')}
                        className={`py-2 px-4 cursor-pointer hover:bg-gray-300 ${localActive === 'ar' ? 'bg-[#ddd]' : ''
                            }`}
                    >
                        AR
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocalSwitcher;