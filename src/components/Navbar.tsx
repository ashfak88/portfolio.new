import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '2.5rem 8%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '45%' }}>
          <div style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '-2px',
            color: '#000',
            display: 'flex',
            alignItems: 'center'
          }}>
            AK.
          </div>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '3rem', alignItems: 'center', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
          <a href="#about" style={{ color: '#fff', transition: 'opacity 0.2s', opacity: 0.9 }}>About me</a>
          <a href="#skills" style={{ color: '#fff', transition: 'opacity 0.2s', opacity: 0.9 }}>Skills</a>
          <a href="#portfolio" style={{ color: '#fff', transition: 'opacity 0.2s', opacity: 0.9 }}>Portfolio</a>
          <a href="#contact" style={{ 
            backgroundColor: '#fff', 
            color: '#000', 
            padding: '12px 28px', 
            borderRadius: '30px', 
            fontWeight: 800, 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '0.8rem',
            letterSpacing: '0.5px',
            marginLeft: '1rem'
          }}>CONTACT ME</a>
        </div>
      </div>
    </nav>
  );
}
