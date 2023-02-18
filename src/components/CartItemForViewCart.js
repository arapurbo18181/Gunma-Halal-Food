import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const CartItemForViewCart = ({ item }) => {
  const {removeFromCart, addToCart, decreaseFromCart} = useCart()
  return (
    <div className="flex h-full gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex justify-between items-center gap-x-4">
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 flex-1">
          <Link to={`/product/${item.title}`}>
            <img className="max-w-[80px]" src={item.img} alt="" />
          </Link>
          <div className="flex flex-col gap-y-1 justify-start">
            <Link
              to={`/product/${item.title}`}
              className="text-sm uppercase hidden sm:block font-medium max-w-[240px] text-primary hover:underline"
            >
              {item.title}
            </Link>
            <div className="flex items-start justify-start">$ 500 </div>

            <div
            //   onClick={() => removeProductFromCart(item)}
              className="text-sm text-red-500 underline cursor-pointer"
              onClick={()=>removeFromCart(item)}
            >
              Remove
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center w-full items-center h-full font-medium">
          <div className="flex w-20 items-center h-10 border text-primary font-medium">
            <div
              onClick={() => decreaseFromCart(item)}
              className="flex-1 flex justify-center items-center cursor-pointer h-full"
            >
              <IoMdRemove />
            </div>
            <div className="h-full flex justify-center items-center px-2">
              {" "}
              {item.amount}{" "}
            </div>
            <div
              onClick={()=>addToCart(item)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center text-primary font-medium">
          {" "}
          {`$ ${parseFloat(0 * 0).toFixed(2)}`}{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItemForViewCart;