import React, { useEffect, useState } from 'react';
import {useParams,Outlet} from 'react-router-dom'
import '../css/fullDetails.css'
import FullDetailsBtn from '../component/FullDetailsBtn';
import  axios  from 'axios';
import {toast} from 'react-toastify'
import {HashLoader} from 'react-spinners'
import Footer from '../component/Footer';

const FullDetails = ({setFindId}) => {
 
const[currentClg,setCurrentClg]=useState([])
const [loading,setLoading]=useState(false)
 const {id}=useParams()
useEffect(()=>{

  fetchData(id) 
  
},[])
 
const fetchData=async(id)=>{
setLoading(true)
axios.get(`https://vidyalayabackend.onrender.com/colleges/getOne/${id}`)
.then(res=>setCurrentClg(res.data.data))
.catch(err=>toast.info(err.message))
.finally(setLoading(false))

}
 console.log(currentClg);
 return (
  <>
      {loading?<div className='spinner'><HashLoader/></div>:
      <><div className='f-container'>
          <div className='e-container'>
          <div className='imgContainer'>
               <img src={currentClg?.image} alt="image" />
          </div>
          <div className='ms-2'>
            <h2>{currentClg?.college}</h2>
          </div>
          <div className='ms-2'>
          <a className='text-decoration-none' href={`https://www.google.com/maps/search/${currentClg?.college}/@13.0593168,80.2800977,18z/data=!3m1!4b1?entry=ttu`}><i className='bi bi-geo-alt me-1 '></i>{currentClg?.location}</a>
          </div>
            <div className='detailNav'>
               <FullDetailsBtn collegeId={currentClg._id}/>                
            </div>
            <div>
                
            </div>
           
          </div>
          <Outlet/>
        </div>
        <Footer/>
        </>
        }
        </>
    );
};

export default FullDetails;