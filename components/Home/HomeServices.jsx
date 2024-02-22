"use client"

import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Slider from "react-slick";
import { motion } from "framer-motion"
import { bottomVariants } from '../animation';
import { useLocale } from "next-intl";

const introEN = {
    title: "Let's Start a New Project Together",
    mainTitle:`Experience World-class Agile Product Development`,
    desc: `Unleash the power of digitized solutions, including web, Android, and iOS apps, enriched with Blockchain, AI Chatbots, Machine Learning, and IoT technologies. Our expert team is dedicated to crafting and deploying agile solutions that enable you to design, develop, and scale your enterprise. Elevate your business with world-class innovation and technology. Let's build the future together!`,
}
const introAR = {
    title: 'لنبدأ مشروعًا جديدًا معًا',
    mainTitle: 'تجربة تطوير المنتجات الرشيقة على مستوى عالمي',
    desc: `أطلق العنان لقوة الحلول الرقمية، بما في ذلك تطبيقات الويب واندرويد و ايفون، والمعززة بتقنيات بلوك تشاين و الذكاء الاصطناعي و الشات بوت والتعلم الآلي وإنترنت الأشياء. فريق الخبراء لدينا مكرس لصياغة ونشر الحلول الذكية التي تمكنك من تصميم وتطوير وتوسيع نطاق مؤسستك. ارفع مستوى عملك من خلال ابتكارات وتقنيات عالمية المستوى. دعونا نبني المستقبل معا!`,
};


const ServicesEN = [
    {
        title: 'Brainstorming and Ideation ',
        desc: 'We build and strategize solutions based on your vision so that you have all the options before moving forward with your project.',
        img: 'service1.png'
    },
    {
        title: '100% satisfaction guaranteed ',
        desc: 'Your satisfaction is our very first priority. If you have any concern about your game, we are here to solve them in every possible manner with flexibility.',
        img: 'service2.png'
    },
    {
        title: 'Communication',
        desc: "Whether you prefer reaching out through email or giving us a call, we're always here for you. Your success is our priority, and communication is key.",
        img: 'service3.png'
    },
    {
        title: 'Start your project',
        desc: "Build a solution that fulfills your dream. With an experienced and talented team, you can build precisely what you need.",
        img: 'service4.png'
    },
]
const ServicesAR = [
    {
        title: 'التفكير التصوري والإبداع',
        desc: 'نقوم ببناء وتخطيط الحلول استنادًا إلى رؤيتك حتى تحصل على كل الخيارات قبل المضي قدمًا في مشروعك.',
        img: 'service1.png'
    },
    {
        title: 'ضمان الرضا 100%',
        desc: 'رضاك هو أولويتنا القصوى. إذا كان لديك أي قلق بشأن مشروعك، نحن هنا لحله بكل السبل الممكنة بمرونة.',
        img: 'service2.png'
    },
    {
        title: 'التواصل',
        desc: 'سواء كنت تفضل التواصل عبر البريد الإلكتروني أو الاتصال بنا، نحن هنا دائمًا لخدمتك. نجاحك هو أولويتنا، والتواصل هو الأساس.',
        img: 'service3.png'
    },
    {
        title: 'ابدأ مشروعك',
        desc: 'قم ببناء حلاً يحقق حلمك. مع فريق موهوب ومتخصص، يمكنك بناء بالضبط ما تحتاج إليه.',
        img: 'service4.png'
    },
];


const HomeServices = () => {
    const [slider, setSlider] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value for larger screens

    const localActive = useLocale()
    const intro = localActive == 'en'? introEN:introAR
    const Services = localActive == 'en'? ServicesEN:ServicesAR

    useEffect(() => {
        if (slider) {
            slider.slickGoTo(0);
        }
    }, [slider]);

    useEffect(() => {
        // Check the screen width and adjust the number of slides to show
        const handleResize = () => {
            if (window.innerWidth <= 991 && window.innerWidth >= 630) {
                setSlidesToShow(2); // Adjust for smaller screens
                // console.log(`for Medium ${slidesToShow}`)
            } else if (window.innerWidth < 630) {
                setSlidesToShow(1); // Default for larger screens
                // console.log(`for small ${slidesToShow}`)
            } else {
                setSlidesToShow(3); // Default for larger screens
                // console.log(`for large ${slidesToShow}`)
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call it initially
        handleResize();

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [slidesToShow]);

    const settings = {
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
        // lazyLoad: true,
        dots: true,
        slidesToShow: slidesToShow, // Use the dynamic value
        slidesToScroll: 1,
    };

    return (
        <div className="bg-cover py-[100px] news pt-40 overflow-hidden" >
            <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
                <motion.div className="text-center" variants={bottomVariants} >
                    <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>{intro.title}</motion.span>
                    <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>{intro.mainTitle}</motion.h4>
                    <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>{intro.desc}</motion.p>
                </motion.div>
                <motion.div className="py-[60px]" variants={bottomVariants}>
                    <Slider ref={slider => setSlider(slider)} {...settings}>
                        {Services.map((slide, idx) => (
                            <div className={`slide ${localActive=='en'?"h-[590px]":"h-[500px]"} h-[590px] ${localActive == 'ar' ? 'reflect-dir':''}`} key={idx}>
                                <div className={`box flex ${localActive=='en'?"h-[590px]":"h-[500px]"} flex-col items-center justify-between`}>
                                    <div className="img flex-1 flex justify-center items-center">
                                        <img src={slide.img} alt="img" className='w-[250px] h-[200px] sm:w-[200px] md:w-[250px] sm:h-[200px] md:h-[250px]' />
                                    </div>
                                    <div className="info flex-1">
                                        <h1 className='text-[22px] sm:text-[18px] md:text-[22px] my-3 font-bold text-mainColor'>{slide.title}</h1>
                                        <p className='text-[18px] sm:text-[14px] md:text-[18px] text-[#666666] font-[400] leading-[28px]'>{slide.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HomeServices;