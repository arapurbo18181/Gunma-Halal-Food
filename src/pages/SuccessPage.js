import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApi } from "../context/ApiContext";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [Location, setLocation] = useState();
  const { orderProduct } = useApi();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  
  useEffect(() => {
    if (location.pathname === "/successpage") {
      orderProduct();
      console.log(location.pathname);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-.5-7.5l3.5 3.5L14 12l-4-4-4 4 1.5 1.5 2.5-2.5V16h1V9.5z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        </div>
        <div className="mt-6 text-center">
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
