"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faHandshake, faHandsClapping, faMobileAndroidAlt, faDesktop, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { bottomVariants } from '../animation';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useLocale } from "next-intl";


const introEN = {
    title: "Here’s why people choose to work with kassel",
    mainTitle:"Career opportunities at Kassel",
    desc: `Unleash the power of digitized solutions, including web, Android, and iOS apps, We treat you like a partner and build on your vision by showing you new possibilities and alternatives that suit you better.`,
}
const introAR = {
    title: 'إليك لماذا يختار الناس العمل مع كاسل',
    mainTitle: 'فرص العمل في كاسل',
    desc: `أطلق قوة الحلول المرقمة، بما في ذلك تطبيقات الويب وأندرويد و ايفون . نعاملك كشريك ونبني على رؤيتك من خلال إظهار لك إمكانيات وبدائل جديدة تناسبك بشكل أفضل.`,
};


const ServiceItem = ({ icon, title, count, operation }) => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className="team-item w-full sm:w-[45%] lg:w-1/4 p-4 text-center bg-[#fbfbfb] border-[#eee] rounded-[5px]">
            <div className="single-service-content transition3 mb-55">
                <div className="ser-icon d-inline-block mb-22 transition5 text-mainColor text-[65px] mb-3">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="service-text">
                    <div className="count flex justify-center font-[600] items-center text-[35px] text-[#666] mb-3">
                        {counterOn && <CountUp start={0} end={count} duration={3} />}
                        <span className="num">{operation}</span>
                    </div>
                    <h6 className="font-bold mb-[10px] text-[22px] text-[#333]">{title}</h6>
                </div>
            </div>
        </ScrollTrigger>
    );
};


const servicesDataEN = [
    {
        icon: faRocket,
        title: 'Leadership Years Experience',
        count: 4,
        operation: '+'
    },
    {
        icon: faHandshake,
        title: 'Talented Squad',
        count: 30,
        operation: '+'
    },
    {
        icon: faMobileAndroidAlt,
        title: 'Apps Developed',
        count: 20,
        operation: '+'
    },
    {
        icon: faDesktop,
        title: 'Projects Delivered',
        count: 100,
        operation: '%'
    },
    {
        icon: faGlobe,
        title: 'Countries Served',
        count: 7,
        operation: '+'
    },
    {
        icon: faHandsClapping,
        title: 'Client Satisfaction',
        count: 100,
        operation: '%'
    },
];
const servicesDataAR = [
    {
        icon: faRocket,
        title: 'سنوات القيادة',
        count: 4,
        operation: '+'
    },
    {
        icon: faHandshake,
        title: 'فريق موهوب',
        count: 30,
        operation: '+'
    },
    {
        icon: faMobileAndroidAlt,
        title: 'تطبيقات تم تطويرها',
        count: 20,
        operation: '+'
    },
    {
        icon: faDesktop,
        title: 'المشاريع التي تم تسليمها',
        count: 100,
        operation: '%'
    },
    {
        icon: faGlobe,
        title: 'الدول التي تم خدمتها',
        count: 7,
        operation: '+'
    },
    {
        icon: faHandsClapping,
        title: 'رضا العملاء',
        count: 100,
        operation: '%'
    },
];


const WorkWith = () => {

    const localActive = useLocale()
    const intro = localActive == 'en'? introEN:introAR
    const servicesData = localActive == 'en'? servicesDataEN:servicesDataAR

    return (
        <div className="pt-40 bg-cover py-[150px]" >
            <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
                <motion.div className="text-center" variants={bottomVariants} >
                    <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>{intro.title}</motion.span>
                    <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>{intro.mainTitle}</motion.h4>
                    <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>{intro.desc}</motion.p>
                </motion.div>
                <motion.div className="flex flex-wrap justify-center mt-14 gap-[20px]" variants={bottomVariants}>
                    {servicesData.map((service, idx) => (
                        <ServiceItem
                            key={idx}
                            icon={service.icon}
                            title={service.title}
                            count={service.count}
                            operation={service.operation}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WorkWith