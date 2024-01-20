import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add('showAnimation');
        } else {
          sec.classList.remove('showAnimation');
        }
      });
    };

    // Set up event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    // Update sections when the component mounts or when sections change in the DOM
    const updatedSections = document.querySelectorAll('section');
    setSections(Array.from(updatedSections));
  }, []);
  return (
    <main>
      <section id="hero-section" className="sec-1 showAnimation">
        <div className="container-col">
          <div className="col-1">
            <h1>YOUR BRAND IMAGE MATTERS</h1>
            <div className="hero-content">
              <div className="content">
                <p>
                  Plexiweb is a strategy-led design studio specializing in brand
                  refreshes. We help service-based solopreneurs & small business
                  owners build a standout brand image — one they can be proud
                  of.
                </p>
                <Link>explore our work</Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image">

            </div>
            <span>Khu·la / Kh·ula</span>
          </div>
        </div>
      </section>

      <section id="showcase" className="sec-2">
        <div className="showcase-container">
          <div className="showcase-conpanies">
            <span>
              <img src="./company-one.png" alt="" />
            </span>
            <span>
              <img src="./company-two.png" alt="" />
            </span>
            <span>
              <img src="./company-three.png" alt="" />
            </span>
            <span>
              <img src="./company-four.png" alt="" />
            </span>
            <span>
              <img src="./company-five.png" alt="" />
            </span>
            <span>
              <img src="./company-six.png" alt="" />
            </span>
          </div>

          <div className="services-container">
            <div className="left">
              <h3>tired of staring at your</h3>
            </div>
            <div className="right">
              <p>
                An old and boring brand identity and website can leave your
                customers feeling confused, uncertain, and searching for
                something better. We're here to help you change that.
              </p>

              <div className="more-services">
                <div className="services-content">
                  <div className="caption">
                    <span>A single point of contact</span>
                    <div className="open-close">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="message">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam laboriosam, nobis optio autem voluptatibus
                      blanditiis odio, nihil tempore nemo, quibusdam modi at
                      laudantium cum animi nesciunt saepe deleniti? Sequi,
                      doloremque.
                    </p>
                  </div>
                </div>

                <div className="services-content">
                  <div className="caption">
                    <span>A single point of contact</span>
                    <div className="open-close">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="message">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam laboriosam, nobis optio autem voluptatibus
                      blanditiis odio, nihil tempore nemo, quibusdam modi at
                      laudantium cum animi nesciunt saepe deleniti? Sequi,
                      doloremque.
                    </p>
                  </div>
                </div>

                <div className="services-content">
                  <div className="caption">
                    <span>A single point of contact</span>
                    <div className="open-close">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="message">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam laboriosam, nobis optio autem voluptatibus
                      blanditiis odio, nihil tempore nemo, quibusdam modi at
                      laudantium cum animi nesciunt saepe deleniti? Sequi,
                      doloremque.
                    </p>
                  </div>
                </div>
                <div className="view-service">
                  <Link>VIEW OUR SERVICES</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work-section">
        <div className="container">
          <div className="head">
            <h3>Work We're proud of</h3>
            <div className="head-content">
              <p>100+ businesses and non-profits have trusted us</p>
              <Link to="/works">VIEW ALL WORK</Link>
            </div>
          </div>

          <div className="work-container">
            <div className="work">
              <div className="work-content">
                <span>BRAND REFRESH</span>
                <h4>Enamel Dentistry</h4>
                <p>Local / Service Business</p>
              </div>
              <div className="work-image image"></div>
            </div>

            <div className="work-display">
              <div className="work-2">
                <div className="work-image image"></div>
                <div className="work-content">
                  <span>BRAND REFRESH</span>
                  <h4>Enamel Dentistry</h4>
                  <p>Local / Service Business</p>
                </div>
              </div>

              <div className="work-2">
                <div className="work-image image"></div>
                <div className="work-content">
                  <span>BRAND REFRESH</span>
                  <h4>Enamel Dentistry</h4>
                  <p>Local / Service Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process-section">
        <div className="container">
          <div className="head">
            <h3>Our Process Is Easy</h3>
            <Link>LET'S TALK</Link>
          </div>

          <div className="process-step">
            <div className="step">
              <span>1</span>
              <div className="step-content">
                <h5>Discover</h5>
                <p>We'll unpack everything about your business and industry.</p>
              </div>
            </div>

            <div className="step">
              <span>2</span>
              <div className="step-content">
                <h5>Design</h5>
                <p>
                  We design and build your new and improved brand and Webflow
                  website — fast.
                </p>
              </div>
            </div>

            <div className="step">
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
            <div className="image"></div>
            <div className="image"></div>
          </div>
        </div>
      </section>

      <section id="testimony">
        <div className="container">
          <div className="head">
            <span>50+ Raving Reviews: What Sets Us Apart</span>
            <span>1--10</span>
          </div>

          <div className="testimony-content">
            <div className="testimony">
              <p>
                "He and his team brought a professional, insightful, creative
                approach to building us a website that perfectly serves our
                needs."
              </p>
              <div className="client">
                <div className="client-image"></div>
                <div className="client-content">
                  <span className="client-name">Jeremy John</span>
                  <span>Director of Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book">
        <div className="container">
          <h2>Ready To Hit Refresh?</h2>
          <div className="book-content">
            <p>
              When it comes to your brand and website design, you don't need to
              struggle or try figure it out on your own.
            </p>
            <p>
              Let us help you get it right and create a standout brand image you
              can be proud of.
            </p>
            <Link>BOOK A CALL</Link>
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
      <section id="email-section">
        <div className="email-text">
          <h1>Let’s make something great together</h1>
        </div>
        <div className="email-text">
          <h1>hello@Plexiweb.com</h1>
        </div>
      </section>
    </main>
  );
}
