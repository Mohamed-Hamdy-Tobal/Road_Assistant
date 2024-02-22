'use client'

import React from 'react'
import { motion } from "framer-motion"
import { LeftRight } from '@/components/animation'
import Image from 'next/image'
import { useLocale } from "next-intl";



const brands = [
    { img: '/sol1.svg' },
    { img: '/sol2.svg' },
    { img: '/sol3.svg' },
    { img: '/sol5.svg' },
    { img: '/sol6.svg' },
    { img: '/sol7.svg' },
    { img: '/sol8.svg' },
    { img: '/sol9.svg' },
]
const dataAboutEN = {
    title: "Get Started",
    mainABout: "Industry Leading Managed Services",
    desc: "Kassel delivers industry-leading managed services and staffing solutions with unrivaled expertise and commitment."
}
const dataAboutAR = {
    title: "البدء",
    mainABout: "خدمات إدارية رائدة في الصناعة",
    desc: "تقدم كاسل خدمات إدارية رائدة في الصناعة وحلول توظيف مع خبرة لا مثيل لها والتزام لا يضاهى."
};

export const opacityVariants = {
    initial: {
        x: 0,
        y:0,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
}

const Managed = () => {

    const localActive = useLocale()
    
    const dataAbout = localActive == 'en'? dataAboutEN : dataAboutAR

    return (
        <div className='brand-work py-[100px] overflow-hidden' >
            <motion.div className="text-center pb-[60px]" variants={LeftRight} initial='initial' whileInView='animate'>
                <motion.span className="text-mainColor text-[18px] font-bold" variants={LeftRight}>{dataAbout.title}</motion.span>
                <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={LeftRight}>I{dataAbout.mainABout}</motion.h4>
                <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={LeftRight}>{dataAbout.desc}</motion.p>
            </motion.div>
            <motion.div className='cont grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:gap-7 max-w-full gap-y-[20px]' variants={opacityVariants} initial='initial' whileInView='animate'>
                {brands.map((item, idx) => (
                    <div className="flex justify-center items-center" key={idx}>
                        <motion.div className="brand-item w-fit transition-all duration-500 bg-bgMain p-7 rounded-full border-[#eee] border-[2px] relative flex flex-col justify-center items-center" key={idx} variants={opacityVariants} >
                            <Image width={512} height={512} src={item.img} alt="brand Image" className="p-3 w-[70px]" />
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Managed