"use client";

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import freeconeImg from '../../public/freecone.png';
import hotwheelsImg from '../../public/hotwheels.png';
import lmsImg from '../../public/lms.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FreeCone Platform",
    subtitle: "SaaS Freelance Marketplace Platform",
    link: "https://freecone.vercel.app/",
    image: freeconeImg,
    description: [
      "Role-based authentication (Freelancer, Client, Admin) using secure JWT tokens.",
      "Real-time chat messaging and system-wide instant notifications via Socket.IO.",
      "High-performance video calling integrations engineered using WebRTC protocol.",
      "Secure escrow-based payment transactions to protect and lock contract payments."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC"]
  },
  {
    title: "Hotwheels Store",
    subtitle: "MERN Stack E-commerce Platform",
    link: "https://hotwheeels.vercel.app/",
    image: hotwheelsImg,
    description: [
      "Modular e-commerce RESTful API catalog and checkout architecture.",
      "Complete JWT credential management systems with encrypted route protection.",
      "Dynamic product querying, custom tagging, and compound catalog indexes.",
      "Optimized MongoDB data pipelines handling products, user sessions, and carts."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"]
  },
  {
    title: "LMS Enterprise",
    subtitle: "Domain-Driven Modular Architecture",
    link: "https://lms.bridgeon.in/login",
    image: lmsImg,
    description: [
      "Rigid features-based system utilizing modular Domain-Driven Design (DDD).",
      "Internal training and progress tracking software used for corporate learning management.",
      "Optimized file asset staging using Amazon Web Services (AWS S3) buckets.",
      "Integrated Google API endpoints for custom booking and session scheduling."
    ],
    tech: ["React Query", "MUI", "AWS S3", "Google APIs", "RBAC", "DDD"]
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);

  useGSAP(() => {
    // Header animate in
    gsap.fromTo(headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Staggered cards animate in
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="portfolio" className="projects-section">
      <div ref={headerRef} className="projects-header">
        <h2 className="projects-title">My Brightest Creations</h2>
        <p className="projects-subtitle">
          A showcase of my latest projects, highlighting thoughtful design, clear strategy, and impactful results.
        </p>
      </div>

      <div ref={gridRef} className="projects-grid">
        {projects.map((p, i) => {
          const isExpanded = expandedProjectIndex === i;
          return (
            <div key={i} className="project-item">
              <div 
                className="project-card-visual" 
                onClick={() => setExpandedProjectIndex(isExpanded ? null : i)}
                style={{ position: 'relative' }}
              >
                <Image src={p.image} alt={p.title} className="project-image" />
                
                {isExpanded && (
                  <div className="project-card-details-overlay" onClick={(e) => e.stopPropagation()}>
                    <button 
                      className="card-details-close" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedProjectIndex(null);
                      }}
                    >
                      ×
                    </button>
                    <div className="card-details-title">Key Features</div>
                    <ul className="card-details-list">
                      {p.description.map((desc, idx) => (
                        <li key={idx} className="card-details-item">
                          <span className="bullet">•</span>
                          <span className="desc-text">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3 
                  className="project-item-title" 
                  onClick={() => setExpandedProjectIndex(isExpanded ? null : i)} 
                  style={{ cursor: 'pointer' }}
                >
                  {p.title}
                </h3>
                <p className="project-item-subtitle">{p.subtitle}</p>
                <div className="project-tech-list">
                  {p.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="project-tech-pill">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button 
                    onClick={() => setExpandedProjectIndex(isExpanded ? null : i)}
                    className="action-btn btn-details"
                  >
                    {isExpanded ? "Hide Details" : "Details"}
                  </button>
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-btn btn-launch"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .projects-section {
          background-color: #e6e6e6;
          padding: 8rem 4rem;
          color: #111;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .projects-header {
          width: 100%;
          max-width: 1400px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 5rem;
        }

        .projects-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          font-weight: 400;
          margin: 0 0 1.5rem 0;
          letter-spacing: -2px;
          color: #111;
          line-height: 1.05;
        }

        .projects-subtitle {
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          color: #444;
          line-height: 1.5;
          margin: 0;
          max-width: 700px;
        }

        .projects-grid {
          width: 100%;
          max-width: 1400px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem 3.5rem;
        }

        .project-item {
          color: inherit;
          display: flex;
          flex-direction: column;
        }

        .project-card-visual {
          width: 100%;
          aspect-ratio: 1.6;
          border-radius: 32px;
          overflow: hidden;
          background: radial-gradient(circle at 10% 20%, #ff5a36 0%, transparent 55%),
                      radial-gradient(circle at 90% 80%, #3fa9f5 0%, transparent 55%),
                      radial-gradient(circle at 80% 20%, #ab64f5 0%, transparent 45%),
                      linear-gradient(135deg, #ffc3a0 0%, #ade8f4 100%);
          padding: 1.8rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          border-radius: 12px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-item:hover .project-card-visual {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .project-item:hover .project-image {
          transform: scale(1.03);
        }

        .project-info {
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .project-item-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 2.2rem;
          font-weight: 400;
          margin: 0;
          color: #111;
          letter-spacing: -0.5px;
        }

        .project-item-subtitle {
          font-size: 0.95rem;
          color: #333;
          margin: 0;
          font-weight: 500;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.2rem;
        }

        .project-tech-pill {
          font-size: 0.75rem;
          color: #333;
          border: 1px solid #a0a0a0;
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 600;
        }

        /* Action Buttons Row */
        .project-actions {
          display: flex;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .action-btn {
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-details {
          background: transparent;
          border: 1px solid #c0c0c0;
          color: #444;
        }

        .btn-details:hover {
          border-color: #111;
          color: #111;
          background: rgba(0, 0, 0, 0.02);
        }

        .btn-launch {
          background: #111;
          border: 1px solid #111;
          color: #fff !important;
        }

        .btn-launch:hover {
          background: #333;
          border-color: #333;
          transform: translateY(-1px);
        }

        /* Card Details Overlay Styles */
        .project-card-details-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 1.5rem;
          box-sizing: border-box;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow-y: auto;
          color: #111;
          animation: cardOverlayFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardOverlayFadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .card-details-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f0f0f0;
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #555;
          transition: all 0.2s ease;
          z-index: 20;
        }

        .card-details-close:hover {
          background: #e0e0e0;
          color: #111;
        }

        .card-details-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-primary, #556b2f);
          margin-bottom: 0.8rem;
          margin-top: 0.5rem;
        }

        .card-details-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .card-details-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          line-height: 1.5;
          color: #333;
        }

        .card-details-item .bullet {
          color: var(--accent-primary, #556b2f);
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .projects-section {
            padding: 6rem 2rem;
          }
          .project-card-visual {
            border-radius: 24px;
          }
          .project-item-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}


