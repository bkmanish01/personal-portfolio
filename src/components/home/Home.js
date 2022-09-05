import React from 'react';
import '../styles/home.css';
import HomeContent from './HomeContent';
import SocialMedia from './SocialMedia';




const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <SocialMedia />
                    <div className="home-img"></div>
                    <HomeContent />
                </div>
            </div>
        </section>
    );
};

export default Home;
