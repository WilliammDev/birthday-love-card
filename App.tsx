import React, { useState, useRef, useEffect } from 'react';
import LoveMessage from './components/LoveMessage';
import MemoryCake from './components/MemoryCake';
import HeartIcon from './components/icons/HeartIcon';

// ** HOW TO ADD MUSIC **
// 1. Create a folder named 'assets' in your project.
// 2. Add your music file (e.g., 'our-song.mp3') to that folder.
// 3. Update the 'musicUrl' variable below to point to your file.
//    Example: const musicUrl = '/assets/our-song.mp3';
const musicUrl = ''; // <-- IMPORTANT: Add your music file path here to enable background music.

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
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

  const handleCakeClick = () => {
    setShowMessage(true);
     // Only play audio if it was successfully initialized and is currently paused
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed. This can happen if the audio file is missing or browser policies prevent autoplay:", error);
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-200 to-pink-200 text-gray-800 flex flex-col items-center justify-center transition-all duration-1000 overflow-hidden p-4"
      style={{
        paddingTop: 'calc(1rem + env(safe-area-inset-top))',
        paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
        paddingLeft: 'calc(1rem + env(safe-area-inset-left))',
        paddingRight: 'calc(1rem + env(safe-area-inset-right))',
      }}
    >
      <main className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in-up flex flex-col items-center gap-8">
        <LoveMessage show={showMessage} />
        <MemoryCake onClick={handleCakeClick} />
      </main>
      <footer className="mt-8 text-center text-rose-800/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <p className="flex items-center justify-center gap-2">
          Made with <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" /> for the love of my life.
        </p>
      </footer>
    </div>
  );
};

export default App;
