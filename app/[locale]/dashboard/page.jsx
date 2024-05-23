"use client";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postTableData, setFilter, setUserLocation } from '@/redux/slices/tableSlice';

import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import { logout } from '@/redux/slices/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleMapIcon from "@/components/Dashboard/GoogleMapIcon"
import WhatsAppPhone from "@/components/Dashboard/WhatsAppPhone"
import PhoneDialer from "@/components/Dashboard/PhoneDialer"

const options = [ 
    'All',
    'Mechanical',
    'gas station',
];

const Table = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    let tokenLocal = 'empty'

    if (typeof window !== "undefined" && window.localStorage) {
        tokenLocal = localStorage.getItem("token")
    }

    const dispatch = useDispatch();
    const router = useRouter();

    const localActive = useLocale()

    React.useEffect(() => {
        if (isLoggedIn === 'empty') {
            console.log("PUSH")
            router.push(`/${localActive}/login`);
        }
    }, [isLoggedIn, tokenLocal, router, localActive]);


    const handleLogout = () => {
        dispatch(logout())
        // router.push(`/${localActive}`);
    };

    const { data, filter, status, error, userLocation } = useSelector((state) => state.table);

    // Set the initial filter to 'All' on the first render
    useEffect(() => {
        dispatch(setFilter('All'));
    }, [dispatch]);

    useEffect(() => {
        if (status === 'idle') {
            // Get the user's location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // console.log("Location : ", latitude, longitude)
                    dispatch(setUserLocation({ lat: latitude, lon: longitude }));
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (userLocation) {
            dispatch(postTableData());
        }
    }, [userLocation, dispatch]);

    const filteredData = filter === 'All' ? data.nearby_service_providers : data.nearby_service_providers.filter(item => item.service_type === filter);

    console.log("filteredData IN Dash", data)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        const selectedFilter = options[index];
        dispatch(setFilter(selectedFilter));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='my-[100px]'>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='flex justify-center items-center'>
                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ bgcolor: 'background.paper' }}
                >
                    <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="job"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primary="Job"
                            secondary={options[selectedIndex]}
                        />
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>

            {status === 'loading' && <div>Loading...</div>}
            {status === 'failed' && <div>Error: {error}</div>}

            {status === 'succeeded' && (
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Job</th>
                                <th scope="col" className="px-6 py-3">Location</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                    <td className="px-6 py-4">{item.username}</td>
                                    <td className="px-6 py-4">{item.service_type}</td>
                                    <td className="px-6 py-4"><GoogleMapIcon latitude={item.location[1]} longitude={item.location[0]} /></td>
                                    {/* <td className="px-6 py-4">{`${item.location[0]}, ${item.location[1]}`}</td> */}
                                    <td className="px-6 py-4"><PhoneDialer phoneNumber={item.phone_number} /> -  <WhatsAppPhone phoneNumber={item.phone_number} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Table;


// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13608.076191522361!2d31.822097349999993!3d31.496160250000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1716465430011!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>