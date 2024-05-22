import React from 'react';

const Banner = () => {
  return (
    <div className='container mt-32'>
      <div className='h-[200px] md:h-[260px] bg-[url(/product-banner-1.jpg)] bg-cover bg-center rounded-xl p-8 md:p-16'>
        <p className='text-topHeadingSecondary text-xl font-medium'>
          Sale 20% off all store
        </p>
        <h2 className='text-accent text-shadow text-shadow-gray-600 font-bold text-xl sm:text-3xl max-w-[320px]'>
          Most desired sneakers in the world
        </h2>

        <a
          href='#'
          className='inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium'
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
