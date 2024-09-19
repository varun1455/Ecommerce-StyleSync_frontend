import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, signOutUser, checkLoginAuth } from './authAPI';
// import { updateUSer } from '../user/userAPI';

const initialState = {
  loggedInUser : null,
  status: 'idle',
  error : null
};


export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo, {rejectWithValue}) => {

    try {
      
      const response = await checkUser(loginInfo);
      // console.log(response.data);
    
      return response.data;
    } catch (error) {
       
      return rejectWithValue({error:"Unauthorized"});
    }
  }
);


export const checkLoginAuthAsync = createAsyncThunk(
  'user/checkLoginAuth',
  async () => {

    try {
      
      const response = await checkLoginAuth();
      // console.log(response.data);
    
      return response.data;
    } catch (error) {
       
      return error;
    }
  }
);




export const signOutUSerAsync = createAsyncThunk(
  'user/signOutUser',
  async (userId) => {
    const response = await signOutUser(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


// export const updateUserAsync = createAsyncThunk(
//   'user/updateUSer',
//   async (updateData) => {
//     const response = await updateUSer(updateData);
 
//     return response.data;
//   }
// );


export const authSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
   
    
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
     
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(checkLoginAuthAsync.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(checkLoginAuthAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      
      // .addCase(updateUserAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(updateUserAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.loggedInUser = action.payload;
      // })


      .addCase(signOutUSerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutUSerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      })
  },
});




export const selectLoggedInUser = (state) => state.auth.loggedInUser
export const selectError = (state) => state.auth.error;
export default authSlice.reducer;
