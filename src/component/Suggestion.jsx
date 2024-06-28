import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const Suggestion = ({suggestion,inputRef,setInput}) => {
const navigate=useNavigate()    
const handleClick=(id)=>{
    console.log('clicked',id);
    inputRef.current.value=''

    setInput('')
navigate(`/fullDetails/${id}`)
}    
    return (
        <ul>
        {suggestion?.map((item)=><li key={item.college}  onClick={()=>handleClick(item._id)}>{item.college}</li>)}
        </ul>
    );
};

export default Suggestion;