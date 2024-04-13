"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faHandshake, faHandsClapping, faMobileAndroidAlt, faGlobe, faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { bottomVariants } from '../animation';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useLocale } from "next-intl";


const introEN = {
    title: "Here’s why people choose to work with us",
    mainTitle:"Our mission",
    desc: "Provide first-class roadside assistance services through our mobile application, using the latest technology and a dedicated team of professionals, to ensure drivers get the help they need anytime, anywhere."
}
const introAR = {
    title: 'إليك لماذا يختار الناس العمل معنا ',
    mainTitle: "مهمتنا",
    desc: "توفير خدمات المساعدة على الطريق من الدرجة الأولى من خلال تطبيق الهاتف المحمول الخاص بنا ، باستخدام أحدث التقنيات وفريق متخصص من المحترفين ، لضمان حصول السائقين على المساعدة التي يحتاجون إليها في أي وقت وفي أي مكان"
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
        title: "Service Requests",
        count: 20,
        operation: 'K'
    },
    {
        icon: faHandshake,
        title: 'Talented Team',
        count: 30,
        operation: '+'
    },
    {
        icon: faMobileAndroidAlt,
        title: "Customer Service Calls",
        count: 150,
        operation: 'K'
    },
    {
        icon: faDownload,
        title: "App Downloads",
        count: 15,
        operation: 'K'
    },
    {
        icon: faGlobe,
        title: 'Serviced Provinces',
        count: 7,
        operation: '+'
    },
    {
        icon: faHandsClapping,
        title: 'Customer Satisfaction',
        count: 100,
        operation: '%'
    },
];

const servicesDataAR = [
    {
        icon: faRocket,
        title: "طلب للخدمات",
        count: 20,
        operation: 'K'
    },
    {
        icon: faHandshake,
        title: 'فريق موهوب',
        count: 30,
        operation: '+'
    },
    {
        icon: faMobileAndroidAlt,
        title: "مكالمة خدمة عملاء",
        count: 150,
        operation: 'K'
    },
    {
        icon: faDownload,
        title: "تحميل للتطبيق",
        count: 15,
        operation: 'K'
    },
    {
        icon: faGlobe,
        title: 'المحافطات التي تم خدمتها',
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
        <div className="pt-40 bg-cover pb-[250px]" >
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