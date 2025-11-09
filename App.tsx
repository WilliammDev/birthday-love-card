import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import LoveMessage from './components/LoveMessage';
import ImageCorner from './components/ImageCorner';
import BirthdayCake from './components/BirthdayCake';
import HeartIcon from './components/icons/HeartIcon';
import Envelope from './components/Envelope';

// ** HOW TO ADD MUSIC **
// 1. Create a folder named 'assets' in your project.
// 2. Add your music file (e.g., 'our-song.mp3') to that folder.
// 3. Update the 'musicUrl' variable below to point to your file.
//    Example: const musicUrl = '/assets/our-song.mp3';
const musicUrl = ''; // <-- IMPORTANT: Add your music file path here to enable background music.

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only initialize audio if a URL is provided by the user.
    if (musicUrl) {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
    }

    // Cleanup audio on component unmount
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    }
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    // Only play audio if it was successfully initialized
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        // Autoplay might be blocked by the browser. The user's click on the
        // envelope should be enough interaction to allow it, but we'll log errors.
        console.error("Audio playback failed. This can happen if the audio file is missing or browser policies prevent autoplay:", error);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-200 to-pink-200 text-gray-800 p-4 flex flex-col items-center justify-center transition-all duration-1000 overflow-hidden">
      {!isOpen ? (
        <Envelope onOpen={handleOpenEnvelope} />
      ) : (
        <>
          <main className="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in-up">
            <Header />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="space-y-8">
                <LoveMessage />
                <BirthdayCake />
              </div>
              <ImageCorner />
            </div>
          </main>
          <footer className="mt-8 text-center text-rose-800/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="flex items-center justify-center gap-2">
              Made with <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" /> for the love of my life.
            </p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;