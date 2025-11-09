import React from 'react';
import HeartIcon from './icons/HeartIcon';

const Header: React.FC = () => {
  return (
    <header className="text-center border-b-2 border-rose-200 pb-4">
      <h1 className="font-dancing text-4xl sm:text-5xl md:text-6xl font-bold text-rose-800 tracking-wide">
        Happy Birthday, My Soul
      </h1>
      <div className="flex justify-center items-center mt-2 space-x-4">
        <HeartIcon className="w-6 h-6 text-red-400" />
        <p className="text-lg text-purple-600">You are my everything</p>
        <HeartIcon className="w-6 h-6 text-red-400" />
      </div>
    </header>
  );
};

export default Header;
