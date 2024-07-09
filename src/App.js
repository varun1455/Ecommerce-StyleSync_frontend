import React, { useEffect } from 'react';

import Home from './features/pages/Home';
import './App.css';
import LoginPage from './features/pages/LoginPage';
import SigupPage from './features/pages/SigupPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
import ProductDetailPage from './features/pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsbyUserIdAysnc } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './features/pages/404';
import OrderSuccess from './features/pages/OrderSuccess';
import UserOrdersPage from './features/pages/UserOrdersPage';
import ProfilePage from './features/pages/ProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './features/pages/AdminHome';
import AdminProductDetailPage from './features/pages/AdminProductDetailPage ';
import AdminProductFomPage from './features/pages/AdminProductFomPage';
import CheckoutPage from './features/pages/CheckoutPage';

const router = createBrowserRouter([

  {
    path: "/admin",
    element: (
    <ProtectedAdmin>
      <AdminHome></AdminHome>
    </ProtectedAdmin>
    ),
  },

  {
    path: "/admin/productForm",
    element: (
    <ProtectedAdmin>
     <AdminProductFomPage></AdminProductFomPage>
    </ProtectedAdmin>
    ),
  },

  {
    path: '/admin/product-form/edit/:id',
    element: (
    <ProtectedAdmin>
     <AdminProductFomPage></AdminProductFomPage>
    </ProtectedAdmin>
    ),
  },
  {
    path: "/",
    element: (
    <Protected>

      <Home></Home>

    </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <LoginPage></LoginPage>
    ),
  },
  {
    path: "/signup",
    element:(
      <SigupPage></SigupPage>
    )
  },
  {
    path: "/cart",
    element:(
      <Protected>

        <CartPage></CartPage>
      </Protected>
    )
  },
  {
    path: "/checkout",
    element:(
      <Protected>

    <CheckoutPage></CheckoutPage>

       </Protected>
    )
  },
  {
    path: "/admin/product-detail/:id",
    element:(
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    )
  },
  {
    path: "/product-detail/:id",
    element:(
      <Protected>

        <ProductDetailPage></ProductDetailPage>
      </Protected>
    )
  },
  {
    path: "/order-success/:id",
    element:(
     <OrderSuccess></OrderSuccess>
    )
  },
  {
    path: "/orders",
    element:(
     <UserOrdersPage></UserOrdersPage>
    )
  },
  {
    path: "/profile",
    element:(
    <ProfilePage></ProfilePage>
    )
  },

  {
    path: "/logout",
    element:(
    <Logout></Logout>
    )
  },
  {
    path: "*",
    element:(
      <PageNotFound></PageNotFound>
    )
  }
]);


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);


  useEffect(()=>{
    if(user){

      dispatch(fetchItemsbyUserIdAysnc(user.id))
      dispatch((fetchLoggedInUserAsync(user.id)))
    }
  },[dispatch, user])
  
  return (
    <div className="App">
     

<RouterProvider router={router} />
     
    </div>
  );
}

export default App;
