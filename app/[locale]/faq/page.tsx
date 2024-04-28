'use client'

import Banner from '@/components/Banner'
import MainFAQ from '@/components/Faq/mainFAQ'
import React from 'react'
import { useLocale } from "next-intl";

const FAQ = () => {
    const localActive = useLocale()

    return (
        <div className="FAQ overflow-hidden">
            {
                localActive == 'en'? (
                    <Banner bannerTitle={"FAQ'S"} path={"faq's"} bref={'Know more'} />
                ):(<Banner bannerTitle={"الأسألة الشائعة"} path={'اسألة'} bref={'تعرف أكثر'} />)
            }
            <div className="main-FAQ py-[100px]">
                <div className="container ">
                    <MainFAQ/>
                </div>
            </div>
        </div>
    )
}

export default FAQ