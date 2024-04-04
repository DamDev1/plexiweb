import React from 'react'
import { Link } from 'react-router-dom'
import OurworkWrapper from '../assets/Wrapper/OurWork'
import { FaArrowRight } from 'react-icons/fa6'

export default function Book() {
    return (
        <OurworkWrapper>
            <section id="book">
                <div className="container">
                    <h2 data-aos="fade-right">Ready To Hit Refresh?</h2>
                    <div className="book-content" data-aos="fade-left"  >
                        <p>
                            When it comes to your brand and website design, you don't need to
                            struggle or try figure it out on your own.
                        </p>
                        <p>
                            Let us help you get it right and create a standout brand image you
                            can be proud of.
                        </p>
                        <Link to="https://calendly.com/plexiwebstudio/30min">BOOK A CALL</Link>
                    </div>
                </div>
            </section>
            <section id="mailing-list">
                <div className="design-studio">
                    <div className="img-card"></div>
                    <p>DESIGN STUDIO</p>
                </div>
                <div className="mailing-text">
                    <p>JOIN OUR MONTHLY MAILING LIST</p>
                </div>
                <div className="mailing-email">
                    <input type="text" placeholder="YOUR EMAIL ADDRESS" />
                    <span>
                        <FaArrowRight />
                    </span>
                </div>
            </section>
        </OurworkWrapper>
    )
}
