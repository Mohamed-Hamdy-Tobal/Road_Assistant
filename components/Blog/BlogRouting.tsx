'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
// import { useLocale } from "next-intl";


const links = [
    { href: '/blog', text: '1' },
    { href: '/blog/blog2', text: '2' },
    { href: '/blog/blog3', text: '3' },
];

const BlogRouting = () => {

    const pathname = usePathname()
    // const localActive = useLocale()
    return (
        <div className="blog-routing flex justify-start items-center gap-5 my-10">
            {links.map(({ href, text }) => (
                <Link key={text} href={href} className={`block transition-all duration-300 w-[50px] h-[50px] leading-[50px] text-center border-[2px] border-[#999] text-[#999] rounded-[5px] ${pathname == href? 'activeLinkBlog' : ''}`}>
                    {text}
                </Link>
            ))}
        </div>
    )
}

export default BlogRouting