import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div>WebSeries Application</div>
            <a href="https://www.youtube.com/watch?v=2kL28Qyw9-0" target="_blank" rel="noreferrer">
            <div>@Took Reference of Dipesh Maliva</div>
            </a>
        </div>
    );
};

export default Footer;