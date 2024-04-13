'use client'

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { LeftRight, bottomVariants } from '@/components/animation'
import Image from 'next/image';
import { useLocale } from "next-intl";



// Define a type for the mouse position state
type MousePosition = {
    x: number;
    y: number;
    z: number; // Added for depth but can also influence rotation
};

const ParallaxComponent: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0, z: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Calculate z based on how far the mouse is from the center
            const z = Math.sqrt(x * x + y * y) / 50; // Adjust formula to control depth or rotation effect
            setMousePosition({ x, y, z });
        }
    };

    useEffect(() => {
        const parallaxIt = (target: Element, movement: number, options: { scale?: boolean; rotate?: boolean } = {}) => {
            const { scale, rotate } = options;
            gsap.to(target, {
                x: mousePosition.x * movement,
                y: mousePosition.y * movement,
                ...(scale && { scale: 1 + mousePosition.z * 0.001 }), // Apply scaling for depth effect
                ...(rotate && { rotation: mousePosition.x * 0.01 }), // Apply rotation based on mouse X position
                duration: 0.5,
            });
        };

        if (containerRef.current) {
            parallaxIt(containerRef.current.querySelector('.slide')!, -0.1, { rotate: true });
            parallaxIt(containerRef.current.querySelector('.mytarget')!, -0.03, { scale: true, rotate: true }); // Apply scaling and rotation
        }
    }, [mousePosition.x, mousePosition.y, mousePosition.z]);

    const localActive = useLocale()


    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative"
            id="container-img"
            initial='initial'
            whileInView='animate'
        >
            <motion.div className="mytarget flex justify-center items-center " variants={LeftRight}>
                <div className={` mt-[90px] max-w-[77%] md:max-w-[78%] 2xl:max-w-full lg:mt-4 mb-24 flex justify-center lg:justify-end ml-0 mr-0 ${localActive == 'en' ? 'lg:ml-40' : "lg:mr-40"}  relative`}>
                    {/* <div className="max-w-[80%] md:max-w-full relative inline-flex justify-end items-end bg-transparent" >
                        <Image width={500} height={400} className="max-w-[60%] md:max-w-[80%] absolute z-[25] h-auto top-[56%] right-[56%] xl:top-[180px] xl:right-[210px]" src="/about-us-img2.jpg" alt="image" />
                    </div> */}
                    <div className="max-w-[80%] md:max-w-full relative inline-flex justify-end items-end bg-transparent" >
                        <Image width={500} height={400} className="z-10 max-w-full h-auto" src="/helpo.png" alt="image" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ParallaxComponent;
