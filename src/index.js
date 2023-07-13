import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApiProvider } from "./context/ApiContext";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const stripePromise = loadStripe(
  "pk_test_51N5RkhAgeBkOeS8sUqqkyqCinBF7lKGMRlVmCkZfAQUovdzK8foRj9UAUUrNXBuD1W8lUO8tuiJTTKYWL4SLSRPy00qoYCU8Wz"
);

root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <CategoryProvider>
          <ProductProvider>
            <ApiProvider>
              <App />
            </ApiProvider>
          </ProductProvider>
        </CategoryProvider>
      </BrowserRouter>
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
