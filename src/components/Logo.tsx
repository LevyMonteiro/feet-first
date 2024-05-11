import React from 'react';
import { Shrikhand } from 'next/font/google';
import Image from 'next/image';

const shrikhand = Shrikhand({
  weight: '400',
  subsets: ['latin'],
});

const Logo = () => {
  return (
    <div className='flex justify-center items-center '>
      <Image src='/sneaker-logo.png' width={50} height={50} alt='logo' />{' '}
      <h1
        className={`${shrikhand.className} text-xl text-pink text-shadow text-shadow-accent`}
      >
        Feet First
      </h1>
    </div>
  );
};

export default Logo;
