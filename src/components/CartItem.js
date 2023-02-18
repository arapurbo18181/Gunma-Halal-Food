import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({item}) => {
  const {setShowProduct} = useCart();

  const minusProduct = () =>{

  }

  const plusAmount = (item) =>{

  }

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${item.title}`} onClick={()=>setShowProduct(item)}>
          <img className="max-w-[80px]" src={item.img} alt="" />
        </Link>
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-between mb-2">
            <Link
              to={`/product/${item.title}`}
              onClick={()=>setShowProduct(item)}
              className="text-base font-medium max-w-[240px] text-primary hover:underline"
            >
              {item.title} <span className="text-black"> x{item.amount} </span>
            </Link>
            <div>
                dgsdgsergsed
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex-1 flex justify-end items-center text-primary font-medium"> {`$ ${parseFloat(0).toFixed(2)}`} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;