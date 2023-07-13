import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useApi } from "../context/ApiContext";
import SmallLoader from "./SmallLoader";

const CartItemForViewCart = ({ item }) => {
  const [Quantity, setQuantity] = useState(Number(item.quantity));
  const [UpdateBtn, setUpdateBtn] = useState(false);
  const [Change, setChange] = useState(Number(item.quantity));
  const {
    SmallImage,
    LargeImage,
    removeFromCart,
    addToCart,
    decreaseFromCart,
    increaseQuantity,
    deleteFromCart,
    decreaseQuantity,
    IsCart,
    setIsCart,
    SmallLoading,
    setSmallLoading,
  } = useApi();
  
  const ref = useRef();

  const increase = () => {
    setQuantity(Quantity + 1);
    setUpdateBtn(true);
  };

  const decrease = () => {
    if (Quantity === 1) {
      remove();
    } else {
      setQuantity(Quantity - 1);
      setUpdateBtn(true);
    }
  };

  const remove = () => {
    setSmallLoading(true);
    deleteFromCart(item);
  };

  const updateCart = () => {
    setSmallLoading(true);
    setUpdateBtn(false);
    increaseQuantity(item, Quantity);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (Quantity <= 0 || !Quantity) {
          console.log(Quantity);
          setQuantity(Number(item.quantity));
          Swal.fire("warning", "Add a valid number", "warning");
        } else {
          updateCart();
          setChange(Number(item.quantity));
        }
      }
    }

    if (Change === Quantity) {
    } else {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [Quantity]);

  return (
    <div className="flex h-full gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex justify-between items-center gap-x-4">
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 flex-1">
          <Link to={`/product/${item.slug}`}>
            <img
              className="max-w-[80px]"
              src={`${LargeImage}/${item.image}`}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-y-1 justify-start">
            <Link
              to={`/product/${item.slug}`}
              className="text-sm uppercase hidden sm:block font-medium max-w-[240px] text-primary hover:underline"
            >
              {item.name}
            </Link>
            <div className="flex items-start justify-start">¥ {item.price}</div>

            <div
              onClick={remove}
              className="text-sm text-red-500 underline cursor-pointer"
            >
              Remove
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center w-full items-center h-full font-medium">
          {SmallLoading ? (
            <SmallLoader width={"100%"} height={"100%"} />
          ) : (
            <div ref={ref} className="flex w-20 items-center h-10 text-primary font-medium">
              <button
                onClick={decrease}
                className="flex-1 flex justify-center items-center cursor-pointer h-full border-l border-t border-b rounded-l-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <IoMdRemove />
              </button>
              <div className="h-full flex justify-center items-center px-2 border w-6">
                <input
                  type="number"
                  name=""
                  id=""
                  className="w-6 outline-none text-center"
                  value={Quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    setUpdateBtn(true);
                  }}
                />
              </div>
              <button
                onClick={increase}
                className="flex-1 h-full flex justify-center items-center cursor-pointer border-r border-t border-b rounded-r-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <IoMdAdd />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 justify-between items-end gap-5 text-primary font-medium ">
          <div className="">
            {" "}
            {`¥ ${parseFloat(item.price * item.quantity).toFixed(2)}`}{" "}
          </div>

          {/* {UpdateBtn && (
            <button
              onClick={updateCart}
              className="w-fit  border border-red-500 text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center flex justify-center items-center space-x-2"
            >
              <TbEdit/> <span> update </span>
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CartItemForViewCart;
