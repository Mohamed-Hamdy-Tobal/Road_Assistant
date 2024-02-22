'use client'

// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        setIsVisible(scrolled > 200); // You can adjust the scroll height as needed
    };

    const scrollToTop = () => {
        scroll.scrollToTop({ smooth: true });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed z-[9] bottom-8 right-8 ${isVisible ? 'opacity-[1]' : 'opacity-[0]'} transition-all duration-300`}>
            <button
                className="bg-mainColor text-white w-[45px] h-[45px] text-[20px] rounded-full hover:bg-[#1e4486] transition-all duration-300"
                onClick={scrollToTop}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;