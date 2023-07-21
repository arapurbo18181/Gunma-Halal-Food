import React, { useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import CartItemForViewCart from "../components/CartItemForViewCart";
import { useApi } from "../context/ApiContext";
import BreadCrumbs from "../components/BreadCrumbs";
import SmallLoader from "../components/SmallLoader";
import Loaders from "../components/Loaders";
import FreeDel from "../components/FreeDel";

const Cart = () => {
  const {
    Cart,
    TotalAmount,
    clearCart,
    cart,
    deleteAll,
    TotalPrice,
    SmallLoading,
    User,
    setToggleSidebar,
    setIsCartSidebar,
    ToggleSidebar
  } = useApi();
  // console.log(cart)
  return (
    <>
      <BreadCrumbs name="Cart" url="cart" />
          <FreeDel/>
      {cart ? (
        <>
          <section className="flex flex-col lg:flex-row justify-center items-start px-1 lg:px-20 lg:space-x-5 mb-20">
            <div className="flex-[1.5] h-[100%] w-[100%] flex flex-col justify-center items-center mt-5">
              <div className="underline underline-offset-8 mb-5">
                <h1 className="text-base xl:text-xl font-bold">
                  Your Cart ({TotalAmount})
                </h1>
              </div>

              <div className="w-full">
                <div className="flex flex-col gap-y-2 h-[500px] justify-between overflow-y-auto overflow-x-hidden">
                  {SmallLoading ? (
                    <SmallLoader width={"100%"} height={"100%"} />
                  ) : (
                    <>
                      {cart.map((item, index) => {
                        return (
                          <div key={index}>
                            <CartItemForViewCart item={item} />
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="w-full h-[1px] bg-red-500 mt-4"></div>

                <div className="flex justify-between items-center w-full mt-5">
                  <div className="uppercase font-bold ">
                    <span className="mr-2"> Total: </span> ¥{" "}
                    {TotalPrice}
                  </div>
                  <div>
                  {User ? (
                  <a
                    onClick={() => {
                      setToggleSidebar(!ToggleSidebar);
                      setIsCartSidebar(false);
                    }}
                    href={"/checkout"}
                    className="w-full border hover:border-red-500 hover:text-red-500 hover:bg-white py-2 rounded-full bg-red-500 text-white transition-all duration-300 text-center px-4"
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
                    className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center px-4"
                  >
                    Checkout
                  </Link>
                )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
