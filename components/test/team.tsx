// "use client"

// import Link from 'next/link';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { motion } from "framer-motion"
// import { bottomVariants } from '../animation';


// interface SocialMediaLink {
//     platform: any;
//     url: string;
// }

// interface TeamMember {
//     name: string;
//     role: string;
//     imgSrc: string;
//     socialMedia: SocialMediaLink[];
// }
// const teamMembers: TeamMember[] = [
//     {
//         name: 'Paul Harrison',
//         role: 'Founder & CEO',
//         imgSrc: 'team-img1.png',
//         socialMedia: [
//             { platform: faFacebook, url: '/about' },
//             { platform: faInstagram, url: '/about' },
//             { platform: faTwitter, url: '/about' },
//         ],
//     },
//     {
//         name: 'Palmar Mew',
//         role: 'Founder & CTO',
//         imgSrc: 'team-img2.png',
//         socialMedia: [
//             { platform: faFacebook, url: '/about' },
//             { platform: faInstagram, url: '/about' },
//             { platform: faTwitter, url: '/about' },
//         ],
//     },
//     {
//         name: 'Tom Anderson',
//         role: 'FGeneral Manager',
//         imgSrc: 'team-img3.png',
//         socialMedia: [
//             { platform: faFacebook, url: '/about' },
//             { platform: faInstagram, url: '/about' },
//             { platform: faTwitter, url: '/about' },
//         ],
//     },
//     {
//         name: 'Sarah Palmar',
//         role: 'HR Manager',
//         imgSrc: 'team-img4.png',
//         socialMedia: [
//             { platform: faFacebook, url: '/about' },
//             { platform: faInstagram, url: '/about' },
//             { platform: faTwitter, url: '/about' },
//         ],
//     },
//     // Add more members as needed
// ];


// const TeamSection = () => {
//     return (
//         <div className="bg-no-repeat pt-40 bg-cover py-[100px]" style={{ backgroundImage: "url('about-us-team-bg.png')" }} >
//             <motion.div className="container mx-auto" variants={bottomVariants} initial='initial' whileInView='animate'>
//                 <motion.div className="text-center" variants={bottomVariants} >
//                     <motion.span className="text-mainColor text-[18px] font-bold" variants={bottomVariants}>Team Members</motion.span>
//                     <motion.h4 className="text-[35px] leading[1.25] font-bold mb-6 text-[#222222]" variants={bottomVariants}>Our Amazing Team</motion.h4>
//                     <motion.p className='mb-4 text-[#666666] text-[18px] leading-7 font-normal' variants={bottomVariants}>At Kassel, we're more than just a team; we're a family of innovative thinkers, creative problem solvers, and technology enthusiasts dedicated to transforming the digital landscape. Our strength lies in our diversity, expertise, and unwavering commitment to excellence.</motion.p>
//                 </motion.div>
//                 <motion.div className="flex flex-wrap justify-center mt-14 pb-[200px] gap-y-[100px]" variants={bottomVariants}>
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className="team-item w-full sm:w-1/2 md:w-1/4 p-4">
//                             <div className="relative mb-10">
//                                 <img className="w-[80%] z-[2] m-auto relative max-w-full" src={member.imgSrc} alt="Team Member" />
//                                 <ul className="my-social absolute inset-0 flex justify-center items-center space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-500 z-[5]">
//                                     {member.socialMedia.map((social, index) => (
//                                         <li key={index} className="inline-block">
//                                             <Link className="block bg-white rounded-full w-[35px] h-[35px] leading-[35px] text-center text-mainColor" href={social.url}>
//                                                 <FontAwesomeIcon icon={social.platform} />
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <div className="our-team-info absolute inset-x-0 bottom-0 bg-white p-6">
//                                     <span className="text-sm text-gray-500">{member.role}</span>
//                                     <h3 className="mt-1 font-bold text-[20px]">{member.name}</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default TeamSection;