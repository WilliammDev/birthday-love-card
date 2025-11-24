import React, { useState, useRef, useEffect } from 'react';
import LoveMessage from './components/LoveMessage';
import MemoryCake from './components/MemoryCake';
import PhotoFrame from './components/PhotoFrame';
import HeartIcon from './components/icons/HeartIcon';
import FloatingParticles from './components/FloatingParticles';

// ** HƯỚNG DẪN THÊM NHẠC CỦA BẠN **
// 1. Dán URL nhạc của bạn vào đây hoặc...
// 2. Tạo một thư mục public tên là 'assets' trong dự án của bạn.
// 3. Thêm các tệp mp3 của bạn vào thư mục đó (ví dụ: 'background.mp3', 'celebrate.mp3').
// 4. Cập nhật các biến dưới đây để trỏ đến tệp của bạn (ví dụ: '/assets/celebrate.mp3').

// Nhạc nền nhẹ nhàng bắt đầu sau khi người dùng nhấp vào màn hình ban đầu
const initialMusicUrl = 'https://cdn.pixabay.com/audio/2025/06/09/audio_50b8be7252.mp3';
// Nhạc chúc mừng hơn phát sau khi nhấp vào bánh
const wishMusicUrl = '/assets/media/Nếu Như Có Hai Trái Tim.mp3';


const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isExperienceStarted, setIsExperienceStarted] = useState(false);
  const [cakeZoomed, setCakeZoomed] = useState(false);
  const initialAudioRef = useRef<HTMLAudioElement | null>(null);
  const wishAudioRef = useRef<HTMLAudioElement | null>(null);


  useEffect(() => {
    // Khởi tạo nhạc nền ban đầu nếu có URL.
    if (initialMusicUrl) {
      initialAudioRef.current = new Audio(initialMusicUrl);
      initialAudioRef.current.loop = true;
      initialAudioRef.current.volume = 0.5;
    }

    // Tải trước nhạc "ước" nếu có URL.
    if (wishMusicUrl) {
      wishAudioRef.current = new Audio(wishMusicUrl);
      wishAudioRef.current.loop = true;
      wishAudioRef.current.volume = 0.7;
    }

    // Dọn dẹp audio khi component bị unmount
    return () => {
      initialAudioRef.current?.pause();
      initialAudioRef.current = null;
      wishAudioRef.current?.pause();
      wishAudioRef.current = null;
    }
  }, []);

  const handleStartExperience = () => {
    setIsExperienceStarted(true);
    if (initialAudioRef.current?.paused) {
      initialAudioRef.current.play().catch(error => {
        console.warn("Không thể phát nhạc nền ban đầu:", error);
      });
    }
  };

  const handleCakeClick = () => {
    // First click: Zoom cake to center
    if (!cakeZoomed) {
      setCakeZoomed(true);
      return;
    }

    // Second click (blow): Show message
    setShowMessage(true);
    initialAudioRef.current?.pause();
    wishAudioRef.current?.play().catch(error => {
      console.error("Không thể phát nhạc chúc mừng:", error);
    });
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-rose-100 via-purple-200 to-pink-200 text-gray-800 flex flex-col items-center justify-center transition-all duration-1000 overflow-hidden p-4"
      style={{
        paddingTop: 'calc(1rem + env(safe-area-inset-top))',
        paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
        paddingLeft: 'calc(1rem + env(safe-area-inset-left))',
        paddingRight: 'calc(1rem + env(safe-area-inset-right))',
      }}
    >
      <FloatingParticles />
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* SCREEN 1: Landing */}
        {!isExperienceStarted ? (
          <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
            <div className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-500 flex flex-col items-center gap-6">
              <h1 className="font-dancing text-4xl sm:text-5xl font-bold text-rose-800 tracking-wide">
                Một lời yêu thương đặc biệt đang chờ em...
              </h1>
              {/* <p className="text-lg text-gray-600">Nhấn vào trái tim nhé.</p> */}
              <button
                onClick={handleStartExperience}
                className="animate-heartbeat transition-transform duration-300 hover:scale-110"
                aria-label="Bắt đầu trải nghiệm và phát nhạc"
              >
                <HeartIcon className="w-20 h-20 text-red-400 hover:text-red-500 transition-colors" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* SCREEN 2a: Normal layout - photo + cake */}
            {!cakeZoomed && !showMessage && (
              <main className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-4 transition-all duration-500 animate-fade-in-up flex flex-col items-center gap-2">
                <LoveMessage show={false} />
                <MemoryCake onClick={handleCakeClick} />
              </main>
            )}

            {/* SCREEN 2b: Zoomed cake ONLY in center with blur */}
            {cakeZoomed && !showMessage && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 via-purple-200/80 to-pink-200/80 backdrop-blur-xl" />

                <div className="relative z-10 animate-cake-zoom flex flex-col items-center w-full">
                  {/* Simplified Text Area - Cake is Spotlight */}
                  <div className="text-center mb-10 w-full max-w-[90%] mx-auto">
                    {/* Title removed as requested */}

                    <p className="text-sm sm:text-lg text-rose-700/80 animate-fade-in-up font-medium" style={{ animationDelay: '0.3s' }}>
                      (Thổi nến nàaaa ✨)
                    </p>
                  </div>

                  {/* Cake zoomed in larger */}
                  <div className="transform scale-125 sm:scale-150 transition-transform duration-700">
                    <MemoryCake onClick={handleCakeClick} hidePhoto={true} enableBlowAnimation={true} />
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: Photo + Message (no cake) */}
            {showMessage && (
              <>
                <main className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-4 transition-all duration-500 animate-fade-in-up flex flex-col items-center gap-2">
                  <PhotoFrame folder="second" />
                  <LoveMessage show={true} />
                </main>
                <footer className="mt-2 text-center text-rose-800/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <p className="flex items-center justify-center gap-2">
                    Bằng <HeartIcon className="w-4 h-4 text-red-500 animate-pulse-gentle" /> dành cho em.
                  </p>
                </footer>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;