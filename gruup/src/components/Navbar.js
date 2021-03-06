import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './SignUpButton';
function Navbar() {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

useEffect(() => {
    showButton();
}, [])

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                         <img src = "1.png" alt = "Gruup Logo"></img>
                        Gruup
               </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/howitworks' className='nav-links' onClick={closeMobileMenu}>
                                How does it work
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Log in
                            </Link>
                        </li>
                    
                    </ul>
                    
                    
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar