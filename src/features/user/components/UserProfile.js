import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo, selectuserLoader, updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";
// import { selectLoggedInUser } from "../../auth/authSlice";

export function UserProfile() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showAddAddressform, setShowAddAddressform] = useState(false);

  console.log(errors);

  const user = useSelector(selectUserInfo);
  const loading = useSelector(selectuserLoader);
  // console.log(user);
  // const loginUser = useSelector(selectLoggedInUser);
  // console.log(loginUser);

  const handleAdd = (address) =>{
    const newUser = { ...user, addresses: [...user.addresses, address] };
    console.log(newUser);
    
    dispatch(updateUserAsync(newUser));
    setShowAddAddressform(false);
  }

  const handleRemove = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] };
    newUser.addresses.splice(index, 1);
    dispatch(updateUserAsync(newUser));
  };

  const handleEdit = (addressUpdate, index) => {
    const newUser = { ...user, addresses: [...user.addresses] };
    newUser.addresses.splice(index, 1, addressUpdate);
    dispatch(updateUserAsync(newUser));
    setSelectedIndex(-1);
  };

  const handleEditForm = (index) => {
    setSelectedIndex(index);
    const address = user.addresses[index];
    setValue("name", address.name);
    setValue("email", address.email);
    setValue("phoneNumber", address.phoneNumber);
    setValue("street", address.street);
    setValue("city", address.city);
    setValue("state", address.state);
    setValue("pinCode", address.pinCode);
  };

  if(loading){

    return (
      <div class='flex space-x-2 justify-center items-center bg-white h-screen '>
      	<span class='sr-only'>Loading...</span>
  	    <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	      <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	      <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>
    )
  }

  return (
    <>
      <div className="mx-auto mt-12 max-w-7xl bg-white px-4 sm:px-6 lg:px-8">

      
        <h4 className="text-xl pt-4 pl-2 font-semibold text-blue-600">
         
          Name: {user && user.name}
        </h4>

        <h4 className="text-xl p-2 mb-2  font-semibold text-blue-500">
          
          Email: {user && user.email}
        </h4>

        {/* {user.role === "admin" && (
          <h6 className="text-xl p-2 mb-2  font-semibold text-stone-700">
            Role: {loginUser.role}
          </h6>
        )} */}

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <button
            type="submit"
            onClick={e=>{setShowAddAddressform(true); setSelectedIndex(-1)}}
            className="rounded-md bg-green-600 px-3 py-2 mb-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Address
          </button>

          {showAddAddressform  ? (
                      <form
                       noValidate
                        onSubmit={handleSubmit((data) => {
                          // console.log(data);
                          handleAdd(data);
                        })}
                      >
                        <div className="space-y-12 mt-10">
                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
                              Personal Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              Use a permanent address where you can receive
                              mail.
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
                                    {...register("name", {
                                      required: "name is required",
                                      pattern: {
                                        value: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                                        message: "Invalid Name",
                                      },
                                    })}
                                    id="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />

                                  {errors.name && (
                                   <p className="text-red-500">{errors.name.message}</p>
                                  )}
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
                                    {...register("email", {
                                      required: "email is required",
                                      pattern: {
                                        value:
                                          /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                        message: "email not valid",
                                      },
                                    })}
                                    type="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.email && (
                                    <p className="text-red-500">{errors.email.message}</p>

                                  )}
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
                                    {...register("phoneNumber", {
                                      required: "phone number is required",
                                      maxLength:{
                                        value:10,
                                        message:"Phone Number cannot be larger than 10 Digits"
                                      },
                                      pattern: {
                                        // value: /^[0-9]{0,5}[ ]{0,1}[0-9]{0,6}$/g,
                                        value: /^[6-9]\d{9}$/,
                                       
                                        message: "Invalid mobile bnumber",
                                      },
                                    })}
                                    id="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.phoneNumber && (

                                   <p className="text-red-500">{errors.phoneNumber.message}</p>
                                  )}
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
                                    {...register("street", {  required: "street is required",
                                      pattern:{

                                        // value: /\A(.*?)\s+(\d+[a-zA-Z]{0,1}\s{0,1}[-]{1}\s{0,1}\d*[a-zA-Z]{0,1}|\d+[a-zA-Z-]{0,1}\d*[a-zA-Z]{0,1})/s,
                                        // message: "Invalid Street Address",
                                      },
                                    })}
                                    id="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {/* {errors.street && (
                                       <p className="text-red-500">{errors.street.message}</p>
                                  )} */}
                                  
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
                                    {...register("city", { required: "city is required",
                                      minLength:{
                                        value:4,
                                        message: "City name must be at least 4 characters",
                                      },
                                      pattern :{
                                        // value: /^[a-zA-Z\s'-]{4,50}$/,
                                        // value: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                                        value: /^[A-Za-z\s]+$/,
                                        message:"Invalid City name"

                                      },
                                      
                                    })}
                                    id="city"
                                    // autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {
                                    errors.city && (
                                   <p className="text-red-500">{errors.city.message}</p>
                                  )}
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
                                    {...register("state", {
                                      required: "state is required",
                                      minLength:{
                                        value:4,
                                        message: "state name must be at least 4 characters",
                                      },
                                      pattern:{
                                        valid: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                                        message: "Invalid State Name"
                                      },
                                    })}
                                    id="region"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.state && (

                                   <p className="text-red-500">{errors.state.message}</p>
                                  )}
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
                                    {...register("pinCode", {
                                      required: "pinCode is required",
                                      minLength:{
                                        value:4,
                                        message: "Pincode must be at least 4 characters",
                                      },
                                      maxLength:{
                                        value:7,
                                        message : "pinCode cannot be more than 7 digits"
                                      },
                                      pattern:{
                                        value : /-?\d{5}-?\s?-?\s?(\d{4})?/g,
                                        message:"PinCode is Invalid"
                                      },
                                    })}
                                    id="pinCode"
                                    // autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />

                                  {
                                    errors.pinCode && (

                                      <p className="text-red-500">{errors.pinCode.message}</p>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center justify-end gap-x-6">
                           
                            <button
                              type="submit"
                              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Add Address
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : null}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Your Addresses
            </h2>

            <ul role="list" className="divide-y divide-gray-100">
              {user && user.addresses &&
                user.addresses.map((address, index) => (
                  <div>
                    {selectedIndex === index ? (
                      <form
                        noValidate
                        onSubmit={handleSubmit((data) => {
                          console.log(data);
                          handleEdit(data, index);
                        })}
                      >
                        <div className="space-y-12 mt-10">
                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
                              Personal Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              Use a permanent address where you can receive
                              mail.
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
                                    {...register("name", {
                                      required: "name is required",
                                      pattern: {
                                        value: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                                        message: "Invalid Name",
                                      },
                                    })}
                                    id="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />

                                  {errors.name && (
                                   <p className="text-red-500">{errors.name.message}</p>
                                  )}
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
                                    {...register("email", {
                                      required: "email is required",
                                      pattern: {
                                        value:
                                          /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                        message: "email not valid",
                                      },
                                    })}
                                    type="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.email && (
                                    <p className="text-red-500">{errors.email.message}</p>

                                  )}
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
                                    {...register("phoneNumber", {
                                      required: "phone number is required",
                                      maxLength:{
                                        value:10,
                                        message:"Phone Number cannot be larger than 10 Digits"
                                      },
                                      pattern: {
                                        // value: /^[0-9]{0,5}[ ]{0,1}[0-9]{0,6}$/g,
                                        value: /^[6-9]\d{9}$/,
                                       
                                        message: "Invalid mobile bnumber",
                                      },
                                    })}
                                    id="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.phoneNumber && (

                                   <p className="text-red-500">{errors.phoneNumber.message}</p>
                                  )}
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
                                    {...register("street", {  required: "street is required",
                                      pattern:{

                                        // value: /\A(.*?)\s+(\d+[a-zA-Z]{0,1}\s{0,1}[-]{1}\s{0,1}\d*[a-zA-Z]{0,1}|\d+[a-zA-Z-]{0,1}\d*[a-zA-Z]{0,1})/s,
                                        // message: "Invalid Street Address",
                                      },
                                    })}
                                    id="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {/* {errors.street && (
                                       <p className="text-red-500">{errors.street.message}</p>
                                  )} */}
                                  
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
                                    {...register("city", { required: "city is required",
                                      minLength:{
                                        value:4,
                                        message: "City name must be at least 4 characters",
                                      },
                                      pattern :{
                                        // value: /^[a-zA-Z\s'-]{4,50}$/,
                                        // value: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                                        value: /^[A-Za-z\s]+$/,
                                        message:"Invalid City name"

                                      },
                                      
                                    })}
                                    id="city"
                                    // autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {
                                    errors.city && (
                                   <p className="text-red-500">{errors.city.message}</p>
                                  )}
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
                                    {...register("state", {
                                      required: "state is required",
                                      minLength:{
                                        value:4,
                                        message: "state name must be at least 4 characters",
                                      },
                                      pattern:{
                                        valid: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
                                        message: "Invalid State Name"
                                      },
                                    })}
                                    id="region"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.state && (

                                   <p className="text-red-500">{errors.state.message}</p>
                                  )}
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
                                    {...register("pinCode", {
                                      required: "pinCode is required",
                                      minLength:{
                                        value:4,
                                        message: "Pincode must be at least 4 characters",
                                      },
                                      maxLength:{
                                        value:7,
                                        message : "pinCode cannot be more than 7 digits"
                                      },
                                      pattern:{
                                        value : /-?\d{5}-?\s?-?\s?(\d{4})?/g,
                                        message:"PinCode is Invalid"
                                      },
                                    })}
                                    id="pinCode"
                                    // autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />

                                  {
                                    errors.pinCode && (

                                      <p className="text-red-500">{errors.pinCode.message}</p>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                              type="button"
                              onClick={(e) => setSelectedIndex(-1)}
                              className="text-sm font-semibold leading-6 text-gray-900"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Edit Address
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : null}

                    <li className="flex justify-between gap-x-6 py-5">
                      <div className="flex-gap-x-2">
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
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 mt-2"
                            onClick={(e) => handleEditForm(index)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 ml-2 mt-2"
                            onClick={(e) => handleRemove(e, index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
