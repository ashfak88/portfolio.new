"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import photo2 from '../../public/photo 2.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (gridRef.current) {
      // Stagger animate cells
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
    <section ref={sectionRef} id="about" style={{
      minHeight: '100vh',
      padding: '2.5rem',
      backgroundColor: '#e6e6e6',
      color: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
      <style>{`
        .about-grid-wrapper {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 5rem);
          max-width: 1600px;
          border-top: 1px solid #c0c0c0;
          border-bottom: 1px solid #c0c0c0;
          display: flex;
          flex-direction: column;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto auto 1fr;
          width: 100%;
          flex: 1;
        }
        .grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: #c0c0c0;
          z-index: 1;
          pointer-events: none;
        }
        .crosshair {
          position: absolute;
          color: #777;
          font-size: 15px;
          font-weight: 300;
          line-height: 1;
          transform: translate(-50%, -50%);
          z-index: 10;
          pointer-events: none;
          user-select: none;
        }
        
        .grid-cell {
          position: relative;
          z-index: 2;
          padding: 0 2.5rem;
        }

        .about-col-1-3 { grid-column: 1 / 3; }
        .about-col-3-4 { grid-column: 3 / 4; }
        .about-col-4-5 { grid-column: 4 / 5; }
        .about-col-1-2 { grid-column: 1 / 2; }
        .about-col-2-3 { grid-column: 2 / 3; }
        .about-col-3-5 { grid-column: 3 / 5; }
        .quote-heading { margin-left: 12%; }

        .cell-r1 { padding-top: 3rem; }
        .cell-r2 { padding-top: 3rem; }
        .cell-r3 { padding-bottom: 3rem; display: flex; flex-direction: column; justify-content: flex-end; }

        .heading-large {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(2rem, 3.2vw, 3.6rem);
          line-height: 1.05;
          letter-spacing: -1px;
          font-weight: 400;
          color: #111;
          margin-bottom: 1rem;
        }

        .heading-medium {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(1.8rem, 2.8vw, 3.2rem);
          line-height: 1.05;
          letter-spacing: -0.5px;
          font-weight: 400;
          color: #111;
          margin-top: 3rem;
        }

        .text-small {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #333;
        }

        .label {
          font-weight: 700;
          font-size: 0.85rem;
          color: #111;
        }

        .date {
          color: #333;
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
           .grid-cell { padding: 0 1.5rem; }
        }
        @media (max-width: 900px) {
           #about { padding: 1.5rem; height: auto; min-height: auto; }
           .about-grid-wrapper { height: auto; border: none; min-height: auto; }
           .about-grid {
             grid-template-columns: 1fr;
             grid-template-rows: auto;
           }
           .grid-line { display: none; }
           .crosshair { display: none; }
           .grid-cell { padding: 1.5rem 0; }
           .cell-r1, .cell-r2, .cell-r3 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
           
           .about-col-1-3,
           .about-col-3-4,
           .about-col-4-5,
           .about-col-1-2,
           .about-col-2-3,
           .about-col-3-5 {
             grid-column: span 1 !important;
           }
           .cell-r3.about-col-2-3 {
             display: none;
           }
           .quote-heading {
             margin-left: 0 !important;
             margin-top: 1.5rem;
           }
        }
      `}</style>

      <div className="about-grid-wrapper">
        {/* Internal Vertical Grid Lines ONLY */}
        <div className="grid-line" style={{ left: '25%' }}></div>
        <div className="grid-line" style={{ left: '50%' }}></div>
        <div className="grid-line" style={{ left: '75%' }}></div>

        {/* Top Crosshairs */}
        <div className="crosshair" style={{ top: 0, left: 0 }}>+</div>
        <div className="crosshair" style={{ top: 0, left: '25%' }}>+</div>
        <div className="crosshair" style={{ top: 0, left: '50%' }}>+</div>
        <div className="crosshair" style={{ top: 0, left: '75%' }}>+</div>
        <div className="crosshair" style={{ top: 0, left: '100%' }}>+</div>

        {/* Bottom Crosshairs */}
        <div className="crosshair" style={{ top: '100%', left: 0 }}>+</div>
        <div className="crosshair" style={{ top: '100%', left: '25%' }}>+</div>
        <div className="crosshair" style={{ top: '100%', left: '50%' }}>+</div>
        <div className="crosshair" style={{ top: '100%', left: '75%' }}>+</div>
        <div className="crosshair" style={{ top: '100%', left: '100%' }}>+</div>

        <div ref={gridRef} className="about-grid">

          {/* ROW 1: TOP ALIGNED */}
          <div className="grid-cell cell-r1 about-col-1-3">
            <h2 className="heading-large">
              I build applications that work <br />
              as a system
              consistent, scalable,<br />
              and thoughtfully structured.
            </h2>
          </div>

          <div className="grid-cell cell-r1 about-col-3-4">
            <div className="label" style={{ height: '24px', lineHeight: '24px', marginBottom: '1.5rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Education</div>
            <div className="date">2024</div>
          </div>

          <div className="grid-cell cell-r1 about-col-4-5">
            <div className="label" style={{ height: '24px', lineHeight: '24px', marginBottom: '1.5rem', visibility: 'hidden' }}>Placeholder</div>
            <div>
              <div className="label" style={{ marginBottom: '4px' }}>Bachelor of Arts in English</div>
              <div className="text-small" style={{ color: '#555' }}>Indira Gandhi National Open University</div>
            </div>
          </div>


          {/* ROW 2: MIDDLE ROW */}
          <div className="grid-cell cell-r2 about-col-1-2">
            <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#d0d0d0', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
              <Image
                src={photo2}
                alt="Ashfak KP"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div className="grid-cell cell-r2 about-col-2-3" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <p className="text-small">
              I&apos;m Ashfak KP, a MERN Stack Developer specializing in building scalable, responsive, and secure full-stack applications with a focus on Domain-Driven Design and Modular Architecture.
            </p>
            <p className="text-small">
              Based in Calicut, Kerala, I have strong knowledge in MongoDB, Express.js, React.js, and Node.js. My work balances elegant design with high-performance system engineering.
            </p>
            <p className="text-small">
              I am highly experienced in designing RESTful APIs, implementing RBAC authentication systems, and crafting complex MongoDB Aggregation Pipelines to deliver clean, optimized code.
            </p>
          </div>
          <div className="grid-cell cell-r2 about-col-3-4">
            <div className="label" style={{ height: '24px', lineHeight: '24px', marginBottom: '1.5rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Experience</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="date">05/26 - Present</div>
              <div className="date">08/25 - Present</div>
            </div>
          </div>

          <div className="grid-cell cell-r2 about-col-4-5">
            <div className="label" style={{ height: '24px', lineHeight: '24px', marginBottom: '1.5rem', visibility: 'hidden' }}>Placeholder</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div className="label" style={{ marginBottom: '4px' }}>Full Stack Developer</div>
                <div className="text-small" style={{ color: '#555' }}>Kodlar Innovations</div>
              </div>
              <div>
                <div className="label" style={{ marginBottom: '4px' }}>MERN Stack Intern</div>
                <div className="text-small" style={{ color: '#555' }}>Bridgeon</div>
              </div>
            </div>
          </div>


          {/* ROW 3: BOTTOM ALIGNED */}
          <div className="grid-cell cell-r3 about-col-1-2">
            <div className="label" style={{ marginBottom: '0.8rem' }}>Contact</div>
            <div className="text-small" style={{ color: '#555' }}>Gmail: ashfakkp323@gmail.com</div>
          </div>

          <div className="grid-cell cell-r3 about-col-2-3"></div>

          <div className="grid-cell cell-r3 about-col-3-5">
            <div className="heading-medium quote-heading">
              I appreciate clean code<br />
              where intention, refinement,<br />
              and functionality come together.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
