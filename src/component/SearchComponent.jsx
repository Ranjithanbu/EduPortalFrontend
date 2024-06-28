import React, { Fragment, useEffect, useRef, useState } from 'react';
import Suggestion from './Suggestion';
import axios from 'axios';
const SearchComponent = () => {
const [input,setInput]=useState("")
const inputRef=useRef()
const [suggestion,setSuggestion]=useState([])
// const [college,setCollege]=useState([])
    
useEffect(()=>{
    getSuggestion()

},[input])

const getSuggestion=async()=>{
let college=await axios.get('https://vidyalayabackend.onrender.com/colleges/getAllData').then(res=>(res.data.data))

  if(input.length>1){
    setSuggestion(college.filter((item)=>item.college.toLowerCase().includes(input.toLowerCase())))
}
else(setSuggestion([]))
}

return (
        <div className='width-100'>

            <div className='searchBar border'>

                <input ref={inputRef} type="search" name="" id="" placeholder='search colleges, courses...' onChange={(e)=>{setInput(e.target.value)}} />
                <i class="bi bi-search px-2"></i>
            </div>
            <div className='suggesion'>
              <Suggestion inputRef={inputRef} setInput={setInput} suggestion={suggestion}/>
            </div>
        </div>
    );
};

export default SearchComponent;