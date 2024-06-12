"use client";
import * as React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileInfo() {
    const { user } = useSelector((state) => state.auth);

    console.log("User From Profile: ", user);

    const userInfo = [
        { label: 'First Name', value: user.first_name },
        { label: 'Last Name', value: user.last_name },
        { label: 'Username', value: user.username },
        { label: 'Email', value: user.email },
        { label: 'Role', value: user.is_customer ? 'Customer' : 'Service Provider' }
    ];

    return (
        <div className='profile-info'>
            <div className="flex justify-center items-center">
                <ul className='w-full md:w-[70%]'>
                    {userInfo.map((info, index) => (
                        <li key={index} className='p-3 flex justify-start items-center gap-3 border-b-[1px] border-[#ddd] bg-[#fbfbfb]'>
                            <span className='flex-1 font-bold text-[#333]'>{info.label}</span> <span className='text-[#999] font-normal flex-1'>{info.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
