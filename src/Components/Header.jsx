import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";

export default function Header() {
  const [activeSideBar, setActiveSideBar] = useState(true)

  const handleSideBar = () => {
    setActiveSideBar(!activeSideBar)
  }
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

        <div className={activeSideBar ? "side-bar" : "active-side-bar"}>
          <div className="close" onClick={handleSideBar}>X</div>
          <div className="nav-links">
            <Link>WORK</Link>
            <Link>SERVICES</Link>
            <Link>CULTURE</Link>
            <Link>JOURNAL</Link>
            <Link>CONTACT</Link>
          </div>
        </div>
        <div className="toggle" onClick={handleSideBar}>
          <FaBarsStaggered />
        </div>
      </div>
    </header>
  )
}
