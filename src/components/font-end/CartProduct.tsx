/* eslint-disable @next/next/no-img-element */
import {
  decrementProductCount,
  incrementProductCount,
  removeFromCart,
} from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';
import { RxCross1, RxMinus, RxPlus } from 'react-icons/rx';
import { delay, motion } from 'framer-motion';

type PropsType = {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
  index: number;
};

const cartSlide = {
  initial: { x: '100%' },
  enter: (i: number) => ({
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const CartProduct: React.FC<PropsType> = ({
  id,
  img,
  title,
  price,
  quantity,
  index,
}) => {
  const dispatch = useAppDispatch();
  const payLoad = { id, img, title, price, quantity };

  return (
    <motion.div
      custom={index}
      variants={cartSlide}
      animate='enter'
      exit='exit'
      initial='initial'
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='flex justify-between items-center'
    >
      <div className='flex items-center gap-4'>
        <img className='h-[80px]' src={img} alt={title} />
        <div className='space-y-2'>
          <h3 className='font-medium'>{title}</h3>
          <p className='text-gray-600 text-[14px]'>
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <div className='flex justify-between gap-4'>
        <RxMinus
          className='cursor-pointer'
          onClick={() =>
            payLoad.quantity > 1
              ? dispatch(decrementProductCount(payLoad))
              : dispatch(removeFromCart(id))
          }
        />
        <RxPlus
          className='cursor-pointer'
          onClick={() => dispatch(incrementProductCount(payLoad))}
        />

        <RxCross1
          className='cursor-pointer'
          onClick={() => dispatch(removeFromCart(id))}
        />
      </div>
    </motion.div>
  );
};

export default CartProduct;
