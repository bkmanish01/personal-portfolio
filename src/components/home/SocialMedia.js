import React from 'react';
import '../styles/home.css';


const socialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/manish-bishowkarma-28620524b" className="social-media-icon" target="blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/bk_manish92" className="social-media-icon" target="blank">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.whatsapp.com/" className="social-media-icon" target="blank">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.github.com/bkmanish01" className="social-media-icon" target="blank">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    );
};

export default socialMedia;

