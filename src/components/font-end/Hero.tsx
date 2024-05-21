/* eslint-disable @next/next/no-img-element */
import { Oregano } from 'next/font/google';
import React from 'react';

const oregano = Oregano({
  weight: '400',
  subsets: ['latin'],
  fallback: ['cursive'],
});

const Hero = () => {
  return (
    <div className='bg-[#E3EDF6] mt-4'>
      <div className='container grid md:grid-cols-2 py-8 gap-8'>
        <div className='flex items-center'>
          <div className='max-w-[450px] space-y-4'>
            <p className='text-topHeadingSecondary'>
              Starting at <span className='font-bold'>$199.00</span>
            </p>

            <h1 className='text-topHeadingPrimary font-bold text-4xl md:text-5xl'>
              The best sneakers collection
            </h1>

            <h3 className={`text-2xl ${oregano.className}`}>
              Exclusive offer <span className='text-red-600'>-10%</span> off
              this week
            </h3>

            <a
              href='#'
              className='inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white'
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className='h-full w-full flex justify-center'>
          <img className='ml-auto object-contain' src='/hero.png' alt='hero' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
