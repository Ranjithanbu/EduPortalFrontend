import React from 'react';
import '../css/signUp.css'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
const navigate=useNavigate()    
const initialValues={
    userName:'',
    email:'',
    password:'',
    confirmPassword:''
}    
const validationSchema=Yup.object().shape({
    userName:Yup.string().required('*userName is required'),
    email:Yup.string().matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,'enter valid mail').required('*email is required'),
    password:Yup.string().min(5,'password must be greater than 5 digits').max(10,'password lessthan 10 digits').required('*password is required'),
    confirmPassword:Yup.string().min(5,'password must be greater than 5 digits').max(10,'password lessthan 10 digits').required('*password is required')

})
    const formik=useFormik({
    initialValues,
    validationSchema,
    onSubmit:async(data)=>{

        if(data.password==data.confirmPassword){
            axios.post('https://vidyalayabackend.onrender.com/users/signUp',data).then(res=>{
            toast.success(res.data.message)
            setTimeout(()=>{
            
            if(res.data.message.toLowerCase().includes('success')){   
                 navigate('/login')
            }
            },4000)   
            console.log(res.data.message)
            })
            .catch(err=>toast.info(err.message))
        }
        else{
            toast.info('password must be same')
            console.log('password must be same');
        }
    }
 })  
    
    
    return (
        <div className='signUp'>
            <form onSubmit={formik.handleSubmit} className='signUp-content'  >
<h2 className='head'>Sign Up</h2>  
 <input type="text" name="userName" id="userName" placeholder='Username' onChange={formik.handleChange}/>
 <span className='text-white text-end'>{formik.errors.userName}</span>                
 <input type="email" name="email" id="email" placeholder='email' onChange={formik.handleChange}/>
 <span className='text-white text-end'>{formik.errors.email}</span>
 <input type="password" name="password" id="password" placeholder='password' onChange={formik.handleChange}/>
 <span className='text-white text-end'>{formik.errors.password}</span>
 <input type="text" name="confirmPassword" id="confirmPassword" placeholder='confirm password' onChange={formik.handleChange}/>
          <span className='text-white text-end'>{formik.errors.confirmPassword}</span>
          <button className='SignUpbtn' type="submit">Create Account</button>  

          <div className='d-inline-flex'>
          <p className='text-white me-1'>Already have an account</p><Link to={'/login'}>Click Here</Link>
          </div>
            </form>
        </div>
    );
};

export default SignUp;
