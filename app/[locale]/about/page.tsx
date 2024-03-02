'use client'

import Banner from '@/components/Banner'
import React from 'react'
import { useLocale } from "next-intl";

const About = () => {
    const localActive = useLocale()

    return (
        <div className="About overflow-hidden">
            {
                localActive == 'en'? (
                    <Banner bannerTitle={'About Us'} path={'about'} bref={'Know more'} />
                ):(<Banner bannerTitle={'معلومات عنا'} path={'حول'} bref={'تعرف أكثر'} />)
            }
            <div className="main-About py-[100px]">
                <div className="container ">
                    About
                </div>
            </div>
        </div>
    )
}

export default About