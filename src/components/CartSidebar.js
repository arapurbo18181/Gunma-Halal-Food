import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { useApi } from "../context/ApiContext";

const CartSidebar = () => {
  const {
    ToggleSidebar,
    setToggleSidebar,
    TotalAmount,
    GetCartData,
    cart,
    setcart,
    TotalPrice,
    User,
    setIsCartSidebar,
    IsCartSidebar,
  } = useApi();
  // console.log(cart)

  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsCartSidebar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      {cart ? (
        <div className={`flex justify-center items-center z-20 fixed top-0 ${IsCartSidebar ? "right-0" : "-right-full"} transition-all duration-500 h-screen`}>
        <div className={`h-full w-full md:w-[65vw] xl:w-[70vw] ${IsCartSidebar ? "bg-black bg-opacity-40 transition-all duration-500 delay-300" : "duration-75"} `}>

        </div>
          <div ref={ref}
            className={`w-full bg-white h-full shadow-2xl md:w-[35vw] xl:w-[30vw] px-4 lg:px-[35px]`}
          >
            <div className="flex items-center justify-between py-6 border-b">
              <div className="uppercase text-sm font-semibold">
                Shooping Bag ({TotalAmount})
              </div>
              <div
                onClick={() => setIsCartSidebar(!IsCartSidebar)}
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
              >
                <IoMdArrowForward className="text-2xl" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 h-[50vh] lg:h-640px overflow-y-auto overflow-x-hidden border-b">
              {cart.map((item, index) => {
                return <CartItem item={item} key={index} />;
              })}
            </div>
            <div className="flex flex-col gap-y-3 py-4 mt-4">
              <div className="flex justify-between items-center w-full">
                <div className="uppercase font-semibold">
                  <span className="mr-2"> Total: </span> ${" "}
                  {parseFloat(TotalPrice).toFixed(2)}
                </div>
              </div>
              <Link
                onClick={() => {
                  setToggleSidebar(!ToggleSidebar)
                  setIsCartSidebar(false)
                  }}
                to={"/cart"}
                className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
              >
                View Cart
              </Link>
              {User ? (
                <Link
                  onClick={() => {
                    setToggleSidebar(!ToggleSidebar)
                    setIsCartSidebar(false)
                    }}
                  to={"/checkout"}
                  className="bg-black flex p-4 justify-center items-center text-white w-full font-medium"
                >
                  Checkout
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setToggleSidebar(!ToggleSidebar);
                    setIsCartSidebar(false)
                  }}
                  to={"/login"}
                  className="bg-black flex p-4 justify-center items-center text-white w-full font-medium"
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartSidebar;
