import React from 'react';
import '../css/footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='top-content'>
                <div className='content-1'>
                    <p>Ankika Education</p>
                    <p>Chennail</p>
                    <p>600001-Guindy</p>
                </div>
                <div className='content-2'>
                    <a href="tel:+911234567890"><span className='bi bi-telephone me-2'></span>+911234567890</a>
                    <a href="tel:+919102345678"><i class="bi bi-chat-right-text me-2"></i>+919102345678</a>
                    <a href="mailto:ankika@gmail.com"><i class="bi bi-envelope-arrow-up me-2"></i>ankika@gmail.com</a>
                </div>
                <div className='content-3'>
                    <button>Contact Us</button>
                </div>

            </div>

            <div className='bottom-content'>
                <div className='socialMedia'>
                    <a href="https://wa.me/918122563303" target='_blank'><i class="bi bi-whatsapp"></i></a>
                    <a href="https://www.instagram.com/" target='_blank'><i class="bi bi-instagram"></i></a>
                    <a href="https://www.facebook.com/" target='_blank'><i class="bi bi-facebook"></i></a>
                    <a href="mailto:skirubanjali@gmail.com" target='_blank'><i class="bi bi-envelope-at-fill"></i></a>
                </div>

                <div className='navContent'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Login</Link>
                </div>
                <div className='fooerLogo'>
                    <img src="/icons/main.png" alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Footer;