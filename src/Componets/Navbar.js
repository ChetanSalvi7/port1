import React from 'react'
import Logo from './Image/C logo.png'


const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="navbar-list">
                        <div className="navbar-brand">
                            <a href="#" className='logo'>
                                <img src={Logo} width={60} height={80} alt="logo" />
                                <span>Jack</span>
                            </a>
                            <span>Web Developer</span>
                        </div>
                        <div className="navbar-menu">
                            <a href="#">About</a>
                            <a href="#">Skills</a>
                            <a href="#">Work</a>
                            <a href="#">Contact</a>
                        </div>
                        <ul className="navbar-social">
                            <li><a href="#"><i className="fa-brands fa-square-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar