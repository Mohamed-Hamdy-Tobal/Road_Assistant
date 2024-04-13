"use client"
import React from 'react'
import BoxItem from './BoxItem'

import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useLocale } from "next-intl";
import { ARbubbles, ENbubbles } from '@/constants';

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

const Boxes = () => {

    const localActive = useLocale()
    console.log("localActive bubbles", localActive)

    const blogTranslation = localActive == 'en'? ENbubbles : ARbubbles
    // console.log("blogTranslation", blogTranslation)

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-30% 0px", // 20% of the element should be visible
    });

    return (
        <div className="bubbles pt-[100px] pb-[50px]">
            <motion.div className="container" ref={ref} initial='initial' whileInView={inView ? 'animate' : 'initial'}>
                <motion.div className='main-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 max-w-full gap-[40px]' variants={textVariants}>
                    {blogTranslation.map((item, idx) => (
                        <motion.div key={idx} variants={textVariants}>
                            <BoxItem img={item.img} title={item.title} desc={item.desc} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}


export default Boxes
