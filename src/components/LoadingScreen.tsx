'use client';

import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Force loading screen to stay longer for verification if needed
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 1000);
      }, 2000); // 2 seconds minimum
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-text">
          <span className="char">L</span>
          <span className="char">O</span>
          <span className="char">A</span>
          <span className="char">D</span>
          <span className="char">I</span>
          <span className="char">N</span>
          <span className="char">G</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
