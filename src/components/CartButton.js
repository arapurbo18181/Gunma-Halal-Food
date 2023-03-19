import React, { useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext';
import { BsBagCheckFill } from "react-icons/bs";


const CartButton = () => {
    
  const myRef = useRef();
    const {
        setShowProduct,
        addToCart,
        addToWishlist,
        CartCoordinate,
        ImgCoordinate,
        setImgCoordinate,
        ToggleSidebar,
        setToggleSidebar,
        TotalAmount,
        TotalWishlist,
        setCartCoordinate,
      } = useCart();

      useEffect(() => {
        setCartCoordinate({
          x: myRef.current.offsetLeft,
          y: myRef.current.offsetTop,
        });
      }, []);

      useEffect(() => {
        // console.log(CartCoordinate);
      }, [CartCoordinate]);
  return (
    <div onClick={() => setToggleSidebar(!ToggleSidebar)} className="fixed right-0 top-36 z-30 flex justify-center items-center hover:-translate-y-1 transition-all duration-300 bg-gray-700 h-16 w-12 cursor-pointer" ref={myRef}>
    <div className="cart relative ">
      <BsBagCheckFill
        className="text-3xl text-yellow-500"
      />
      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-sm text-white">
        {" "}
        {TotalAmount}{" "}
      </div>
    </div>
  </div>
  )
}

export default CartButton