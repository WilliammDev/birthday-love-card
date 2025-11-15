import React, { useState, useRef, useEffect } from 'react';
import LoveMessage from './components/LoveMessage';
import MemoryCake from './components/MemoryCake';
import HeartIcon from './components/icons/HeartIcon';
import FloatingParticles from './components/FloatingParticles';

// ** HƯỚNG DẪN THÊM NHẠC CỦA BẠN **
// 1. Tạo một thư mục public tên là 'assets' trong dự án của bạn.
// 2. Thêm hai tệp mp3 của bạn vào thư mục đó (ví dụ: 'background.mp3', 'celebrate.mp3').
// 3. Các biến dưới đây đã được thiết lập để tải các tệp này.

// Nhạc nền nhẹ nhàng bắt đầu sau khi người dùng nhấp vào màn hình ban đầu
const initialMusicUrl = '/assets/background.mp3';
// Nhạc chúc mừng hơn phát sau khi nhấp vào bánh
const wishMusicUrl = '/assets/celebrate.mp3';


const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isExperienceStarted, setIsExperienceStarted] = useState(false);
  const initialAudioRef = useRef<HTMLAudioElement | null>(null);
  const wishAudioRef = useRef<HTMLAudioElement | null>(null);


  useEffect(() => {
    // Khởi tạo nhạc nền ban đầu nếu có URL.
    if (initialMusicUrl) {
      initialAudioRef.current = new Audio(initialMusicUrl);
      initialAudioRef.current.loop = true;
      initialAudioRef.current.volume = 0.5; // Bắt đầu với âm lượng nhỏ hơn
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
    setShowMessage(true);

    // Dừng nhạc ban đầu
    initialAudioRef.current?.pause();

    // Phát nhạc "ước"
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
        {!isExperienceStarted ? (
          <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
              <div className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-500 flex flex-col items-center gap-6">
                  <h1 className="font-dancing text-4xl sm:text-5xl font-bold text-rose-800 tracking-wide">
                      Một lời nhắn đặc biệt đang chờ bạn...
                  </h1>
                  <p className="text-lg text-gray-600">Nhấn vào trái tim để mở thiệp nhé.</p>
                  <button
                      onClick={handleStartExperience}
                      className="mt-4 animate-heartbeat transition-transform duration-300 hover:scale-110"
                      aria-label="Bắt đầu trải nghiệm và phát nhạc"
                  >
                      <HeartIcon className="w-20 h-20 text-red-400 hover:text-red-500 transition-colors" />
                  </button>
              </div>
          </div>
        ) : (
          <>
            <main className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-4 transition-all duration-500 animate-fade-in-up flex flex-col items-center gap-2">
              <LoveMessage show={showMessage} />
              <MemoryCake onClick={handleCakeClick} />
            </main>
            <footer className="mt-2 text-center text-rose-800/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="flex items-center justify-center gap-2">
                Làm với <HeartIcon className="w-4 h-4 text-red-500 animate-pulse-gentle" /> dành cho tình yêu của đời tôi.
              </p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default App;