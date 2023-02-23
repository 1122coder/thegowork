import { REGISTER_REQUEST, VERIFICATION_REQUEST,LOGIN_REQUEST, OTP_REQUEST, SEND_EMAIL_REQUEST } from "./constants";

export const register = (query) => {
  console.log("action");
  return { type: REGISTER_REQUEST, query };
};


export const verify = (query) => {
  return {type:VERIFICATION_REQUEST, query}
}

export const login  = (query) =>{
  return {type:LOGIN_REQUEST, query}
}

export const resendOtpCode  = () =>{
  console.log('action called')
  return {type:OTP_REQUEST }
}

export const sendEmail = (query)=>{
  return {type: SEND_EMAIL_REQUEST, query}
}
