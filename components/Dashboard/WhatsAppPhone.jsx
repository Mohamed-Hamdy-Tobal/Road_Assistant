import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppPhone = ({ phoneNumber }) => {
    const handleClick = () => {
        // Construct the WhatsApp URL with the phone number
        const url = `https://wa.me/${phoneNumber}`;
        // Open the URL in a new tab
        window.open(url, '_blank');
    };

    return (
        <FontAwesomeIcon
            icon={faWhatsapp}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default WhatsAppPhone;
