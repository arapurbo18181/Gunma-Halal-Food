import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useApi } from "../context/ApiContext";
import SmallLoader from "./SmallLoader";
import { GrClose } from "react-icons/gr";

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
    setShowProduct,
    setIsCartSidebar
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
 
    <div className="flex gap-x-4 py-1.5 lg:px-6 border-t border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-fit flex items-center gap-x-4">
        <Link
          to={`/${item.cat_slug}/${item.sub_cat_slug}/${item.slug}`}
          onClick={() => {
            setShowProduct(item);
            setIsCartSidebar(false);
          }}
        >
          <img
            className="max-w-[30px]"
            src={`${SmallImage}/${item.image}`}
            alt=""
          />
        </Link>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col justify-between mb-2 space-y-2">
            <Link
              to={`/product/${item.slug}`}
              onClick={() => {
                setShowProduct(item);
                setIsCartSidebar(false);
              }}
              className="text-sm font-medium  text-primary hover:underline"
            >
              {item.name}
              {/* <span className="text-black"> x{item.quantity} </span> */}
            </Link>

            <div
              ref={ref}
              className="flex w-10 items-center h-5 text-primary font-medium"
            >
              <button
                onClick={decrease}
                className="flex-1 flex text-sm justify-center items-center cursor-pointer h-full border-l border-t border-b rounded-l-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <IoMdRemove />
              </button>
              <div className="h-full flex justify-center items-center px-2 border w-5">
                <input
                  type="number"
                  name=""
                  id=""
                  className="w-5 outline-none text-xs text-center h-5 border-b border-t"
                  value={Quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    setUpdateBtn(true);
                  }}
                />
              </div>
              <button
                onClick={increase}
                className="flex-1 h-full text-sm flex justify-center items-center cursor-pointer border-r border-t border-b rounded-r-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <IoMdAdd />
              </button>
              <div className="flex justify-start items-start space-x-0 mx-2 h-fit w-full text-sm text-red-500 font-medium">
                <span>¥</span>{" "}
                <span>{item.price * Quantity}</span>
              </div>
            </div>
          </div>
          <div className="flex text-sm flex-row xl:flex-col justify-start xl:justify-start items-center xl:items-end gap-5">
            {/* <div className="flex-1 flex justify-start items-center text-sm text-primary font-medium">
              {" "}
              {`¥ ${parseFloat(item.price).toFixed(2)}`}{" "}
            </div> */}
            <div className="flex-1 flex justify-start items-start text-sm text-primary font-medium">
              <GrClose onClick={remove} className="cursor-pointer" />
            </div>

            {/* { UpdateBtn && <button onClick={updateCart} className="w-fit border border-red-500 text-red-500 py-2 px-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center flex justify-center items-center text-lg"> <TbEdit/> </button>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemForViewCart;
