"use client"

import ParallaxComponent from '@/components/About/Parallex'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { bottomVariants } from '@/components/animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from "next-intl";
import Image from 'next/image';

const dataAboutEN = {
    title: "Download Road Assistant app",
    mainABout: "just Download the app, be ready for all road situations, and make sure that you added your car to the car list or you can call our call center and they will provide you with any type of support .",
    btn: "View More"
}
const dataAboutAR = {
    title: "حمل تطبيق مساعد الطريق الان",
    mainABout: "حمل التطبيق الان وكن علي استعداد لاي مشكلة من مشاكل الطريق ولاتنسي باضافة بيانات سيارتك حتي تتمكن من طلب الخدمات بسرعة ويمكنك الاتصال بنا فورا عبر الرقم الساخن 17000",
    btn: "عرض المزيد"
}

const Download = () => {

    const localActive = useLocale()
    console.log("About localActive : ", localActive)
    const dataAbout = localActive == 'en' ? dataAboutEN : dataAboutAR

    return (
        <div className='download bg-[#171a1e] mt-[50px]'>
            <div className="">
                <div className="container" >
                    <div className={`${localActive == 'ar' ? 'reflect-landing reflect-dir' : ''} py-[20px] flex flex-col lg:flex-row flex-wrap items-center justify-between`}>
                        <motion.div className="main-info w-full lg:w-[60%]" initial='initial' whileInView='animate'>
                            <div className="">
                                <div className="space-y-4">
                                    <span className="text-secoColor font-bold text-[20px]">{dataAbout.title}</span>
                                    <h3 className="leading[1.25] font-bold mb-6 text-[#fff]">{dataAbout.mainABout}</h3>
                                </div>
                                <div className="btns-app flex justify-center items-center gap-5 flex-wrap pt-12 pb-5">
                                    <a href="#" target='_blank' className='w-[45%] lg:w-[30%]'>
                                        <Image width={500} height={400} className="max-w-full" src="/google.png" alt="image" />
                                    </a>
                                    <a href="#" target='_blank' className='w-[45%] lg:w-[30%]'>
                                        <Image width={500} height={400} className="max-w-full" src="/apple.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <div className={`box-image hidden lg:block lg:w-[40%] ${localActive == 'en'? 'h-[275px]':'h-[312px]'}`}>
                            <div className="wrap-image relative">
                                <Image width={500} height={400} className={`absolute z-10 max-w-full h-auto ${localActive == 'en' ? 'top-[-85px]' : 'top-[-105px]'} w-[360px] left-0`} src={`/helpo-cover-facebook-Recovered-${localActive == 'en' ? 'en' : 'ar'}.png`} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download