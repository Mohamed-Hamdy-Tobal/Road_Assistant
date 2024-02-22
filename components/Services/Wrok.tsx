'use client'

import React from 'react'
import { motion } from "framer-motion"
import { LeftRight } from '@/components/animation'
import Image from 'next/image'
import { useLocale } from "next-intl";



const ServiceList2EN = [
    {
        title: 'Competitor Research',
        desc: "Kassel excels in competitor research, strategically analyzing market dynamics to fortify your business position. Gain insights, stay ahead, and thrive with Kassel's expertise",
        img: '/work1.jpg'
    },
    {
        title: 'Making Functional Strategy',
        desc: "Kassel crafts functional strategies, aligning business goals with innovative solutions. Elevate your operations and competitiveness through tailored strategies designed for success.",
        img: '/work2.jpg'
    },
    {
        title: 'Project Outline',
        desc: "In Kassel, project outlines are meticulously crafted, mapping a clear roadmap for success. Precision and clarity define our approach, ensuring your project's seamless execution.",
        img: '/work3.jpg'
    },
    {
        title: 'Discover and Planning',
        desc: "At Kassel, discovery and planning are pivotal. We meticulously uncover client needs, then meticulously plan with precision, ensuring success at every stage. ",
        img: '/ser-discover1.jpg'
    },
    {
        title: 'Solution design ',
        desc: "At Kassel, our process extends to solution design, where we craft innovative strategies tailored to our clients' unique challenges, ensuring optimal outcomes. ",
        img: '/ser-discover2.jpg'
    },
    {
        title: 'Final Delivery',
        desc: "Kassel ensures a flawless final delivery, exceeding expectations with precision and innovation. Trust us to bring your vision to life, seamlessly and satisfactorily",
        img: '/work4.png'
    },
]
const ServiceList2AR = [
    {
        title: 'بحث المنافسين',
        desc: "تتفوق كاسل في بحث المنافسين، حيث يتم تحليل الديناميات السوقية استراتيجيًا لتعزيز موقف عملك. احصل على رؤى، وتفوق، وازدهر باستخدام خبرة كاسل ",
        img: '/work1.jpg'
    },
    {
        title: 'وضع استراتيجية وظيفية',
        desc: "تقوم كاسل بصناعة استراتيجيات وظيفية، متسقة مع أهداف الأعمال باستخدام حلول مبتكرة. قم بتعزيز عملياتك وتنافسيتك من خلال استراتيجيات مصممة للنجاح.",
        img: '/work2.jpg'
    },
    {
        title: 'مخطط المشروع',
        desc: "في كاسل ، يتم صياغة خطط المشروع بدقة، مرسمة خريطة طريق واضحة للنجاح. الدقة والوضوح تحدد نهجنا، ضمان تنفيذ مشروعك بسلاسة.",
        img: '/work3.jpg'
    },
    {
        title: 'اكتشاف والتخطيط',
        desc: "في كاسل ، يكون الاكتشاف والتخطيط حيويين. نكتشف احتياجات العميل بدقة، ثم نخطط بدقة، ضمان النجاح في كل مرحلة.",
        img: '/ser-discover1.jpg'
    },
    {
        title: 'تصميم الحلول',
        desc: "في كاسل ، يمتد عملنا إلى تصميم الحلول، حيث نصاغ استراتيجيات مبتكرة مصممة لتحديات عملائنا الفريدة، ضمان النتائج المثلى.",
        img: '/ser-discover2.jpg'
    },
    {
        title: 'التسليم النهائي',
        desc: "تضمن كاسل تسليمًا نهائيًا خاليًا من العيوب، متجاوزة التوقعات بالدقة والابتكار. ثق بنا لتحقيق رؤيتك بسلاسة وبشكل يرضيك.",
        img: '/work4.png'
    },
];

const dataAboutEN = {
    title: "Get Started",
    mainABout: "How We Work",
    desc: "At Kassel, we foster collaboration, blending expertise and creativity to deliver innovative solutions tailored to your unique needs."
}
const dataAboutAR = {
    title: "البداية",
    mainABout: "كيف نعمل",
    desc: "في كاسل، نعزز التعاون، مزج الخبرة والإبداع لتقديم حلول مبتكرة مصممة خصيصًا لاحتياجاتك الفريدة."
};


const parentVarent = {
    show: {
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 1,
        },
    },
    hide: {
        scale: 0,
    },
};

const ServicesWork = () => {

    const localActive = useLocale()
    
    const ServiceList2 = localActive == 'en'? ServiceList2EN : ServiceList2AR
    const dataAbout = localActive == 'en'? dataAboutEN : dataAboutAR

    return (
        <div className='service-work py-[100px] overflow-hidden' >
            <motion.div className="text-center pb-[60px]" variants={LeftRight} initial='initial' whileInView='animate'>
                <motion.span className="text-mainColor text-[18px] font-bold" variants={LeftRight}>{dataAbout.title}</motion.span>
                <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={LeftRight}>{dataAbout.mainABout}</motion.h4>
                <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={LeftRight}>{dataAbout.desc}</motion.p>
            </motion.div>
            <div className='cont grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-7 max-w-full gap-[40px]'>
                {ServiceList2.map((item, idx) => (
                    <div className="service-item transition-all duration-500 bg-white p-4 rounded border-[#eee] border-[2px] relative flex flex-col justify-between items-center" key={idx} >
                        <div className="overlay absolute w-full h-0 top-0 left-0 bg-[#f1f1f1] z-0 transition-all duration-500"></div>
                        <div className="main z-[1] flex flex-col h-full ">
                            <motion.div className="image h-[161px] flex justify-center items-start" whileInView="show"
                                variants={parentVarent}
                                initial="hide">
                                    <Image width={512} height={265}src={item.img} alt="Service Image" className="pt-3 mb-5 w-[250px] rounded-[8px]" />
                                </motion.div>
                            <div className={`info flex-1 ${localActive == 'ar'? "text-right":""}`}>
                                <h3 className="text-[22px] my-4 font-bold text-mainColor">{item.title}</h3>
                                <p className="text-[18px] text-[#666666] font-[400] leading-[28px]">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesWork