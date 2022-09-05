import React from 'react';

const Backend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Backend Development</h3>
            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-info">
                        <i className="fa-solid fa-database skills-icon"></i>
                        <h3 className="skills-name">SQL</h3>
                        <span className="skills-level">Advanced</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-node skills-icon"></i>
                        <h3 className="skills-name">Node JS</h3>
                        <span className="skills-level">Intermediate</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-php skills-icon"></i>
                        <h3 className="skills-name">PHP</h3>
                        <span className="skills-level">Experienced</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-solid fa-leaf skills-icon"></i>
                        <h3 className="skills-name">MongoDB</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa fa-database skills-icon"></i>
                        <h3 className="skills-name">MySQL</h3>
                        <span className="skills-level">Intermediate</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-python skills-icon"></i>
                        <h3 className="skills-name">Python</h3>
                        <span className="skills-level">Experienced</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
