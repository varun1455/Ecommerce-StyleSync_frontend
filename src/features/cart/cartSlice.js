import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UpdateCart, addToCart, deleteItemsfromCart, fetchItemsbyUserId, resetCart } from './cartAPI';

const initialState = {
  value: 0,
  status: 'idle',
  items:[]
};


export const addToCartAsync = createAsyncThunk(
  'cart/addToCArt',
  async (item) => {
    const response = await addToCart(item);
    // console.log(response);
    return response.data;
  }
);


export const fetchItemsbyUserIdAysnc = createAsyncThunk(
  'cart/fetchItemsbyUserId',
  async (userId) => {
    const response = await fetchItemsbyUserId(userId);
      // console.log(response)
    return response.data;
  }
);


export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await UpdateCart(update);
    
    return response.data;
  }
);


export const deleteItemsfromCartAsync = createAsyncThunk(
  'cart/deleteItemsfromCart',
  async (itemId) => {
    const response = await deleteItemsfromCart(itemId);
    // console.log(response)
    return response.data;
  }
);


export const resetCartAsync = createAsyncThunk(
  'cart/resetCart',
  async (userId) => {
    const response = await resetCart(userId);
    
    return response.data;
  }
);


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers: {
   
    
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload)
      })
      .addCase(fetchItemsbyUserIdAysnc.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsbyUserIdAysnc.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload
      })

      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item=> item.id===action.payload.id);
        state.items[index] = action.payload
      })

      .addCase(deleteItemsfromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemsfromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item=> item.id===action.payload.id);
        state.items.splice(index,1);
      })

      .addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = []
      })
  },
});




export const selectItems = (state) => state.cart.items


export default cartSlice.reducer;
