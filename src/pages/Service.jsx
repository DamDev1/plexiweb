import React, { useEffect } from 'react'
import ServiceWrapper from '../assets/Wrapper/Service'
import Book from '../Components/Book'
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Service() {

    useEffect(() => {
        AOS.init({
          duration: 800, // Duration of animations (in milliseconds)
          easing: 'ease', // Easing function for animations
        });
      }, []);
    return (
        <ServiceWrapper>
            <div className="serviceContainer">
                <div className="service-head">
                    <h1>OurCompany Service</h1>
                    <p>We believe in well-crafted digital
                        experiences through strategic
                        foundations, collaborative design, and
                        creative development.</p>
                </div>

                <div className="services-container">
                    <div className="service branding" data-aos="fade-top">
                        <p>Branding</p>
                    </div>
                    <div className="service uiux" data-aos="fade-top">
                        <p>UIUX</p>
                    </div>
                    <div className="service webdevelopment" data-aos="fade-top">
                        <p>Web Development</p>
                    </div>
                    <div className="service webdevelopment" data-aos="fade-top">
                        <p>App Development</p>
                    </div>
                </div>

                <Book/>
            </div>
        </ServiceWrapper>
    )
}
