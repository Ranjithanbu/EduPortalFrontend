import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import '../css/login.css'
const Login = ({setUser}) => {
    const navigate = useNavigate()
    const initialValues = {
        userName: '',
        
        password: ''
    }
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('userName is required'),
        
        password: Yup.string().required('password is required')
    })
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (data) => {

            
            await axios.post('https://vidyalayabackend.onrender.com/users/login', data).then(res => {
                    toast.success(res.data.message)
                    setUser(res.data.data.userName)
                    setTimeout(() => {
                       if(res.data.data){ navigate('/')}
                    }, 4000)
                   
                })
                    .catch(err => toast.info(err.message))
            }
            
    
    })

    return (
        <div className='login-conatainer'>
            <form onSubmit={formik.handleSubmit} className='login-content'  >
                <h2 className='head'>Login</h2>
                <input type="text" name="userName" id="userName" placeholder='Username' onChange={formik.handleChange} />
                <span className='text-white text-end'>{formik.errors.userName}</span>
                <input type="password" name="password" id="password" placeholder='password' onChange={formik.handleChange} />
                <span className='text-white text-end'>{formik.errors.email}</span>
                <button className='loginBtn' type="submit">Login</button>
                <div className='d-inline-flex'>
                    <p className='text-white me-1'>you don't have an account</p><Link to={'/signUp'}>Click Here</Link>
                </div>
            </form> 
        </div>
    );
};

export default Login;