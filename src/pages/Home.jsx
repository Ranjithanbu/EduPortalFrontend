import React, { useState } from 'react';
import '../css/home.css'
import { Link, useNavigate } from 'react-router-dom';
import PrivateBtn from '../component/PrivateBtn';
const Home = () => {
const navigate = useNavigate()
const [arts,setArts]=useState(false)
const [engineering,setEngineering]=useState(false)
const[medical,setMedical]=useState(false)    
const [bsc,setBsc]=useState(false)
const [ba,setBa]=useState(false)
const [bcom,setBcom]=useState(false)
const [be,setBe]=useState(false)
const[bca,setBca]=useState(false)    
const artsCourses=["english","economics","history","business economics","coporate economics","drawing and painting","criminology and police administration","tamil","philosophy","journalism","music"]
const bcomCourses=["Bachelor of Commerce","accounting and finance","Corporate Secretaryship", "Computer Applications"]
const bscCourses=["computer science","physics","chemistry","mathematics","psychology","bio chemistry","visual communication","biotechnology","zoology","plant biology"]
const bcaCourses=["bca"]
const engiCourses=["Computer Science and Engineering","Information Technology","Information Security Digital Forensics","Electronics and Communication Engineering",
"Electronics and Instrumentation Engineering","Electrical and Electronics Engineering","Mechanical Engineering","Chemical Engineering",
" Civil Engineering","Bio-Technology","Bio-Medical Instrumentation","Aeronautical Engineering" ]
const medicalCourses=["mbbs","bds"]
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
     
                      
  
        }

 

    return (
        <div>

            <div className='home'>

                <div className='para'>

                <p className='homePara'><span className='lg-text'>Your</span> journey to finding the perfect college starts here.</p>
                </div>
                <div className='button'>
                    <div id='btn1' className=''>
                        <div className='shortWidth'>
                        <button className='govBtn'>
                            Goverment Colleges
                        </button>
                        <ul className='main-drop'>   
                            <li>


                                <button className='mainBtn' name='arts' onClick={(e)=>handleClickFirstBtn(e)}>Arts & Science <span className='float-end me-2 fw-bold'>{arts?"-":"+"}</span></button>
                                {arts&&
                                <div className='nestedList'>
                                    
                                    <div>
                                    <button name='bsc' onClick={(e)=>handleClickFirstBtn(e)} >B.Sc <span className='float-end me-2'>{bsc?"-":"+"}</span></button>
                                   {bsc&&<ul>{bscCourses.map((item,index)=><li><Link to={`/card/${item}/government/bsc`} key={index}>{item}</Link></li>)}</ul>}
                                   
                                    </div>
                                    
                                    <div>
                                   <button name='ba' onClick={(e)=>handleClickFirstBtn(e)}>B.A <span className='float-end me-2'>{ba?"-":"+"}</span></button>
                                   {ba&&<ul>{artsCourses.map((item,index)=><li><Link to={`/card/${item}/government/ba`} key={index}>{item}</Link></li>)}</ul>}
                                   
                                   </div>
                                   <div>
                                   <button name='bcom' onClick={(e)=>handleClickFirstBtn(e)}>B.Com <span className='float-end me-2'>{bcom?"-":"+"}</span></button>
                                    {bcom&&<ul>{bcomCourses.map((item,index)=><li><Link to={`/card/${item}/government/bcom`} key={index}>{item}</Link></li>)}</ul>}

                                   </div>
                                   <div>
                                   <button name='bca' onClick={(e)=>handleClickFirstBtn(e)}>BCA <span className='float-end me-2'>{bca?"-":"+"}</span></button>
                                    {bca&&<ul>{bcaCourses.map((item,index)=><li><Link to={`/card/${item}/government/bca/bca`} key={index}>{item}</Link></li>)}</ul>}

                                   </div>
                                </div>}


                            </li>
                            <li className='nestedList'>
                                <button className='mainBtn' name='engineering' onClick={(e)=>handleClickFirstBtn(e)}>Engineering<span className='float-end me-2'>{engineering?"-":"+"}</span></button>
                                {engineering&&
                                <div>
                                   <button name='be' onClick={(e)=>handleClickFirstBtn(e)}>BE & B.Tech<span className='float-end me-2'>{be?"-":"+"}</span></button>
                                    {be&&<ul>{engiCourses.map((item,index)=><li><Link to={`/card/${item}/government/be`} key={index}>{item}</Link></li>)}</ul>}

                                   </div>}
                                
                                
                                
                                </li>

                            <li className='nestedList'>
                                <button className='mainBtn' name='medical' onClick={(e)=>handleClickFirstBtn(e)}>Medical <span className='float-end me-2'>{medical?"-":"+"}</span></button>
                               {medical&&<ul>
{medicalCourses.map((item,index)=><li><Link to={`/card/${item}/government/medical`} key={index}>{item}</Link></li>)}
                               </ul>
                               
                               }
                            </li>

                        </ul>
                        </div>
                    </div>
                    <div id='btn2' className=''>
                    <PrivateBtn/>
                    </div>

                </div>

            </div>
            {/* <div className='leaves'>
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    <img src="https://clipart-library.com/img/1896680.png" alt="img" />
    </div> */}
        </div>
    );
};

export default Home;

