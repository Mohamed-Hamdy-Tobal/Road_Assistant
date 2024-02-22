// "use client"

// import ParallaxComponent from '@/components/About/Parallex'
// import TeamSection from '@/components/About/Team'
// import Link from 'next/link'
// import React from 'react'
// import { motion } from "framer-motion"
// import { bottomVariants } from '@/components/animation'
// import { useLocale } from "next-intl";

// const dataAboutEN = {
//     title: "Learn more about us TEST",
//     mainABout: "Information technology Company Since 2023",
//     info: [
//         "Kassel, a dynamic IT company, excels in delivering innovative solutions. With expertise spanning web and app development, digital marketing, and data analysis, Kassel empowers businesses to thrive in the ever-evolving technology landscape. Their commitment to precision, creativity, and client satisfaction positions Kassel as a trusted partner for those seeking cutting-edge IT solutions.",
//         "Create and manage any process for your business needs.",
//         "optimizing efficiency and productivity. From conceptualization to execution.",
//         "Full functionality with affordable prices."
//     ],
//     btn: "View More"
// }
// const dataAboutAR = {
//     title: "تعرف على المزيد عنا",
//     mainABout: "شركة تكنولوجيا المعلومات منذ عام 2023",
//     info: [
//         "تتفوق شركة كاسل ، وهي شركة تكنولوجيا معلومات ديناميكية، في تقديم حلول مبتكرة. ومن خلال الخبرة التي تشمل تطوير الويب والتطبيقات والتسويق الرقمي وتحليل البيانات، تعمل كاسل على تمكين الشركات من الازدهار في مشهد التكنولوجيا المتطور باستمرار. التزامهم بالدقة والإبداع والدقة إن رضا العملاء يجعل من كاسل شريكًا موثوقًا به لأولئك الذين يبحثون عن حلول تكنولوجيا المعلومات المتطورة.",
//         "إنشاء إدارة عملية لاحتياجات عملك.",
//         "تحسين الجودة والإنتاجية. من التصور إلى التنفيذ.",
//         "وظائف كاملة بتكلفة."
//     ],
//     btn: "عرض المزيد"
// }
// const MainAbout = () => {

//     const localActive = useLocale()
//     console.log("About localActive : ", localActive)
//     const dataAbout = localActive == 'en'? dataAboutEN : dataAboutAR

//     return (
//         <div id='mainAbout' className="about overflow-hidden">
//             <div className="about-main pb-14 pt-44">
//                 <div className="container" >
//                     <div className={`${localActive == 'ar' ? 'reflect-landing reflect-dir':''} flex flex-col lg:flex-row flex-wrap items-center justify-between`}>
//                         <motion.div className="main-info w-full lg:w-[50%]" initial='initial' whileInView='animate'>
//                             <div className="mb-16">
//                                 <div className="space-y-4">
//                                     <span className="text-mainColor font-bold">{dataAbout.title}</span>
//                                     <h3 className="text-[38px] leading[1.25] font-bold mb-6 text-[#222222]">{dataAbout.mainABout}</h3>
//                                     {dataAbout.info.map((item, idx) => (
//                                         <div key={idx}>
//                                             <p className="mb-4 text-[#666666] text-[18px] leading-7 font-normal pb-[10px]">{item}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <motion.div className="my-btn mt-[40px]" variants={bottomVariants}>
//                                     <Link href='/services' className="btn inline-block">{dataAbout.btn}</Link>
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                         <div className="box-image w-full lg:w-[50%]">
//                             <ParallaxComponent />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <TeamSection />
//         </div>
//     )
// }

// export default MainAbout