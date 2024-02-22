"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { useLocale } from 'next-intl';
import Image from 'next/image';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}


const LandingExpand = ({ title, mainTitle, desc, button }: {
    title: string;
    mainTitle: string;
    desc: string;
    button: React.ReactNode;
}) => {

    const localActive = useLocale();

    return (
        <div className='bg-altColor h-screen relative overflow-hidden'>
            {/* <div id="scene" className={`${localActive == 'ar' ? 'reflect-imgs':''} absolute w-full h-full z-1 transition-all duration-300`} >
                <img src="hm3-shape1.png" alt="img" className='z-0 absolute left-[3%] top-[23%] max-w-[100%]' />
                <img src="wave.png" alt="img" className='w-[30px] z-0 absolute right-[20%] bottom-[10%] max-w-[100%] animate-moveRight duration-300' />
                <img src="hm3-shape1.png" alt="img" className='z-0 absolute right-[19%] bottom-[40%] max-w-[100%]' />
                <img src="new-cross.png" alt="img" className='w-[30px] z-0 absolute right-[1%] top-[50%] max-w-[100%]' />
                <img src="new-cross.png" alt="img" className='w-[30px] z-0 absolute right-[18%] top-[18%] max-w-[100%]' />
                <img src="home3-round-shape1.png" alt="img" className='z-0 absolute right-[45%] top-[18%] max-w-[100%] animate-moveRight duration-300' />
            </div> */}
            <div className="container relative z-[1]">
                <div className="h-screen ele-center">
                    <div className={`${localActive == 'ar' ? 'reflect-landing reflect-dir':''} ele-center-col flex-1 flex-col-reverse md:flex-row flex-wrap pt-[170px] gap-5 md:gap-0 sm:pt-[140px] md:pt-[100px]`}>
                        <motion.div className='land-info text-white mb-8 flex-1' variants={textVariants} initial='initial' animate='animate'>
                            <motion.h5 className='text-mainColor text-[16px] sm:text-[20] lg:text-[28px] font-[700]' variants={textVariants}>
                                {title}
                            </motion.h5>
                            <motion.h1 className='font-[700] text-[#222222] text-[27px] mb-1 sm:text-[35] lg:text-[50px] sm:mb-[22px]' variants={textVariants}>
                                {mainTitle}
                            </motion.h1>
                            <motion.p className='text-[13px] sm:text-[15px] lg:text-[18px] text-[#fff] leading-[1.7] font-[400] mb-[25px]' variants={textVariants}>
                                {desc}
                            </motion.p>
                            <motion.div className='my-btn' variants={textVariants}>
                                <Link href={`/${localActive}/about`} className='btn inline-block'>
                                    {button}
                                </Link>
                            </motion.div>
                        </motion.div>
                        <div className="image ele-center text-center max-w-full flex-1 mb-[20px] sm:mb-0">
                            <Image width={1000} height={300} src='/Carpool2.svg' alt="intro" className='w-[400px] max-w-full md:w-auto h-auto animate-moveTop' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="home3-shape1.png" alt="img" className='z-0 absolute left-0 top-0 max-w-[30%]' />
            <img src="home3-shape2.png" alt="img" className='z-0 absolute left-0 top-[165px] max-w-[30%]' />
            <img src="home3-shape3.png" alt="img" className='z-0 absolute left-0 bottom-[-335px] max-w-[30%] hidden lg:block' />
            <img src="home3-shape6.png" alt="img" className='z-0 absolute right-[30%] top-[30%] max-w-[30%] hidden lg:block' /> */}
        </div>
    )
}


export default LandingExpand
