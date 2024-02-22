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
    title: 'WHY CHOOSE US',
    mainTitle:"We help you to make work easy",
    desc: 'At Kassel Company, we understand what your business means to you. Our commitment is to simplify your work, delivering innovative solutions that enhance efficiency and allow you to concentrate effortlessly on your core objectives.',
    btn:'View More'
}
const introAR = {
    title: 'لماذا نختارنا',
    mainTitle: 'نساعدك في تسهيل العمل',
    desc: 'في شركة كاسل، نفهم ما تعنيه أعمالك بالنسبة لك. التزامنا هو تبسيط عملك، وتقديم حلول مبتكرة تعزز الكفاءة وتتيح لك التركيز بسهولة على أهدافك الأساسية.',
    btn: 'عرض المزيد'
};


const HomeAbout = () => {
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

export default HomeAbout;
