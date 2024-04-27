"use client"
import Link from 'next/link';
import React from 'react';
import { useLocale } from 'next-intl';



const introEN = {
    title: 'Your Trusted Roadside Assistance Partner',
    mainTitle: "Troubles with Road Assistant app?",
    desc: "Read This Frequently Asked Questions , that will help you to get the answer of any common question that we asked from our Customers",
    btn: 'Read More'
};
const introAR = {
    title: 'شريكك الموثوق في المساعدة على جانب الطريق',
    mainTitle: "هل لديك مشكلة مع التطبيق ؟",
    desc: "يمكنك الاستفادة من الاسألة الشائعة للتعرف علي بعض الخدمات او التعرف علي بعض الاستفسارات التي قمنا بالاجابة عليها بكثرة في الفترة السابقة",
    btn: "عرض المزيد"
};


const Quotes = () => {
    const localActive = useLocale();
    const intro = localActive == 'en'? introEN:introAR

    return (
        <div className="about-area home3 relative overflow-hidden py-[100px]">
            <div className="home3-about-bg">
                <div className="container">
                    <div className={`flex flex-col pt-90 ${localActive=='ar'?'reflect-dir':''}`} initial='initial' whileInView='animate'>
                        <div className="w-full pt-[200px] md:pt-[70px] ">
                            <div className="mb-8 lg:mb-0 lg:mr-12 text-center flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="2000">
                                <div className="title">
                                    <span className="theme-color font-bold">{intro.title}</span>
                                    <h3 className="font-bold text-3xl lg:text-4xl mb-6 lg:mb-8">{intro.mainTitle}</h3>
                                    <p className="pb-2">{intro.desc}</p>
                                </div>
                                <div className="my-btn mt-3">
                                    <Link href={`/${localActive}/services`} className="btn inline-block">{intro.btn}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;
