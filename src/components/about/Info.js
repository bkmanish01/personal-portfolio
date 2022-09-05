import React from 'react';

const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <i className="fa-solid fa-code about-icon"></i>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">1+ Year Practice</span>
            </div>
            <div className="about-box">
                <i className="fa-solid fa-briefcase about-icon"></i>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">10+ Projects</span>
            </div>
            <div className="about-box">
                <i className="fa-solid fa-code-merge about-icon"></i>
                <h3 className="about-title">Contribute</h3>
                <span className="about-subtitle">Hacktoberfest 2021</span>
            </div>
        </div>
    );
};

export default Info;
