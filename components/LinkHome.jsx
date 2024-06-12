"use client";

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
import Link from "next/link";

const LinkHome = () => {
    // Initialize useRouter hook
    const router = useRouter();

    return (
        <div>
            {/* <Link href={`/en`} className="absolute top-[30px] left-[30px] label-4o4 transition-all text-secoColor hover:text-orange-300 font-medium text-[25px]">
                <div className='home-route'>
                    <span><FontAwesomeIcon icon={faLongArrowAltLeft} /></span><span>Home</span>
                </div>
            </Link> */}
            <button className="absolute top-[30px] left-[30px] label-4o4 transition-all text-secoColor hover:text-orange-300 font-medium text-[25px]" type="button" onClick={() => router.replace('/en')}>
                <div className='home-route'>
                    <span><FontAwesomeIcon icon={faLongArrowAltLeft} /></span><span>Home</span>
                </div>
            </button>
        </div>
    )
}

export default LinkHome
