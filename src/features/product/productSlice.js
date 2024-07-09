import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilters, fetchCategories, fetchProductbyId, addProduct,updateProduct } from "./ProductAPI";

const initialState = {

    products :[],
    status: 'idle',   
    totalItems:0,
    categories:[],
    selectedProduct : null

}



export const fetchAllProductsAsync = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
      const response = await fetchAllProducts();
      console.log(response.data)
      
      return response.data;
    }



)

export const addProductAsync = createAsyncThunk(
  'product/addProduct',
  async (product) => {
    const response = await addProduct(product);
    
    return response.data;
  }
);


export const updateProductAsync = createAsyncThunk(
  'product/updateProduct',
  async (update) => {
    const response = await updateProduct(update);
    
    return response.data;
  }
);




export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async ({filter,sort, pagination}) => {
    const response = await fetchProductsByFilters(filter,sort, pagination);
    // console.log(response.data)
    
    return response.data;
  }
  
)


export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async()=>{

    const response = await fetchCategories();

    return response.data;
  }



)


export const fetchProductByIdAysnc = createAsyncThunk(
  'product/fetchProductbyId',
  async(id) => {
    const response = await fetchProductbyId(id);
    // console.log(response.data)
    
    return response.data;
  }
  
)








export const productSlice = createSlice({

    name:'product',
    initialState,

    reducers:{

    },

    extraReducers: (builder) => {
        builder
          .addCase(fetchAllProductsAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'idle';
          })

          .addCase(fetchProductsByFiltersAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
            state.products = action.payload.products;
            
            state.totalItems = action.payload.totalItems;
           
            state.status = 'idle';
          })

          .addCase(fetchCategoriesAsync.pending, (state)=>{
            state.status = 'loading';
          })

          .addCase(fetchCategoriesAsync.fulfilled, (state, action)=>{
            state.categories = action.payload;
            state.status = 'idle';
          })


          .addCase(fetchProductByIdAysnc.pending, (state)=>{
            state.status = 'loading';
          })

          .addCase(fetchProductByIdAysnc.fulfilled, (state, action)=>{
            
            state.status = 'idle';
            state.selectedProduct = action.payload
          })

          .addCase(addProductAsync.pending, (state)=>{
            state.status = 'loading';
          })

          .addCase(addProductAsync.fulfilled, (state, action)=>{
            
            state.status = 'idle';
            state.products.push(action.payload);
          })


          .addCase(updateProductAsync.pending, (state)=>{
            state.status = 'loading';
          })

          .addCase(updateProductAsync.fulfilled, (state, action)=>{
            
            state.status = 'idle';
            const index = state.products.findIndex(product=> product.id===action.payload.id);
            state.products[index] = action.payload
          })

         
      },


})


export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectCategories = (state) => state.product.categories;
export const selectProductbyId = (state) => state.product.selectedProduct;
export default productSlice.reducer;

