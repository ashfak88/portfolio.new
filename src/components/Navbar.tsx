"use client";

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-wrap">
          <div className="navbar-logo">
            AK.
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <a href="#about" className="nav-link">About me</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-btn-contact">CONTACT ME</a>
        </div>

        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`nav-drawer-mobile ${isOpen ? 'open' : ''}`}>
          <div className="drawer-content">
            <a href="#about" className="drawer-link" onClick={() => setIsOpen(false)}>About me</a>
            <a href="#skills" className="drawer-link" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#portfolio" className="drawer-link" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#contact" className="drawer-btn-contact" onClick={() => setIsOpen(false)}>CONTACT ME</a>
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2.5rem 8%;
          box-sizing: border-box;
          z-index: 100;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }
        .navbar-logo-wrap {
          width: 45%;
        }
        .navbar-logo {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -2px;
          color: #000;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }
        .nav-links-desktop {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          gap: 3rem;
          align-items: center;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .nav-link {
          color: #fff;
          transition: opacity 0.2s;
          opacity: 0.9;
        }
        .nav-link:hover {
          opacity: 1;
          color: #fff !important;
        }
        .nav-btn-contact {
          background-color: #fff;
          color: #000;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          margin-left: 1rem;
          transition: all 0.2s ease;
        }
        .nav-btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
          color: #000 !important;
        }

        /* Hamburger Styles */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 150;
        }
        .hamburger .line {
          width: 100%;
          height: 2px;
          background-color: #000;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          transform-origin: left center;
        }
        .hamburger.open .line:nth-child(1) {
          transform: rotate(45deg) translate(2px, -1px);
          background-color: #fff;
        }
        .hamburger.open .line:nth-child(2) {
          width: 0%;
          opacity: 0;
        }
        .hamburger.open .line:nth-child(3) {
          transform: rotate(-45deg) translate(2px, 1px);
          background-color: #fff;
        }

        /* Mobile Drawer Styles */
        .nav-drawer-mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          z-index: 140;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-drawer-mobile.open {
          transform: translateX(0);
        }
        .drawer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
        }
        .drawer-link {
          font-family: 'Times New Roman', Times, serif;
          font-size: 2.2rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          transition: all 0.3s ease;
          letter-spacing: -0.5px;
          text-decoration: none;
        }
        .drawer-link:hover {
          color: #fff !important;
          transform: scale(1.05);
        }
        .drawer-btn-contact {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 1px;
          background-color: #fff;
          color: #000 !important;
          padding: 16px 36px;
          border-radius: 40px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .drawer-btn-contact:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.25);
        }

        @media (max-width: 900px) {
          .navbar {
            padding: 1.5rem 1.5rem;
          }
          .nav-links-desktop {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .navbar-logo-wrap {
            width: auto;
          }
        }
      `}</style>
    </nav>
  );
}
