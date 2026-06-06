"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiGit, SiGithub, SiPostman } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const coreSkills = [
  {
    title: 'HTML & CSS',
    desc: 'Markup and styling architectures for precise, responsive layouts.',
    icons: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <SiHtml5 size={32} color="#111" />
        <SiCss size={32} color="#111" />
      </div>
    )
  },
  {
    title: 'JavaScript',
    desc: 'Core logic and dynamic interactivity for modern web functionality.',
    icons: <SiJavascript size={32} color="#111" />
  },
  {
    title: 'React.js',
    desc: 'Component-driven UI architecture for dynamic user experiences.',
    icons: <SiReact size={32} color="#111" />
  },
  {
    title: 'Node.js & Express',
    desc: 'Scalable backend services and robust RESTful API development.',
    icons: <SiNodedotjs size={32} color="#111" />
  },
  {
    title: 'MongoDB',
    desc: 'NoSQL document storage for flexible, high-performance data modeling.',
    icons: <SiMongodb size={32} color="#111" />
  },
  {
    title: 'Next.js',
    desc: 'Server-rendered React frameworks for production-grade applications.',
    icons: <SiNextdotjs size={32} color="#111" />
  },
  {
    title: 'Tailwind CSS',
    desc: 'Utility-first styling systems for rapid, constraint-based design.',
    icons: <SiTailwindcss size={32} color="#111" />
  },
  {
    title: 'TypeScript',
    desc: 'Static typing architectures for robust, error-free JavaScript applications.',
    icons: <SiTypescript size={32} color="#111" />
  },
  {
    title: 'Version Control',
    desc: 'Collaborative repository management and source code tracking.',
    icons: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <SiGit size={32} color="#111" />
        <SiGithub size={32} color="#111" />
      </div>
    )
  },
  {
    title: 'API Testing',
    desc: 'Endpoint testing and comprehensive documentation environments.',
    icons: <SiPostman size={32} color="#111" />
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animate in
    gsap.fromTo(headerRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* Header aligned with About section aesthetic */}
        <div ref={headerRef} className="skills-header">
          <h2 className="skills-title">
            Technical Arsenal
          </h2>
          <div className="skills-header-info">
            Systematic problem solving <br/>
            Clean code practices
          </div>
        </div>

        {/* Architectural Hairline Grid */}
        <div ref={gridRef} className="skills-grid">
          {coreSkills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center' }}>
                {skill.icons}
              </div>
              <h3 style={{ 
                color: '#111', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                marginBottom: '1rem',
                fontFamily: "'Times New Roman', Times, serif",
                letterSpacing: '-0.5px'
              }}>
                {skill.title}
              </h3>
              <p style={{ 
                color: '#555', 
                fontSize: '0.85rem', 
                lineHeight: 1.6,
                margin: 0
              }}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skills-section {
          background-color: #e6e6e6; 
          padding: 8rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
        .skills-container {
          width: 100%;
          max-width: 1600px;
        }
        .skills-header {
          margin-bottom: 4rem; 
          display: flex; 
          justify-content: space-between; 
          align-items: flex-end; 
          border-bottom: 1px solid #c0c0c0; 
          padding-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .skills-title {
          font-size: clamp(2rem, 3.2vw, 3.6rem); 
          font-weight: 400; 
          font-family: 'Times New Roman', Times, serif;
          color: #111;
          margin: 0;
          letter-spacing: -1px;
          line-height: 1;
        }
        .skills-header-info {
          color: #555;
          font-size: 0.85rem;
          text-align: right;
          line-height: 1.6;
        }
        .skills-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
          border-top: 1px solid #c0c0c0;
          border-left: 1px solid #c0c0c0;
        }
        .skill-card {
          background-color: #e6e6e6; 
          padding: 3.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          border-right: 1px solid #c0c0c0;
          border-bottom: 1px solid #c0c0c0;
          transition: background-color 0.3s ease;
        }
        .skill-card:hover {
          background-color: #dfdfdf;
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 4rem 1.5rem;
          }
          .skills-header {
            margin-bottom: 2.5rem;
            padding-bottom: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .skills-header-info {
            text-align: left;
          }
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
          .skill-card {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
