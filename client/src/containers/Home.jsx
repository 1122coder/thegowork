import React from 'react'
import '../assets/styles/Home.css'
import { Button } from '@mui/material'
import {useMediaQuery, Typography} from '@mui/material'
import { Box } from '@mui/system'
const Home = () => {
  const isNonMobile = useMediaQuery('(max-width:730px)')
  console.log(isNonMobile)
  return (
    <div className='homepage'>
      <div className = 'blue-back-circle back-circle'></div>
      <div className = 'red-back-circle back-circle'></div>
      <div className='home-back'>
      </div>
      <div className='home-content'>
        <h1>Build a Profound Team For you business.</h1>
        <p>We help you hire highly skilled people in just a day. Send offers to more than 500 applicants daily and establish your perfect team.</p>
        <div className='join'>
          <div className='lines'></div>
          <h4>Join as</h4>
          <div className='lines'></div>
        </div>
        <div className='home-buttons'>
          <Button variant = 'contained'
          sx={
            !isNonMobile?
            {
            background:' rgb(5,247,85)',
            background: 'linear-gradient(50deg, rgba(5,247,85,1) 0%, rgba(0,255,179,1) 100%)',
            fontSize:'20px',
            padding:'10px 40px',
            color:'white',
            margin:'auto 30px'
          }:{
            fontSize:'15px',
            padding:'5px 20px',
            color:'white',
            margin:'auto 0px'
          }}
          >
            Employer
          </Button>
          <Button variant = 'contained'
          className='home-button'
          sx={
            !isNonMobile?
            {
            background:' rgb(5,247,85)',
            background: 'linear-gradient(50deg, rgba(5,247,85,1) 0%, rgba(0,255,179,1) 100%)',
            fontSize:'20px',
            padding:'10px 40px',
            color:'white',
            margin:'auto 30px'
          }:{
            fontSize:'15px',
            padding:'5px 20px',
            color:'white',
            margin:'auto 10px'
          }}
          >
            Candidate
          </Button>
        </div>
      </div>
      <Box className="employer-points-div">
            <Typography variant="h4" fontWeight='700'>GoWork For Employers</Typography>
      </Box>
    </div>
  )
}

export default Home