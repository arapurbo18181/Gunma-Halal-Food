import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useState } from "react";
import Beef from "../images/beef.webp"

const CartItem = ({ ...item }) => {
  const [Url, setUrl] = useState();

  const minusProduct = () =>{

  }

  const plusAmount = (item) =>{

  }

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product`}>
          <img className="max-w-[80px]" src={Beef} alt="" />
        </Link>
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-between mb-2">
            <Link
              to={`/product`}
              className="text-base font-medium max-w-[240px] text-primary hover:underline"
            >
              BEEF <span className="text-black">x2</span>
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