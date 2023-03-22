import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const CartSidebar = () => {
  const { ToggleSidebar, setToggleSidebar,  TotalAmount, GetCartData, cart, setcart } =
    useCart();


  useEffect(() => {
    // console.log(GetCartData);
    const datas = GetCartData.map((item) => {
      console.log(item);
      return {
        id: item.id,
        price: item.price,
        product_id: item.product_id,
        quantity: item.quantity,
        user_id: item.user_id,
        image: item.product[0].image,
        name: item.product[0].name,
        slug: item.product[0].slug,
      };
    });
    // console.log(datas);
    setcart(datas);
  }, [GetCartData]);

  // if (cart) {
  //   console.log(cart);
  // }

  return (
    <>
      {
        cart ?
        <div
        className={` ${
          ToggleSidebar ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shooping Bag ({TotalAmount})
          </div>
          <div
            onClick={() => setToggleSidebar(!ToggleSidebar)}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[430px] lg:h-640px overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} />;
          })}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex justify-between items-center w-full">
            <div className="uppercase font-semibold">
              <span className="mr-2"> Total: </span> ${" "}
              {parseFloat(0).toFixed(2)}
            </div>
          </div>
          <Link
            onClick={() => setToggleSidebar(!ToggleSidebar)}
            to={"/cart"}
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
          >
            View Cart
          </Link>
          <Link
            onClick={() => setToggleSidebar(!ToggleSidebar)}
            to={"/checkout"}
            className="bg-black flex p-4 justify-center items-center text-white w-full font-medium"
          >
            Checkout
          </Link>
        </div>
      </div> :
      ""
      }
    </>
  );
};

export default CartSidebar;
