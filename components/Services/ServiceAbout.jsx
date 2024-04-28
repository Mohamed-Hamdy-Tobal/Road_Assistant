"use client"

import React from 'react'
import { motion } from "framer-motion"
import { useLocale } from "next-intl";
import Image from 'next/image';

const dataAboutEN = {
    title: "Learn more about us",
    mainABout: "Unlock Peace of Mind with our Instant Accident Assistance Feature!",
    info: [
        "Hit the road with confidence, knowing that our cutting-edge technology has your back in any unexpected situation.",
        "With just a tap, our system springs into action, swiftly detecting accidents and relaying your precise location to emergency services.",
        "Whether it's a minor fender-bender or a more serious incident, help is on the way in record time.",
    ],
}
const dataAboutAR = {
    title: "تعرف على المزيد عنا",
    mainABout: "أطلق العنان لراحة البال من خلال ميزة المساعدة الفورية في الحوادث",
    info: [
        "نقدم خدمات المساعدة على الطريق على مدار الساعة إبريل أيام الأسبوع من خلال تطبيق الهاتف المحمول الخاص بنا. فريقنا ذو الخبرة متحمس لمساعدة العملاء المحتاجين وإحداث التفاصيل وخدمة سريعة حسب الحاجة. مهمتنا هي مراقبة القيادة الخاصة بك خالية من الإجهاد. شكرا لك على التركيز مساعد الطريق",
        "خدمات تقليص الإنتاج",
        "معينات سيارات مؤمن عليها",
        "الإدارة الشاملة لمطالبات التأمين",
    ],
}

const ServiceAbout = () => {

    const localActive = useLocale()
    const dataAbout = localActive == 'en' ? dataAboutEN : dataAboutAR

    return (
        <div className="about overflow-hidden">
            <div className="about-main pb-14">
                <div className="container" >
                    <div className={`${localActive == 'ar' ? 'reflect-landing reflect-dir' : ''} flex flex-col lg:flex-row flex-wrap items-center justify-between`}>
                        <motion.div className="main-info w-full lg:w-[50%]" initial='initial' whileInView='animate'>
                            <div className="lg:mb-16">
                                <div className="space-y-4">
                                    <span className="text-secoColor font-bold">{dataAbout.title}</span>
                                    <h3 className="text-[38px] leading[1.25] font-bold pb-6 text-[#222222]">{dataAbout.mainABout}</h3>
                                    {dataAbout.info.map((item, idx) => (
                                        <div key={idx} className={`flex gap-3 ${localActive == 'ar' ? "flex-row-reverse" : ""}`}>
                                            {/* <span className={`checked-icon-about-${idx}`}><FontAwesomeIcon icon={faCheck} size="lg" color="green" /></span> */}
                                            <p className="mb-4 text-[#666666] text-[18px] leading-7 font-normal">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <div className="box-image w-full lg:w-[50%]">
                            <div className={`max-w-full flex justify-center relative`}>
                                <div className="max-w-full relative inline-flex justify-end items-end bg-transparent" >
                                    <Image width={500} height={400} className="max-w-full h-auto" src="/banner-service.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAbout