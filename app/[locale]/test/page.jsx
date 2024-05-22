"use client"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, setFilter, setUserLocation } from '@/redux/slices/tableSlice';

const options = [
    'All',
    'Gaz',
    'Winch',
    'Mechanic',
];

const Table = () => {
    const dispatch = useDispatch();
    const { data, filter, status, error, userLocation } = useSelector((state) => state.table);

    useEffect(() => {
        if (status === 'idle') {
            // Get the user's location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
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
            dispatch(fetchData());
        }
    }, [userLocation, dispatch]);

    const filteredData = filter === 'all' ? data : data.filter(item => item.job === filter);

    // const handleFilterChange = (event) => {
    //     dispatch(setFilter(event.target.value));
    //     console.log("event.target.value", event.target.value)
    // };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        dispatch(setFilter(event.target.value));
        console.log("event.target.value", event.target.innerText)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='my-[400px]'>
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
                            // secondary={options[selectedIndex]}
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
            {/* <select onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="gaz">Gaz</option>
                <option value="winch">Winch</option>
                <option value="mechanic">Mechanic</option>
            </select> */}

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
                                <th scope="col" className="px-6 py-3">Distance (km)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.job}</td>
                                    <td className="px-6 py-4">{`${item.location.lat}, ${item.location.lon}`}</td>
                                    <td className="px-6 py-4">{item.phone}</td>
                                    <td className="px-6 py-4">{item.distance ? item.distance.toFixed(2) : 'N/A'}</td>
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
