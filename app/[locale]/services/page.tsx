'use client'

import Banner from '@/components/Banner'
import React from 'react'
import { useLocale } from "next-intl";

const Services = () => {
    const localActive = useLocale()

    return (
        <div className="Services overflow-hidden">
            {
                localActive == 'en'? (
                    <Banner bannerTitle={'Services'} path={'Services'} bref={'What We Do'} />
                ):(<Banner bannerTitle={'الخدمات'} path={'الخدمات'} bref={'ماذا نقدم'} />
                )
            }
            <div className="main-Services py-[100px]">
                <div className="container ">
                    Services
                </div>
            </div>
        </div>
    )
}

export default Services