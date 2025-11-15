import React, { useState, useEffect } from 'react';
import HeartIcon from './icons/HeartIcon';

// Tạo một thư mục 'assets' trong thư mục public của dự án
// và thêm hình ảnh của bạn vào đó. Sau đó, cập nhật đường dẫn trong mảng này.
const images = [
  // Ví dụ: '/assets/our-trip.jpg',
  // Ví dụ: '/assets/first-date.png',
  // Để minh họa, tôi đang sử dụng hình ảnh giữ chỗ từ Unsplash. Thay thế chúng bằng hình của bạn.
  'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1888&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop',
];

interface MemoryCakeProps {
  onClick: () => void;
}

const MemoryCake = ({ onClick }: MemoryCakeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishMade, setWishMade] = useState(false);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Thay đổi hình ảnh mỗi 5 giây
      return () => clearInterval(timer);
    }
  }, []);

  const handleWish = () => {
    if (!wishMade) {
      setWishMade(true);
      onClick();
    }
  }

  return (
    <section
      className="w-full max-w-sm flex flex-col items-center justify-center cursor-pointer group"
      onClick={handleWish}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleWish()}
      aria-label="Hãy ước và nhấn để xem lời nhắn"
    >
      {/* Khung ảnh kiểu Polaroid */}
      <div className="w-full transform -rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
        <div className="w-full aspect-square bg-white p-2 pb-10 rounded-lg relative animate-pulse-shadow shadow-lg">
          <div
            className="w-full h-full relative overflow-hidden bg-gray-100 rounded-md"
          >
            {images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Kỷ niệm đẹp ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10 animate-kenburns-gentle' : 'opacity-0 z-0'}`}
                />
              ))
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <HeartIcon className="w-12 h-12 text-rose-300 mb-2" />
                <p className="text-gray-500 font-dancing text-xl">Khoảnh khắc của đôi ta...</p>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Bánh và lời chúc bên dưới ảnh */}
      <div className="flex flex-col items-center mt-4 transition-transform duration-300 group-hover:scale-105">
        {!wishMade && (
            <h3 className="font-dancing text-2xl text-rose-600 group-hover:text-purple-700 transition-colors animate-pulse-gentle drop-shadow-md">
                Ước một điều đi!
            </h3>
        )}
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-36 h-36 -mt-2 drop-shadow-lg opacity-95">
          <defs>
            <filter id="cake-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#f472b6" floodOpacity="0.3" />
            </filter>
            
            <linearGradient id="pink-icing" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#fecdd3'}} />
              <stop offset="100%" style={{stopColor: '#fbcfe8'}} />
            </linearGradient>
            <linearGradient id="pink-side" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#fbcfe8'}} />
                <stop offset="50%" style={{stopColor: '#fecdd3'}} />
                <stop offset="100%" style={{stopColor: '#fbcfe8'}} />
            </linearGradient>
            <radialGradient id="top-icing-highlight">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="white-drip" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0f0f0" />
            </linearGradient>
             <linearGradient id="candle-grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="50%" stopColor="#f87171"/>
                <stop offset="100%" stopColor="#fbbf24"/>
            </linearGradient>
             <linearGradient id="candle-grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a5b4fc"/>
                <stop offset="50%" stopColor="#60a5fa"/>
                <stop offset="100%" stopColor="#a5b4fc"/>
            </linearGradient>
          </defs>
          
          <g filter="url(#cake-shadow)">
            {/* Tầng dưới */}
            <path d="M25 75 V 60 C 25 55, 75 55, 75 60 V 75 C 75 80, 25 80, 25 75" fill="url(#pink-side)" />
            <ellipse cx="50" cy="60" rx="25" ry="7" fill="url(#pink-icing)" />
            <ellipse cx="50" cy="75" rx="25" ry="3" fill="#000" opacity="0.1" filter="url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz48L2ZpbHRlcj48L3N2Zz4jYik=" />
            
            {/* Lớp kem chảy ở giữa */}
            <path d="M25,60 C 30,68 35,58 40,62 C 45,66 50,58 55,62 C 60,66 65,58 70,64 L 75,60 Z" fill="url(#white-drip)" />

            {/* Tầng trên */}
            <path d="M30 55 V 40 C 30 35, 70 35, 70 40 V 55 C 70 60, 30 60, 30 55" fill="url(#pink-side)" />
            <ellipse cx="50" cy="40" rx="20" ry="6" fill="#f9a8d4" />
            <ellipse cx="50" cy="55" rx="20" ry="3" fill="#000" opacity="0.1" filter="url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz48L2ZpbHRlcj48L3N2Zz4jYik=" />

            {/* Lớp kem chảy trên cùng */}
            <path d="M30,40 C 35,46 40,38 45,42 C 50,46 55,38 60,42 C 65,46 68,38 70,40 Z" fill="url(#white-drip)" />
            <ellipse cx="50" cy="40" rx="20" ry="6" fill="url(#top-icing-highlight)" />
          </g>

          {/* Nến */}
          <rect x="41.5" y="30" width="3" height="10" fill="url(#candle-grad-red)" rx="1.5"/>
          <rect x="48.5" y="28" width="3" height="12" fill="url(#candle-grad-blue)" rx="1.5"/>
          <rect x="55.5" y="30" width="3" height="10" fill="url(#candle-grad-red)" rx="1.5"/>

          {/* Lửa & Khói */}
          {!wishMade ? (
            <g>
              <ellipse cx="43" cy="27" rx="1.5" ry="4" fill="#FFD700" className="animate-flicker" style={{ animationDelay: '0.1s' }}/>
              <ellipse cx="43" cy="27" rx="0.8" ry="2.5" fill="#FFF" className="animate-flicker" style={{ animationDelay: '0.1s' }}/>
              
              <ellipse cx="50" cy="23" rx="1.5" ry="4.5" fill="#FFD700" className="animate-flicker" />
              <ellipse cx="50" cy="23" rx="0.8" ry="3" fill="#FFF" className="animate-flicker" />

              <ellipse cx="57" cy="27" rx="1.5" ry="4" fill="#FFD700" className="animate-flicker" style={{ animationDelay: '0.2s' }}/>
              <ellipse cx="57" cy="27" rx="0.8" ry="2.5" fill="#FFF" className="animate-flicker" style={{ animationDelay: '0.2s' }}/>
            </g>
          ) : (
             <g>
                <path d="M43 30 C 41 25, 44 20, 43 15" stroke="#a0a0a0" strokeWidth="1.2" fill="none" className="animate-smoke" style={{ animationDelay: '0s' }} />
                <path d="M50 28 C 48 23, 52 18, 50 13" stroke="#b0b0b0" strokeWidth="1.2" fill="none" className="animate-smoke" style={{ animationDelay: '0.2s' }} />
                <path d="M57 30 C 55 25, 58 20, 57 15" stroke="#a0a0a0" strokeWidth="1.2" fill="none" className="animate-smoke" style={{ animationDelay: '0.1s' }} />
              </g>
          )}

          {/* Hạt trang trí */}
          <circle cx="38" cy="43" r="0.8" fill="#34d399" />
          <circle cx="45" cy="45" r="0.8" fill="#60a5fa" />
          <circle cx="55" cy="42" r="0.8" fill="#fbbf24" />
          <circle cx="62" cy="44" r="0.8" fill="#a78bfa" />
          <circle cx="50" cy="47" r="0.8" fill="#f472b6" />
          
          <circle cx="35" cy="65" r="1" fill="#a78bfa" />
          <circle cx="43" cy="68" r="1" fill="#f472b6" />
          <circle cx="50" cy="63" r="1" fill="#34d399" />
          <circle cx="58" cy="70" r="1" fill="#60a5fa" />
          <circle cx="65" cy="66" r="1" fill="#fbbf24" />
        </svg>
      </div>
    </section>
  );
};

export default MemoryCake;