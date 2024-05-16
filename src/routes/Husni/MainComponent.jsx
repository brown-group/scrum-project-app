import React from 'react';
import './Husni.css';
import DarkModeToggle from "./DarkMood"
import image from "./AvatarsImg.jpg"

export default function MainComponent() {

    return (
        <div id='husni'>
            <div id="loader"></div>
            <div className="husni-header">
                <a href="#home" className="husni-logo">Your <span>Name</span>.</a>
                {/* <div className="bx bx-menu" id="menu-icon"></div> */}
                <ul className="husni-navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <DarkModeToggle/>
                    {/* <div className="husni-bx bx-moon" id="darkmode"></div> */}
                </ul>
            </div>
        <section className="husni-home" id="home">
                <div className="husni-social">
                    <a href="https://github.com"><i className="bx bxl-github"></i></a>
                    <a href="https://www.instagram.com"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
                </div>
                <div className="husni-home-img">
                    <img alt="Your Name" src={image} />
                </div>
                <div className="husni-home-text">
                    <span>Hello, I'm</span>
                    <h1>Your Name</h1>
                    <h2>Professional</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum est nisl, id viverra ex consectetur sed. Vivamus condimentum mauris in urna tempor aliquam. Vestibulum vitae bibendum ante, quis eleifend elit, lacinia tincidunt erat.</p>
                    <a href="./cv-template.pdf" download="./cv-template.pdf" className="husni-btn">Download CV</a>
                </div>
            </section>
            <section className="husni-about" id="about">
                <div className="husni-heading">
                    <h2>About Me</h2>
                    <span>Introduction</span>
                </div>
                <div className="husni-about-container">
                    <div className="husni-about-img">
                        <img alt="Your Name" src={image} />
                    </div>
                    <div className="husni-about-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum est nisl, id viverra ex consectetur sed. Vivamus condimentum mauris in urna tempor aliquam. Vestibulum vitae bibendum ante, quis eleifend elit.</p>
                        <div className="husni-information">
                            <div className="husni-info-box"><i className="bx bx-laptop"></i> <span>Your Name.</span></div>
                            <div className="husni-info-box"><i className="bx bxs-phone"></i> <span>+123456789</span></div>
                            <div className="husni-info-box"><i className="bx bxs-envelope"></i> <span><a href="mailto:husnihhamdan@gmail.com">youremail@example.com</a></span></div>
                        </div>
                        <a href="./cv-template.pdf" download="./cv-template.pdf" className="husni-btn">Download CV</a>
                    </div>
                    <div></div>
                </div>
            </section>
            <section className="husni-skills" id="skills">
                <div className="husni-heading">
                    <h2>Skills</h2>
                    <span>My Skills</span>
                </div>
                <div className="husni-skills-container">
                    <div className="husni-bars">
                        <div className="husni-bars-box placeholder-wave">
                            <h3>Skill 1</h3>
                            <span>94%</span>
                            <div className="husni-light-bar"></div>
                            <div className="husni-percent-bar skill1-bar"></div>
                        </div>
                        <div className="husni-bars-box placeholder-wave">
                            <h3>Skill 2</h3>
                            <span>84%</span>
                            <div className="husni-light-bar"></div>
                            <div className="husni-percent-bar skill2-bar"></div>
                        </div>
                        <div className="husni-bars-box placeholder-wave">
                            <h3>Skill 3</h3>
                            <span>73%</span>
                            <div className="husni-light-bar"></div>
                            <div className="husni-percent-bar skill3-bar"></div>
                        </div>
                        <div className="husni-bars-box placeholder-wave">
                            <h3>Skill 4</h3>
                            <span>80%</span>
                            <div className="husni-light-bar"></div>
                            <div className="husni-percent-bar skill4-bar"></div>
                        </div>
                    </div>
                    <div className="husni-skills-img">
                        <img alt=" Your Name" src={image} />
                    </div>
                </div>
            </section>
            <section className="husni-services" id="services">
                <div className="husni-heading">
                    <h2>Services</h2>
                    <span>My Services</span>
                </div>
                <div className="husni-services-content">
                    <div className="husni-services-box">
                    <i className="bx bx-wrench"></i>
                        <h3>Service 1</h3>
                        <a href="#services">Learn More</a>
                    </div>
                    <div className="husni-services-box">
                    <i className="bx bx-wrench"></i>
                        <h3>Service 2</h3>
                        <a href="#services">Learn More</a>
                    </div>
                    <div className="husni-services-box">
                        <i className="bx bx-wrench"></i>
                        <h3>Service 3</h3>
                        <a href="#services">Learn More</a>
                    </div>
                    <div className="husni-services-box">
                    <i className="bx bx-wrench"></i>
                        <h3>Service 4</h3>
                        <a href="#services">Learn More</a>
                    </div>
                </div>
            </section>
            <section className="husni-contact" id="contact">
                <div className="husni-heading">
                    <h2>Contact</h2>
                    <span>Connect With Me</span>
                </div>
                <div className="husni-contact-form">
                    <form className="husni-form" action="#">
                        <input placeholder="Your Name" required />
                        <input placeholder="Your Email" required name="" type="email" />
                        <textarea cols="30" name="" placeholder="Write Message Here..." required rows="10"></textarea>
                        <input type="submit" className="husni-contact-button" value="Send" />
                    </form>
                </div>
            </section>
            <div className="husni-footer">
                <h2>Follow Me</h2>
                <div className="husni-footer-social">
                    <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.twitter.com"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.youtube.com"><i className="bx bxl-youtube"></i></a>
                </div>
            </div>
            <div className="husni-copyright">©Your Name. All Right Reserved.</div>

            
        </div>
    );
}