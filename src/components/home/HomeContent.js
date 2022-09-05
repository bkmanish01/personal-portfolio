import React from 'react';
import '../styles/home.css';


const HomeContent = () => {
    return (
        <div className="data-content">
            <p className="greet">Hello, I'm</p>
            <h1 className="content-title">
                Manish Bishowkarma
            </h1>
            <h3 className="content-subtitle">Frontend Developer</h3>
            <p className="content-desc">
                Frontend Developer with hands-on experience in all phases of the Software Development Life Cycle 
                including requirement gathering, analysis, coding, testing, integration, and documentation. 
            </p>
            <a href="#contact" className="button button-flex">
                Contact Me &nbsp;<i className="fa fa-paper-plane"></i>
            </a>
        </div>
    );
};

export default HomeContent;
