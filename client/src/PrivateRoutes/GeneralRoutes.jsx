import React,{useState,useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import background from '../assets/images/background.jpg'
import Navbar from '../containers/Navbar';


function GeneralRoutes() {
    let  userid = localStorage.getItem("token") == null ? false : true;
    return (
        <div id='page' >
            <Navbar />
            <div className='background'>
            <div className='bg-cover'></div>
            <img src = {background} className = 'background-image' />
            </div>
            <div className='content'>
            <Outlet  />
            </div>
        </div>

    )

}
export default GeneralRoutes;