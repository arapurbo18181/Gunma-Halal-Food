import React, { useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import CartItemForViewCart from "../components/CartItemForViewCart";
import { useApi } from "../context/ApiContext";
import BreadCrumbs from "../components/BreadCrumbs";
import SmallLoader from "../components/SmallLoader";
import Loaders from "../components/Loaders";

const Cart = () => {
  const {
    Cart,
    TotalAmount,
    clearCart,
    cart,
    deleteAll,
    TotalPrice,
    SmallLoading,
  } = useApi();
  // console.log(cart)
  return (
    <>
      <BreadCrumbs name="Cart" url="cart" />
      {cart ? (
        <>
          <section className="flex flex-col lg:flex-row justify-center items-center px-1 lg:px-20 lg:space-x-5 mb-20">
            <div className="flex-[2] h-[100%] w-[100%] flex flex-col justify-center items-center mt-16">
              <div className="mb-4 underline underline-offset-8">
                <h1 className="text-3xl font-bold">
                  Your Cart ({TotalAmount})
                </h1>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center bg-red-500 text-white px-4 rounded py-2 my-4">
                  <div>Product</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                </div>
                <div className="flex flex-col gap-y-2 h-[380px] justify-between overflow-y-auto overflow-x-hidden">
                  {SmallLoading ? (
                    <SmallLoader width={"100%"} height={"50vh"} />
                  ) : (
                    <>
                      {cart.map((item, index) => {
                        return (
                          <>
                            <CartItemForViewCart item={item} key={index} />
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="w-full h-[1px] bg-red-500 mt-4"></div>

                <div className="flex justify-between items-center w-full mt-5">
                  <div className="uppercase font-semibold">
                    <span className="mr-2"> Total: </span> ${" "}
                    {parseFloat(TotalPrice).toFixed(2)}
                  </div>
                  {/* <div
                    onClick={deleteAll}
                    className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                  >
                    <FiTrash2 />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 border border-red-500 rounded-lg h-[400px] w-full px-10 py-5 mt-10">
              <div className="w-full text-center">
                <h2 className="text-xl font-bold"> Cart Totals </h2>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <h3 className=" font-semibold">Subtotal</h3>
                <h5 className="text-base text-gray-400">$453</h5>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 ">
                <h3 className="font-semibold">Shipping</h3>
                <h5 className="text-red-500 font-semibold">
                  Calculate shipping
                </h5>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 ">
                <h3 className="font-semibold">
                  Tax{" "}
                  <span className="font-normal text-sm">
                    (estimated for japan)
                  </span>{" "}
                </h3>
                <h5 className="text-red-500 font-semibold">$453</h5>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 font-bold text-xl">
                <h3>Total</h3>
                <h5>$453</h5>
              </div>
              <div className="w-full mt-10">
                <Link to={"/checkout"}>
                  <button className="bg-red-500 text-white w-full py-2 border border-red-500 hover:bg-transparent hover:text-black transition-all duration-500">
                    Checkout
                  </button>
                </Link>
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
