import React, { useEffect, useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import CartItem from "./CartItem";
import FreeDel from "./FreeDel";
import SmallLoader from "./SmallLoader";

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
    SmallLoading,
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
        <div
          className={`flex justify-center items-center z-40 fixed top-0 ${
            IsCartSidebar ? "right-0" : "-right-full"
          } transition-all duration-500 h-screen`}
        >
          <div
            className={`h-full w-[20vw] sm:w-[40vw] md:w-[55vw] xl:w-[70vw] ${
              IsCartSidebar
                ? "bg-black bg-opacity-40 transition-all duration-500 delay-300"
                : "duration-75"
            } `}
          ></div>
          <div
            ref={ref}
            className={` bg-white h-full shadow-2xl w-[80vw] sm:w-[60vw] md:w-[45vw] xl:w-[30vw] px-4 lg:px-[35px] overflow-y-auto scrollbar-hide my-10`}
          >
            <div className="flex items-center justify-between py-0.5 border-b">
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
            <FreeDel />
            <Link
              onClick={() => {
                setToggleSidebar(!ToggleSidebar);
                setIsCartSidebar(false);
              }}
              to={"/"}
              className="bg-blue-600 flex px-2 lg:px-4 py-0.5 text-sm justify-center items-center text-white w-full font-medium my-2 hover:text-blue-600 hover:bg-white border border-blue-600 transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <div className="flex flex-col gap-y-0 h-[40vh] sm:h-[50vh] overflow-y-auto overflow-x-hidden scrollbar-hide">
              {SmallLoading ? (
                <SmallLoader width={"100%"} height={"100%"} />
              ) : (
                <>
                  {cart.map((item, index) => {
                    return (
                      <div key={index}>
                        <CartItem item={item} />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <div className="flex flex-col gap-y-3 py-2 lg:mt-0">
              <div className="flex-1 w-full text-end uppercase text-sm font-semibold">
                <span className="mr-2"> Total: </span> ¥ {TotalPrice}
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex-1 text-sm text-center text-red-500 bg-yellow-300 w-fit px-1 md:px-8 py-1 md:py-3 border-2 border-red-500">
                  {8500 - TotalPrice < 1 ? (
                    <h2 className="font-semibold md:font-bold"> You will get a free delivery <span className="text-xs text-red-500 font-normal"> (Not applicable for wholesale) </span> </h2>
                  ) : (
                    <h2 className="font-bold">Buy more ¥{8500 - TotalPrice} for free delivery <span className="text-xs text-red-500 font-normal"> (Not applicable for wholesale) </span> </h2>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
                <Link
                  onClick={() => {
                    setToggleSidebar(!ToggleSidebar);
                    setIsCartSidebar(false);
                  }}
                  to={"/cart"}
                  className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center"
                >
                  View Cart
                </Link>
                {User ? (
                  <a
                    onClick={() => {
                      setToggleSidebar(!ToggleSidebar);
                      setIsCartSidebar(false);
                    }}
                    href={"/checkout"}
                    className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center"
                  >
                    Checkout
                  </a>
                ) : (
                  <Link
                    onClick={() => {
                      setToggleSidebar(!ToggleSidebar);
                      setIsCartSidebar(false);
                    }}
                    to={"/login"}
                    className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center"
                  >
                    Checkout
                  </Link>
                )}
              </div>
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
