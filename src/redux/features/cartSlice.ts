import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TProduct = {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
};

const initialState: Array<TProduct> = [];

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    incrementProductCount: (state, action: PayloadAction<TProduct>) => {
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decrementProductCount: (state, action: PayloadAction<TProduct>) => {
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementProductCount,
  decrementProductCount,
} = cartSlice.actions;
export default cartSlice.reducer;
