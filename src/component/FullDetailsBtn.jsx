import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const FullDetailsBtn = ({collegeId}) => {
    return (
        <div className='btn-container'>
            <ul> 
                <li className='nestBtn'>
                    <NavLink to={`info/${collegeId}`}>College Info</NavLink>
                </li>
                <li>
                    <NavLink to={`courses/${collegeId}`}>Courses</NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default FullDetailsBtn;
