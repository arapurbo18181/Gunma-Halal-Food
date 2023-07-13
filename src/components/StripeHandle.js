import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useApi } from "../context/ApiContext";
import "../custom.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51N5RkhAgeBkOeS8sUqqkyqCinBF7lKGMRlVmCkZfAQUovdzK8foRj9UAUUrNXBuD1W8lUO8tuiJTTKYWL4SLSRPy00qoYCU8Wz");

const StripeHandle = () => {
  const [clientSecrete, setClientSecrete] = useState("");
  const {TotalPrice} = useApi()
    
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      const getSecrete = async () => {
        const data = await fetch("https://admin.softtech-it.org/api/stripe", {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: JSON.stringify({ items: { amount: TotalPrice } }),
        })
        .then((res) => res.json()).catch((err) => {
          console.log(err);
          Swal.fire("warning", "Add Some Product First!!", "warning");
        })
        setClientSecrete(data.clientSecret);
      }
      getSecrete();
    }, []);
  
    return (
      <div className="stripe">
          <Elements stripe={stripePromise}>
            {/* <CheckoutForm clientSecret={clientSecrete} /> */}
          </Elements>
      </div>
    );
  }

export default StripeHandle;