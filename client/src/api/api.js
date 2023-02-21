import { HOST_API } from "./constans"
import axios from 'axios'
import toast from "react-hot-toast";
let config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const registerRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/register`, body, config)
}

export const verifyRequest = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/verify-otp`, body, config)
}


export const loginRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/login`, body, config)
}

export const adminloginRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/admin-login`, body, config)
}

export const otpRequest = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    console.log('helo')
    return axios.get(`${HOST_API}/auth/resend-otp`, config)
}


export const get_pricing_details = () => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return axios.get(`${HOST_API}/get-pricing`, config)
}

export const set_pricing = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    const body = JSON.stringify(data)
    try {
        const resp = axios.post(`${HOST_API}/set-pricing`, body, config)
        if (resp.status === 204) {
            toast.dismiss();
            const toastId = toast.success('Prcing Updated!')
        }
    }
    catch (e) {
        toast.dismiss();
        const toastId = toast.error('Prcing Update failed!')
    }
}