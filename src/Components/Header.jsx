import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link>Plexiweb Studio.</Link>
        </div>

        <nav>
          <div className="nav-links">
            <Link>WORK</Link>
            <Link>SERVICES</Link>
            <Link>CULTURE</Link>
            <Link>JOURNAL</Link>
          </div>
        </nav>
        <div className="contact">
            <Link>CONTACT</Link>
          </div>
      </div>
    </header>
  )
}
