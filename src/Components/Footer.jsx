import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="right">
          <span>© 2024 PLEXIWEBSTUDIO</span>
        </div>
        <div className="social">
          <Link to="https://www.instagram.com/plexiwebstudio/">INSTAGRAM</Link>
          <Link to="https://twitter.com/PlexiwebStudio">X/Twitter</Link>
          <Link>LinkedIn</Link>
          <Link>Dribbble</Link>
          <Link>Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
