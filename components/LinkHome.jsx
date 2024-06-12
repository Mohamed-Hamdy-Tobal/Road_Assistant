import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const LinkHome = () => {

    return (
        <div>
            <Link href={`/en`} className="absolute top-[30px] left-[30px] label-4o4 transition-all text-secoColor hover:text-orange-300 font-medium text-[25px]">
                <div className='home-route'>
                    <span><FontAwesomeIcon icon={faLongArrowAltLeft} /></span><span>Home</span>
                </div>
            </Link>
        </div>
    )
}

export default LinkHome
