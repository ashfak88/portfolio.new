"use client";

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function LoadingScreen() {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only run on client after mount to prevent hydration mismatch
    const tl = gsap.timeline({
      onComplete: () => setIsComplete(true)
    });

    // 1. Text slides up from hidden overflow
    if (textRef.current) {
      tl.fromTo(textRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power4.out" }
      );
    }

    // 2. Progress bar fills up
    if (barRef.current) {
      tl.to(barRef.current, {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut"
      }, "-=0.5");
    }

    // 3. Container slides up and out of view revealing the Hero
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.3
    });

  }, { scope: containerRef });

  if (isComplete) return null;

  return (
    <div ref={containerRef} style={{
      position: 'fixed',
      top: 0, 
      left: 0,
      width: '100%', 
      height: '100vh',
      backgroundColor: '#000', // Stark black matches the Hero section perfectly
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      willChange: 'transform'
    }}>
      
      {/* Text Container with hidden overflow for mask effect */}
      <div style={{ overflow: 'hidden', marginBottom: '3rem', padding: '0 1rem' }}>
        <div ref={textRef} style={{ display: 'flex', gap: '0.2rem', paddingLeft: '0.4em' }}>
          {"WELCOME".split('').map((char, i) => (
            <span key={i} style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',
              color: '#fff',
              letterSpacing: '0.4em',
              fontWeight: 600,
              textTransform: 'uppercase',
              display: 'inline-block'
            }}>
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Minimalist Progress Line */}
      <div style={{
        width: '300px',
        maxWidth: '80%',
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        position: 'relative'
      }}>
        <div ref={barRef} style={{
          position: 'absolute',
          top: 0, 
          left: 0,
          height: '100%',
          width: '0%',
          backgroundColor: '#fff'
        }} />
      </div>
      
    </div>
  );
}
