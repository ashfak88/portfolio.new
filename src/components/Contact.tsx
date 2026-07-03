"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
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
      <div className="contact-container" ref={containerRef}>
        
        <div className="contact-illustration-wrap">
          <img 
            src="/say_hello_man.png" 
            alt="Hand-drawn cartoon illustration waving hello" 
            className="contact-illustration"
          />
        </div>

        <div className="contact-content-wrap">
          <h2 className="contact-title">Say hello!</h2>
          <p className="contact-text">
            I&apos;d love to hear from you and always welcome any feedback &ndash; please don&apos;t hesitate to get in touch!
          </p>
          
          <div className="contact-actions">
            <a 
              href="https://wa.me/918893390415?text=Hi%20Ashfak%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!"
              className="contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say hey!
            </a>
            <a 
              href="/ASHFAK_KP.pdf" 
              download="ASHFAK_KP.pdf"
              className="contact-btn-resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
          </div>

          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:ashfakkp323@gmail.com" className="detail-link">
                ashfakkp323@gmail.com
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Phone</span>
              <a href="tel:+918893390415" className="detail-link">
                +91 8893390415
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Socials</span>
              <div className="social-links-wrap">
                <a href="https://www.linkedin.com/in/ashfak-kp" target="_blank" rel="noopener noreferrer" className="detail-link">
                  LinkedIn
                </a>
                <span className="detail-separator">/</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="detail-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact-section {
          background-color: #ffffff;
          padding: 6rem 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          border-top: 1px solid #c0c0c0;
        }
        .contact-container {
          width: 100%; 
          max-width: 1200px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 6rem;
        }
        .contact-illustration-wrap {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          max-width: 400px;
        }
        .contact-illustration {
          width: 100%;
          height: auto;
          max-width: 360px;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .contact-content-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 500px;
        }
        .contact-title {
          font-size: clamp(3.5rem, 6vw, 5rem);
          font-weight: 700;
          color: #111111;
          margin: 0 0 1.5rem 0;
          font-family: 'Outfit', 'Inter', sans-serif;
          letter-spacing: -1px;
        }
        .contact-text {
          color: #333333;
          font-size: clamp(1.1rem, 1.6vw, 1.35rem);
          line-height: 1.5;
          margin: 0 0 2rem 0;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }
        .contact-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 3.5rem;
          background-color: #111111;
          color: #ffffff !important;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 50px;
          border: 1px solid #111111;
          transition: all 0.3s ease;
        }
        .contact-btn:hover {
          background-color: transparent;
          color: #111111 !important;
          transform: translateY(-2px);
        }
        .contact-btn-resume {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 3.5rem;
          background-color: transparent;
          color: #111111;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 50px;
          border: 1px solid #111111;
          transition: all 0.3s ease;
        }
        .contact-btn-resume:hover {
          background-color: #111111;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
        .contact-details-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          border-top: 1px solid #c0c0c0;
          padding-top: 2rem;
        }
        .contact-detail-item {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
        }
        .detail-label {
          width: 100px;
          color: #666666;
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .detail-link {
          color: #111111;
          text-decoration: none;
          font-weight: 400;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }
        .detail-link:hover {
          border-bottom-color: #111111;
          color: #111111 !important;
        }
        .social-links-wrap {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .detail-separator {
          color: #c0c0c0;
        }

        @media (max-width: 900px) {
          .contact-section {
            padding: 4rem 1.5rem;
          }
          .contact-container {
            flex-direction: column;
            gap: 3rem;
            text-align: center;
          }
          .contact-illustration-wrap {
            justify-content: center;
            max-width: 280px;
          }
          .contact-content-wrap {
            align-items: center;
          }
          .contact-details-grid {
            align-items: center;
          }
          .contact-detail-item {
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
          }
          .detail-label {
            width: auto;
            margin-bottom: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
}
