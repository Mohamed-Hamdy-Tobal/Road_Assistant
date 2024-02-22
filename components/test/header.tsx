// 'use client'

// import { NavLinks } from "@/constants"
// import Link from "next/link"
// import { useEffect, useRef, useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

// // ...

// const Header = () => {

//     const [isHeaderOpen, setIsHeaderOpen] = useState(false)

//     const handleMenuToggle = () => {
//         setIsHeaderOpen(!isHeaderOpen);
//     };

//     const headerRef = useRef<HTMLHeadElement>(null)
//     const imgRef = useRef<HTMLImageElement>(null)
//     // console.log(imgRef)

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollThreshold = window.innerWidth < 768 ? 10 : 100;

//             if (window.scrollY > scrollThreshold) {
//                 if (headerRef.current) {
//                     // headerRef.current.style.background = '#f0f6fb';
//                     headerRef.current.style.background = 'rgb(23 26 30 / 95%)';
//                     // headerRef.current.style.padding = '12px 0px';
//                     headerRef.current.style.boxShadow =
//                         'rgb(115 115 115 / 65%) 0px 8px 7px -6px';
//                     if (imgRef.current) {
//                         imgRef.current.style.width = '150px';
//                     }
//                 }
//             } else {
//                 if (headerRef.current) {
//                     // headerRef.current.style.background = 'transparent';
//                     headerRef.current.style.background = '#171a1e';
//                     // headerRef.current.style.padding = '50px 0px';
//                     headerRef.current.style.boxShadow = '0 7px 7px -6px rgb(115 115 115 / 80%)';
//                     if (imgRef.current) {
//                         imgRef.current.style.width = '176px';
//                     }
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <header className="fixed bg-[#171a1e] py-[14px] px-0 top-0 left-0 w-full z-50 transition-all duration-300" ref={headerRef}>
//             <div className="container flex justify-between items-center gap-[30px] sm:gap-0 sm:flex-row">
//                 <Link href='/'><img src='kassel_logo3.png' alt='logo' ref={imgRef} style={{filter: 'invert(1)'}}/></Link>
//                 <button
//                     className="block md:hidden focus:outline-none z-20"
//                     onClick={handleMenuToggle}
//                 >
//                     <span className={` mobile-menubar theme-color text-[25px] transition-all duration-500`}>{ !isHeaderOpen? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} />}</span>
//                     {/* <span className={`z-20 mobile-menubar theme-color text-[22px] transition-all duration-500`}><FontAwesomeIcon icon={faBars} /></span> */}
//                 </button>
//                 <nav className={`${isHeaderOpen ? 'menu-show' : ''} menu-toggle transition-all duration-300`}>
//                     <h1 className="block md:hidden text-[#ccc] text-[30px] md:text-[22px] absolute top-[21px] left-[28px] font-bold ite uppercase self-baseline">Kassel <span className="block w-1/2 mx-auto h-[3px] bg-mainColor absolute bottom-[3px] ml-[25%] translate-y-[6px] rounded-[3px]"></span></h1>
//                     <ul className={`navs-menu flex justify-between items-center md:gap-5 mt-[80px] md:mt-[0px]`}>
//                         {NavLinks.map((nav) => <li 
//                         key={nav.key} 
//                         className="md:w-[65px] text-center"
//                         ><Link href={`${nav.href}`} onClick={handleMenuToggle} className="text-white md:text-[#eee] inline-block hover:scale-105 md:hover:scale-100 hover:text-[#6c63ff] font-bold transition-all duration-500">{nav.text}</Link></li>)}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }






// export default Header