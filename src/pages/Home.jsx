import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section id="hero-section">
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
            <div className="image"></div>
            <span>Khu·la / Kh·ula</span>
          </div>
        </div>
      </section>

      <section id="showcase">
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
        {/* Work we proud of */}
        <div id="work-container">
          <div className="text-box">
            <h1>WORK WE'RE PROUD OF</h1>
            <p>
              100+ businesses and non-profits have trusted us with their brand.
              You can too.
            </p>
          </div>
          <div className="view-work">
            <Link>View all work</Link>
          </div>
          <div className="work-col-1">
            <div className="left">
              <p>BRAND REFRESH</p>
              <h3>Enamel Dentistry</h3>
              <p>Local / Service Business</p>
            </div>

            <div className="right"></div>
          </div>
        </div>
        <div className="projects-container">
          <div className="project">
            <div className="img-card"></div>
            <div className="project-desc">
              <p>BRAND REFRESH</p>
              <h2>Philip Brideaux</h2>
            </div>
          </div>
          <div className="project">
            <div className="img-card"></div>
            <div className="project-desc">
              <p>BRAND REFRESH</p>
              <h2>NGMarketing</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
