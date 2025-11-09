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
    setTimeout(onOpen, 1200); 
  };

  return (
    <div className="relative">
      <FloatingHearts />
      <div 
        className={`relative w-[300px] h-[200px] sm:w-[350px] sm:h-[233px] cursor-pointer group animate-pulse-gentle`}
        style={{ perspective: '1000px' }}
        onClick={handleClick}
        aria-label="An envelope for you, click to open"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      >
        <style>
          {`
            @keyframes fadeOutEnvelope {
              from { opacity: 1; transform: scale(1); }
              to { opacity: 0; transform: scale(0.8); }
            }
            .animate-fade-out-envelope {
              animation: fadeOutEnvelope 1s ease-in 0.2s forwards;
            }
          `}
        </style>
        <div className={`${isOpening ? 'animate-fade-out-envelope' : ''}`}>
          {/* Envelope back */}
          <div className="absolute w-full h-full bg-rose-200 rounded-lg shadow-xl"></div>
          
          {/* The letter inside (just a peek) */}
          <div className={`absolute top-0 left-0 w-full h-full bg-rose-50 rounded-lg shadow-inner transition-transform duration-700 ease-in-out ${isOpening ? '-translate-y-24' : 'translate-y-0'} group-hover:-translate-y-2`}>
            <div className="p-4 text-center">
                <h2 className="font-dancing text-2xl text-rose-800">For My Soul</h2>
            </div>
          </div>

          {/* Envelope flap */}
          <div className="absolute top-0 left-0 w-full h-1/2 origin-top transition-transform duration-700 ease-in-out" style={{ transformStyle: 'preserve-3d', transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)' }}>
            <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
              {/* Flap front */}
              <div 
                className="absolute top-0 left-0 w-full h-full bg-rose-300 rounded-t-lg"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                }}
              ></div>
            </div>
            <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
                {/* Flap back (inside) */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-rose-200 rounded-t-lg"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                  }}
                ></div>
            </div>
          </div>
          
          {/* Envelope front */}
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-rose-300 rounded-b-lg">
            {/* Left triangle */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-rose-200" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
            {/* Right triangle */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-200" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
          </div>

          {/* Seal */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] transition-opacity duration-300 ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
            <HeartIcon className="w-8 h-8 text-red-500" />
          </div>
        </div>


        {/* "Click to Open" text */}
        <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-rose-800/80 font-semibold transition-opacity duration-300 ${isOpening ? 'opacity-0' : 'opacity-80'}`}>
          Click to Open
        </div>

      </div>
    </div>
  );
};

export default Envelope;