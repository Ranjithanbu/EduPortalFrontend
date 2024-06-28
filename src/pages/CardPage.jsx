import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../css/cardPage.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {HashLoader} from 'react-spinners'
const CardPage = () => {
  const [deepFilter,setDeepFilter]=useState([])  
  const [loading,setLoading]=useState(false)
  const {category,type}=useParams()
    console.log(type);
  let filterType=category.split(" ").join("").toLowerCase()
  console.log(filterType)
  
  useEffect(()=>{
    fetchData()
    
     },[]) 
    
    const fetchData=async()=>{
    setLoading(true)
    let college=await axios.get('https://vidyalayabackend.onrender.com/colleges/getAllData').then(res=>(res.data.data))
    let filtredCollege=college.filter((item,index)=>item.collegeType.toLowerCase()==type)

    setDeepFilter(filtredCollege.filter((item,index)=>{
    let keyValues=Object.values(item.courses).flat(Infinity)
    
    let check;
    for (let i=0; i<keyValues.length; i++){
    
    if(keyValues[i].split(" ").join("").toLowerCase().includes(filterType)){
    check=true
    }
    
    }
    if(check){
    return item
    }
    }))
  setLoading(false)     
    
    }



console.log(deepFilter)
    return (
        <div>
            
           {loading?<div className='spinner'>

            <HashLoader color="#0000ff" size={100} className='text-center'/>
           </div>: deepFilter.length>0?deepFilter.map((college,index)=>{
                return(
                    <div key={index} className='card-container'>
<div className='img-holder'>
<img src={Array.isArray(college.image)?college.image[0]:college.image} alt={college.college} />

</div>
<div className='content-holder'>
<div>
<h2 className='text-white'>{college.college}</h2>
<a className='location' href={`https://www.google.com/maps/search/${college.college}/@13.0593168,80.2800977,18z/data=!3m1!4b1?entry=ttu`}><i className='bi bi-geo-alt me-1 '></i>{college.location}</a>
<p className='cardKeys mt-1'>{college.collegeType}</p>

</div>
<p className='detailsPara'><span className='cardKeys'>Details : </span>{college.details?.split(" ").map((para,index)=>index<40?para:'').join(" ")}<span>...</span></p>
<p className='text-white text-semibold'><span className='cardKeys'>Courses : </span>{Object.keys(college.courses).map((course)=>course.toUpperCase()).join(",")}</p>
<p className='text-white'><span className='cardKeys'>Website :</span> <a href={Array.isArray(college.officialWebsite)?college.officialWebsite[0]:college.officialWebsite} className='text-white'>{Array.isArray(college.officialWebsite)?college.officialWebsite[0]:college.officialWebsite}</a></p>
<Link className='moreBtn' to={`/fullDetails/${college._id}`}>Click here For more details </Link>
</div>                </div>
                )
            }):<div className='text-center mt-5'>
              
              <h1>college illai</h1>
              </div>



           }
            
                    </div>
    );
};

export default CardPage;

// .replace(college.collegeType[0],college.collegeType[0].toUpperCase())
// useEffect(()=>{
//   fetchData()
  
//    },[]) 
  
//   const fetchData=async()=>{
  
//   await axios.get('http://localhost:4000/colleges/getAllData').then(res=>console.log(res.data.data))
  
  
//   }