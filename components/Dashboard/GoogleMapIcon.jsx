"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const GoogleMapIcon = ({ latitude, longitude }) => {
    const handleClick = () => {
        // Construct the Google Maps URL with latitude and longitude
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        // Open the URL in a new tab
        window.open(url, '_blank');
    };

    return (
        <FontAwesomeIcon
            icon={faMapMarkerAlt}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default GoogleMapIcon;
