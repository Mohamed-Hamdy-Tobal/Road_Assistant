// import { footerLinks } from '@/constants'
// import Link from 'next/link'
// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobe , faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//     return (
//         <footer className='bg-[#171a1e] py-[90px] text-white' >
//             <div className="footer-area home5">
//                 <div className="container">
//                     <div className="footer-top pb-[55px]">
//                         <div className="grid grid-cols-5 gap-4 flex-wrap">
//                             <div className="col-span-5 md:col-span-3 lg:col-span-2 pr-[110px]">
//                                 {/* <img src='kassel_logo3.png' alt='logo' className='max-w-full w-[180px] h-auto mb-5' /> */}
//                                 <h1 className="text-white text-[40px] font-bold ite uppercase relative mb-[25px]"  >Kassel <span className="block w-[50px] translate-x-[-50%] mx-auto h-[4px] bg-mainColor absolute bottom-[-1px] ml-[25%] translate-y-[6px] rounded-[3px]"></span></h1>
//                                 <p className='desc text-[18px] leading-[28px] font-400 text-[#cbcbcb] mb-4'>Rapid and maintainable product development
//                                     Bring your startup idea to life, or solve a business problem.</p>
//                                 <div className="relative mb-6">
//                                     <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                                         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
//                                             <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
//                                             <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
//                                         </svg>
//                                     </div>
//                                     <input type="text" id="input-group-1" className="bg-[#f0f6fb]  text-[#666666] text-sm focus:border-none block w-full py-4 pl-[45px] rounded-none outline-none transition-all duration-300 " placeholder="Submit Email" />
//                                 </div>
//                             </div>
//                             {footerLinks.map((section, index) => (
//                                 <div key={index} className="col-span-2 md:col-span-1">
//                                     <h6 className="capitalize text-[21px] font-[700] mb-[22px]">{section.title}</h6>
//                                     <ul className="footer-info">
//                                         {section.links.map((link, linkIndex) => (
//                                             <li key={linkIndex} className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5]'>
//                                                 <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="relative inline-block mb-2 hover:text-mainColor transition-all duration-300">
//                                                     {link}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                             <div className="touch col-span-5 lg:col-span-1">
//                                 <h6 className="capitalize text-[21px] font-[700] mb-[22px]">Get In Touch</h6>
//                                 <ul className="social">
//                                     {/* Phone */}
//                                     <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
//                                         <span className="f-icon mr-2">
//                                             <FontAwesomeIcon icon={faGlobe} />
//                                         </span>
//                                         <span className="whitespace-wrap hidden lg:block">www.kasselsoft<br/>.com</span>
//                                         <span className="whitespace-wrap block lg:hidden">www.kasselsoft.com</span>
//                                     </li>

//                                     {/* Mail */}
//                                     <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
//                                         <span className="f-icon mr-2">
//                                             <FontAwesomeIcon icon={faEnvelope} />
//                                         </span>
//                                         <span className="whitespace-wrap hidden lg:block">kasselsoft<br/>@kasselsoft.com</span>
//                                         <span className="whitespace-wrap block lg:hidden">kasselsoft@kasselsoft.com</span>
//                                     </li>

//                                     {/* Location Marker */}
//                                     <li className='text-[#cbcbcb] mb-3 text-[18px] leading-[1.5] flex items-start'>
//                                         <span className="f-icon mr-2">
//                                             <FontAwesomeIcon icon={faMapMarkerAlt} />
//                                         </span>
//                                         <span className="whitespace-wrap">V Business Center</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="footer-bottom">
//                         <div className="flex items-center">
//                             <h3 className="font-bold inline-block pr-[25px] text-[25px] mb-0">Follow Us</h3>
//                             <ul className="social flex gap-[5px]">
//                                     {/* Phone */}
//                                     <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
//                                         <span className="f-icon mr-2">
//                                             <Link href='https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=962790039555&text' target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></Link>
//                                         </span>
//                                     </li>

//                                     {/* Mail */}
//                                     <li className='text-mainColor text-[25px] flex items-start hover:text-[#979696] transition-all duration-300'>
//                                         <span className="f-icon mr-2">
//                                             <Link href='https://www.instagram.com/_kassel_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link>
//                                         </span>
//                                     </li>
//                                 </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer
