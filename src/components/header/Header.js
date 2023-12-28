import React, { useState, useRef, useEffect } from 'react'
import "./header.css";
import ImageIcons from '../../common/ImageIcons'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { NavLink, Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Info from '@mui/icons-material/Info';
import Home from '@mui/icons-material/Home';
import ContactPage from '@mui/icons-material/ContactPage';
import { windowScroll } from "../../helpers/ScrollToTop";








const Header = () => {

    const location = useLocation();
    const { pathname } = location;


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    console.log("Current pathname:", pathname);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >
            <Divider />

            <img src={ImageIcons.myEV_logo} className='logo-size-w cursor-pointer py-4 pl-3 ' />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <Divider />

                <ListItem disablePadding className={`${pathname === '/' && "bg-[#0B7132] text-white"}`}>
                    <ListItemButton className={`${pathname === '/' && "bg-[#0B7132] text-white"}`}>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#fff]" : "hover:text-[#0B7132]"} onClick={windowScroll}>
                            <ListItemText primary="Home" />
                        </NavLink>
                    </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem disablePadding className={`${pathname === '/about' && "bg-[#0B7132] text-white"}`}>
                    <ListItemButton>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#fff]" : "hover:text-[#0B7132]"} onClick={windowScroll}>
                            <ListItemText primary="About Us" />
                        </NavLink>
                    </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem disablePadding className={`${(pathname === '/services' || pathname === '/services/AC' || pathname === '/services/DC') && "bg-[#0B7132] "} `}>
                    <ListItemButton onClick={handleClick} >
                        <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#fff]" : "text-[#000] hover:text-[#0B7132]"} onClick={windowScroll}>
                            <ListItemText className={`${(pathname === '/services' || pathname === '/services/AC' || pathname === '/services/DC') ? "text-white" : "text-black"}`} primary="Services" />
                        </NavLink>

                        <div className='absolute right-[10px]'>{open ? <ExpandLess /> : <ExpandMore />}</div>
                    </ListItemButton>
                </ListItem>



                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem disablePadding className={`${pathname === '/services/AC' ? "bg-[rgba(11,113,50,0.7)] text-white" : "bg-[#000] text-white"}`}>

                            <ListItemButton sx={{ pl: 4 }}>

                                <NavLink to="/services/AC" className={({ isActive }) => isActive ? "text-[#fff]" : "hover:text-[#0B7132]"} onClick={windowScroll}>
                                    <ListItemText primary="AC Charger Service" />
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem disablePadding className={`${pathname === '/services/DC' ? "bg-[rgba(11,113,50,0.7)] text-white" : "bg-[#000] text-white"}`}>

                            <ListItemButton sx={{ pl: 4 }}>

                                <NavLink to="/services/DC" className={({ isActive }) => isActive ? "text-[#fff]" : "hover:text-[#0B7132]"} onClick={windowScroll}>
                                    <ListItemText primary="DC Charger Service" />
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />


                <ListItem disablePadding className={`${pathname === '/contact' && "bg-[#0B7132] text-white"}`}>
                    <ListItemButton>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#fff]" : "hover:text-[#0B7132]"} onClick={windowScroll}>
                            <ListItemText primary="Contact Us" />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <Divider />

            </List>
        </Box >
    )


    const [show, setshow] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMenu = () => {
        setshow(s => !s)

    }

    const toggleDropdown = () => {
        setDropdownOpen(s => !s);

    };

    useEffect(() => {
    }, [dropdownOpen]);

    const closeDropdown = () => {
        setDropdownOpen(false)
        windowScroll()
    }

    const phoneNumber = '+919592595975';
    const phoneLink = `tel:${phoneNumber}`;

    const callPhoneNumber = () => {
        window.location.href = phoneLink;
    };

    const email = 'info@vpventuresindia.com';
    const mailtoLink = `mailto:${email}`;

    const openMail = () => {
        window.open(mailtoLink);
    };

    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);
    console.log('headerRef:', headerRef);


    const handleScroll = (elTopOffset, elHeight) => {
        console.log('Scrolling...');

        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        console.log('Header top:', header.top, 'Header height:', header.height);
        const handleScrollEvent = () => {
            console.log('Scroll event triggered...');
            handleScroll(header.top, header.height);
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <>
            <header>
                <div className="w-full">
                    {/* top bar info */}
                    <div className="w-full bg-black max-sm:hidden">
                        <div className="container top-bar-header flex mx-auto justify-between items-center max-lg:flex-col px-2 lg:py-2 max-lg:py-2">
                            {/* contact email and phone */}
                            <div className="flex text-[#fff] max-lg:mb-2">
                                <div className='flex items-center'>
                                    <FaRegEnvelope onClick={openMail} className='h-5 w-6 cursor-pointer' />
                                    <span onClick={openMail} className="ml-2 font-size-16 text-[#fff] cursor-pointer" >{email}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='clr-ddd mx-4'>|</span>
                                </div>
                                <div className='flex items-center'>
                                    <MdPhone onClick={callPhoneNumber} className='h-5 w-6 cursor-pointer' />
                                    <span onClick={callPhoneNumber} className="ml-2 font-size-16 text-[#fff] cursor-pointer" >{phoneNumber}</span>
                                </div>
                            </div>
                            {/* Social media links */}
                            <div className="flex items-center lg:gap-4 text-[#fff] max-lg:gap-3 max-lg:mb-2">
                                <Link to='https://www.facebook.com/myevpoint' target="_blank"><FaFacebookF className='h-5 w-6 cursor-pointer hover:text-[#0B7132]' /></Link>
                                <Link to='https://twitter.com/myevpoint' target="_blank"><FaTwitter className='h-5 w-6 cursor-pointer hover:text-[#0B7132]' /></Link>
                                <Link to='https://in.pinterest.com/myevpoint/' target="_blank"><FaPinterest className='h-5 w-6 cursor-pointer hover:text-[#0B7132]' /></Link>
                                <Link to='https://www.youtube.com/channel/UCI3qj7D2eG-hqQ-HP948QWw' target="_blank"><FaYoutube className='h-5 w-6 cursor-pointer hover:text-[#0B7132]' /></Link>
                                <Link to='https://www.linkedin.com/company/my-ev-point/' target="_blank"><FaLinkedinIn className='h-5 w-6  cursor-pointer hover:text-[#0B7132]' /></Link>
                            </div>
                        </div>
                    </div>
                    {/* Header Navbar */}
                    <div className={`${sticky.isSticky ? 'sticky' : ''} ${sticky.isSticky ? 'z-50' : ''}`} ref={headerRef}>
                        <div className="w-full bg-white header-navbar-info">
                            <div className='container mx-auto'>
                                <div className='flex mx-auto justify-between gap-4 py-2 px-2'>
                                    {/* Navbar Logo */}
                                    <div className='site-logo-info'>
                                        <NavLink to="/">
                                            <img src={ImageIcons.myEV_logo} className='logo-size-w cursor-pointer' />
                                        </NavLink>
                                    </div>
                                    <div className='flex my-auto'>
                                        {/* Navbar menu */}
                                        <div className="hidden lg:flex items-center">
                                            <ul className='primary-menu-info flex list-none'>
                                                <li className='menu-item-info'>
                                                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0B7132]" : "hover:text-[#0B7132]"} onClick={windowScroll}> Home</NavLink>
                                                </li>
                                                <li className='menu-item-info'>
                                                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#0B7132]" : "hover:text-[#0B7132]"} onClick={windowScroll}>About Us</NavLink>
                                                </li>
                                                <li className='menu-item-info'>
                                                    <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#0B7132]" : "hover:text-[#0B7132]"} onClick={windowScroll}>
                                                        Our Service
                                                    </NavLink>

                                                    <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="icon-down-menu inline ml-1 transition-transform duration-200 transform pointer"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" color='#000' cursor='pointer'></path></svg>

                                                    {dropdownOpen == true &&

                                                        <div className='submenu-info'>
                                                            <div ref={dropdownRef} className='submenu-links bg-white'>
                                                                <ul className='submenu-link-menu'>
                                                                    <li className='link-menu'>
                                                                        <NavLink to="/services/AC" className={({ isActive }) => isActive ? "text-[#000]" : "hover:text-[#fff] hover:bg-[#0B7132]"} onClick={closeDropdown}>AC Charger Service</NavLink>
                                                                    </li>
                                                                    <li className='link-menu'>
                                                                        <NavLink to="/services/DC" className={({ isActive }) => isActive ? "text-[#000]" : "hover:text-[#fff]  hover:bg-[#0B7132]"} onClick={closeDropdown}>DC Charger Service</NavLink>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    }

                                                </li>
                                                <li className='menu-item-info'>
                                                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#0B7132]" : "text-[#000] hover:text-[#0B7132]"} onClick={windowScroll}>Contact Us</NavLink>
                                                </li>
                                            </ul>
                                            <div className='button-getstarted flex'>
                                                <button className="font-size-16 text-white bg-[#0B7132] hover:bg-black rounded-lg ml-5 px-5 py-3 inline-flex items-center">
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                        {/* End Navbar menu */}

                                        {/* <NavLink to="/services" className={({ isActive }) => isActive ? "relative text-[#0B7132]" : "hover:text-[#0B7132]"}>Our Services
                                        {dropdownOpen === false ?
                                            <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="inline w-4 h-3 ml-1 transition-transform duration-200 transform"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" color='#000'></path></svg>
                                            :
                                            <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="inline w-4 h-3 ml-1 transition-transform duration-200 transform rotate-180"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" color='#0B7132'></path></svg>
                                        }
                                        {dropdownOpen && (
                                            <div
                                                ref={dropdownRef}
                                                className="absolute md:top-36 lg:top-40 bg-white rounded-md shadow-xl z-20 right-40 border border-2 border-t-[#0B7132]">
                                                <Link to='/services/ac_charger_services' className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white" onClick={closeDropdown} >AC Charger Service </Link>
                                                <div className='w-full bg-[#DDDDDD] h-px'>
                                                </div>
                                                <Link to='/services/dc_charger_services' className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white" onClick={closeDropdown} >DC Charger Service</Link>
                                                <div className='w-full bg-[#DDDDDD] h-px'>
                                                </div>
                                            </div>
                                        )}
                                        </NavLink> */}



                                        {/* Mobile Navbar menu */}
                                        <div>




                                            <div class="lg:hidden ml-10 mt-1  " onClick={toggleDrawer('left', true)}>
                                                <button type="button" class="block pointer text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                                    <svg class="h-6 w-6 fill-current " viewBox="0 0 24 24">
                                                        <path class="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </button>
                                            </div>


                                            <Drawer className='block lg:hidden'
                                                anchor={'left'}
                                                open={state['left']}
                                                onClose={toggleDrawer('left', false)}
                                            >
                                                {list('left')}
                                            </Drawer>

                                        </div>




                                        {show == true &&
                                            <div
                                                className="absolute right-0 w-full  md:max-w-screen-sm md:w-screen mt-16 origin-top-right text-black md:hidden transition-all duration-300 ease-out"
                                                style={{
                                                    transformOrigin: 'top right',
                                                    transform: show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-28 scale-90 pointer-events-none',
                                                }}
                                            >
                                                <div className=" bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                                            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">Home</div></NavLink>

                                                        </div>

                                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">About Us</div></NavLink>

                                                        </div>

                                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                                            <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">Our Services</div></NavLink>

                                                        </div>
                                                        <div className="flex flex-row items-start rounded-lg  w-full" >
                                                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">Contact Us</div></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {/* Mobile Navbar menu end */}


                                    </div>
                                    {/* Navbar menu end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
