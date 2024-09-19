import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
// import { Link, Navigate } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
// import CompletePage from "./CompletePage";
import "../../stripe.css";


import { useSelector } from "react-redux";
import { selectOrderPlaced } from "../orders/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise =await loadStripe("pk_test_51ML7kYSAD0rysEGcfzSJLtSWbJiGOcKFpny1rtiYBRJVZxnxGpYOmOScujSXWBKxX4guwBnsw3AUiRIFRkEmPgZJ00M9YD6tza");
export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
//   const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const currentOrder = useSelector(selectOrderPlaced);

  useEffect(async () => {
    // Create PaymentIntent as soon as the page loads
    const response = await fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: currentOrder.items }),
      credentials:"include",
    })
    const data = await response.json()
    console.log(data);
    setClientSecret(data.clientSecret)
    console.log(setClientSecret)
    //   .then((res) => res.json())
    //   .then((data) => { 
    //     setClientSecret(data.clientSecret);
        // [DEV] For demo purposes only
        // setDpmCheckerLink(data.dpmCheckerLink);
    //   });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log(clientSecret)

  return (
    // <Router>
      <div className="stripe">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            {/* <Routes> */}
              <CheckoutForm />
              {/* <CompletePage /> */}
            {/* </Routes> */}
            {/* <CheckoutForm dpmCheckerLink={dpmCheckerLink}></CheckoutForm>
            <CompletePage></CompletePage> */}
            {/* <Navigate  to={`/checkoutForm`} dpmCheckerLink={dpmCheckerLink} replace={true}></Navigate> */}
            {/* <Navigate to = {`/complete`} replace = {true}></Navigate> */}
            
          </Elements>
        )}
      </div>
    //  </Router>
  );
}