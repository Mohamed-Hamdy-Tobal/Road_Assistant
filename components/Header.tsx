'use client'

// import { NavLinks } from "@/constants"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'
import Image from "next/image";
import LocalSwitcher from "./LocalSwitcher";
import { useLocale } from "next-intl";

// ...

const Header = () => {

    const localActive = useLocale()
    console.log("localActive header", localActive)

    const NavLinksEN = [
        { href: `/${localActive}`, key: 'Home', text: 'Home' },
        { href: `/${localActive}/about`, key: 'About', text: 'About' },
        { href: `/${localActive}/services`, key: 'Services', text: 'Services' },
        { href: `/${localActive}/blog`, key: 'Blog', text: 'Blog' },
        { href: `/${localActive}/career`, key: 'Career', text: 'Career' },
        { href: `/${localActive}/contact`, key: 'Contact', text: 'Contact' },
    ];
    const NavLinksAR = [
        { href: `/${localActive}`, key: 'الرئيسية', text: 'الرئيسية' },
        { href: `/${localActive}/about`, key: 'حول', text: 'حول' },
        { href: `/${localActive}/services`, key: 'الخدمات', text: 'الخدمات' },
        { href: `/${localActive}/blog`, key: 'المدونة', text: 'المدونة' },
        { href: `/${localActive}/career`, key: 'الوظائف', text: 'الوظائف' },
        { href: `/${localActive}/contact`, key: 'اتصل بنا', text: 'اتصل بنا' },
    ];
    const NavLink = localActive == 'en'? NavLinksEN:NavLinksAR
    


    const [isHeaderOpen, setIsHeaderOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    const headerRef = useRef<HTMLHeadElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    const pathname = usePathname()
    console.log('pathname: ', pathname)

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerWidth < 768 ? 10 : 100;

            if (window.scrollY > scrollThreshold) {
                if (headerRef.current) {
                    headerRef.current.style.background = '#f0f6fb';
                    // headerRef.current.style.background = '#DCF1F4';
                    headerRef.current.style.padding = '14px 0px';
                    headerRef.current.style.boxShadow =
                        '0 8px 4px -7px rgba(115,115,115,0.3)';
                    if (imgRef.current) {
                        imgRef.current.style.width = '40px';
                    }
                }
            } else {
                if (headerRef.current) {
                    headerRef.current.style.background = 'transparent';
                    // headerRef.current.style.background = '#0E1036';
                    headerRef.current.style.padding = '50px 0px';
                    headerRef.current.style.boxShadow = 'none';
                    if (imgRef.current) {
                        imgRef.current.style.width = '60px';
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header id="main-header" className="fixed py-[50px] px-0 top-0 left-0 w-full z-50 transition-all duration-300" ref={headerRef}>
            <div className="container flex justify-between items-center gap-[30px] sm:gap-0 sm:flex-row">
                <Link href='/' className="block flex-1">
                    <Image src="/logo.svg" alt='logo' ref={imgRef} width={60} height={20} />
                </Link>
                <div className="main-menu-mobile flex justify-end items-center flex-row-reverse">
                    <button
                        className="block md:hidden focus:outline-none z-20 my-btn-header"
                        onClick={handleMenuToggle}
                    >
                        <span className={` mobile-menubar text-secoColor text-[25px] transition-all duration-500 ${!isHeaderOpen ? '' : 'close-icon'}`}>{!isHeaderOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} />}</span>
                        {/* <span className={`z-20 mobile-menubar theme-color text-[22px] transition-all duration-500`}><FontAwesomeIcon icon={faBars} /></span> */}
                    </button>
                    <div className="switcher1 block lg:hidden">
                        <LocalSwitcher />
                    </div>
                </div>
                <nav className={`${isHeaderOpen ? 'menu-show' : ''} flex gap-6 justify-center items-center menu-toggle transition-all duration-300`}>
                    <h1 className="block md:hidden text-[#ccc] text-[30px] md:text-[22px] absolute top-[45px] left-[28px] font-bold ite uppercase self-baseline">{localActive == 'en'?"Kassel":"كاسل"} <span className="block w-1/2 mx-auto h-[3px] bg-mainColor absolute bottom-[3px] ml-[25%] translate-y-[6px] rounded-[3px]"></span></h1>
                    <ul className={`navs-menu flex justify-between items-center md:gap-5 mt-[120px] md:mt-[0px] ${localActive == 'ar'? "reflect":""}`}>
                        {NavLink.map((nav) => <li
                            key={nav.key}
                            className="md:min-w-[70px] text-center"
                        ><Link
                            href={`${nav.href}`}
                            onClick={handleMenuToggle}
                            className="text-white inline-block relative main-link-header"
                            // className={`${(pathname === nav.href)
                            //     ? 'activeLink'
                            //     : ''
                            //     } text-white inline-block hover:scale-105 md:hover:scale-100 hover:text-secoColor font-bold transition-all duration-500`}
                        >
                                {nav.text}
                                <span className={`span-head ${(pathname === nav.href)
                                ? 'activeLink'
                                : ''
                                } text-white inline-block hover:scale-105 md:hover:scale-100 hover:text-secoColor font-bold transition-all duration-500`}></span>
                            </Link></li>)}
                    </ul>
                    <div className="switcher2 hidden lg:block">
                        <LocalSwitcher />
                    </div>
                </nav>
            </div>
        </header>
    )
}






export default Header