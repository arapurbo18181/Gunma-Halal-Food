import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useApi } from "../context/ApiContext";

const CartItemForViewCart = ({ item }) => {
  const {removeFromCart, addToCart, decreaseFromCart, increaseQuantity, deleteFromCart, decreaseQuantity} = useCart();
  const {SmallImage, LargeImage} = useApi()

  return (
    <div className="flex h-full gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex justify-between items-center gap-x-4">
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 flex-1">
          <Link to={`/product/${item.slug}`}>
            <img className="max-w-[80px]" src={`${LargeImage}/${item.image}`} alt="" />
          </Link>
          <div className="flex flex-col gap-y-1 justify-start">
            <Link
              to={`/product/${item.slug}`}
              className="text-sm uppercase hidden sm:block font-medium max-w-[240px] text-primary hover:underline"
            >
              {item.name}
            </Link>
            <div className="flex items-start justify-start">$ {item.price}</div>

            <div
              onClick={() => deleteFromCart(item)}
              className="text-sm text-red-500 underline cursor-pointer"
            >
              Remove
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center w-full items-center h-full font-medium">
          <div className="flex w-20 items-center h-10 border text-primary font-medium">
            <div
              onClick={() => decreaseQuantity(item)}
              className="flex-1 flex justify-center items-center cursor-pointer h-full"
            >
              <IoMdRemove />
            </div>
            <div className="h-full flex justify-center items-center px-2">
              {" "}
              {item.quantity}{" "}
            </div>
            <div
              onClick={()=>increaseQuantity(item)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center text-primary font-medium">
          {" "}
          {`$ ${parseFloat(item.price * item.quantity).toFixed(2)}`}{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItemForViewCart;