import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useLocale } from "next-intl";

interface BannerProps {
    bannerTitle: string;
    path: string;
    bref: string;
}

const Banner = ({ bannerTitle, path, bref }: BannerProps) => {
    const shapes = [
        { src: "/page-shape1.png", classes: "d-none w-[14px] h-[14px] opacity-[40%] absolute lg:inline-block s-shape", style: { top: '50%',left: '14%'} },
        { src: "/page-shape2.png", classes: "d-none w-[14px] h-[14px] opacity-[40%] absolute lg:inline-block s-shape", style: {  top: '145px',left: '35%' } },
        { src: "/page-shape4.png", classes: "d-none w-[23px] h-[12px] opacity-[40%] absolute lg:inline-block", style: { bottom: '60px',right: '35%'  } },
        { src: "/page-shape5.png", classes: "d-none  w-[60px] h-[14px] opacity-[40%] absolute lg:inline-block animate-moveRight", style: { bottom: '140px',right: '7%' } },
        { src: "/page-shape6.png", classes: "d-none w-[54px] h-[10px] opacity-[40%] absolute lg:inline-block animate-moveRight", style: {top: '40%',right: '18%'} },
        { src: "/page-shape1.png", classes: "d-none w-[14px] h-[14px] opacity-[40%] absolute lg:inline-block s-shape", style: { top: '130px',right: '8%' } },
    ];

    const localActive = useLocale()

    return (
        <div className={`full-banner min-h-[570px] `}>
            <div
                id="scene"
                className="absolute w-full h-full"
                style={{
                    transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    pointerEvents: "none",
                }}
            >
                {shapes.map((shape, index) => (
                    <Image
                    quality={100}
                        width={40}
                        height={40}
                        key={index}
                        data-depth="0.20"
                        className={`${shape.classes}`}
                        src={shape.src}
                        alt="#"
                        style={shape.style}
                    />
                ))}
            </div>
            <div className="container">
                <div className="content-banner mt-[50px]">
                    <h5 className='text-mainColor text-[18px] font-bold'>{bref}</h5>
                    <h3 className='title text-center'>{bannerTitle}</h3>
                <div className='path z-[2]'>
                        <Link href='/' className='hover:text-mainColor transition-all'><FontAwesomeIcon icon={faHome} /> {localActive == 'en'? "Home":"الرئيسية"}</Link>
                        <span className='sec-path'>{path}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner