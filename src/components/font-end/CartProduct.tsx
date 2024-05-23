/* eslint-disable @next/next/no-img-element */
import {
  decrementProductCount,
  incrementProductCount,
  removeFromCart,
} from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';
import { RxCross1, RxMinus, RxPlus } from 'react-icons/rx';

type PropsType = {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
};

const CartProduct: React.FC<PropsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const payLoad = { id, img, title, price, quantity };

  return (
    <div className='flex justify-between items-center'>
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
    </div>
  );
};

export default CartProduct;
