"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import { logout } from '@/redux/slices/authSlice';
import Link from 'next/link';

export default function MenuTransitions() {

    const { isLoggedIn, user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();
    const localActive = useLocale()

    // For The Logout
    const handleLogout = () => {
        dispatch(logout())
    };

    console.log("USer From USer dropdown Dash : ", user)
    console.log("isLoggedIn From USer dropdown Dash : ", isLoggedIn)

    // For Avatar

    const getInitials = (fullName) => {
        if (!fullName) return '';
        const words = fullName.split(' ');
        const initials = words.map((word) => word[0].toUpperCase()).join('');
        return initials.slice(0, 1); // Get only the first character
    };

    const createHandleMenuClick = (menuItem) => {
        // router.push(`/${localActive}/profile`)
        return () => {
            console.log(`Clicked on ${menuItem}`);
        };
    };

    return (
        <div className='user-dropdown flex justify-between items-center'>
            {isLoggedIn && user && (
                <Dropdown>
                    <MenuButton>
                        <Avatar sx={{ bgcolor: "#e68c3a" }}>
                            {getInitials(user.first_name)}
                        </Avatar>
                    </MenuButton>
                    <Menu slots={{ listbox: AnimatedListbox }}>
                        <div class="py-2 px-3 flex items-center gap-2">
                            <span class="avatar avatar-circle avatar-md">
                                <Avatar sx={{ bgcolor: "#e68c3a" }}>
                                    {getInitials(user.first_name)}
                                </Avatar>
                            </span>
                            <div>
                                <div class="font-bold text-gray-900 dark:text-gray-100">{user.first_name} {user.last_name}</div>
                                <div class="text-xs text-[#6b7280]">{user.email}</div>
                            </div>
                        </div>
                        <span id="menu-item-51-HlSywUft8S" class="menu-item-divider"></span>

                        <Link href={`/${localActive}/profile`}>
                            <MenuItem>
                                <span class="text-xl opacity-50"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
                                <span className='text-[#4b5563]'>Profile</span>
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogout}>
                            <span class="text-xl opacity-50"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></span>
                            <span className='text-[#4b5563]'>Log out</span>
                        </MenuItem>
                        {/* <MenuItem onClick={createHandleMenuClick('Language settings')}>
                            Language settings
                        </MenuItem> */}
                    </Menu>
                </Dropdown>
            )}
        </div>
    );
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Listbox = styled('ul')(
    ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    z-index: 1;

    .closed & {
        opacity: 0;
        transform: scale(0.95, 0.8);
        transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
    
    .open & {
        opacity: 1;
        transform: scale(1, 1);
        transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }

    .placement-top & {
        transform-origin: bottom;
    }

    .placement-bottom & {
        transform-origin: top;
    }
    `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
    const { ownerState, ...other } = props;
    const popupContext = React.useContext(PopupContext);

    if (popupContext == null) {
        throw new Error(
            'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
        );
    }

    const verticalPlacement = popupContext.placement.split('-')[0];

    return (
        <CssTransition
            className={`placement-${verticalPlacement}`}
            enterClassName="open"
            exitClassName="closed"
        >
            <Listbox {...other} ref={ref} />
        </CssTransition>
    );
});

AnimatedListbox.propTypes = {
    ownerState: PropTypes.object.isRequired,
};

const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    font-weight: 600;
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    gap: 8px;

    &:last-of-type {
        border-bottom: none;
    }

    &.${menuItemClasses.focusVisible} {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }

    &.${menuItemClasses.disabled} {
        color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:hover:not(.${menuItemClasses.disabled}) {
        background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
        color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
    `,
);

const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: transparent;
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    `,
);
