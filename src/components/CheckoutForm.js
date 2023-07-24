import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useApi } from "../context/ApiContext";
import "../custom.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    cart,
    orderProduct,
    FinalTotal,
    BillingAddress,
    ShippingAddress,
    StripeCheckout,
    setStripeCheckout,
    IsChecked,
    FinalTotalWithCoupon
  } = useApi();

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     if (paymentIntent.status === "succeeded") {
  //       // orderProduct();
  //       Swal.fire("success", "Payment succeeded!", "success");
  //     }

  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         // Swal.fire("success", "Payment succeeded!", "success");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length !== 0) {
      if (
        IsChecked &&
        BillingAddress.delivery_date &&
        BillingAddress.state &&
        BillingAddress.phone &&
        BillingAddress.delivery_time
      ) {
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }

        setMessage("Payment is Processing....");

        const data = await fetch(
          "https://admin.softtech-it.org/api/stripe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({ items: { amount: Number(FinalTotalWithCoupon ? FinalTotalWithCoupon : FinalTotal) } }),
          }
        )
          .then((res) => res.json())
          .catch((err) => {
            console.log(err);
            Swal.fire("warning", "Server Problem", "warning");
          });
        
        console.log(data);

        setMessage("Payment almost done....");
        // console.log(data);

        const { error, paymentIntent } = await stripe.confirmCardPayment(
          data.clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );

        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment successful!");
            await orderProduct();
            break;
          case "processing":
            setMessage("Your payment is processing.");
            Swal.fire("warning", "Your payment is processing.", "warning");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            Swal.fire("warning", "Payment method required", "warning");
            break;
          default:
            setMessage("Something went wrong.");
            Swal.fire("warning", "Something went wrong.", "warning");
            break;
        }

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error) {
          setMessage(error.message);
        }

        // setIsLoading(false);
      } else if (
        !IsChecked &&
        BillingAddress.state &&
        BillingAddress.phone &&
        ShippingAddress.delivery_date &&
        ShippingAddress.state &&
        ShippingAddress.phone &&
        ShippingAddress.delivery_time
      ) {
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }

        setMessage("Payment is Processing....");

        const { error: backendError, clientSecret } = await fetch(
          "https://admin.softtech-it.org/api/stripe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({ items: { amount: FinalTotal } }),
          }
        )
          .then((res) => res.json())
          .catch((err) => {
            console.log(err);
            Swal.fire("warning", "Add Some Product First!!", "warning");
          });
        if (backendError) {
          setMessage(backendError.message);
        }

        setMessage("Payment almost done....");
        // console.log(data);

        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );

        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment successful!");
            await orderProduct();
            break;
          case "processing":
            setMessage("Your payment is processing.");
            Swal.fire("warning", "Your payment is processing.", "warning");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            Swal.fire("warning", "Payment method required", "warning");
            break;
          default:
            setMessage("Something went wrong.");
            Swal.fire("warning", "Something went wrong.", "warning");
            break;
        }

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error) {
          setMessage(error.message);
        }

        // setIsLoading(false);
      } else {
        Swal.fire(
          "warning",
          "Billing Address & Shipping Address Required",
          "warning"
        );
      }
    } else {
      Swal.fire("warning", "Please add some product first", "warning");
    }
  };

  // const paymentElementOptions = {
  //   layout: {
  //     type: "accordion",
  //     defaultCollapsed: false,
  //     radios: false,
  //     spacedAccordionItems: false,
  //   },
  //   paymentMethodOrder: ["card"],
  // };

  return (
    <form id="payment-form" className="w-full" onSubmit={handleSubmit}>
      <label htmlFor="payment-element">Card</label>
      <CardElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div style={{ color: "green", fontSize: 25 }} id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
