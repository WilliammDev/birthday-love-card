import React from 'react';

const LoveMessage: React.FC = () => {
  return (
    <section className="bg-rose-50/50 p-6 rounded-lg shadow-inner">
      <h2 className="font-dancing text-3xl text-purple-700 mb-4">A Note For You:</h2>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p>
          My dearest love,
        </p>
        <p>
          On this special day, the world shines a little brighter because it was blessed with your presence. Every moment with you feels like a beautiful dream I never want to wake up from. Your laughter is my favorite song, your smile my brightest sun, and your heart my only home.
        </p>
        <p>
          Thank you for being the incredible person you are. May your birthday be as wonderful and radiant as your soul. I love you more than words can ever express.
        </p>
        <p className="text-right">
          Forever and always, <br/>
          Your loving soulmate.
        </p>
      </div>
    </section>
  );
};

export default LoveMessage;
