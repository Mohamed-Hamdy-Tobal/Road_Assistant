import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoxItem = ({ img, title, desc }: { img: any, title: string, desc: string }) => {
    return (
        <div className="feature h-full text-[#222] ele-center-col text-center md:min-h-[305px] lg:min-h-[325px] ">
            <div className="home3-single-intro-content w-full relative overflow-hidden bg-white h-full ele-center-col p-8 rounded-lg shadow-md transition-transform transform duration-300">
                <div className="mb-[10px] flex-1 flex justify-center items-center">
                    <span className='text-[55px] text-mainColor z-[1]'>
                        <FontAwesomeIcon icon={img} />
                    </span>
                </div>
                <div className="text-center flex-1">
                    <h5 className="font-bold mb-4">{title}</h5>
                    <p className="text-sm mb-4">{desc}</p>
                    <a href="blog-details.html" className="text-primary"><i className="fal fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}


export default BoxItem
