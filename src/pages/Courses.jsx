import React,{ useEffect,useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
const Courses = ({findId}) => {
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
            <h3 className='courseInfoHead'>courses</h3>
            <p className='infoDetils'>{data.college}</p>
             
            {data.courses?Object.keys(data.courses).map((item,index)=>{
                return(
                    <div key={index}>
                    <p className='branch'>{item}</p>
                    <ul>
                        {data.courses[item].map((secItem,indexx)=>{
                            return(
                                <li key={indexx}>{secItem}</li>
                            )
                        })}
                    </ul>
                    </div>
                )
            }):null } 
        </div>

    );
};

  

export default Courses;

/*{


}*/