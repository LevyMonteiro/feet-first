import { TProduct } from '@/app/admin/dashboard/page';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TProduct = {
  _id: '',
  imgSrc: '',
  fileKey: '',
  name: '',
  price: '',
  category: '',
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<TProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
