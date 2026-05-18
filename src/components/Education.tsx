import React from 'react';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
              <span className="gradient-text">Education</span>
            </h2>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Bachelor of Arts in English</h3>
              <p style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Indira Gandhi National Open University</p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
              <span className="gradient-text">Achievements</span>
            </h2>
            <div className="glass-card">
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>Solved <strong>60+ algorithmic problems</strong> on LeetCode, enhancing problem-solving skills and data structure proficiency.</li>
                <li>Built multiple <strong>full-stack MERN applications</strong>, demonstrating end-to-end development capabilities.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
