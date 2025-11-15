import React from 'react';

const particles = [
  { icon: '💖', size: 'text-2xl' },
  { icon: '🌸', size: 'text-xl' },
  { icon: '🎶', size: 'text-lg' },
  { icon: '✨', size: 'text-md' },
  { icon: '❤️', size: 'text-xl' },
  { icon: '🌹', size: 'text-2xl' },
  { icon: '🎵', size: 'text-lg' },
  { icon: '💕', size: 'text-2xl' },
  { icon: '🌷', size: 'text-xl' },
  { icon: '🎼', size: 'text-lg' },
  { icon: '💝', size: 'text-xl' },
];

const particleCount = 20;

const FloatingParticles = () => {
  const renderedParticles = Array.from({ length: particleCount }).map((_, index) => {
    const particle = particles[Math.floor(Math.random() * particles.length)];
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 8}s`, // 8s to 18s duration
      animationDelay: `${Math.random() * 10}s`, // 0s to 10s delay
    };

    return (
      <span
        key={index}
        className={`absolute bottom-[-20px] animate-float-up-rotate text-shadow ${particle.size}`}
        style={style}
        aria-hidden="true"
      >
        {particle.icon}
      </span>
    );
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {renderedParticles}
    </div>
  );
};

export default FloatingParticles;
