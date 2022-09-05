import React from 'react';
import { useState } from 'react';
import '../styles/header.css';



const Header = () => {
    const [toogle, setToogle] = useState(false);

    const click = () => setToogle(!toogle);

    return (
       <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Manish B.</a>

                <div className={toogle ? "nav-menu show-menu":"nav-menu"}>
                    <ul className={toogle ? "nav-list grid active" : "nav-list grid"}>
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={click}>
                                <i className="fa fa-house nav-icon" />Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={click}>
                                <i className="fa fa-user nav-icon" />About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={click}>
                                <i className="fa fa-image nav-icon" />Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={click}>
                                <i className="fa fa-briefcase nav-icon" />Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={click}>
                                <i className="fa fa-paper-plane nav-icon" />Contact
                            </a>
                        </li>
                    </ul>
                    {/* <i className="fa fa-times nav-close"></i> */}
                </div>
                <div className="nav-toggle" onClick={click}>
                    <i className={toogle ? "fa fa-times nav-close" : "fa fa-bars nav-close"}></i>
                </div>
            </nav>
       </header>
    );
};

export default Header;
