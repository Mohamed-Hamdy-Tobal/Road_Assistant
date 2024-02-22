// "use client"

// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRocket, faHandshake, faHandsClapping, faMobileAndroidAlt, faDesktop, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { motion } from "framer-motion"
// import { bottomVariants } from '../animation';
// // import ScrollTrigger from 'react-scroll-trigger';
// import CountUp from 'react-countup';

// const ServiceItem = ({ icon, title, count, operation }: { icon: any, title: string, count: number, operation: string }) => {

//     // const [counterOn, setCounterOn] = useState(false); 

//     return (
//         <div className="team-item w-full sm:w-[45%] lg:w-1/4 p-4 text-center bg-[#fbfbfb] border-[#eee] rounded-[5px]">
//             <div className="single-service-content transition3 mb-55">
//                 <div className="ser-icon d-inline-block mb-22 transition5 text-mainColor text-[65px] mb-3">
//                     <FontAwesomeIcon icon={icon} />
//                 </div>
//                 <div className="service-text">
//                     <div className="count flex justify-center font-medium items-center text-[30px] text-[#666] mb-3">
//                         {/* <p className=''>{count}</p>  */}
//                         <CountUp start={0} end={count} duration={3} />
//                         <span className="num">{operation}</span>
//                     </div>
//                     <h6 className="font-bold mb-[10px] text-[22px] text-[#333]">{title}</h6>
//                 </div>
//             </div>
//         </div>
//     );
// };


// const servicesData = [
//     {
//         icon: faRocket,
//         title: 'Leadership Years Experience',
//         count: 4,
//         operation: '+'
//     },
//     {
//         icon: faHandshake,
//         title: 'Talented Squad',
//         count: 30,
//         operation: '+'
//     },
//     {
//         icon: faMobileAndroidAlt,
//         title: 'Apps Developed',
//         count: 20,
//         operation: '+'
//     },
//     {
//         icon: faDesktop,
//         title: 'Projects Delivered',
//         count: 100,
//         operation: '%'
//     },
//     {
//         icon: faGlobe,
//         title: 'Countries Served',
//         count: 7,
//         operation: '+'
//     },
//     {
//         icon: faHandsClapping,
//         title: 'Client Satisfaction',
//         count: 100,
//         operation: '%'
//     },
// ];

// const WorkWith = () => {
//     return (
//         <div className="pt-40 bg-cover py-[100px]" >
//             <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
//                 <motion.div className="text-center" variants={bottomVariants} >
//                     <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>Let's Start a New Project Together </motion.span>
//                     <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>Experience World-class Agile Product Development </motion.h4>
//                     <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>Unleash the power of digitized solutions, including web, Android, and iOS apps,
//                         enriched with Blockchain, AI Chatbots, Machine Learning, and IoT technologies.
//                         Our expert team is dedicated to crafting and deploying agile solutions that
//                         enable you to design, develop, and scale your enterprise. Elevate your
//                         business with world-class innovation and technology. Let's build the future
//                         together! </motion.p>
//                 </motion.div>
//                 <motion.div className="flex flex-wrap justify-center mt-14 pb-[200px] gap-[20px]" variants={bottomVariants}>
//                     {servicesData.map((service, idx) => (
//                         <ServiceItem
//                             key={idx}
//                             icon={service.icon}
//                             title={service.title}
//                             count={service.count}
//                             operation={service.operation}
//                         />
//                     ))}
//                 </motion.div>
//             </motion.div>
//         </div>
//     )
// }

// export default WorkWith