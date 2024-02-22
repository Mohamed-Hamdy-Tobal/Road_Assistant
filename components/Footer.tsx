import { footerLinksAR, footerLinksEN } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope, faMapMarkerAlt, faMapMarker, faCalendar, faClock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLocale } from "next-intl";


const Footer = () => {
    const localActive = useLocale()

    const footerLinks = localActive == 'en' ? footerLinksEN : footerLinksAR

    return (
        <footer className='bg-[#171a1e] py-[90px] text-white' >
            <div className="footer-area home5">
                <div className="container">
                    <div className="footer-top pb-[55px]">
                        <div className="grid grid-cols-4 gap-4 flex-wrap">
                            {localActive == 'en' ? (
                                <>
                                    <div className="col-span-4 lg:col-span-2 pr-[110px]">
                                        {/* <img src='kassel_logo3.png' alt='logo' className='max-w-full w-[180px] h-auto mb-5' /> */}
                                        <h1 className="text-white text-[40px] font-bold ite uppercase relative mb-[25px] w-fit"  >{localActive == 'en' ? 'Kassel' : 'كاسل'}<span className="block w-[50px]  translate-x-[-50%] left-[50%] h-[4px] bg-mainColor absolute bottom-[-1px] translate-y-[6px] rounded-[3px]"></span></h1>
                                        <p className='desc text-[18px] leading-[28px] font-400 text-[#cbcbcb] mb-4'>
                                            {localActive == 'en'
                                                ? 'Rapid and maintainable product development Bring your startup idea to life, or solve a business problem.'
                                                : '.تطوير منتج سريع وقابل للصيانة، قم بإضفاء الحيوية على فكرة بدء التشغيل الخاصة بك، أو حل مشكلة العمل'}
                                        </p>
                                        <div className="relative mb-6">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                            </div>
                                            <input type="text" id="input-group-1" className="bg-[#f0f6fb]  text-[#666666] text-sm focus:border-none block w-full py-4 pl-[45px] rounded-none outline-none transition-all duration-300 " placeholder="Submit Email" />
                                        </div>
                                    </div>
                                    {footerLinks.map((section, index) => (
                                        <div key={index} className={`col-span-4 sm:col-span-2 lg:col-span-1`}>
                                            <h6 className="capitalize text-[21px] font-[700] mb-[22px]">{section.title}</h6>
                                            <ul className="footer-info">
                                                {section.links.map((link, linkIndex) => (
                                                    <li key={linkIndex} className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5]'>
                                                        <Link href={`/${localActive}/${link.href}`} passHref className="relative inline-block mb-2 hover:text-mainColor transition-all duration-300">
                                                            {link.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    <div className="touch col-span-5">
                                        <h6 className="capitalize text-[21px] font-[700] mb-[22px]">{localActive == 'en' ? 'Get In Touch' : 'ابقى على تواصل'}</h6>
                                        <div className="main-touch flex justify-start gap-[30px] md:gap-[100px] items-start flex-wrap">
                                            <ul className="social">
                                                {/* Phone */}
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faGlobe} />
                                                    </span>
                                                    <span className="whitespace-wrap"><a href='www.kasselsoft.com' target='__blank'>www.kasselsoft.com</a></span>
                                                </li>

                                                {/* Mail */}
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                    <span className="whitespace-wrap"><a href='mailto:kasselsoft@kasselsoft.com'>kasselsoft@kasselsoft.com</a></span>
                                                </li>

                                                {/* Location Marker */}
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13534.790227467456!2d35.8850835!3d31.9962133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca13d1331d42f%3A0xe04c250b2e016ae0!2skasselsoft!5e0!3m2!1sar!2seg!4v1706995306619!5m2!1sar!2seg" target='__blank'>V Business Center</a>
                                                    </span>
                                                </li>
                                            </ul>
                                            <ul className="social">
                                                {/* <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                            <span className="f-icon mr-2">
                                                <FontAwesomeIcon icon={faMapMarker} />
                                            </span>
                                            <span className="whitespace-wrap">
                                                {localActive == 'en' ? 'Address: Queen Rania Street, Amman - Jordan' : 'العنوان: شارع الملكة رانيا العبدالله، عمان - الأردن'}
                                            </span>
                                        </li> */}

                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        {localActive == 'en' ? 'Sunday - Thursday ' : 'الأحد - الخميس'}
                                                    </span>
                                                </li>

                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faClock} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        {localActive == 'en' ? (
                                                            <>
                                                                <span>9 AM - </span>
                                                                <span>5 PM </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span>صباحا \ </span>
                                                                <span> 5 مساءً </span>
                                                            </>
                                                        )}
                                                    </span>
                                                </li>
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faMoneyBill} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        {localActive == 'en' ? 'Sales Direct: +962 790039555' : 'المبيعات المباشرة: +962 790039555'}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {footerLinks.map((section, index) => (
                                        <div key={index} className={`col-span-4 sm:col-span-2 lg:col-span-1 ${localActive == 'ar' ? "text-right" : ""}`}>
                                            <h6 className="capitalize text-[21px] font-[700] mb-[22px]">{section.title}</h6>
                                            <ul className="footer-info">
                                                {section.links.map((link, linkIndex) => (
                                                    <li key={linkIndex} className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5]'>
                                                        <Link href={`/${localActive}/${link.href}`} passHref className="relative inline-block mb-2 hover:text-mainColor transition-all duration-300">
                                                            {link.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    <div className={`up-footer col-span-4 lg:col-span-2 p-0 lg:pl-[110px] text-right flex items-end flex-col`}>
                                        {/* <img src='kassel_logo3.png' alt='logo' className='max-w-full w-[180px] h-auto mb-5' /> */}
                                        <h1 className="text-white text-[40px] font-bold ite uppercase relative mb-[25px] w-fit"  >{localActive == 'en' ? 'Kassel' : 'كاسل'}<span className="block w-[50px]  translate-x-[-50%] left-[50%] h-[4px] bg-mainColor absolute bottom-[-1px] translate-y-[6px] rounded-[3px]"></span></h1>
                                        <p className='desc text-[18px] leading-[28px] font-400 text-[#cbcbcb] mb-4'>
                                            {localActive == 'en'
                                                ? 'Rapid and maintainable product development Bring your startup idea to life, or solve a business problem.'
                                                : '.تطوير منتج سريع وقابل للصيانة، قم بإضفاء الحيوية على فكرة بدء التشغيل الخاصة بك، أو حل مشكلة العمل'}
                                        </p>
                                        <div className="relative mb-6 w-full">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                            </div>
                                            <input type="text" id="input-group-1" className="bg-[#f0f6fb]  text-[#666666] text-sm focus:border-none block w-full py-4 pl-[45px] rounded-none outline-none transition-all duration-300 " placeholder="Submit Email" />
                                        </div>
                                    </div>
                                    <div className="touch col-span-5 flex flex-col justify-between items-end">
                                        <h6 className="capitalize text-[21px] font-[700] mb-[22px]">{localActive == 'en' ? 'Get In Touch' : 'ابقى على تواصل'}</h6>
                                        <div className="main-touch w-full flex-row-reverse text-right flex justify-start gap-[30px] md:gap-[100px] items-start flex-wrap">
                                            <ul className="social text-right">
                                                {/* Phone */}
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-end gap-2 flex-row-reverse'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faGlobe} />
                                                    </span>
                                                    <span className="whitespace-wrap"><a href='www.kasselsoft.com' target='__blank'>www.kasselsoft.com</a></span>
                                                </li>

                                                {/* Mail */}
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-end gap-2 flex-row-reverse'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                    <span className="whitespace-wrap"><a href='mailto:kasselsoft@kasselsoft.com'>kasselsoft@kasselsoft.com</a></span>
                                                </li>

                                                {/* Location Marker */}
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-end gap-2 flex-row-reverse'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13534.790227467456!2d35.8850835!3d31.9962133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca13d1331d42f%3A0xe04c250b2e016ae0!2skasselsoft!5e0!3m2!1sar!2seg!4v1706995306619!5m2!1sar!2seg" target='__blank'>V Business Center</a>
                                                    </span>
                                                </li>
                                            </ul>
                                            <ul className="social  text-right">
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-end gap-2 flex-row-reverse'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        {localActive == 'en' ? 'Sunday - Thursday ' : 'الأحد - الخميس'}
                                                    </span>
                                                </li>

                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-end gap-2 flex-row-reverse'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faClock} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        {localActive == 'en' ? (
                                                            <>
                                                                <span>9 AM - </span>
                                                                <span>5 PM </span>
                                                            </>
                                                        ) : (
                                                            <div className='flex gap-2'>
                                                                <div><span> مساءً </span><span> 5 </span></div><span> - </span>
                                                                <div><span> صباحا </span><span> 9 </span></div>
                                                                {/* <span> 9 صباحا </span> */}
                                                            </div>
                                                        )}
                                                    </span>
                                                </li>
                                                <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-end gap-2 flex-row-reverse'>
                                                    <span className="f-icon mr-2">
                                                        <FontAwesomeIcon icon={faMoneyBill} />
                                                    </span>
                                                    <span className="whitespace-wrap">
                                                        {localActive == 'en' ? 'Sales Direct: +962 790039555' : 'المبيعات المباشرة: +962 790039555'}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className={`flex flex-wrap gap-[10px] ${localActive == 'ar'? "flex-row-reverse":" items-start flex-col"}`}>
                            <h3 className="font-bold inline-block text-[25px] mb-0">{localActive == 'en' ? 'Follow Us' : "تابعنا"}</h3>
                            <ul className="social flex gap-[10px]">
                                {/* Phone */}
                                <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
                                    <span className="f-icon mr-2">
                                        <Link href='https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=962790039555&text' target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></Link>
                                    </span>
                                </li>

                                {/* Mail */}
                                <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
                                    <span className="f-icon mr-2">
                                        <Link href='https://www.instagram.com/_kassel_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                                    </span>
                                </li>
                                <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
                                    <span className="f-icon mr-2">
                                        <Link href='https://www.facebook.com/profile.php?id=61555183182719&mibextid=PlNXYD' target='_blank'><FontAwesomeIcon icon={faFacebook} /></Link>
                                    </span>
                                </li>
                                <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
                                    <span className="f-icon mr-2">
                                        <Link href='https://pin.it/6CI41cw0A' target='_blank'><FontAwesomeIcon icon={faPinterest} /></Link>
                                    </span>
                                </li>
                                <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
                                    <span className="f-icon mr-2">
                                        <Link href='https://x.com/kasselsoft/status/1751659476862537793?s=20' target='_blank'><FontAwesomeIcon icon={faTwitter} /></Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
