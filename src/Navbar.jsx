import React from 'react'
import { useEffect } from 'react';
import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import A from './images/A.png'
function Navbar() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    });
    
  }, []);
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow bg-dark">
      <div className="container">

        <h1 data-aos="fade-right" className="fw-bold text-white m-0">
        <img className='A' src={A} alt="" />  Portfolio
        </h1>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

  {/* menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul data-aos="fade-left" className="navbar-nav ms-auto gap-lg-4 text-center">

            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#project">Project</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar