"use client"

import ParallaxComponent from '@/components/About/Parallex'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { bottomVariants } from '@/components/animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from "next-intl";

const dataAboutEN = {
    title: "Learn more about us",
    mainABout: "Information technology Company Since 2024",
    info: [
        "Road Assistant provides 24 hours a day, 7 days a week roadside assistance services through our mobile application. Our experienced team is passionate about helping customers in need and uses the latest technology to ensure fast and efficient service. Our mission is to make your driving experience stress-free. Thank you for choosing Road Assistant",
        "Roadside rescue services",
        "Insured car inspections",
        "Comprehensive management of insurance claims"
    ],
    btn: "View More"
}
const dataAboutAR = {
    title: "تعرف على المزيد عنا",
    mainABout: "شركة تكنولوجيا المعلومات منذ عام 2024",
    info: [
        "تقدم Road Assistant خدمات المساعدة على الطريق على مدار الساعة طوال أيام الأسبوع من خلال تطبيق الهاتف المحمول الخاص بنا. فريقنا ذو الخبرة متحمس لمساعدة العملاء المحتاجين ويستخدم أحدث التقنيات لضمان خدمة سريعة وفعالة. مهمتنا هي جعل تجربة القيادة الخاصة بك خالية من الإجهاد. شكرا لاختيارك Road Assistant",
        "خدمات إنقاذ على الطريق",
        "معاينات سيارات مؤمن عليها",
        "الإدارة الشاملة لمطالبات التأمين",
    ],
    btn: "عرض المزيد"
}

const HomeAboutUS = () => {

    const localActive = useLocale()
    console.log("About localActive : ", localActive)
    const dataAbout = localActive == 'en' ? dataAboutEN : dataAboutAR

    return (
        <div className="about overflow-hidden">
            <div className="about-main md:pb-14 pt-44">
                <div className="container" >
                    <div className={`${localActive == 'ar' ? 'reflect-landing reflect-dir':''} flex flex-col lg:flex-row flex-wrap items-center justify-between`}>
                        <motion.div className="main-info w-full lg:w-[50%]" initial='initial' whileInView='animate'>
                            <div className="mb-16">
                                <div className="space-y-4">
                                    <span className="text-secoColor font-bold">{dataAbout.title}</span>
                                    <h3 className="text-[38px] leading[1.25] font-bold mb-6 text-[#222222]">{dataAbout.mainABout}</h3>
                                    {dataAbout.info.map((item, idx) => (
                                        <div key={idx} className={`flex gap-3 ${localActive == 'ar'? "flex-row-reverse":""}`}>
                                            <span className={`checked-icon-about-${idx}`}><FontAwesomeIcon icon={faCheck} size="lg" color="green" /></span>
                                            <p className="mb-4 text-[#666666] text-[18px] leading-7 font-normal pb-[10px]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <motion.div className="my-btn mt-[40px]" variants={bottomVariants}>
                                    <Link href='/services' className="btn inline-block">{dataAbout.btn}</Link>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div className="box-image w-full lg:w-[50%]">
                            <ParallaxComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUS