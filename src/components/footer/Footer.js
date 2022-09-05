import React from 'react';
import '../styles/footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Manish</h1>
                <ul className="footer-list">
                    <li>
                        <a href="#home" className="footer-link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer-link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer-link">Contact</a>
                    </li>
                </ul>

                <div className="footer-social-media">
                    <a href="https://www.facebook.com/" className="social-media-icon" target="blank">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" className="social-media-icon" target="blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com/" className="social-media-icon" target="blank">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/" className="social-media-icon" target="blank">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                <span className="footer-copyright">
                    Copyrights &copy; Manish Bishowkarma | All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
