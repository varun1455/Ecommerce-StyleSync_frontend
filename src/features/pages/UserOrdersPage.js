import Footer from "../../footer/Footer";
import Navbar from "../navbar/Navbar";
import { UserOrders } from "../user/components/UserOrders";

function UserOrdersPage(){


    return (

        <>
            <Navbar>
                {/* <h1 className="text-4xl p-4 font-bold text-blue-900">My Orders</h1> */}
                <ol class="items-center flex w-full pt-4 text-center text-sm font-medium text-blue-500 dark:text-blue-800 sm:text-base">
      <li class="after:border-1 flex items-center text-xl text-blue-800 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-blue-800 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-black after:content-['/'] dark:after:text-blue-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li class="after:border-1 flex items-center text-blue-800 text-xl after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-800 dark:after:border-blue-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-blue-800 after:content-['/'] dark:after:text-blue-800 sm:after:hidden">
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
                <UserOrders></UserOrders>
                <Footer></Footer>
            </Navbar>
        
        </>
    )


}


export default UserOrdersPage;