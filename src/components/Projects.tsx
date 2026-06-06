"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FreeCone Platform",
    subtitle: "SaaS Freelance Marketplace Platform",
    link: "https://freecone.vercel.app/",
    image: "/freecone.png",
    gradient: "linear-gradient(135deg, #111 0%, #333 100%)",
    accentColor: "#111",
    accentGlow: "rgba(0, 0, 0, 0.05)",
    tagline: "Escrow-based freelance connections",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
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
    image: "/hotwheels.png",
    gradient: "linear-gradient(135deg, #111 0%, #333 100%)",
    accentColor: "#111",
    accentGlow: "rgba(0, 0, 0, 0.05)",
    tagline: "High-performance automotive marketplace",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
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
    image: "/lms.png",
    gradient: "linear-gradient(135deg, #111 0%, #333 100%)",
    accentColor: "#111",
    accentGlow: "rgba(0, 0, 0, 0.05)",
    tagline: "Kodlarr Innovations live system",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
      </svg>
    ),
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
      
      {/* Futuristic Projects Header */}
      <div ref={headerRef} className="projects-header">
        <h2 className="projects-title">Selected Exhibitions</h2>
        <p className="projects-subtitle">MERN Stack, SaaS Platforms & Enterprise Solutions</p>
      </div>

      {/* Breathtaking Grid Showcase */}
      <div ref={gridRef} className="projects-grid">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="project-card"
            style={{
              '--accent-color': p.accentColor,
              '--accent-gradient': p.gradient,
              '--accent-glow': p.accentGlow
            } as React.CSSProperties}
          >
            {/* Project Image Header */}
            <div className="project-card-header">
              <img 
                src={p.image} 
                alt={p.title} 
                className="project-card-image"
              />
            </div>

            {/* Premium Card Content */}
            <div className="project-card-content">
              {/* Pulsing Icon */}
              <div className="project-card-icon">
                {p.icon}
              </div>

              {/* Title & Tagline */}
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-card-subtitle">{p.subtitle}</p>

              {/* Custom-bulleted Description List */}
              <ul className="project-card-desc-list">
                {p.description.map((desc, idx) => (
                  <li key={idx} className="project-card-desc-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Custom Tech Stack Tags */}
              <div className="project-card-tech-list">
                {p.tech.map((tech, idx) => (
                  <span key={idx} className="project-card-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Glassmorphic Glowing Button */}
              <div className="project-card-footer">
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-launch-btn"
                >
                  Initialize Application ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-section {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8rem 2.5rem 4rem 2.5rem;
          box-sizing: border-box;
          overflow: hidden;
          background-color: #e6e6e6;
        }
        .projects-header {
          width: 100%;
          max-width: 1600px;
          margin-bottom: 4rem; 
          display: flex; 
          justify-content: space-between; 
          align-items: flex-end; 
          border-bottom: 1px solid #c0c0c0; 
          padding-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 2rem;
          box-sizing: border-box;
        }
        .projects-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(2rem, 3.2vw, 3.6rem);
          color: #111;
          margin: 0;
          letter-spacing: -1px;
          line-height: 1;
        }
        .projects-subtitle {
          color: #555;
          font-size: 0.85rem;
          text-align: right;
          line-height: 1.6;
          font-family: system-ui, -apple-system, sans-serif;
          letter-spacing: 0.5px;
          text-transform: none;
          font-weight: normal;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          max-width: 1600px;
          position: relative;
          z-index: 10;
          border-top: 1px solid #c0c0c0;
          border-left: 1px solid #c0c0c0;
        }
        .project-card {
          background: #e6e6e6;
          border-right: 1px solid #c0c0c0;
          border-bottom: 1px solid #c0c0c0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: background-color 0.3s ease;
          position: relative;
        }
        .project-card:hover {
          background-color: #dfdfdf;
        }
        
        .project-card-header {
          height: 170px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #dfdfdf;
          border-bottom: 1px solid #c0c0c0;
          transition: background-color 0.3s ease;
        }
        .project-card:hover .project-card-header {
          background: #d5d5d5;
        }
        
        .project-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-card-image {
          transform: scale(1.05);
        }

        .project-card-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid #c0c0c0;
          color: #111;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }
        .project-card:hover .project-card-icon {
          background: #111;
          border-color: transparent;
          color: #fff;
        }
        
        .project-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 0.3rem 0;
          letter-spacing: -0.5px;
          font-family: 'Times New Roman', Times, serif;
        }
        .project-card-subtitle {
          font-size: 0.82rem;
          color: #555;
          margin: 0 0 1.5rem 0;
          letter-spacing: 0.5px;
          font-weight: 500;
        }
        
        .project-card-desc-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
        }
        .project-card-desc-item {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #444;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .project-card-desc-item svg {
          flex-shrink: 0;
          margin-top: 5px;
        }

        .project-card-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 2rem;
          border-top: 1px solid #c0c0c0;
          padding-top: 1.5rem;
        }
        .project-card-tech-tag {
          font-size: 0.7rem;
          color: #444;
          font-weight: 600;
          letter-spacing: 0.5px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid #c0c0c0;
          padding: 4px 9px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .project-launch-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          border-radius: 8px;
          border: 1px solid #111;
          background: rgba(0, 0, 0, 0.02);
          color: #111;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .project-card:hover .project-launch-btn {
          background: #111;
          color: #fff !important;
        }

        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 750px) {
          .projects-section {
            padding: 5rem 1.5rem;
          }
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 2.5rem;
            padding-bottom: 1rem;
          }
          .projects-subtitle {
            text-align: left;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card-content {
            padding: 1.5rem;
          }
          .project-card-header {
            height: 140px;
          }
          .project-card-tech-list {
            margin-bottom: 1.5rem;
            padding-top: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}


