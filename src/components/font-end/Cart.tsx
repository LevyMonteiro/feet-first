import { useAppLector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';
import { motion } from 'framer-motion';

type PropsType = {
  setShowCart: Dispatch<SetStateAction<boolean>>;
};

const cartSlide = {
  initial: { x: '100%' },
  enter: {
    x: '0%',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: { x: '100%' },
};

const Cart = ({ setShowCart }: PropsType) => {
  const products = useAppLector((state) => state.cartReducer);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total = total + item.price * item.quantity));
    return total;
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!cartRef.current?.contains(event.target as Node)) {
        setShowCart(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowCart]);

  return (
    <div className='bg-[#0000007d] w-full max-w-[100vw] min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll transition ease-in-out duration-500'>
      <motion.div
        variants={cartSlide}
        animate='enter'
        exit='exit'
        initial='initial'
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6'
        ref={cartRef}
      >
        <RxCross1
          className='absolute right-0 top-0 m-6 text-[24px] cursor-pointer'
          onClick={() => setShowCart(false)}
        />
        <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>
          Your Cart
        </h3>
        <div className='mt-6 space-y-2'>
          {products?.map((item: any, index) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              index={index}
            />
          ))}
        </div>
        <div className='flex justify-between items-center font-medium text-xl py-4'>
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>
        <button className='bg-pink text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4'>
          View Cart
        </button>
        <button className='bg-pink text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4'>
          CheckOut
        </button>
      </motion.div>
    </div>
  );
};

export default Cart;
