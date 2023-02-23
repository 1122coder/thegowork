import React , {useState,useEffect}   from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, TextField } from '@mui/material'
import AuthInputs from '../../components/AtuhInputs'
import AuthPasswordInputs from '../../components/AuthPasswordInput'
import { Link } from 'react-router-dom'
import { useFormik, Form } from 'formik'
import * as yup from 'yup';
import SmallButton from '../../components/custom-mui-comp/Button';
import { login } from '../../redux/auth/action';
import { useDispatch } from 'react-redux';
const ResetPassword = () => {
  const dispatch= useDispatch()
  const loginSchema = yup.object({
    password: yup.string().required('Password is required!').min(8, 'Password must be 8 characters long'),
    rePassword: yup.string().required('Password is required!').min(8, 'Password must be 8 characters long')
  })
  const {values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,} = useFormik({
    initialValues: {
      password: '',
      rePassword: '',
    },
    onSubmit: (values) => {
      dispatch(login(values))
      console.log(values)
    },
    validationSchema: loginSchema
  })
  const [show,setShow] = useState(false)
  const [val, setVal] = useState("")
  return (
    <div className='auth-form-div'>
      <h1>RESET PASSWORD</h1>
      <form onSubmit={handleSubmit}
        onBlur={handleBlur}>
        
        <div className='auth-inputs'>
          <label>OTP:</label>
          <input
          type="number"
          pattern="[0-9]*"
          value={val}
          onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
        />
        </div>

        <div className='auth-inputs'>
          <label>Password:</label>
         <div className={errors.password && touched.password ? "input-error" : ""}>
         <input type='password' 
          name = 'password'
          onBlur={handleBlur}
          onChange={handleChange}
          
          />
         </div>
          {/* <p className="error">{errors.email && touched.email? errors.email:''}</p> */}
          {errors.password && touched.password && (
        <p className="red">{errors.password}</p>
      )}
        </div>
        <div className = 'auth-inputs'>
        <label>Re-enter Password:</label>
        <div
        className={errors.password && touched.password ? "auth-password-input input-error" : "auth-password-input"}
        >
        <input type = {show?'text':'password'}
        name = 'password'
        onBlur={handleBlur}
        onChange={handleChange}
        
        />
        <button type = 'button' onClick={()=>{setShow(!show)}}>{show?<VisibilityIcon />    :<VisibilityOffIcon />}</button>
        </div>
        {errors.password && touched.password && (
        <p className="red">{errors.password}</p>
      )}
        </div>

      <SmallButton type='submit' variant="contained" disabled = {isSubmitting} sx={{margin:'40px auto auto auto'}}>Submit</SmallButton>
      </form>
    </div>
  )
}

export default ResetPassword;

