import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUser, fetchLoggedInUserOrders,updateUSer } from './userAPI';

const initialState = {
  userOrders: [],
  status: 'idle',
  userInfo : null,
  userLoading : false,
  ordersLoading : false 
};

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchLoggedInUserOrders',
  async () => {
    const response = await fetchLoggedInUserOrders();
  
    return response.data;
  }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async () => {
    const response = await fetchLoggedInUser();
    // console.log(response)
    return response.data;
  }
);





export const updateUserAsync = createAsyncThunk(
  'user/updateUSer',
  async (updateData) => {
    const response = await updateUSer(updateData);
    // console.log(response);
    return response.data;
  }
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
        state.ordersLoading = true
       
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ordersLoading= false;
        state.userOrders = action.payload;
      })

      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
        state.userLoading = true;
        
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        
        state.userLoading = false;
        state.userInfo = action.payload;
      })

      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        
        state.userInfo = action.payload;
      })
  },
});

export const selectUserOrders = (state)=>state.user.userOrders;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectuserLoader = (state) => state.user.userLoading;
export const selectOrdersLoading = (state) => state.user.ordersLoading;



export default userSlice.reducer;