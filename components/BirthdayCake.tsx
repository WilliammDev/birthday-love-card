import React from 'react';

const BirthdayCake: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h3 className="font-dancing text-2xl text-purple-700 mb-2">Make a wish!</h3>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 sm:w-48 sm:h-48">
            {/* Flames */}
            <path d="M40 33 Q 42.5 28, 45 33 T 50 33 T 55 33 T 60 33" fill="none" />
            <ellipse cx="42.5" cy="27" rx="1.5" ry="4" fill="#FFD700" className="animate-flicker" style={{ animationDelay: '0.1s' }}/>
            <ellipse cx="42.5" cy="27" rx="0.8" ry="2.5" fill="#FFFFFF" className="animate-flicker" style={{ animationDelay: '0.1s' }}/>
            
            <ellipse cx="50" cy="25" rx="1.5" ry="4.5" fill="#FFD700" className="animate-flicker" />
            <ellipse cx="50" cy="25" rx="0.8" ry="3" fill="#FFFFFF" className="animate-flicker" />

            <ellipse cx="57.5" cy="27" rx="1.5" ry="4" fill="#FFD700" className="animate-flicker" style={{ animationDelay: '0.2s' }}/>
            <ellipse cx="57.5" cy="27" rx="0.8" ry="2.5" fill="#FFFFFF" className="animate-flicker" style={{ animationDelay: '0.2s' }}/>

            {/* Candles */}
            <rect x="41.5" y="30" width="2" height="10" fill="#f87171" />
            <rect x="49" y="30" width="2" height="10" fill="#60a5fa" />
            <rect x="56.5" y="30" width="2" height="10" fill="#f87171" />

            {/* Top Icing */}
            <path d="M30 40 Q 50 50, 70 40 L 70 45 Q 50 55, 30 45 Z" fill="#FFFFFF" />
            
            {/* Top Cake Layer */}
            <path d="M30 45 L 70 45 L 72 60 L 28 60 Z" fill="#fbcfe8" />
            <ellipse cx="50" cy="45" rx="20" ry="5" fill="#fbcfe8" />
            <ellipse cx="50" cy="45" rx="20" ry="5" fill="none" stroke="#e11d48" strokeWidth="0.5" />
            
            {/* Middle Icing */}
            <path d="M28 60 Q 50 70, 72 60 L 72 65 Q 50 75, 28 65 Z" fill="#FFFFFF" />

            {/* Bottom Cake Layer */}
            <path d="M28 65 L 72 65 L 75 85 L 25 85 Z" fill="#fbcfe8" />
            <ellipse cx="50" cy="65" rx="22" ry="5" fill="#fbcfe8" />
            <ellipse cx="50" cy="65" rx="22" ry="5" fill="none" stroke="#e11d48" strokeWidth="0.5" />

            {/* Plate */}
            <ellipse cx="50" cy="85" rx="28" ry="5" fill="#e5e7eb" />
            
            {/* Sprinkles */}
            <circle cx="38" cy="48" r="0.8" fill="#34d399" />
            <circle cx="45" cy="52" r="0.8" fill="#60a5fa" />
            <circle cx="55" cy="47" r="0.8" fill="#fbbf24" />
            <circle cx="62" cy="50" r="0.8" fill="#a78bfa" />
            <circle cx="50" cy="55" r="0.8" fill="#f472b6" />
            
            <circle cx="35" cy="70" r="1" fill="#a78bfa" />
            <circle cx="43" cy="75" r="1" fill="#f472b6" />
            <circle cx="50" cy="69" r="1" fill="#34d399" />
            <circle cx="58" cy="78" r="1" fill="#60a5fa" />
            <circle cx="65" cy="72" r="1" fill="#fbbf24" />
        </svg>
    </div>
  );
};

export default BirthdayCake;