import { useSelector } from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import toast from "react-hot-toast";

const PrivateRoutes  = ()  =>{
    const token = localStorage.getItem('accessToken')
    return (
        token ? <Outlet /> : <Navigate to='/login' />      
    ) 
}

 export const EmployerRoutes  = ()  =>{
    const token = localStorage.getItem('accessToken')
    var role = ''
    if(token){
        role = jwtDecode(token).userRole
        console.log(token)
    }
    return (
        token && role == 'employer' ? <Outlet /> : <Navigate to='/login' />      
    ) 
}

export const CandidateRoutes  = ()  =>{
    const token = localStorage.getItem('accessToken')
    var role = ''
    if(token){
        role = jwtDecode(token).userRole
        console.log(role)
    }
    return (
        token && role == 'candidate' ? <Outlet /> : <Navigate to='/login' />      
    ) 
}




export default PrivateRoutes