'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { useLocale } from "next-intl";


const socialLinks = [
    { link: 'https://www.facebook.com/profile.php?id=61555183182719&mibextid=PlNXYD', icon: faFacebook },
    { link: 'https://www.instagram.com/_kassel_?igsh=cTY1dmtxd29nODF3&utm_source=qr', icon: faInstagram },
    { link: 'https://pin.it/6CI41cw0A', icon: faPinterest },
    { link: 'https://x.com/kasselsoft/status/1751659476862537793?s=20', icon: faTwitter },
    { link: 'https://wa.me/message/74Q6F22FDGNYN1', icon: faWhatsapp },
];

const Information = () => {

    const localActive = useLocale()

    return (
        <div className="contact-wrapper">
            <div className={`title text-md-center text-lg-left ${localActive == 'ar'?"text-right":""} lg:text-left`}>
                <span className="text-mainColor text-[20px] font-bold">
                    {localActive == 'en' ? "Stay Connected" : "ابق على اتصال"}
                </span>
                <h3 className="font-bold text-[45px] text-[#333]">
                    {localActive == 'en' ? "Contact Us" : "اتصل بنا"}
                </h3>
            </div>

            <ul className={`contact-info-content flex justify-between gap-8 mt-10 flex-col md:flex-row lg:flex-col ${localActive == 'ar'?"text-right":""}`}>
                <li className={`contact-location gap-5 md:text-center lg:text-left flex-row flex md:flex-col lg:flex-row justify-start items-center ${localActive == 'ar'? "flex-row-reverse":""} lg:flex-row`}>
                    <div className="text-white w-[70px] h-[70px] flex justify-center items-center bg-[#f0f6fb] rounded-full">
                        <Image width={30} height={30} src="/placeholder-icon.png" alt="image" />
                    </div>
                    <div className="contact-text">
                        <h4 className="font-bold text-[20px] mb-2">
                            {localActive == 'en'?"Location":"الموقع"}
                        </h4>
                        <p className="text-secondary mb-0 text-[#666]">V Business Center Vbc <br />Amman <br />Jordan</p>
                    </div>
                </li>
                <li className={`contact-email gap-5 md:text-center lg:text-left flex-row flex md:flex-col lg:flex-row justify-start items-center ${localActive == 'ar'? "flex-row-reverse":""} lg:flex-row`}>
                    <div className="text-white w-[70px] h-[70px] flex justify-center items-center bg-[#f0f6fb] rounded-full">
                        <Image width={30} height={30} src="/letter-icon.png" alt="image" />
                    </div>
                    <div className="contact-text">
                        <h4 className="font-bold text-[20px] mb-2">
                            {localActive == 'en'?"Email":"الايميل"}
                        </h4>
                        <p className="mb-0 text-[#666] flex flex-col justify-start items-start">
                            <a className="text-secondary2 hover:primary" href="mailto:kasselsoft@kasselsoft.com">kasselsoft@kasselsoft.com</a>
                        </p>
                    </div>
                </li>
                <li className={`contact-phone gap-5 md:text-center lg:text-left flex-row flex md:flex-col lg:flex-row justify-start items-center ${localActive == 'ar'? "flex-row-reverse":""} lg:flex-row`}>
                    <div className="text-white w-[70px] h-[70px] flex justify-center items-center bg-[#f0f6fb] rounded-full">
                        <Image width={30} height={30} src="/call-icon.png" alt="image" />
                    </div>
                    <div className="contact-text">
                        <h4 className="font-bold text-[20px] mb-2">
                            {localActive == 'en'?"Phone":"الهاتف"}
                        </h4>
                        <div className="mb-0 text-[#666] flex flex-col">
                            <span className="text-secondary2 hover:primary">+962 790039555</span>
                            <span className="text-secondary2 hover:primary">+962 790025554</span>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className={`flex justify-start md:justify-center lg:justify-start items-center gap-8 mt-[70px] flex-row flex-wrap ${localActive == 'ar'?"justify-end md:justify-center lg:justify-start":""} lg:justify-start`}>
                {socialLinks.map((socialLink, index) => (
                    <li key={index} className=''>
                        <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
                            <span className='w-[50px] flex justify-center items-center h-[50px] rounded-full bg-mainColor hover:bg-[#1e4486] transition-all duration-300 text-white text-[20px]'><FontAwesomeIcon icon={socialLink.icon} /> </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Information