import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
 
  
  deleteItemsfromCartAsync,
  selectcartLoaded,
  selectItems,
  updateCartAsync,

} from './cartSlice';

// import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export function Cart() {
 
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true)

  const items = useSelector(selectItems)
  const cartloader = useSelector(selectcartLoaded);
  // console.log(items);

  const totalAmount = items.reduce((sum, item)=> sum + item.product.price*item.quantity, 0);
  const totalItemsCount = items.reduce((total, item)=> total + item.quantity, 0);

  const handleQuantity = (e, item) =>{
    dispatch(updateCartAsync({id:item.id, quantity: +e.target.value}))
  }

  const handleRemove = (e, id) =>{
    dispatch(deleteItemsfromCartAsync(id))
  }


  return (
   <>
     {items.length===0 && cartloader &&  <Navigate to="/" replace={true}></Navigate>}
<div className="mx-auto mt-12 max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
  <h2 className="text-4xl p-4 mb-2 font-bold">Cart</h2>
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            { items.map((item) => (
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
                                    <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500 ">Qty 
                                      <select className='ml-5 rounded-xl' onChange={(e)=>handleQuantity(e, item)} value={item.quantity}>
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
                                        onClick={(e)=>handleRemove(e, item.id)}
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
                    

                     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                     <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                        <p>Total Items in Cart</p>
                        <p>{totalItemsCount > 1 ? `${totalItemsCount} items` : `1 item`}</p>
                      </div>
                      <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalAmount.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link 
                          to = "/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
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
   </>
  );
}
