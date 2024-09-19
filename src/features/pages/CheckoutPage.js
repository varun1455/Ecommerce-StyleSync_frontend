import React from "react";
import Navbar from "../navbar/Navbar";
import { useState } from "react";

// import Checkout from './Checkout'
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemsfromCartAsync,
  selectItems,
  updateCartAsync,
} from "../cart/cartSlice";

import { selectLoggedInUser } from "../auth/authSlice";
import { Link, Navigate } from "react-router-dom";
import { addOrderAsync, selectOrderPlaced } from "../orders/orderSlice";
import Footer from "../../footer/Footer";
import { selectUserInfo } from "../user/userSlice";

function CheckoutPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [open, setOpen] = useState(true);
  const loguser = useSelector(selectLoggedInUser);
  const userInfo = useSelector(selectUserInfo);
  const [selectedAddress, setselectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const orderplaced = useSelector(selectOrderPlaced);

  // console.log(orderplaced.paymentMethod);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalItemsCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemsfromCartAsync(id));
    // reset();
  };
  const handleAddresses = (e) => {
    // console.log(e.target.value)
    setselectedAddress(userInfo.addresses[e.target.value]);
  };
  const handlePayment = (e) => {
    console.log(e.target.value)
    setPaymentMethod(e.target.value);
  };


   const handleOrder = (e) =>{
    if(selectedAddress && paymentMethod){

     

      const order = {items, totalAmount, totalItemsCount, loguser:userInfo.id, paymentMethod, selectedAddress, status:'pending'}

      dispatch(addOrderAsync(order))
    }
    else{

      alert('select payement method or select address');
    }
  }
  return (
    <>
      <Navbar>


       
        {orderplaced && orderplaced.paymentMethod==='cash' &&
         (<Navigate to={`/order-success/${orderplaced.id}`} replace={true}></Navigate>)}

     {orderplaced && orderplaced.paymentMethod==='card' &&
         (<Navigate to={`/stripe-checkout/`} replace={true}></Navigate>)}


        <div className="mx-auto mt-12 max-w-7xl bg-white px-8 py-10 sm:px-6 lg:px-8">
          
          {/* <h1 className="text-4xl font-semibold">Place Orders</h1> */}
          <ol class="items-center flex w-full  text-center text-sm font-medium text-black-500 dark:text-black sm:text-base">
      <li class="after:border-1 flex items-center text-xl text-blue-800 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-blue-800 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-black after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li class="after:border-1 flex items-center text-blue-800 text-xl after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-800 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-black after:content-['/'] dark:after:text-black sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Checkout
        </span>
      </li>

      <li class="flex shrink-0 items-center text-xl">
        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Order summary
      </li>
    </ol>

          <div className="border-b border-gray-900/10 pb-12 pl-8 pr-8 pt-8">
            <h2 className=" font-semibold leading-7 text-2xl text-gray-900">
              Choose from existing address
            </h2>

            <ul role="list" className="divide-y divide-gray-100">
              {userInfo.addresses &&
                userInfo.addresses.map((address, index) => (
                  <li key={index} className="flex justify-between gap-x-6 py-5">
                    <input
                      onChange={handleAddresses}
                      id="address"
                      name="location"
                      type="radio"
                      value={index}
                      className="h-4 w-4 mt-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

                    <div className="min-w-0 flex-auto">
                      <p className="text-m font-semibold leading-6 text-gray-900">
                        {address.name}
                      </p>
                      <p className="mt-1 truncate text-s leading-5 text-gray-500">
                        {address.phoneNumber}
                      </p>
                      <p className="text-m leading-6 text-gray-900">
                        {address.pinCode}, {address.street}
                      </p>
                      <p className="text-m leading-6 text-gray-900">
                        {address.city}, {address.state}
                      </p>
                    </div>

                    
                  </li>
                ))}
            </ul>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="font-semibold leading-7 text-2xl text-gray-900">
                  Payment Methods
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose one payment method
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="cash"
                      name="payments"
                      onChange={handlePayment}
                      type="radio"
                      value="cash"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="cash"
                      className="block text-m font-medium leading-6 text-gray-900"
                    >
                      Cash On Delivery(COD)
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="card"
                      name="payments"
                      onChange={handlePayment}
                      type="radio"
                      value="card"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="card"
                      className="block text-m font-medium leading-6 text-gray-900"
                    >
                      Debit Card/Credit Card
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.product.id}>{item.product.title}</a>
                          </h3>
                          <p className="ml-4">${item.product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.product.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500 ">
                          Qty
                          <select
                            className="ml-3 rounded-md"
                            onChange={(e) => handleQuantity(e, item)}
                            value={item.quantity}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={(e) => handleRemove(e, item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-4 sm:px-4">
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>{totalItemsCount > 1 ? `${totalItemsCount} items` : `1 item`}</p>
            </div>
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <div
                onClick={handleOrder}
                className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Order Now
              </div>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
         
        </div>
      <Footer></Footer>
      </Navbar>
    </>
  );
}

export default CheckoutPage;
