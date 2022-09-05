import React from 'react';
import '../styles/contact.css';


const Contact = () => {
    return (
       <section className="contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <span className="section-subtitle">Get in touch</span>
            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 className="contact-title">Connect with me</h3>
                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="fa-solid fa-envelope contact-icon"></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">hmcmanish01@gmail.com</span>
                            <div className="send-message">
                                <a href="https://mail.google.com/" className="contact-button">Send a message</a>
                            </div>
                        </div>
                        <div className="contact-card">
                            <i className="fa-brands fa-whatsapp contact-icon"></i>
                            <h3 className="contact-card-title">Whatsapp</h3>
                            <span className="contact-card-data">970-888-0138</span>
                            <div className="send-message">
                                <a href="https://www.whatsapp.com/" className="contact-button">Send a message</a>
                            </div>
                        </div>
                        <div className="contact-card">
                            <i className="fa-brands fa-facebook-messenger contact-icon"></i>
                            <h3 className="contact-card-title">Messanger</h3>
                            <span className="contact-card-data">/hmc.manish</span>
                            <div className="send-message">
                                <a href="https://www.messenger.com/" className="contact-button">Send a message</a>
                            </div>
                        </div>
                    </div>
                </div>   

                <div className="contact-content">
                    <h3 className="contact-title">Send me a message</h3>
                    <form className="contact-form">
                        <div className="contact-form-field">
                            <input type="text" name="name" className="form-input" placeholder="name"/>
                            <input type="email" name="email" className="form-input" placeholder="email"/>
                            <textarea name="message" cols="30" rows="10" placeholder="message" className="form-text-area" />
                        </div>
                        <button type="button" className="button button-flex">Send Message</button>
                    </form>
                </div>
            </div>
       </section>
    );
};

export default Contact;
