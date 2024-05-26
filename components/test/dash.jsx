"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postTableData, setFilter, setUserLocation } from '@/redux/slices/tableSlice';
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GoogleMapIcon from "@/components/Dashboard/GoogleMapIcon";
import WhatsAppPhone from "@/components/Dashboard/WhatsAppPhone";
import PhoneDialer from "@/components/Dashboard/PhoneDialer";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const optionsRadius = [5, 10, 15, 20];
const options = [
    { label: "All", value: "All" },
    { label: "Engin Oil", value: "gas station" },
    { label: "Mechanical", value: "Mechanical" },
    { label: "Towing", value: "towing" },
    { label: "Locked", value: "locked" },
    { label: "Low Fuel", value: "low fuel" },
    { label: "Flat Tire", value: "flat tire" },
    { label: "Engin Oil", value: "flat tire" },
    { label: "Break Down", value: "flat tire" },
    { label: "Battery Dead", value: "flat tire" },
    { label: "Engin Head", value: "flat tire" },
];

const Table = () => {
    const [serviceType, setServiceType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { data, filter, status, error } = useSelector((state) => state.table);

    const dispatch = useDispatch();
    const router = useRouter();
    const localActive = useLocale();

    let tokenLocal = 'empty';
    if (typeof window !== "undefined" && window.localStorage) {
        tokenLocal = localStorage.getItem("token");
    }

    useEffect(() => {
        if (status === 'idle') {
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
        dispatch(setFilter(10));
    }, [dispatch]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        const selectedFilter = optionsRadius[index];
        dispatch(setFilter(selectedFilter));
        dispatch(postTableData(serviceType));
        console.log("selectedFilter radius : ", selectedFilter);
        console.log("serviceType in radius : ", serviceType);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleServiceSelect = (service) => {
        setServiceType(service);
        dispatch(postTableData(service));
        handleCloseModal();
    };

    console.log("Data In Dash : , ", data);

    useEffect(() => {
        if (isLoggedIn === 'empty') {
            router.push(`/${localActive}/login`);
        }
    }, [isLoggedIn, router, localActive]);

    useEffect(() => {
        if (status === 'failed') {
            toast.error(`Error with server: ${error}`);
        }
    }, [status, error]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const nearbyServiceProviders = data?.nearby_service_providers || [];
    const currentData = nearbyServiceProviders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    console.log("currentData : , ", currentData)


    return (
        <div className="dashboard">
            {status === 'loading' && <Loading spinnerClass='my-spin ' loading={status === 'loading'} type={'default'} />}

            <HeaderDashboard />

            <div className='my-[100px]'>

                <div className='mb-5 flex justify-center items-center'>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: 'background.paper' }}
                    >
                        <ListItemButton
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="radius in km"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary="Radius in km"
                                secondary={optionsRadius[selectedIndex]}
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
                        {optionsRadius.map((option, index) => (
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

                <div className='text-center mb-5'>
                    <Button variant="outlined" color="primary" onClick={handleOpenModal}>
                        Select Service
                    </Button>
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Job</th>
                                <th scope="col" className="px-6 py-3">Location</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {status === 'succeeded' && currentData.length > 0 ?
                                currentData.map((item) => (
                                    <tr className="bg-white border-b " key={item.id}>
                                        <td className="px-6 py-4">{item.username}</td>
                                        <td className="px-6 py-4">{item.service_type}</td>
                                        <td className="px-6 py-4"><GoogleMapIcon latitude={item.location[1]} longitude={item.location[0]} /></td>
                                        <td className="px-6 py-4"><PhoneDialer phoneNumber={item.phone_number} /> - <WhatsAppPhone phoneNumber={`+20${item.phone_number}`} /></td>
                                    </tr>
                                )) :
                                "There Is No Data Yet"}
                        </tbody>
                    </table>
                </div>

                {data.nearby_service_providers > 10 ? (
                    <Stack spacing={2} className="my-5">
                        <Pagination
                            count={Math.ceil(data.nearby_service_providers.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Stack>
                ) : ""}

                <ServiceModal
                    open={modalOpen}
                    handleClose={handleCloseModal}
                    handleServiceSelect={handleServiceSelect}
                />
            </div>
        </div>
    );
};

const ServiceModal = ({ open, handleClose, handleServiceSelect }) => (
    <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 400 }}>
            <Typography variant="h6" component="h2">
                Select a Service
            </Typography>
            <List>
                {options.map((option) => (
                    <ListItemButton key={option} onClick={() => handleServiceSelect(option.value)}>
                        <ListItemText primary={option.label} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    </Modal>
);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default dynamic(() => Promise.resolve(Table), { ssr: false });