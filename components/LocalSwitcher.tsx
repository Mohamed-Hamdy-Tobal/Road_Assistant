import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const LocalSwitcher = () => {
    const router = useRouter();
    const localActive = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const onSelectChange = (nextLocal: string) => {
        router.replace(`/${nextLocal}`);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`py-2 px-4 cursor-pointer text-[#fff] bg-transparent outline-none border-none`}
            >   
                <span className="mr-2"><FontAwesomeIcon icon={faGlobe} /></span>
                <span>{localActive == 'en'? "EN":"AR"}</span>
            </button>

            {isOpen && (
                <div className="absolute mt-1 w-20 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div
                        onClick={() => onSelectChange('en')}
                        className={`py-2 px-4 cursor-pointer hover:bg-gray-100 ${localActive === 'en' ? 'bg-[#ddd]' : ''
                            }`}
                    >
                        EN
                    </div>
                    <div
                        onClick={() => onSelectChange('ar')}
                        className={`py-2 px-4 cursor-pointer hover:bg-gray-100 ${localActive === 'ar' ? 'bg-[#ddd]' : ''
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