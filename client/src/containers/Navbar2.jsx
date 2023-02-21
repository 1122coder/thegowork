import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Typography, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import jwtDecode from 'jwt-decode';
const Navbar2 = () => {
    const [state, setState] = React.useState(false);
    const [active, setActive] = useState()

    const sidebarMainItems = [
        {
            text: 'Profile',
            icon: <AccountCircleIcon />
        },
        {
            text: 'Account',
            icon: <ManageAccountsIcon />
        },
        {
            text: 'Blog',
            icon: <ArticleOutlinedIcon />
        },
    ]
    const sidebarSubItems = [
        {
            text: 'Contact',
            icon: <PermContactCalendarOutlinedIcon />
        },
        {
            text: 'About Us',
            icon: <InfoOutlinedIcon />
        },
        {
            text: 'Terms and Conditions',
            icon: <HandshakeOutlinedIcon />
        },
        {
            text: 'Logout',
            icon: <LogoutOutlinedIcon />
        }
    ]
    const list = (anchor) => (
        <Box
            sx={{ padding: '40px 20px' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography variant="h5">Muhammad Siddiqi</Typography>
            <List sx={{ color: 'black' }}>
                {sidebarMainItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: 'black' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ color: 'black' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {sidebarSubItems.map((item, index) => (
                    <ListItem key={index} disablePadding >
                        <ListItemButton>
                            <ListItemIcon sx={{ color: 'black' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ color: 'black' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const candItems = [
        {
            text: 'Dashboard',
            link: '/candidate/dashboard'
        },
        {
            text: 'Messages',
            link: '/candidate/messages'
        },
        {
            text: 'Offers',
            link: '/candidate/offers'
        },
        {
            text: 'CV Builder',
            link: '/candidate/cv-builder'
        },
        {
            text: 'Certifications',
            link: '/candidate/certifications'
        },
    ]
    const empItems = [
        {
            text: 'Dashboard',
            link: '/employer/dashboard'
        },
        {
            text: 'Candidates',
            link: '/employer/candidates'
        },
        {
            text: 'Messages',
            link: '/employer/messages'
        },
        {
            text: 'Offers',
            link: '/employer/offers'
        },
        {
            text: 'Packages',
            link: '/employer/packages'
        },
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const [navItems,setNavItems] = useState(candItems)

    useEffect(() => {
        const {userRole} = jwtDecode(localStorage.getItem('accessToken'))
        if(userRole=='candidate'){
            setNavItems(candItems)
        }
        else if(userRole == 'employer'){
            setNavItems(empItems)
        }
        setActive( window.location.pathname.split('/')[2])
     },[]);

    return (
        <nav style={{
            borderBottom: '1.5px solid #e6e2e2',
            padding: '10px 30px'
        }}>
            <div>
                <img src={logo} alt='Gowork' width='60px' />
            </div>
            <ul className='nav-ul'>
                {navItems.map((item, index) => (
                    <li className='nav-li'
                        style={active == item.text.toLowerCase() || (window.location.pathname.split('/')[2]=='cv-builder' && item.text=='CV Builder') ? { borderBottom: '2px solid #05DD41' } : null}
                        key={index}>
                        <Link to={item.link}
                            onClick={() => {
                               if(item.text == 'CV Builder'){
                                setActive('cv-builder')
                               }
                               else{
                                setActive(item.text.toLowerCase())
                               }
                            }}>{item.text}</Link></li>
                ))}

            </ul>
            <div className='right-nav-icons'>
                <IconButton sx={{color:'black'}}>
                <EmailOutlinedIcon />
                </IconButton>
                <IconButton sx={{color:'black'}}>
                <NotificationsNoneOutlinedIcon />
                </IconButton>
                
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={toggleDrawer('right', true)} />
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>

            </div>
        </nav>
    )
}

export default Navbar2