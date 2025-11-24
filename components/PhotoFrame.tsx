import React, { useState, useEffect } from 'react';
import HeartIcon from './icons/HeartIcon';
import { imageConfig } from '../config/imageConfig';

interface PhotoFrameProps {
    folder: 'first' | 'second';
}

const PhotoFrame = ({ folder }: PhotoFrameProps) => {
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Load images based on config
        const imageFiles: string[] = [];
        const folderPath = `/assets/images/${folder}`;
        const imageCount = imageConfig[folder];

        // Load images in order (1.jpg, 2.jpg, 3.jpg, etc.)
        for (let i = 1; i <= imageCount; i++) {
            imageFiles.push(`${folderPath}/${i}.jpg`);
        }

        setImages(imageFiles);
    }, [folder]);

    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000); // Thay đổi hình ảnh mỗi 2 giây
            return () => clearInterval(timer);
        }
    }, [images]);

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
