import React from 'react';
import './Husni.css';
// import {Test} from './Husni1.js';
// import "./Husni1.js";

export default function MainComponent() {
// document.getElementById("test").addEventListener("click", function(){
//     console.log("test")
// // })
// let header = document.querySelector("header");
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");


// function buttonClick(params) {
//     navbar.classList.toggle("active")
// }
    return (
        <div>
            <div id="loader"></div>
            <div className='header'>
                {/* <button id="test" onClick={() => buttonClick()}>
                    test
                </button> */}
                <a href="#home" className="logo">Husni <span>Hamdan</span>.</a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="bx bx-moon" id="darkmode"></div>
                </ul>
            </div>
            <section className="home" id="home">
                <div className="social">
                    <a href="https://github.com"><i className="bx bxl-github"></i></a>
                    <a href="https://www.instagram.com"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
                </div>
                <div className="home-img">
                    <img alt=" Husni Hamdan" src="src/routes/Husni/PortfolioImage.png" />
                </div>
                <div className="home-text">
                    <span>Hello, I'm</span>
                    <h1>Husni Hamdan</h1>
                    <h2>Full Stack Web/Application Developer</h2>
                    <p>I am a Web/Application developer, I have 3 years of experience in this sector. If you need to build a professional website, you can hire me! Please choose any of my services or plans.</p>
                    <a href="./cv-template.pdf" download="./cv-template.pdf" className="btn">Download CV</a>
                </div>
            </section>
            <section className="about" id="about">
                <div className="heading">
                    <h2>About Me</h2>
                    <span>Introduction</span>
                </div>
                <div className="about-container">
                    <div className="about-img">
                        <img alt="Husni Hamdan" src="src/routes/Husni/PortfolioImage.png" />
                    </div>
                    <div className="about-text">
                        <p>Looking for a web developer to take your online presence to the next level?  Look no further! With a strong passion for creating beautiful, functional websites, I am dedicated to delivering high-quality results that meet your unique needs and requirements. I understand the importance of having a website that not only looks great but is also optimized for search engines and provides a seamless user experience. Whether you're starting from scratch or need to upgrade your existing site, I will work closely with you to bring your vision to life. Let's bring your online goals to reality. Contact me now to get started!</p>
                        <div className="information">
                            <div className="info-box"><i className="bx bx-laptop"></i> <span>Husni Hamdan.</span></div>
                            <div className="info-box"><i className="bx bxs-phone"></i> <span>+4500000000</span></div>
                            <div className="info-box"><i className="bx bxs-envelope"></i> <span><a href="mailto:husnihhamdan@gmail.com">husnihhamdan@gmail.com</a></span></div>
                        </div>
                        <a href="./cv-template.pdf" download="./cv-template.pdf" className="btn">Download CV</a>
                    </div>
                    <div></div>
                </div>
            </section>
            <section className="skills" id="skills">
                <div className="heading">
                    <h2>Skills</h2>
                    <span>My Skills</span>
                </div>
                <div className="skills-container">
                    <div className="bars">
                        <div className="bars-box placeholder-wave">
                            <h3>HTML</h3>
                            <span>94%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar html-bar"></div>
                        </div>
                        <div className="bars-box placeholder-wave">
                            <h3>CSS</h3>
                            <span>84%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar css-bar"></div>
                        </div>
                        <div className="bars-box placeholder-wave">
                            <h3>JavaScript</h3>
                            <span>73%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar js-bar"></div>
                        </div>
                        <div className="bars-box placeholder-wave">
                            <h3>MERN</h3>
                            <span>80%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar react-bar"></div>
                        </div>
                    </div>
                    <div className="skills-img">
                        <img alt=" Husni Hamdan" src="src/routes/Husni/AvatarsImg.jpg" />
                    </div>
                </div>
            </section>
            <section className="services" id="services">
                <div className="heading">
                    <h2>Services</h2>
                    <span>My Services</span>
                </div>
                <div className="services-content">
                    <div className="services-box">
                        <i className="bx bx-code-alt"></i>
                        <h3>Web Development</h3>
                        <a href="https://www.github.com">Learn More</a>
                    </div>
                    <div className="services-box">
                        <i className="bx bx-server"></i>
                        <h3>Backend Development</h3>
                        <a href="https://www.github.com">Learn More</a>
                    </div>
                    <div className="services-box">
                        <i className="bx bxl-android"></i>
                        <h3>App Development</h3>
                        <a href="https://www.github.com">Learn More</a>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="heading">
                    <h2>Contact</h2>
                    <span>Connect With Me</span>
                </div>
                <div className="contact-form">
                    <form action="#">
                        <input placeholder="Your Name" required />
                        <input placeholder="Your Email" required name="" type="email" />
                        <textarea cols="30" name="" placeholder="Write Message Here..." required rows="10"></textarea>
                        <input type="submit" className="contact-button" value="Send" />
                    </form>
                </div>
            </section>
            <div className="footer">
                <h2>Follow Me</h2>
                <div className="footer-social">
                    <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.twitter.com"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.youtube.com"><i className="bx bxl-youtube"></i></a>
                </div>
            </div>
            <div className="copyright">©Husni Hamdan. All Right Reserved.</div>

            {/* <script src='./Husni1'></script> */}

            
        </div>
    )
}