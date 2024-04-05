import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import AOS from "aos";
import 'aos/dist/aos.css'; 

export default function Header() {
  const [activeSideBar, setActiveSideBar] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations (in milliseconds)
      easing: 'ease', // Easing function for animations
    });
  }, []);


  const handleSideBar = () => {
    setActiveSideBar(!activeSideBar)
  }
  return (
    <header data-aos="fade-down-right">
      <div className="container">
        <div className="logo">
          <Link>Plexiweb Studio.</Link>
        </div>

        <nav>
          <div className="nav-links">
            <Link>HOME</Link>
            <Link>ABOUT</Link>
            <Link to={'our-service'}>SERVICES</Link>
            <Link to={'/our-work'}>WORK</Link>
            <Link to={'/our-work'}>PROCESS</Link>
            <Link to={'/our-work'}>FAQ</Link>
          </div>
        </nav>
        <div className="contact">
          <Link>CONTACT</Link>
        </div>

        <div className={activeSideBar ? "side-bar" : "active-side-bar"}>
          <div className="close" onClick={handleSideBar}>X</div>
          <div className="nav-links">
            <Link to={'/'}>HOME</Link>
            <Link to={'our-service'}>SERVICES</Link>
            <Link to={'/our-work'}>WORK</Link>
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
