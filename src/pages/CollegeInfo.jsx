import React, { useEffect, useState } from 'react';
import  axios  from 'axios';
import {HashLoader} from 'react-spinners'
const CollegeInfo = ({findId}) => {
const[data,setData]=useState([])
const [loading,setLoading]=useState(false)
    useEffect(()=>{

   fetchData()
    },[])
    const fetchData=async(id)=>{
        setLoading(true)
        axios.get(`https://vidyalayabackend.onrender.com/colleges/getOne/${findId}`)
        .then(res=>setData(res.data.data))
        .catch(err=>toast.info(err.message))
        .finally(setLoading(false))
        
        }
    
    return (
        loading?<div>
            <HashLoader size={50} color='#0000ff'/>
        </div>:<div>
            <h3 className='infoHead'>college  information</h3>
            <p className='infoDetils'>{data.details}</p>
        </div>
    );
};

export default CollegeInfo;