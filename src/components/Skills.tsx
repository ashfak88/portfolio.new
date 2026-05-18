import React from 'react';

const skills = [
  "HTML5", "CSS3", "Next.js", "Node.js", "MVC Architecture", "Git", "Postman",
  "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "Express.js", "REST APIs", "GitHub", "Cloudinary / AWS S3",
  "React.js", "Redux", "MongoDB", "Socket.IO", "WebRTC", "JWT Authentication", "CRUD Operations"
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          <span className="gradient-text">Area of Expertise</span>
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
          gap: '1rem' 
        }}>
          {skills.map((skill, index) => (
            <div key={index} className="glass-card" style={{ padding: '1rem', textAlign: 'center', transition: 'transform 0.2s', cursor: 'default' }}>
              <span style={{ fontWeight: 500 }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
