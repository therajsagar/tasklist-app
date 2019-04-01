import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className='navbar'>
        <ul id='navbar'>
            <li><a href="#intro">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#connect">Connect</a></li>
        </ul>
    </nav>
);

export default Navbar;