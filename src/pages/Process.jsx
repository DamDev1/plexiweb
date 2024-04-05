import React from 'react'
import ProcessWrapper from '../assets/Wrapper/Process'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import ScrollTop from '../Components/ScrollTop'
import Book from '../Components/Book';


export default function Process() {
    return (
        <ProcessWrapper>
            <ScrollTop />
            <div className="process-container">
                <div className="process-Head">

                </div>
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

                <section id="testimony" data-aos="fade-up"  >
                    <div className="container">
                        <div className="head" >
                            <span>50+ Raving Reviews: What Sets Us Apart</span>
                            <span>1--10</span>
                        </div>

                        <div className="testimony-content">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="testimony">
                                        <p>
                                            "Plexiweb Studio team brought a professional, insightful, creative
                                            approach to building us a website that perfectly serves our
                                            needs."
                                        </p>
                                        <div className="client">
                                            <div className="client-image"></div>
                                            <div className="client-content">
                                                <span className="client-name">Mary J.</span>
                                                <span>Director of Technology</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimony">
                                        <p>
                                            "I can't thank Plexiweb Studio enough for their outstanding work on my business website. As a small business owner, I needed a professional and affordable solution, and Plexiweb Studio delivered beyond my wildest expectations."
                                        </p>
                                        <div className="client">
                                            <div className="client-image client-five"></div>
                                            <div className="client-content">
                                                <span className="client-name">Blessing R</span>
                                                <span>Small Business Owner</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimony">
                                        <p>
                                            "Working with Plexiweb Studio was a game-changer for our startup. Their team's expertise in web development and design helped us launch a stunning website that perfectly reflects our brand identity."
                                        </p>
                                        <div className="client">
                                            <div className="client-image client-two"></div>
                                            <div className="client-content">
                                                <span className="client-name">John D</span>
                                                <span>CEO, Tech Startup</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimony">
                                        <p>
                                            "Plexiweb Studio exceeded our expectations with their top-notch web development services. From the initial consultation to the final deployment, they were professional, responsive, and attentive to our needs. Our new e-commerce website is sleek, user-friendly, and has already boosted our online sales. Thank you, Plexiweb Studio"
                                        </p>
                                        <div className="client">
                                            <div className="client-image client-three"></div>
                                            <div className="client-content">
                                                <span className="client-name">Sarah M</span>
                                                <span>Marketing Director, E-commerce Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimony">
                                        <p>
                                            "Our new e-commerce website is sleek, user-friendly, and has already boosted our online sales. Thank you, Plexiweb Studio!"
                                        </p>
                                        <div className="client">
                                            <div className="client-image client-four"></div>
                                            <div className="client-content">
                                                <span className="client-name">Micheal M</span>
                                                <span>Small Business Owner</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>

                <Book/>
            </div>
        </ProcessWrapper>
    )
}
