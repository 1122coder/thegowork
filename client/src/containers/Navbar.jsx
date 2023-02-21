import {  useMediaQuery } from '@mui/material'
import SmallButton from '../components/custom-mui-comp/Button'
import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const isNonMobile = useMediaQuery('(min-width:700px)')
  return (
    isNonMobile&& <nav>
        {/* LEFT SIDE LOGO */}
        <div>
            <img src = {logo} alt = 'Gowork' width = '60px' />
        </div>
        <ul className='nav-ul'>
            <li className='nav-li'><Link to=''>Home</Link></li>
            <li className='nav-li'><Link to=''>Blog</Link></li>
            <li className='nav-li'><Link to=''>Certifications</Link></li>
            <li className='nav-li'><Link to=''>Pricing</Link></li>
            <li className='nav-li'><Link to=''>CV Builder</Link></li>    
            <li className='nav-li nav-button'><SmallButton type='button' variant = 'contained'>Login</SmallButton></li>    
        </ul>

    </nav>
  )
}

export default Navbar