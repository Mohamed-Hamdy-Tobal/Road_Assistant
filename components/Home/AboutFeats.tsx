import { HomeAboutEN, HomeAboutAR } from '@/constants'
import React from 'react'
import AboutItem from './AboutItem'
import { useLocale } from "next-intl";


const AboutFeats = () => {

    const localActive = useLocale()
    
    const HomeAbout = localActive == 'en'?HomeAboutEN:HomeAboutAR

    return (
        <div className='pt-16 lg:pt-105'>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
                {HomeAbout.map((item, idx) => (
                    <AboutItem key={idx} img={item.img} title={item.title} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default AboutFeats