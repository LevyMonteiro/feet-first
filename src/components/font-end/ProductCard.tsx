/* eslint-disable @next/next/no-img-element */
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import React from 'react';
import { motion } from 'framer-motion';
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';

type PropsType = {
  id: string;
  img: string;
  category: string;
  title: string;
  price: number;
  index: number;
};

const productSlide = {
  initial: { x: '100%' },
  enter: (i: number) => ({
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const ProductCard = ({ id, img, category, title, price, index }: PropsType) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payLoad = {
      id,
      img,
      title,
      price,
      quantity: 1,
    };

    dispatch(addToCart(payLoad));
    makeToast('Added to Cart');
  };

  return (
    <motion.div
      custom={index}
      variants={productSlide}
      animate='enter'
      initial='initial'
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='border border-gray-200'
    >
      <div className='text-center border-b border-gray-200'>
        <img className='inline-block' src={img} alt={title} />
      </div>

      <div className='px-8 py-4 h-[190px] flex flex-col justify-between'>
        <p className='text-gray-500 text-[14px] font-medium'>{category}</p>
        <h2 className='font-medium'>{title}</h2>

        <div className='mt-3 flex text-[#FFB21D] items-center'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className='text-gray-600 text-[14px] ml-2'>(3 Review)</p>
        </div>

        <div className='flex justify-between items-center mt-4'>
          <h2 className='font-medium text-accent text-xl'>${price}</h2>
          <div
            className='flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent'
            onClick={addProductToCart}
          >
            <AiOutlineShoppingCart /> Add To Cart
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
