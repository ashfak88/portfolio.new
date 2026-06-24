import React from 'react';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          <span className="gradient-text">Work Experience</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Kodlar Innovations */}
          <div className="glass-card" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Full Stack Developer</h3>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', fontWeight: 500 }}>Kodlar Innovations</h4>
              </div>
              <span style={{ 
                background: ' rgba(107, 85, 47, 0.1)', 
                color: 'var(--accent-primary)',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                May 2026 – Present
              </span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Collaborated within a cross-functional group to architect and deploy production-ready web features.</li>
              <li>Participated in regular sprint planning, code reviews, and system design discussions to build scalable tools.</li>
            </ul>
          </div>

          {/* Bridgeon */}
          <div className="glass-card" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>MERN Stack Intern</h3>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', fontWeight: 500 }}>Bridgeon</h4>
              </div>
              <span style={{ 
                background: ' rgba(107, 85, 47, 0.1)', 
                color: 'var(--accent-primary)',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                Aug 2025 – Present
              </span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Developed and enhanced responsive user interfaces using React.js, JavaScript, and Redux.</li>
              <li>Collaborated with cross-functional teams to build reusable UI components and integrate RESTful APIs.</li>
              <li>Improved application performance and optimized rendering for better user experience.</li>
              <li>Expanded into full-stack development using Node.js, Express.js, and MongoDB.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
