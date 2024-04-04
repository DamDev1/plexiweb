import React from 'react'
import OurworkWrapper from '../assets/Wrapper/OurWork'
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Book from '../Components/Book';

export default function OurWork() {
    return (
        <OurworkWrapper>
            <div className="ourWork">
                <div className="ourWorkHero">
                    <h1>OUR WORK</h1>
                    <p>We've helped 100+ small businesses around the
                        world transform their brand image through
                        award-winning design.</p>

                    <div className="scrollDown">
                        <p>View Work</p>
                        <FaArrowDownLong />
                    </div>
                </div>

                <section id="work-section" >
                    <div className="container">

                        <div className="work-container">
                            <Link to="https://anon-ecommerce1.netlify.app
" className="work">
                                <div className="work-content" data-aos="fade-right">
                                    <span>BRAND REFRESH</span>
                                    <h4>Anon Fashion</h4>
                                    <p>Local / Service Business</p>
                                </div>
                                <div data-aos="fade-left" className="work-image image"></div>
                            </Link>

                            <div className="work-display">
                                <Link to="https://artful-nest.netlify.app" data-aos="fade-up" className="work-2">
                                    <div className="work-image image"></div>
                                    <div className="work-content">
                                        <span>WEB DEVELOPMENT</span>
                                        <h4>Artful Nest</h4>
                                        <p>Local / Service Business</p>
                                    </div>
                                </Link>

                                <Link to="https://metalinks.netlify.app" data-aos="fade-up" className="work-2">
                                    <div className="work-image image"></div>
                                    <div className="work-content">
                                        <span>WEB DEVELOPMENT</span>
                                        <h4>Metalink</h4>
                                        <p>Local / Service Business</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="work-display">
                                <Link to="https://artful-nest.netlify.app" data-aos="fade-up" className="work-2">
                                    <div className="work-image image"></div>
                                    <div className="work-content">
                                        <span>WEB DEVELOPMENT</span>
                                        <h4>Artful Nest</h4>
                                        <p>Local / Service Business</p>
                                    </div>
                                </Link>

                                <Link to="https://metalinks.netlify.app" data-aos="fade-up" className="work-2">
                                    <div className="work-image image"></div>
                                    <div className="work-content">
                                        <span>WEB DEVELOPMENT</span>
                                        <h4>Metalink</h4>
                                        <p>Local / Service Business</p>
                                    </div>
                                </Link>
                            </div>

                            <Link style={{marginTop: 100}} to="https://anon-ecommerce1.netlify.app
" className="work">
                                <div className="work-content" data-aos="fade-right">
                                    <span>BRAND REFRESH</span>
                                    <h4>Anon Fashion</h4>
                                    <p>Local / Service Business</p>
                                </div>
                                <div data-aos="fade-left" className="work-image image"></div>
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="process-section">
                    <div className="container">
                        <div className="head" data-aos="fade-down">
                            <h3>Our Process Is Easy</h3>
                            <Link to='https://calendly.com/plexiwebstudio/30min'>LET'S TALK</Link>
                        </div>

                        <div className="process-step">
                            <div className="step" data-aos="fade-right" data-aos-duration="1000">
                                <span>1</span>
                                <div className="step-content">
                                    <h5>Discover</h5>
                                    <p>We'll unpack everything about your business and industry.</p>
                                </div>
                            </div>

                            <div className="step" data-aos="fade-right" data-aos-duration="3000">
                                <span>2</span>
                                <div className="step-content">
                                    <h5>Design</h5>
                                    <p>
                                        We design and build your new and improved brand and Webflow
                                        website — fast.
                                    </p>
                                </div>
                            </div>

                            <div className="step" data-aos="fade-right" data-aos-duration="5000">
                                <span>3</span>
                                <div className="step-content">
                                    <h5>Launch</h5>
                                    <p>
                                        We test, refine, and go-live with a brand image you can be
                                        proud of and 100% own.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="process-image-container">
                            <div className="image" data-aos="fade-up" data-aos-duration="1000"></div>
                            <div className="image" data-aos="fade-up" data-aos-duration="2000"></div>
                        </div>
                    </div>
                </section>

                <Book/>
            </div>

        </OurworkWrapper>
    )
}
