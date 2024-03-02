'use client'

import Banner from '@/components/Banner'
import React from 'react'
import { useLocale } from "next-intl";

const Blogs = () => {
    const localActive = useLocale()

    return (
        <div className="Blogs overflow-hidden">
            {
                localActive == 'en' ? (
                    <Banner bannerTitle={'Our Blog'} path={'blog'} bref={'Get Updated'} />
                ) : (<Banner bannerTitle={"مدوتنا"} path={"مدوتنا"} bref={"الحصول علي الاحدث"} />
                )
            }
            <div className="main-Blogs py-[100px]">
                <div className="container ">
                    Blogs
                </div>
            </div>
        </div>
    )
}

export default Blogs