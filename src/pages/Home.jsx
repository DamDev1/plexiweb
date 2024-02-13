import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay} from 'swiper/modules';

export default function Home() {

  const [faqOne, setFaqOne] = useState(false)
  const [faqTwo, setFaqTwo] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations (in milliseconds)
      easing: 'ease', // Easing function for animations
    });
  }, []);


  let contentRef = useRef(null)

  // useEffect(() =>{
  //   let currentPos = window.pageYOffset;

  //   const callDistort =() =>{
  //     const newPos = window.pageYOffset;
  //     const diff = newPos - currentPos;
  //     const speed = diff * 0.35;

  //     if(contentRef.current){
  //       contentRef.current.style.transform = `skewY(${speed}deg)`
  //     }
  //     currentPos = newPos;
  //     requestAnimationFrame(callDistort);
  //   }

  //   callDistort();

  //   return() =>{
  //     cancelAnimationFrame(callDistort)
  //   }
  // })

  return (
    <main className="main" ref={contentRef}>
      <section id="hero-section" className="sec-1 showAnimation">
        <div className="container-col">
          <div className="col-1">
            <h1 data-aos="fade-right">YOUR BRAND IMAGE MATTERS</h1>
            <div className="hero-content">
              <div className="content" data-aos="fade-left">
                <p>
                  Plexiweb is a strategy-led design studio specializing in brand
                  refreshes. We help service-based solopreneurs & small business
                  owners build a standout brand image — one they can be proud
                  of.
                </p>
                <Link to="https://www.behance.net/plexiweb_studio">explore our work</Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image" data-aos="zoom-out-down">

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
            <div className="left" data-aos="fade-right">
              <h3>tired of staring at your</h3>
            </div>
            <div className="right" data-aos="fade-left">
              <p>
                An old and boring brand identity and website can leave your
                customers feeling confused, uncertain, and searching for
                something better. We're here to help you change that.
              </p>

              <div className="more-services">
                <div className="services-content">
                  <div className="caption" onClick={() => setFaqOne(!faqOne)}>
                    <span>What types of web development services does Plexiweb Studio offer?</span>
                    <div className="open-close">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={!faqOne ? "message" : "showMessage"}>
                    <p>
                      Plexiweb Studio specializes in comprehensive web development solutions, including full-stack development, front-end development, and back-end development. Whether you need a simple static website or a complex web application, we have the expertise to bring your vision to life.
                    </p>
                  </div>
                </div>

                <div className="services-content" >
                  <div className="caption" onClick={() => setFaqTwo(!faqTwo)}>
                    <span> Can Plexiweb Studio handle the entire web development process from design to deployment?</span>
                    <div className="open-close">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={!faqTwo ? "message" : "showMessage"}>
                    <p>
                      Yes, Plexiweb Studio offers end-to-end web development services, starting from the design phase all the way through development, testing, deployment, and ongoing maintenance. Our goal is to provide a streamlined and hassle-free experience for our clients, allowing them to focus on their core business objectives.
                    </p>
                  </div>
                </div>

                <div className="services-content">
                  <div className="caption">
                    <span>How can I request a consultation or get started with Plexiweb Studio for my web development project?</span>
                    <div className="open-close">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="message">
                    <p>
                      Getting started with Plexiweb Studio is easy! Simply reach out to us via our contact form or email, and one of our experienced developers will schedule a consultation to discuss your project requirements and objectives in detail. We look forward to collaborating with you to bring your web development vision to life!
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
          <div className="head" data-aos="fade-down">
            <h3>Work We're proud of</h3>
            <div className="head-content">
              <p>100+ businesses and non-profits have trusted us</p>
              <Link to="https://www.behance.net/plexiweb_studio" target="_blank">VIEW ALL WORK</Link>
            </div>
          </div>

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
      <section id="email-section">
        <div className="email-text">
          <h1>Let’s make something great together</h1>
        </div>
        <div className="email-text">
          <Link>hello@Plexiweb.com</Link>
        </div>
      </section>
    </main>
  );
}
