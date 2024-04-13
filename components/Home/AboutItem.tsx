import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from "next-intl";

const AboutItem = ({ img, title, desc }: { img: any, title: string, desc: string }) => {

    const localActive = useLocale()

    return (
        <div className="feat">
            <div className="transition-transform transform hover:scale-105 duration-300 md:h-full bg-white border p-8 pb-35 pl-45 pr-45">
                <div className={`flex h-full md:justify-start gap-5 text-center lg:text-left items-center lg:items-start flex-col lg:flex-row 2xl:flex-col 2xl:items-center 2xl:text-center ${localActive === 'ar'? 'flip-right': ''}`}>
                    <div className="mr-30 w-[90px] text-center z-index1">
                        <span className="flex items-center justify-center w-[85px] h-[85px] text-[35px] rounded-full bg-[#f0f6fb] text-mainColor max-w-full leading-[85px]">
                            {/* <img src={img} alt="icon" className="max-w-full" /> */}
                            <FontAwesomeIcon icon={img} />
                        </span>
                    </div>
                    <div className="z-index1">
                        <h5 className="font-bold pb-15 text-[25px] capitalize mb-3 2xl:text-[22px]">{title}</h5>
                        <p className=" text-[18px] text-[#666666] font-[400] leading-[28px]">{desc}</p>
                        {/* <Link href="/services" className="text-mainColor black-color d-inline-block theme-hover position-relative font-bold text-capitalize">view service
                            <span className="pl-2 animate-moveRight inline-block"><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutItem
