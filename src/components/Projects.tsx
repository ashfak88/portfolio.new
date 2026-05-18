import React from 'react';

const projects = [
  {
    title: "FreeCone — SaaS Freelance Marketplace Platform",
    link: "#",
    description: [
      "Developed a full-stack freelance marketplace connecting clients and freelancers with secure workflows.",
      "Implemented role-based authentication (Freelancer, Client, Admin) using JWT and encrypted passwords.",
      "Built real-time chat and notifications using Socket.IO.",
      "Integrated video calling using WebRTC for communication.",
      "Designed escrow-based payment workflow ensuring secure transactions.",
      "Implemented job proposals, search filters, ratings, reviews, and file sharing.",
      "Built an admin analytics dashboard for monitoring platform activity."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Tailwind CSS"]
  },
  {
    title: "Hotwheels E-commerce Platform — MERN Stack",
    link: "#",
    description: [
      "Developed a full-stack e-commerce application using MongoDB, Express.js, React.js, and Node.js.",
      "Designed RESTful APIs for product management, cart operations, and order processing.",
      "Implemented secure authentication and authorization using JWT.",
      "Integrated MongoDB database for managing users, products, and orders.",
      "Built responsive UI components and optimized performance."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"]
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.6rem' }}>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                  Live Link ↗
                </a>
              </div>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(85, 107, 47, 0.05)',
                    color: 'var(--accent-primary)',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    border: '1px solid rgba(85, 107, 47, 0.1)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
