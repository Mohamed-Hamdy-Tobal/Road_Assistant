import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

const UserDropdown = () => {
    const { isLoggedIn, user } = useSelector((state) => state.auth);

    const getInitials = (fullName) => {
        if (!fullName) return '';
        const words = fullName.split(' ');
        const initials = words.map((word) => word[0].toUpperCase()).join('');
        return initials.slice(0, 1); // Get only the first character
    };

    return (
        <div className='flex justify-between items-center'>
            {isLoggedIn && user && (
                <Avatar sx={{ bgcolor: green[500] }}>
                    {getInitials(user.first_name)}
                </Avatar>
            )}
        </div>
    );
};

export default UserDropdown;
