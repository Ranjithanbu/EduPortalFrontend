import React from 'react';
import {Link} from 'react-router-dom'
const FullDetailsBtn = () => {
    return (
        <div className='btn-container'>
            <ul>
                <li>
                    <Link to={'collegeInfo'}>College Info</Link>
                </li>
                <li>
                    <Link to={'courses'}>Courses</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default FullDetailsBtn;
