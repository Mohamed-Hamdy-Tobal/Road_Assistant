import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { useLocale } from "next-intl";


const BlogComponent = ({ h1, img, desc, href }: { h1: string, img: any, desc: string, href: string }) => {
    const localActive = useLocale()

    return (
        <div className={`mb-[50px] ${localActive == 'ar'?'text-right':""}`}>
            {h1 && <h1 className={`font-bold text-[25px] md:text-[35px] mb-3 text-mainColor ${localActive == 'ar'?"text-right":""}`}>{h1}</h1>}
            {img && <Image width={1400} height={800} alt="blog" src={img} className='max-w-[100%] h-auto' />}
            {desc && <p className={`text-[18px] text-textGr my-3 ${localActive == 'ar'?"text-right":""}`}>{desc}</p>}
            <div className='my-btn' >
                {href && <Link href={href} className='btn2 inline-block my-3'>
                    {localActive == 'ar'?"قراءة المذيد":"Read More"}
                </Link>}
            </div>
        </div>
    )
}


export default BlogComponent