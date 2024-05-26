"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faShoppingCart, faMoneyBill, faHeartbeat, faUtensils, faBuilding, faPlane, faGraduationCap, faBus, faCalendar, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { bottomVariants } from '../animation';
import { useLocale } from "next-intl";


const textVariants = {
    initial: {
        x: 0,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const servesEN = [
    { title: 'Game', icon: faGamepad },
    { title: 'eCommerce', icon: faShoppingCart },
    { title: 'Finance', icon: faMoneyBill },
    { title: 'Healthcare', icon: faHeartbeat },
    { title: 'Restaurant', icon: faUtensils },
    { title: 'Real estate', icon: faBuilding },
    { title: 'Tour & Travels', icon: faPlane },
    { title: 'Education', icon: faGraduationCap },
    { title: 'Transport', icon: faBus },
    { title: 'Event', icon: faCalendar },
    { title: 'Grocery', icon: faShoppingBasket }
]
const servesAR = [
    { title: 'ألعاب', icon: faGamepad },
    { title: 'التجارة الإلكترونية', icon: faShoppingCart },
    { title: 'التمويل', icon: faMoneyBill },
    { title: 'الرعاية الصحية', icon: faHeartbeat },
    { title: 'المطاعم', icon: faUtensils },
    { title: 'العقارات', icon: faBuilding },
    { title: 'السياحة والسفر', icon: faPlane },
    { title: 'التعليم', icon: faGraduationCap },
    { title: 'النقل', icon: faBus },
    { title: 'الفعاليات', icon: faCalendar },
    { title: 'البقالة', icon: faShoppingBasket }
];


const dataAboutEN = {
    title: "Services Introduced",
    mainABout: "Industries We Serve",
    desc: "Successfully delivered digital products"
}
const dataAboutAR = {
    title: "الخدمات المقدمة",
    mainABout: "الصناعات التي نخدمها",
    desc: "تم تقديم منتجات رقمية بنجاح"
};


const Industry = () => {

    const localActive = useLocale()

    const serves = localActive == 'en'? servesEN : servesAR
    
    const dataAbout = localActive == 'en'? dataAboutEN : dataAboutAR

    return (
        <div className="pt-40 bg-cover py-[150px]" >
            <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
                <motion.div className="text-center" variants={bottomVariants} >
                    <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>{dataAbout.title}</motion.span>
                    <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>{dataAbout.mainABout}</motion.h4>
                    <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>{dataAbout.desc}</motion.p>
                </motion.div>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-[20px]" variants={bottomVariants}>
                    {serves.map((serve, idx) => (
                        <div key={idx} className="text-center bg-[#fbfbfb] border-[#eee] rounded-[5px] transition3 flex justify-center items-center flex-col mb-55">
                            <div className="ser-icon d-inline-block mb-22 transition5 text-mainColor text-[65px] mb-3">
                                <FontAwesomeIcon icon={serve.icon} />
                            </div>
                            <h6 className="font-bold mb-[10px] text-[22px] text-[#333]">{serve.title}</h6>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Industry