import React from 'react';

const Frontend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Frontend Development</h3>
            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-info">
                        <i className="fa-brands fa-html5 skills-icon"></i>
                        <h3 className="skills-name">HTML</h3>
                        <p className="skills-level">Advanced</p>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-css3-alt skills-icon"></i>
                        <h3 className="skills-name">CSS</h3>
                        <span className="skills-level">Intermediate</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-square-js skills-icon"></i>
                        <h3 className="skills-name">JavaScript</h3>
                        <span className="skills-level">Experienced</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-bootstrap skills-icon"></i>
                        <h3 className="skills-name">Bootstrap</h3>
                        <span className="skills-level">Experienced</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa-brands fa-react skills-icon"></i>
                        <h3 className="skills-name">React</h3>
                        <span className="skills-level">Experienced</span>
                    </div>
                    <div className="skills-info">
                        <i className="fa fa-code skills-icon"></i>
                        <h3 className="skills-name">jQuery</h3>
                        <span className="skills-level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;

