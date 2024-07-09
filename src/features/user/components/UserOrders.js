import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrderAsync, selectUserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

export function UserOrders() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

 
  const logUser = useSelector(selectLoggedInUser);
  // console.log(orders);
  
  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(logUser.id));
  }, []);
  
  const orders = useSelector(selectUserOrders);
  return (
    <>
      {orders.map((order) => (
        <div>
          <div className="mx-auto mt-12 max-w-7xl bg-white px-4 sm:px-6 lg:px-6">
            <h3 className="text-2xl p-4 mt-6  font-mono">
              Order #{order.id}
            </h3>
              <h5 className="text-m font-mono text-red-800 ml-5"> Status {order.status}</h5>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex py-6">
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
                            Qty {item.quantity}
                          </div>

                          <div className="flex"></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Total Items</p>
                <p>{order.totalItemsCount > 1 ? `${order.totalItemsCount} items` : `1 item`} 
                  
                </p>
              </div>
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${order.totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Payment Mode</p>
                <p>{order.paymentMethod}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
