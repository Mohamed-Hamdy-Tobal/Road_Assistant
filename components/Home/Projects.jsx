"use client"

import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Slider from "react-slick";
import { motion } from "framer-motion"
import { bottomVariants } from '../animation';
import { useLocale } from "next-intl";


const ServicesEN = [
    {
        title: 'Kassel',
        img: 'pro1.png'
    },
    {
        title: 'Sportify',
        img: 'cover.png'
    },
    {
        title: 'Kassel',
        img: 'pro2.jpg'
    },
    {
        title: 'Wevr',
        img: 'cover2.png'
    },
    {
        title: 'Kassel',
        img: 'pro7.jpg'
    },
    {
        title: 'Kassel',
        img: 'pro4.jpg'
    },
    {
        title: 'Dine Chat',
        img: 'cover3.png'
    },
    {
        title: 'Kassel',
        img: 'pro5.jpg'
    },
    {
        title: 'Kassel',
        img: 'pro6.jpg'
    },
    {
        title: 'Kassel',
        img: 'pro3.jpg'
    },
]
const ServicesAR = [
    {
        title: 'كاسل',
        img: 'pro1.png'
    },
    {
        title: 'سبورتيفاي',
        img: 'cover.png'
    },
    {
        title: 'كاسل',
        img: 'pro2.jpg'
    },
    {
        title: 'ويفر',
        img: 'cover2.png'
    },
    {
        title: 'كاسل',
        img: 'pro7.jpg'
    },
    {
        title: 'كاسل',
        img: 'pro4.jpg'
    },
    {
        title: 'دين شات',
        img: 'cover3.png'
    },
    {
        title: 'كاسل',
        img: 'pro5.jpg'
    },
    {
        title: 'كاسل',
        img: 'pro6.jpg'
    },
    {
        title: 'كاسل',
        img: 'pro3.jpg'
    },
];

const introEN = {
    title: "Let's Start a New Project Together",
    mainTitle:"Product Development",
    desc: `Unleash the power of digitized solutions, including web, Android, and iOS apps, Ignite the potential of cutting-edge digital solutions, spanning web applications, Android, and iOS platforms, infused with the prowess of Blockchain, AI Chatbots, Machine Learning, and IoT technologies. Our adept team is committed to shaping and implementing dynamic solutions, empowering you to conceptualize, create, and expand your enterprise seamlessly. Propel your business to new heights with state-of-the-art innovation and technology. Let's co-create the future!`,
}
const introAR = {
    title: 'لنبدأ مشروعًا جديدًا معًا',
    mainTitle: 'تطوير المنتجات',
    desc: `أطلق قوة الحلول المرقمة، بما في ذلك تطبيقات الويب وأندرويد وiOS. أشعل إمكانيات الحلول الرقمية الحديثة، التي تمتد إلى تطبيقات الويب ومنصات Android وiOS، ممزوجة بقوة تقنيات Blockchain وAI Chatbots وMachine Learning والأشياء الذكية (IoT). يلتزم فريقنا الماهر بتشكيل وتنفيذ حلول ديناميكية، مما يمكنك من تصور وإنشاء وتوسيع مشروعك بسهولة. قم بدفع أعمالك إلى آفاق جديدة من خلال الابتكار والتكنولوجيا المتطورة. لنشارك في خلق المستقبل معًا!`,
};


const Projects = () => {
    const [slider, setSlider] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value for larger screens
    const localActive = useLocale()
    const intro = localActive == 'en'? introEN:introAR
    const Services = ServicesEN == 'en'? introEN:ServicesAR

    useEffect(() => {
        if (slider) {
            slider.slickGoTo(0);
        }
    }, [slider]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991 && window.innerWidth >= 767) {
                setSlidesToShow(2); // Adjust for smaller screens
                // console.log(`for Medium ${slidesToShow}`)
            } else if (window.innerWidth < 767) {
                setSlidesToShow(1); // Default for larger screens
                // console.log(`for small ${slidesToShow}`)
            } else {
                setSlidesToShow(3); // Default for larger screens
                // console.log(`for large ${slidesToShow}`)
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [slidesToShow]);

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        lazyLoad: true,
        dots: true,
        slidesToShow: slidesToShow, // Use the dynamic value
        slidesToScroll: 1,
    };

    return (
        <div className="projects bg-cover py-[100px] pt-40 overflow-hidden" >
            <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
                <motion.div className="text-center" variants={bottomVariants} >
                    <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>{intro.title}</motion.span>
                    <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>{intro.mainTitle}</motion.h4>
                    <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>{intro.desc}</motion.p>
                </motion.div>
                <motion.div className="py-[60px]" variants={bottomVariants}>
                    <Slider ref={slider => setSlider(slider)} {...settings}>
                        {Services.map((slide, idx) => (
                            <div className="box-project slide h-full relative rounded-[20px] overflow-hidden" key={idx}>
                                <div className='flex h-full flex-col items-center justify-between'>
                                    <div className="img flex-1 flex justify-center items-center">
                                        <img src={slide.img} alt="img" className='w-full rounded-[20px]  object-cover h-[260px] object-center' />
                                    </div>
                                </div>
                                <div className="info-wrapper transition-all duration-300 absolute top-0 left-0 w-full h-full flex items-end justify-start">
                                    <h1 className='text-[22px] sm:text-[18px] md:text-[22px] my-3 font-bold text-[#fff] px-3 py-2'>{slide.title}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;