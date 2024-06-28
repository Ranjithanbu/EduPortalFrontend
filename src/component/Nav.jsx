import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/nav.css'
import SearchComponent from './SearchComponent';
import {toast} from 'react-toastify'
const Nav = ({user,setUser}) => {

    return (
        <div id='mainNav'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand " to={'/'}><img id='mainIcon' className='w-20' src="/icons/main.png" alt="icon" /></Link>
                    <Link className='logoName' to={"/"} >Ankika</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <SearchComponent/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="item">
                                <NavLink className={'menu-items'} to={'/'}>Home</NavLink>
                            </li>
                            <li className="item">
                                <NavLink className="menu-items" to={"/about"}>About</NavLink>
                            </li>

                           
                            {user?<li className='item'><Link className='menu-items' onClick={()=>{setUser('')
                        toast.info('logout success')
                        }}>Logout</Link></li>:<li id='login' className="item">
                                <NavLink className="menu-items" to={'/login'}>Login</NavLink>

                                <div id='displayElement' className='afterhover'>

                                    <Link to={'/login'}>Login</Link>
                                    <Link to={'/signUp'}>SignUp</Link>

                                </div>
                            </li>}
                            <li className="item">
                                <NavLink className="menu-items" >
                                    <img className='rounded-pill' src='https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=sph' width={35 }/>
                                {user?<p className='userName me-2'>Hi {user}</p>:null}
                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;