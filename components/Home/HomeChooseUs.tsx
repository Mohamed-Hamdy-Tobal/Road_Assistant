"use client"
import Link from 'next/link';
import React from 'react';
import AboutFeats from './AboutFeats';
import { motion } from "framer-motion"
import { useLocale } from 'next-intl';


const textVariants = {
    initial: {
        x: -100,
        y:100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const introEN = {
    title: 'Your Trusted Roadside Assistance Partner',
    mainTitle: "We're Here to Get You Back on the Road",
    desc: "When you experience car trouble on the road, don't worry – we're here to help. Our comprehensive roadside assistance services are available 24/7, 365 days a year, providing you with peace of mind wherever your journey takes you.",
    btn: 'Get a Quote'
};
const introAR = {
    title: 'شريكك الموثوق في المساعدة على جانب الطريق',
    mainTitle: 'نحن هنا لإعادتك إلى الطريق',
    desc: 'عندما تواجه مشكلة في سيارتك على الطريق، لا داعي للقلق - نحن هنا للمساعدة. تتوفر خدمات المساعدة على جانب الطريق الشاملة لدينا على مدار 24 ساعة في اليوم، 365 يومًا في السنة، مما يمنحك راحة البال أينما تأخذك رحلتك.',
    btn: 'احصل على عرض أسعار'
};


const HomeChooseUs = () => {
    const localActive = useLocale();
    const intro = localActive == 'en'? introEN:introAR

    return (
        <div className="about-area home3 relative overflow-hidden pt-14 mt-[50px]">
            <div className="home3-about-bg pb-[170px] pt-[125px] bg-no-repeat pt-125 pb-170 bg-cover" style={{ backgroundImage: 'url("home3-about-bg.png")' }}>
                <div className="container">
                    <motion.div className={`flex flex-col pt-90 ${localActive=='ar'?'reflect-dir':''}`} initial='initial' whileInView='animate'>
                        <div className="w-full pt-[200px] md:pt-[70px]">
                            <motion.div className="mb-8 lg:mb-0 lg:mr-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" variants={textVariants}>
                                <div className="title">
                                    <span className="theme-color font-bold">{intro.title}</span>
                                    <h3 className="font-bold text-3xl lg:text-4xl mb-6 lg:mb-8">{intro.mainTitle}</h3>
                                    <p className="pb-2">{intro.desc}</p>
                                </div>
                                <div className="my-btn mt-3">
                                    <Link href={`/${localActive}/services`} className="btn inline-block">{intro.btn}</Link>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div variants={textVariants} className="mb-10 lg:mb-0 flex justify-end aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                            <AboutFeats/>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default HomeChooseUs;
