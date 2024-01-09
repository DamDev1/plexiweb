import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section id='hero-section'>
        <div className="container-col">
          <div className="col-1">
            <h1>YOUR BRAND IMAGE MATTERS</h1>
            <div className="hero-content">
              <div className="content">
                <p>Plexiweb  is a strategy-led design studio specializing in brand refreshes. We help
                  service-based solopreneurs & small business
                  owners build a standout brand image — one
                  they can be proud of.</p>
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
    </main>
  )
}
