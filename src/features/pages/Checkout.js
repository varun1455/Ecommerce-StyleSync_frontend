import React from "react";
import { useState } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import {
//   deleteItemsfromCartAsync,
//   selectItems,
//   updateCartAsync,
// } from "../cart/cartSlice";

// import { Link , Navigate} from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import { selectLoggedInUser, updateUserAsync } from "../auth/authSlice";
// import { addOrderAsync, selectOrderPlaced } from "../orders/orderSlice";
// import { selectUserInfo } from "../user/userSlice";



function Checkout() {
  // const dispatch = useDispatch();
  // const [open, setOpen] = useState(true);

  // const [selectedAddress, setselectedAddress] = useState(null);
  // const [paymentMethod, setPaymentMethod] = useState(null)
  // const items = useSelector(selectItems);
  // // const user = useSelector(selectUserInfo)
  // const loguser = useSelector(selectLoggedInUser);
  // const orderplaced = useSelector(selectOrderPlaced);
  // console.log(user);
  // console.log(loguser)


  // const { register, handleSubmit,reset, formState: { errors } } = useForm();
  // // console.log(errors)

  // const totalAmount = items.reduce(
  //   (sum, item) => sum + item.product.price * item.quantity,
  //   0
  // );
  // const totalItemsCount = items.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  // const handleQuantity = (e, item) => {
  //   dispatch(updateCartAsync({ id:item.id, quantity: +e.target.value }));
  // };

  // const handleRemove = (e, id) => {
  //   dispatch(deleteItemsfromCartAsync(id));
  //   // reset();
  // };

  // const handleAddresses= (e) =>{
  //   // console.log(e.target.value)
  //   setselectedAddress(loguser.addresses[e.target.value]);
  // }

  // const handlePayment = (e) =>{
  //     // console.log(e.target.value)
  //     setPaymentMethod(e.target.value);
     
  // }

  // const handleOrder = (e) =>{
  //   if(selectedAddress && paymentMethod){

  //     const order = {items, totalAmount, totalItemsCount, loguser:loguser.id, paymentMethod, selectedAddress, status:'pending'}

  //     dispatch(addOrderAsync(order))
  //   }
  //   else{

  //     alert('select payement method or select address');
  //   }
  // }

  (
    <>
    <h1 className="text-4xl">checkout page</h1>

    {/* {items.length==0 && <Navigate to="/" replace={true}></Navigate>} */}
    {/* {orderplaced && <Navigate to={`/order-success/${orderplaced.id}`} replace={true}></Navigate>} */}
      <div className="mx-auto mt-12 max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
          {/* <div className="lg:col-span-4">
            <form noValidate onSubmit={handleSubmit((data)=>{
              // console.log(data)
              dispatch(
                updateUserAsync({
                  ...loguser,
                  addresses: data
                })
              );
            
              reset();
            })}>
              <div className="space-y-12 mt-10">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                        {...register('name', {required:'name is required',
                          pattern: {
                            value : /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                            message : 'Invalid Name'
                          }})}
                          id="name"
                         
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input  
                          id="email"
                          {...register("email", { required: "email is required",
                            pattern: {
                              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                              message: 'email not valid',
                            },
                              })}
                          type="email"
                         
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>


                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          type="tel"
                        {...register('phoneNumber', {required:'phone number is required',
                          pattern: {
                            value : /(\+)?(91)?( )?[789]\d{9}/g,
                            message : 'Invalid mobile bnumber'
                          }})}
                          id="phone"
                         
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>


                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street", { required: "street is required"})}
                          id="street-address"
                         
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", { required: "city is required"})}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state", { required: "state is required"})}
                          id="region"
                        
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pinCode", { required: "pinCode is required"})}
                          id="pinCode"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button  
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Choose from existing address
                  </h2>

                  <ul role="list" className="divide-y divide-gray-100">
                    { loguser.addresses && loguser.addresses.map((address, index) => (
                   
                      <li
                        key={index}
                        className="flex justify-between gap-x-6 py-5"
                      >
                        <div className="flex-gap-x-2">
                          <input

                          onChange={handleAddresses}
                            id="address"
                            name="location"
                            type="radio"
                            value={index}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {address.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              {address.phoneNumber}
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">
                            {address.pinCode}, {address.street}
                          </p>
                          <p className="text-sm leading-6 text-gray-900">
                            {address.city}, {address.state}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
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
                            className="block text-sm font-medium leading-6 text-gray-900"
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
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Debit Card/Credit Card
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </form>
          </div> */}
          {/* <div className="lg:col-span-2 ">
          <div className="mx-auto mt-12 bg-white max-w-7xl px-2 sm:px-2 lg:px-4">
          <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
              <h2 className="text-4xl p-4 mb-2 font-bold">Cart</h2>
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
                  <p>{totalItemsCount} items</p>
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
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Checkout;
