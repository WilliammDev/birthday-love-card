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

const PhotoFrame = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000); // Thay đổi hình ảnh mỗi 5 giây
            return () => clearInterval(timer);
        }
    }, []);

    return (
        <div className="w-11/12 max-w-sm transform -rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-105">
            <div className="w-full aspect-square bg-white p-2 pb-8 rounded-lg relative animate-pulse-shadow shadow-lg">
                <div className="w-full h-full relative overflow-hidden bg-gray-100 rounded-md">
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
    );
};

export default PhotoFrame;
