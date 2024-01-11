import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="right">
          <span>© 2023 PLEXIWEB</span>
        </div>
        <div className="social">
          <Link>INSTAGRAM</Link>
          <Link>X/Twitter</Link>
          <Link>LinkedIn</Link>
          <Link>Dribbble</Link>
          <Link>Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
