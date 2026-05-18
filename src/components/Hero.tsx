"use client";

import React from 'react';

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000', overflow: 'hidden' }}>
      {/* Grey Background Shape */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#d9d9d9',
        clipPath: 'polygon(0 0, 52% 0, 42% 100%, 0 100%)',
        zIndex: 1
      }}></div>

      {/* Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        display: 'flex', 
        height: '100vh', 
        width: '100%',
        padding: '0 8%' 
      }}>
        {/* Left Content */}
        <div style={{ 
          flex: '0 0 50%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center' 
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#000', 
            marginBottom: '1rem', 
            fontFamily: 'system-ui, -apple-system, sans-serif' 
          }}>
            Hi, I am
          </h2>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
            fontWeight: 800, 
            color: '#000', 
            marginBottom: '0.5rem', 
            lineHeight: 1.1, 
            letterSpacing: '-1.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Ashfak KP
          </h1>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700, 
            color: '#888', 
            marginBottom: '3.5rem',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Front-end Developer / UI Designer
          </h3>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <SocialIcon type="email" />
            <SocialIcon type="github" />
            <SocialIcon type="linkedin" />
          </div>
        </div>
        
        {/* Right Content - Empty as requested */}
        <div style={{ flex: '0 0 50%' }}></div>
      </div>
    </section>
  );
}

function SocialIcon({ type }: { type: string }) {
  const getIcon = () => {
    switch(type) {
      case 'email':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
          </svg>
        );
      case 'github':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a href="#" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '45px',
      height: '45px',
      backgroundColor: '#d9d9d9',
      borderRadius: '2px',
      color: '#000',
      boxShadow: '4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px rgba(255,255,255,0.8)',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0,0,0,0.15), -6px -6px 12px rgba(255,255,255,0.9)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px rgba(255,255,255,0.8)';
    }}
    >
      {getIcon()}
    </a>
  );
}
