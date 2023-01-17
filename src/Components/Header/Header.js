import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../../Gallery/HomePage.png';
import "./Header.scss"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>Best Web Series Platform</div>
            
            <div className='homepage-image'>
                <Link to="/">
            <img src = {HomePage} alt="homepage"></img>
            </Link>
            </div>
        </div>
    );
};

export default Header;