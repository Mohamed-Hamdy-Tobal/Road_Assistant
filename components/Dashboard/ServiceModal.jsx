import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { faCog, faGasPump, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
    { name: 'Mechanical', icon: faWrench },
    { name: 'Gas Station', icon: faGasPump },
    { name: 'All', icon: faCog },
];

const ServiceModal = ({ open, handleClose, handleServiceSelect }) => {
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

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Select a Service
                </Typography>
                <List>
                    {services.map((service, index) => (
                        <ListItem button key={index} onClick={() => handleServiceSelect(service.name)}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={service.icon} />
                            </ListItemIcon>
                            <ListItemText primary={service.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Modal>
    );
};

export default ServiceModal;