import React, { useEffect, useState } from 'react';
import  axios  from 'axios';
import {useParams} from 'react-router-dom'
import {HashLoader} from 'react-spinners'
const CollegeInfo = () => {
  const {clgId}=useParams()  
const[data,setData]=useState([])
const [loading,setLoading]=useState(false)
useEffect(()=>{

   fetchData(clgId)
    },[])
    const fetchData=async(clgId)=>{
        setLoading(true)
        axios.get(`https://vidyalayabackend.onrender.com/colleges/getOne/${clgId}`)
        .then(res=>setData(res.data.data))
        .catch(err=>toast.info(err.message))
        .finally(setLoading(false))
        
        }
    
    return (
        loading?<div>
            <HashLoader size={50} color='#0000ff'/>
        </div>:data.details?<div>
            <h3 className='infoHead'>college  information</h3>
            <p className='infoDetils'>{data.details}</p>
        </div>:null
    );  
};

export default CollegeInfo;