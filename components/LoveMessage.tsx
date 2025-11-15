import React from 'react';

interface LoveMessageProps {
  show: boolean;
}

const LoveMessage = ({ show }: LoveMessageProps) => {
  return (
    <section className="bg-rose-50/50 p-6 rounded-lg shadow-inner w-full flex flex-col justify-center transition-all duration-500">
      {show ? (
        <>
          <h1 className="font-dancing text-4xl sm:text-5xl font-bold text-rose-800 tracking-wide text-center animate-reveal-text">
            Happy Birthday, My Love
          </h1>
          <div className="text-gray-700 max-w-none font-dancing text-xl md:text-2xl space-y-6 leading-relaxed mt-6">
            <p className="animate-reveal-text" style={{ animationDelay: '0.5s' }}>
              My dearest love,
            </p>
            <p className="animate-reveal-text" style={{ animationDelay: '1.5s' }}>
              On this special day, the world shines brighter because you're in it. Every moment with you is a beautiful dream.
            </p>
            <p className="animate-reveal-text" style={{ animationDelay: '2.5s' }}>
              Happy Birthday to my amazing soulmate. I love you more than words can ever express.
            </p>
            <p className="text-right animate-reveal-text" style={{ animationDelay: '3.5s' }}>
              Forever and always, <br/>
              Your loving soulmate.
            </p>
          </div>
        </>
      ) : (
        <div className="text-center animate-fade-in-up">
          <h1 className="font-dancing text-4xl sm:text-5xl font-bold text-rose-800 tracking-wide">
            A Special Wish for My Love
          </h1>
        </div>
      )}
    </section>
  );
};

export default LoveMessage;