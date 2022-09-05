import React from 'react';
import '../styles/about.css';
import aboutImage from '../../assets/profile_img_02.jpg';
import Resume from '../../assets/MANISH_BISHOWKARMA_RESUME.pdf';
import Info from './Info';



const About = () => {
    return (
    <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My Introduction</span>

        <div className="about-container container grid">
            <img src={aboutImage} alt="about" className="about-img" />
            <div className="about-content">
                <Info />
                <p className="about-desc">
                    I am a Frontend Developer with hands-on experience in all phases of the Software Development 
                    Life Cycle including requirement gathering, analysis, coding, testing, integration, and documentation. 
                    Excellent focus, communication, and ability to learn rapidly. Excels working in team environment, proactively 
                    review and test own work / troubleshoot and debug code, and ensure the solution are tested, extensible, maintainable, 
                    secure and perform well. Passionate about the craft of programming, Strong critical analysis and problem solving, 
                    and using various tools to develop reliable and maintainable software. I have Completed AAS degree in Computer Information System 
                    from Front Range Community College, Westmnister, Colorado. I have spent 1+ years to learn new technologies and completed 10+ Projects
                    after graduate from college. Also, I actively participate in open source contribution program Hacktoberfest every year.
                </p>
                <a download="" href={Resume} className="button button-flex">
                    Download Resume&nbsp;&nbsp;
                    <i className="fa fa-file-pdf"></i>
                </a>
            </div>
        </div>
    </section>
    );
};

export default About;
