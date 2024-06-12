'use client'

import Banner from '@/components/Banner'
import React from 'react'
import { useLocale } from "next-intl";
import ProfileInfo from '@/components/Profile/ProfileInfo';

const Profile = () => {
    const localActive = useLocale()

    return (
        <div className="overflow-hidden">
            {
                localActive == 'en'? (
                    <Banner bannerTitle={'Profile'} path={'Profile'} bref={'Your Info'} />
                ):(<Banner bannerTitle={'حسابك'} path={'حسابك'} bref={"معلوماتك"} />
                )
            }
            <div className="py-[100px]">
                <div className="container ">
                    <ProfileInfo/>
                </div>
            </div>
        </div>
    )
}

export default Profile