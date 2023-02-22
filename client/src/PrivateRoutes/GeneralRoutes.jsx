import React,{useState,useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import background from '../assets/images/back.jpg'
import Navbar from '../containers/Navbar';


function GeneralRoutes() {
    let  userid = localStorage.getItem("token") == null ? false : true;
    return (
        <div id='page' >
            <Navbar />
            <div className='content'>
            <Outlet  />
            </div>
        </div>

    )

}
export default GeneralRoutes;