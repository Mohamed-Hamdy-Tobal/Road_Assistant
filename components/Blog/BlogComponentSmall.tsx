import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { useLocale } from "next-intl";


const BlogComponentSmall = ({ h1, img, desc, href }: { h1: string, img: any, desc: string, href: string }) => {

    const localActive = useLocale()


    return (
        <div className={`mb-[50px] ${localActive =='ar'?"text-right":""}`}>
            <h1 className='font-[600] text-[22px] md:text-[35px] mb-3 text-[#333]'>{h1}</h1>
            <Image width={1400} height={800} alt="blog" src={`${img}`} className='max-w-[100%] h-auto' />
            {desc && <p className='text-[18px] text-textGr my-3'>{desc}</p>}
            <div className='my-btn' >
                {href && <Link href={href} className='btn2 inline-block my-3'>
                    Read More
                </Link>}
            </div>
        </div>
    )
}


export default BlogComponentSmall