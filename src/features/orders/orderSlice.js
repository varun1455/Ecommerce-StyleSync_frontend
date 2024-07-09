import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addOrder, updateOrder } from './orderAPI';



const initialState = {
  orders : [],
  status: 'idle',
  orderPlaced : null
};


export const addOrderAsync = createAsyncThunk(
  'order/addOrder',
  async (orderItem) => {
    const response = await addOrder(orderItem);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateOrderAsync = createAsyncThunk(
  'order/updateOrder',
  async (order) => {
    const response = await updateOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  
  reducers: {

    resetOrder : (state) =>{
      state.orderPlaced = null;
    }
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(addOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.orderPlaced = action.payload
      })


      .addCase(updateOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.orders.findIndex(order=>order.id===action.payload.id)
        state.orders[index] = action.payload;
      })
  },
});



export const {resetOrder} = orderSlice.actions;
export const selectOrderPlaced = (state) => state.order.orderPlaced;


export default orderSlice.reducer;
