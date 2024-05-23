import React from 'react';

const PhoneDialer = ({ phoneNumber }) => {
    const handleClick = () => {
        // Construct the tel URL with the phone number
        const url = `tel:${phoneNumber}`;
        // Open the URL
        window.location.href = url;
    };

    return (
        <span
            onClick={handleClick}
            className='text-mainColor cursor-pointer'
        >
            {phoneNumber}
        </span>
    );
};

export default PhoneDialer;
