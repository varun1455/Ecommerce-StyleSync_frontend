import { configureStore } from "@reduxjs/toolkit";

// import todoReducer from "../features/todoSlice"
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/orders/orderSlice"
import userReducer from "../features/user/userSlice"

export const store = configureStore({

    reducer:{


        // todo: todoReducer,
        product : productReducer,
        auth : authReducer,
        cart : cartReducer,
        order : orderReducer,
        user : userReducer
        
    }

})
