import React from 'react';
import '../styles/skills.css';
import Backend from './Backend';
import Frontend from './Frontend';
import Others from './Others';



const Skills = () => {
    return (
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My Technical Expertise</span>
        <div className="skills-container container grid">
            <Frontend />
            <Backend />
            <Others />
        </div>
      </section>
    );
};

export default Skills;
