import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbarLogo'>
                <img src='/Images/Logo.png' alt='logo' />
            </div>
            <ul className='navbarUl'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;