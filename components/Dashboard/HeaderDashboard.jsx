'use client'

import Link from "next/link"
import { useRef, useState } from "react"
import Image from "next/image";
import { useLocale } from "next-intl";
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic'
import UserDropdown from "@/components/UserDropdown"

const Header = () => {

    const localActive = useLocale()
    console.log("localActive header", localActive)
    const { isLoggedIn, user } = useSelector((state) => state.auth);

    const headerRef = useRef(null)
    const imgRef = useRef(null)


    return (
        <header id="main-header" className="shad fixed bg-[#61835c] py-[16px] px-0 top-0 left-0 w-full z-50 transition-all duration-300" ref={headerRef}>
            <div className="container flex justify-between items-center gap-[30px] sm:gap-0 sm:flex-row">
                <Link href={`/${localActive}/`} className="block">
                    <Image src="/logo.svg" alt='logo' ref={imgRef} width={60} height={20} />
                </Link>
                {user && <h1 className='text-white font-semibold text-[14px] sm:text-[18px]'><span className="text-[#fbfbfb]">Hello </span> <span className="text-[#ffc087] tracking-tight">{user.first_name} {user.last_name}</span></h1>}
                <div className="main-menu-mobile flex justify-end items-center flex-row-reverse">
                    <div className="block">
                        <UserDropdown />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default dynamic(() => Promise.resolve(Header), { ssr: false })