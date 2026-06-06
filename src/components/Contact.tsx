"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Architectural Grid for Contact */}
        <div ref={gridRef} className="contact-grid">
          
          {/* Main Call to Action Cell */}
          <div className="contact-cta-cell">
            <h2 className="contact-cta-title">
              Let&apos;s build<br/>something.
            </h2>
            <p className="contact-cta-desc">
              Whether you need a full-stack web application, a robust backend architecture, or a complete digital overhaul, I&apos;m ready to engineer a solution.
            </p>
            <a 
              href="mailto:ashfakkp323@gmail.com"
              className="contact-cta-btn"
            >
              Get in Touch
            </a>
          </div>

          {/* Details Row */}
          <div className="contact-detail-cell">
            <h3 className="contact-detail-label">Contact</h3>
            <a href="mailto:ashfakkp323@gmail.com" className="contact-detail-link times-font margin-bottom-sub">
              ashfakkp323@gmail.com
            </a>
            <a href="tel:+918893390415" className="contact-detail-link times-font">
              +91 8893390415
            </a>
          </div>
          
          <div className="contact-detail-cell">
            <h3 className="contact-detail-label">Social</h3>
            <div className="contact-social-wrap">
              <a href="https://www.linkedin.com/in/ashfak-kp" target="_blank" rel="noopener noreferrer" className="contact-social-link times-font">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link times-font">GitHub</a>
            </div>
          </div>
          
          <div className="contact-detail-cell">
            <h3 className="contact-detail-label">Location</h3>
            <p className="contact-detail-text times-font">
              Calicut, Kerala<br/>
              <span className="contact-detail-subtext">Available Remotely</span>
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #e6e6e6;
          padding: 4rem 2.5rem 4rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
        .contact-container {
          width: 100%; 
          max-width: 1600px;
        }
        .contact-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          border-top: 1px solid #c0c0c0;
          border-left: 1px solid #c0c0c0;
        }
        .contact-cta-cell {
          grid-column: 1 / -1;
          padding: 6rem 2.5rem;
          border-right: 1px solid #c0c0c0;
          border-bottom: 1px solid #c0c0c0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .contact-cta-title {
          font-size: clamp(3rem, 7vw, 7rem); 
          font-weight: 400; 
          font-family: 'Times New Roman', Times, serif;
          color: #111;
          margin: 0 0 2rem 0;
          letter-spacing: -2px;
          line-height: 1;
        }
        .contact-cta-desc {
          color: #555;
          font-size: 1.1rem;
          max-width: 600px;
          line-height: 1.6;
          margin: 0 0 3rem 0;
          font-family: 'Inter', sans-serif;
        }
        .contact-cta-btn {
          display: inline-block;
          padding: 1.2rem 3rem;
          background-color: #111;
          color: #fff;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          border: 1px solid #111;
        }
        .contact-cta-btn:hover {
          background-color: #e6e6e6;
          color: #111 !important;
        }

        .contact-detail-cell {
          padding: 3rem 2.5rem;
          border-right: 1px solid #c0c0c0;
          border-bottom: 1px solid #c0c0c0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .contact-detail-cell:hover {
          background-color: #dfdfdf;
        }
        .contact-detail-label {
          font-size: 0.85rem; 
          color: #555; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          margin-bottom: 1.5rem; 
          font-family: 'Inter', sans-serif;
        }
        .contact-detail-link {
          font-size: clamp(1rem, 1.3vw, 1.3rem); 
          color: #111; 
          text-decoration: none;
          display: block;
        }
        .contact-detail-link:hover {
          color: #000 !important;
        }
        .margin-bottom-sub {
          margin-bottom: 0.5rem;
        }
        .times-font {
          font-family: 'Times New Roman', Times, serif;
        }
        .contact-social-wrap {
          display: flex; 
          gap: 2rem;
        }
        .contact-social-link {
          font-size: clamp(1rem, 1.5vw, 1.5rem); 
          color: #111; 
          text-decoration: none; 
          border-bottom: 1px solid transparent; 
          transition: border-color 0.3s;
        }
        .contact-social-link:hover {
          border-bottom-color: #111;
          color: #111 !important;
        }
        .contact-detail-text {
          font-size: clamp(1rem, 1.3vw, 1.3rem); 
          color: #111; 
          margin: 0;
        }
        .contact-detail-subtext {
          font-size: 0.85rem; 
          color: #555; 
          font-family: 'Inter', sans-serif;
        }

        @media (max-width: 900px) {
          .contact-section {
            padding: 4rem 1.5rem 2rem 1.5rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-cta-cell {
            padding: 4rem 1.5rem;
          }
          .contact-detail-cell {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
