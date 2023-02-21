import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import SmallButton from '../components/custom-mui-comp/Button'
import { textAlign } from '@mui/system'
import { useDispatch } from 'react-redux'
import { resendOtpCode, verify } from '../redux/auth/action'
const Verification = () => {
  const dispatch = useDispatch()
  const validationSchema = yup.object({
    otp:yup.string().required('This field is required.')
  })
  const {values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,} = useFormik({
      initialValues: {
        otp: '',},
        onSubmit: (values) =>{
          console.log(values)
          dispatch(verify({otp:values.otp}))
        },
        validationSchema:validationSchema
    })
  return (
    <div className='verification-div'>
    <div className='auth-form-div '>
      <h1>OTP VERIFICATION</h1>
      <p style={{fontSize:'25px', fontWeight:'500', margin:'30px auto', textAlign:'center'}}>Please Enter the OTP sent on your registered Email for verification.</p>
        <form onSubmit={handleSubmit}>
        <div className='auth-inputs'>
         <div className={errors.otp && touched.otp ? "input-error" : ""}>
         <input type='text' 
          name = 'otp'
          onBlur={handleBlur}
          onChange={handleChange}
          style={{
            backgroundColor:'rgb(240, 240, 240)'
          }}
          />
         </div>
          {/* <p className="error">{errors.email && touched.email? errors.email:''}</p> */}
          {errors.otp && touched.otp && (
        <p className="red">{errors.otp}</p>
      )}
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <SmallButton type = 'button' variant = 'outlined' sx={{color:'#05DD41',margin:'40px auto auto auto'}} className='auth-button'
        onClick = {()=>{
          dispatch(resendOtpCode())
        }}
        >Resend</SmallButton>
        <SmallButton type='submit' variant = 'contained' sx={{margin:'40px auto auto auto'}}>Submit</SmallButton>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Verification