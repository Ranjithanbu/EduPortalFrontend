import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const PrivateBtn = () => {
 
    const [arts,setArts]=useState(false)
    const [engineering,setEngineering]=useState(false)
    const[medical,setMedical]=useState(false)    
    const [bsc,setBsc]=useState(false)
    const [ba,setBa]=useState(false)
    const [be,setBe]=useState(false)
    const [btech,setBtech]=useState(false)
    const [bcom,setBcom]=useState(false)
    const[bca,setBca]=useState(false)    
    const artsCourses=["english","economics","history","business economics","coporate economics","arabic","drawing and painting","criminology and police administration","tamil","philosophy","defence & strategic studies","travel and tourism ","bharatanatyam","journalism","music","music vocal","western music","natya"]
    const bcomCourses=["Bachelor of Commerce","Financial Accounting","Banking Management","Banking", "Computer Applications","Corporate Secretaryship"]
    const bscCourses=["computer science","physics","chemistry","mathematics","psychology","bio chemistry","fashion design","aviation","visual communication","biotechnology","microbiology","multimedia","animation","game designing","hotel and catering management","zoology","plant biology","plant biotrchnology","electronic media"]
    const bcaCourses=["data science","hons","hearing impaired","cloud technology & information security"]
    const engiCourses=["Computer Science and Engineering","Information Technology","Information Security Digital Forensics","Electronics and Communication Engineering",
    "Electronics and Instrumentation Engineering","Electrical and Electronics Engineering","Mechanical Engineering","Chemical Engineering",
    " Civil Engineering","Bio-Technology","Bio-Medical Instrumentation","Aeronautical Engineering" ]
    const medicalCourses=[
        "mbbs","bds","Anaesthesia Technology",
        " Cardiac Technology",
        " Medical Laboratory Technology",
        " Radiology and Imaging Technology",
        " Renal Dialysis Technology",
        " Perfusion Technology",
        " Cath Lab Technology",
        " Blood Banking Medical Laboratory Technology",
        " Dermato-Cosmetology",
        " Emergency and Trauma Care Technology",
        " Respiratory Care Technology",
        
        " Neuroscience Technology",
        " Nursing",
        " Physician Assistant",
          
          "Medical Sociology",
          "Operation Theatre Technology",
          " Cardio Pulmonary and Perfusion Care Technology",
          " Dialysis Technology",
          " Medical Lab Technology",
          "Bachelor of Optometry"
       
    ]
    const handleClickFirstBtn = (e) => {
            e.preventDefault()
    
    if(e.currentTarget.name=='arts'){
        setArts(!arts)
    }
    
    else if(e.currentTarget.name=='engineering'){
    
    setEngineering(!engineering)
    
    }
    
    else if(e.currentTarget.name=='medical'){
    
        setMedical(!medical)
        }
        else if(e.currentTarget.name=='bsc'){ 
    
    setBsc(!bsc)
        }
    else if(e.currentTarget.name=='ba'){ 
    
            setBa(!ba)
                }
                
    else if(e.currentTarget.name=='bcom'){ 
    
                    setBcom(!bcom)
                
                
    }
    else if(e.currentTarget.name=='bca'){ 
    
        setBca(!bca)
    
    
    }
            
    else if(e.currentTarget.name=='be'){ 
    
        setBe(!be)
    
    
    }

    else if(e.currentTarget.name=='btech'){ 
    
        setBtech(!btech)
    
    
    }
    
                             
      
            }
    
    
    
 
 
 
 
    return (
         
                                    <div className='shortWidth'>
                        <button className='govBtn'>
                            Private Colleges
                        </button>
                        <ul className='main-drop'>   
                            <li>


                                <button className='mainBtn' name='arts' onClick={(e)=>handleClickFirstBtn(e)}>Arts & Science <span className='float-end me-2 fw-bold'>{arts?"-":"+"}</span></button>
                                {arts&&
                                <div className='nestedList'>
                                    
                                    <div>
                                    <button name='bsc' onClick={(e)=>handleClickFirstBtn(e)} >B.Sc <span className='float-end me-2'>{bsc?"-":"+"}</span></button>
                                   {bsc&&<ul>{bscCourses.map((item,index)=><li><Link to={`/card/${item}/private`} key={index}>{item}</Link></li>)}</ul>}
                                   
                                    </div>
                                    
                                    <div>
                                   <button name='ba' onClick={(e)=>handleClickFirstBtn(e)}>B.A <span className='float-end me-2'>{ba?"-":"+"}</span></button>
                                   {ba&&<ul>{artsCourses.map((item,index)=><li><Link to={`/card/${item}/private`} key={index}>{item}</Link></li>)}</ul>}
                                   
                                   </div>
                                   <div>
                                   <button name='bcom' onClick={(e)=>handleClickFirstBtn(e)}>B.Com <span className='float-end me-2'>{bcom?"-":"+"}</span></button>
                                    {bcom&&<ul>{bcomCourses.map((item,index)=><li><Link to={`/card/${item}/private`} key={index}>{item}</Link></li>)}</ul>}

                                   </div>
                                   <div>
                                   <button name='bca' onClick={(e)=>handleClickFirstBtn(e)}>BCA <span className='float-end me-2'>{bca?"-":"+"}</span></button>
                                    {bca&&<ul>{bcaCourses.map((item,index)=><li><Link to={`/card/${item}/private`} key={index}>{item}</Link></li>)}</ul>}

                                   </div>
                                </div>}


                            </li>
                            <li className='nestedList'>
                                <button className='mainBtn' name='engineering' onClick={(e)=>handleClickFirstBtn(e)}>Engineering <span className='float-end me-2'>{engineering?"-":"+"}</span></button>
                                {engineering&&
                                <div className='nestedList'>
                                    
                                    <div>
                                    <button name='be' onClick={(e)=>handleClickFirstBtn(e)} >BE<span className='float-end me-2'>{be?"-":"+"}</span></button>
                                   {be&&<ul>{engiCourses.map((item,index)=><li><Link to={`/card/${item}/government`} key={index}>{item}</Link></li>)}</ul>}
                                   
                                    </div>
                                    
                                    <div>
                                   <button name='ba' onClick={(e)=>handleClickFirstBtn(e)}>B.Tech<span className='float-end me-2'>{btech?"-":"+"}</span></button>
                                   {btech&&<ul>{artsCourses.map((item,index)=><li><Link to={`/card/${item}/government`} key={index}>{item}</Link></li>)}</ul>}
                                   
                                   </div>
                                    
                                </div>}
                                
                                
                                
                                
                                </li>
                            <li className='nestedList'>
                                <button className='mainBtn' name='medical' onClick={(e)=>handleClickFirstBtn(e)}>Medical <span className='float-end me-2'>{medical?"-":"+"}</span></button>
                               {medical&&<ul>
{medicalCourses.map((item,index)=><li><Link to={`/card/${item}/private`} key={index}>{item}</Link></li>)}
                               </ul>
                               
                               }
                            </li>

                        </ul>
                        </div>
                    
        
    );
};

export default PrivateBtn; 