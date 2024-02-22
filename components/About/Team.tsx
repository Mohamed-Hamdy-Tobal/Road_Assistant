"use client"

import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion"
import { bottomVariants } from '../animation';
import { useLocale } from "next-intl";



interface SocialMediaLink {
    platform: any;
    url: string;
}

interface TeamMember {
    name: string;
    role: string;
    desc: string;
}
const teamMembersEN: TeamMember[] = [
    {
        name: 'Khaled Naser',
        role: 'Executive Director ',
        desc: "+70 Projects"
    },
    {
        name: 'Muneer Shadid',
        role: 'CFO ',
        desc: "+100 Projects"
    },
    {
        name: 'Amro Shadid',
        role: 'Co & Founder',
        desc: "+80 Projects"
    },
    {
        name: 'Sanad Al Majali',
        role: 'General Manager',
        desc: "+100 Projects"
    },
    // Add more members as needed
];
const teamMembersAR: TeamMember[] = [
    {
        name: 'خالد ناصر',
        role: 'المدير التنفيذي',
        desc: "+70 مشروع"
    },
    {
        name: 'منير شديد',
        role: 'رئيس مالي',
        desc: "+100 مشروع"
    },
    {
        name: 'عمرو شديد',
        role: 'الشريك المؤسس',
        desc: "+80 مشروع"
    },
    {
        name: 'سند المجالي',
        role: 'المدير العام',
        desc: "+100 مشروع"
    },
    // Add more members as needed
];

const dataAboutEN = {
    title: "Team Members",
    mainABout: "Our Amazing Team",
    desc: "At Kassel, we're more than just a team; we're a family of innovative thinkers, creative problem solvers, and technology enthusiasts dedicated to transforming the digital landscape. Our strength lies in our diversity, expertise, and unwavering commitment to excellence."
}
const dataAboutAR = {
    title: "أعضاء الفريق",
    mainABout: "فريقنا المذهل",
    desc: "في كاسل ، نحن أكثر من مجرد فريق؛ نحن عائلة من المفكرين المبتكرين، حلول المشاكل الإبداعية، وعشاق التكنولوجيا الملتزمين بتحويل المنظر الرقمي. قوتنا تكمن في تنوعنا وخبرتنا والتفاني الثابت في التميز."
};


const TeamSection = () => {

    const localActive = useLocale()

    const teamMembers = localActive == 'en'? teamMembersEN : teamMembersAR
    
    const dataAbout = localActive == 'en'? dataAboutEN : dataAboutAR

    return (
        <div className="bg-no-repeat pt-40 bg-cover py-[100px]" style={{ backgroundImage: "url('about-us-team-bg.png')" }} >
            <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
                <motion.div className="text-center" variants={bottomVariants} >
                    <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>{dataAbout.title}</motion.span>
                    <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>{dataAbout.mainABout}</motion.h4>
                    <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>{dataAbout.desc}</motion.p>
                </motion.div>
                <motion.div className="flex flex-wrap justify-center mt-14 pb-[80px]" variants={bottomVariants}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`team-item w-full sm:w-1/2 xl:w-1/4 p-4 `}>
                            <div className="home3-single-service-content home3-single-service-border h-full bg-white border transition duration-500 relative pt-16 pb-9 pl-12 pr-12 mb-3 animate__animated animate__fade-up animate__duration-2000 animate__delay-10">
                                <div className="flex mb-6">
                                    <div className={`z-10 w-full ${localActive == 'ar'? 'text-right':''}`}>
                                        <h5 className="font-bold pb-5 text-[#333] text-[25px]">{member.name}</h5>
                                        <h5 className="font-bold pb-3 text-textGr text-[16px]">{member.role}</h5>
                                        <p className="text-mainColor">{member.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TeamSection;
