import {
  LOGIN_REQUEST, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
  VERIFICATION_ERROR, VERIFICATION_REQUEST, VERIFICATION_SUCCESS, LOGIN_SUCCESS,
  LOGIN_ERROR,
  OTP_REQUEST,
  OTP_SUCCESS,
  OTP_ERROR

} from "./constants";
import { loading_false, loading_true } from "../general/action";
import toast from "react-hot-toast";
import jwtDecode from 'jwt-decode'
const initial = {
  token: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null,
  isAuthenticated: false,
  loading: false,
  user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
  error: null,
  success: null
};
const authReducer = (state = initial, action) => {
  let toastId = null
  switch (action.type) {
    case REGISTER_REQUEST:
      toast.dismiss();
      toastId = toast.success('Request Sent! Please Wait...')
      return { ...state, loading: true }



    case REGISTER_SUCCESS:
      localStorage.setItem('user', action.resp.data.user)
      localStorage.setItem('accessToken', action.resp.data.token)
      const {userRole} = jwtDecode(localStorage.getItem('accessToken'))
      toast.dismiss();
      toastId = toast.success('User Registration Successfull!')
      window.location.replace(`${userRole}/verification`)
      return {
        ...state, loading: false,
        success: "User Registration Successfull!",
        user: action.resp.data.user,
        token: action.resp.data.token
      }



    case REGISTER_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      return { ...state, error: action.err.response.data.message };


    case VERIFICATION_REQUEST:
      toast.dismiss();
      toastId = toast.success('Request Sent! Please Wait...')
      return { ...state, loading: true }



    case VERIFICATION_SUCCESS:
      toast.dismiss();
      toastId = toast.success('Verification Successfull!')
      if(userRole == 'candidate'){
        window.location.replace(`/candidate/profile`)
      }
      else if(userRole == 'employer'){
        window.location.replace('/employer/package/freetrial')
      }
     
      return {
        ...state, loading: false,
        success: "Verification Successfull!",
      }



    case VERIFICATION_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      return { ...state, error: action.err.response.data.message };



    case LOGIN_REQUEST:
      toast.dismiss()
      toastId = toast.loading("Please Wait...")
      return { ...state, loading: true }

    case LOGIN_SUCCESS:
      console.log(action.resp)
      localStorage.setItem('user', action.resp.data.user)
      localStorage.setItem('accessToken', action.resp.data.token)
      toast.dismiss();
      toastId = toast.success('Login Successfull!')

      if (action.resp.data.user.verified) {
        window.location.replace(`/dashboard`)
      }
      else window.location.replace(`/verification`)
      return {
        ...state, loading: false,
        success: "User Registration Successfull!",
        user: action.resp.data.user,
        token: action.resp.data.token
      }

    case LOGIN_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      return { ...state, error: action.err.response.data.message };

    
    case OTP_REQUEST:
      toast.dismiss()
      console.log('otp')
      toastId = toast.loading('Pleas Wait...')
    
    case OTP_SUCCESS:
      toast.dismiss()
      toastId = toast.success('OTP Sent successfully!')
      return state
    case OTP_ERROR:
      toast.dismiss()
      toastId = toast.error('Error Sending OTP!')
      return state
    
      default:
      return state;
  }
};

export default authReducer;
