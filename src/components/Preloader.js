import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let value = 0;
    const tick = setInterval(() => {
      value += Math.random() * 14 + 6;
      if (value >= 100) {
        value = 100;
        clearInterval(tick);
        setProgress(100);
        setTimeout(() => setHiding(true), 280);
        setTimeout(() => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 900);
      } else {
        setProgress(Math.floor(value));
      }
    }, 120);

    return () => {
      clearInterval(tick);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${
        hiding ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-busy="true"
      aria-label="Loading BITS International School"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-preloader-spin-slow" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-white/80 border-r-white/40 animate-preloader-spin" />
          <div className="absolute inset-5 rounded-full border border-dashed border-primary-200/50 animate-preloader-spin-reverse" />

          <div className="absolute inset-8 md:inset-10 rounded-full bg-white shadow-2xl shadow-primary-950/40 flex items-center justify-center overflow-hidden animate-preloader-pulse">
            <img
              src={logo}
              alt="BITS International School"
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
        </div>

        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mb-2 animate-fade-up">
          BITS International School
        </h1>
        <p
          className="text-primary-200 text-sm md:text-base tracking-[0.25em] uppercase mb-10 animate-fade-up"
          style={{ animationDelay: '120ms' }}
        >
          Excellence in Education
        </p>

        <div className="w-56 md:w-72">
          <div className="h-1.5 rounded-full bg-white/15 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-300 via-white to-primary-200 transition-[width] duration-200 ease-out shadow-[0_0_12px_rgba(255,255,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-white/70 font-medium tracking-wider">
            <span className="animate-preloader-dots">Loading</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
