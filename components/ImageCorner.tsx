import React, { useState, useEffect } from 'react';

// Create an 'assets' folder in your project's public directory
// and add your images there. Then, update the paths in this array.
const images = [
  // Example: '/assets/our-trip.jpg',
  // Example: '/assets/first-date.png',
  // For demonstration, I'm using placeholder images from Unsplash. Replace these with your own.
  'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1888&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop',
];

const ImageCorner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(timer);
    }
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="flex flex-col items-center justify-center p-6 bg-purple-50/50 rounded-lg shadow-inner h-full">
      <h2 className="font-dancing text-3xl text-purple-700 mb-4 text-center">Our Beautiful Memories</h2>
      <div className="w-full max-w-sm aspect-square bg-white p-4 pb-12 shadow-lg rounded-md transform sm:-rotate-3 transition-transform hover:rotate-0 hover:scale-105 relative group">
        <div className="w-full h-full relative">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Beautiful memory ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-sm transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))
          ) : (
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-sm flex flex-col items-center justify-center text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500">Add photos to the 'images' array in the code to see them here.</p>
            </div>
          )}
        </div>
        
        {images.length > 1 && (
          <>
            <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 left-6 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/50 focus:outline-none" aria-label="Previous image">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-6 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/50 focus:outline-none" aria-label="Next image">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-rose-500' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to image ${index + 1}`}></button>
            ))}
          </div>
        )}
      </div>
       <div className="mt-6 text-center text-sm text-purple-600/80">
        <p>You can add your own photos by editing the code.</p>
      </div>
    </section>
  );
};

export default ImageCorner;