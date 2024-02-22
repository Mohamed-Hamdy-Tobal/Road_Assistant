// 'use client'

// // ScrollablePage.js

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

// const ScrollablePage = () => {
//     const scrollToTop = () => {
//         scroll.scrollToTop({ smooth: true });
//     };

//     return (
//         <div>
//             <header style={{ position: 'fixed', top: 0, width: '100%', background: 'lightgray', padding: '10px' }}>
//                 <nav>
//                     <Link to="section1" smooth={true} duration={500}>
//                         Section 1
//                     </Link>
//                     <Link to="section2" smooth={true} duration={500}>
//                         Section 2
//                     </Link>
//                     <Link to="section3" smooth={true} duration={500}>
//                         Section 3
//                     </Link>
//                 </nav>
//                 <button onClick={scrollToTop}>Scroll to Top</button>
//             </header>

//             <Element name="section1" className="section">
//                 <motion.div
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Section 1 Content
//                 </motion.div>
//             </Element>

//             <Element name="section2" className="section">
//                 <motion.div
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Section 2 Content
//                 </motion.div>
//             </Element>

//             <Element name="section3" className="section">
//                 <motion.div
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Section 3 Content
//                 </motion.div>
//             </Element>
//         </div>
//     );
// };

// export default ScrollablePage;
