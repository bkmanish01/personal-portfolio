import React from 'react';
import '../styles/projects.css';
import ecommerce from '../../assets/ecommerce_project.jpg';
import resturant from '../../assets/restaurant_project.jpg';
import movies from '../../assets/movies_project.jpg';
import crud from '../../assets/crud_project.png';

const data = [
    {
        id: 1,
        image: resturant,
        title: 'Mo:Mo Restaurant Website',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nisi?',
        github: 'https://github.com/bkmanish01/mo-mo-restaurant-website.git',
        demo: 'https://bkmanish01.github.io/mo-mo-restaurant-website/',
        stack: ['HTML', 'CSS', 'JavaScript', 'Font Awesome', 'Google Fonts', 'Google Map']
    },
    {
        id: 2,
        image: ecommerce,
        title: 'E-commerce Web Application',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nisi?',
        github: 'https://github.com/bkmanish01/e-commerce-application.git',
        demo: 'https://bkmanish01.github.io/e-commerce-application/',
        stack: ['React', 'Redux', 'Bootstrap', 'Font Awesome', 'Google Fonts', 'Fake Store API']
    },
    {
        id: 3,
        image: movies,
        title: 'Movie Store Application',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nisi?',
        github: 'https://github.com/bkmanish01/react-redux-movies-app.git',
        demo: 'https://bkmanish01.github.io/react-redux-movies-app/',
        stack: ['React', 'Redux-Toolkit', 'Ant Design', 'Google Fonts', 'Styled-Component', 'OMDB API']
    },
    {
        id: 4,
        image: crud,
        title: 'Contact Manager (CRUD) App',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nisi?',
        github: 'https://github.com/bkmanish01/redux-toolkit-crud-app.git',
        demo: 'https://bkmanish01.github.io/redux-toolkit-crud-app/',
        stack: ['React', 'Redux-Toolkit', 'Ant Design', 'Google Fonts']
    },
]

const Projects = () => {
    return (
        <section className="portfolio section" id="projects">
            <h2 className="section-title">Projects</h2>
            <span className="section-subtitle">My Recent Work</span>
            <div className="portfolio-container container grid">
                {
                    data.map(({id, image, title, desc, github, demo, stack}) => {
                        return (
                            <article className="portfolio-item" key={id}>
                                <img src={image} alt="" className="portfolio-item-img" />
                                <h3 className="portfolio-item-title">{title}</h3>
                                <p>{desc}</p>
                                <div className="stack">
                                    <h1>Stack</h1>
                                    <div className="stack-collection">
                                        {stack.map((tech, index) => <p key={index}>{tech}</p>)}
                                    </div>
                                </div>
                                <div className="project-button">
                                <a href={github} className="button code">Code</a>
                                    <a href={demo} className="button demo">Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
      </section>
    );
};

export default Projects;
