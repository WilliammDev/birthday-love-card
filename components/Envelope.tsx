import React, { useState } from 'react';
import HeartIcon from './icons/HeartIcon';

interface EnvelopeProps {
  onOpen: () => void;
}

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 4}s`, // 4s to 7s
      animationDelay: `${Math.random() * 5}s`,
      width: `${Math.random() * 15 + 10}px`, // 10px to 25px
    };
    return <HeartIcon key={i} className="absolute bottom-0 text-red-400/70 animate-float-up" style={style} />;
  });

  return <div className="absolute inset-0 z-0 pointer-events-none">{hearts}</div>;
};


const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Wait for the animation to play before calling onOpen
    setTimeout(onOpen, 1500); 
  };

  return (
    <div className="relative flex flex-col items-center">
      <FloatingHearts />
      <div
        className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[466px] cursor-pointer group"
        style={{ perspective: '1200px' }}
        onClick={handleClick}
        aria-label="A love card for you, click to open"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      >
        <style>
          {`
            @keyframes fadeOutCard {
              from { opacity: 1; transform: scale(1); }
              to { opacity: 0; transform: scale(0.8); }
            }
            .animate-fade-out-card {
              animation: fadeOutCard 1s ease-in 0.5s forwards;
            }
          `}
        </style>
        {/* Card Container */}
        <div className={`relative w-full h-full transition-transform duration-1000 ${isOpening ? 'animate-fade-out-card' : 'animate-pulse-gentle'}`} style={{ transformStyle: 'preserve-3d' }}>
            {/* Card Back (what you see behind the opened cover) */}
            <div className="absolute top-0 left-0 w-full h-full bg-rose-50 rounded-xl shadow-2xl flex items-center justify-center p-8">
               <div className="text-center">
                 <h2 className="font-dancing text-3xl text-rose-700">My love...</h2>
                 <p className="mt-4 text-gray-600">...every moment with you is a treasure.</p>
               </div>
            </div>

            {/* Card Front (the cover that swings open) */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-rose-200 rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out flex flex-col items-center justify-center p-8 origin-left`}
              style={{
                transform: isOpening ? 'rotateY(-160deg)' : 'rotateY(0deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              <HeartIcon className="w-20 h-20 text-red-500" />
              <h2 className="font-dancing text-4xl text-rose-800 mt-4">For My Soul</h2>
            </div>
        </div>
      </div>
       {/* "Click to Open" text */}
       <div className={`mt-8 text-rose-800/80 font-semibold transition-opacity duration-300 ${isOpening ? 'opacity-0' : 'opacity-80'}`}>
          Click to Open
        </div>
    </div>
  );
};

export default Envelope;
