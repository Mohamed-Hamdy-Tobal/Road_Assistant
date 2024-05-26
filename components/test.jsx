"use client";

import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import { logout } from '@/redux/slices/authSlice';
import dynamic from 'next/dynamic'
import Link from 'next/link';


const HeaderDashboard = () => {

    const {isLoggedIn, user} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();
    const localActive = useLocale()


    // For The Logout
    const handleLogout = () => {
        dispatch(logout())
    };
    
    console.log("USer From Header Dash : ", user)
    console.log("isLoggedIn From Header Dash : ", isLoggedIn)


    return (
        <div className='flex justify-between items-center p-5'>
            <div className='text-center mb-5 flex justify-between items-center gap-5'>
                <Link href={'/'}>Home</Link>
                <Button variant="outlined" color="secondary" onClick={handleLogout}>Logout</Button>
            </div>
            {user && <h1>Hello {user.first_name} {user.last_name}</h1>}
        </div>
    );
};



export default dynamic(() => Promise.resolve(HeaderDashboard), { ssr: false })