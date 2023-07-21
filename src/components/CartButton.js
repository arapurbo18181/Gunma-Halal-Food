import React, { useEffect, useRef } from 'react'
import { BsBagCheckFill } from "react-icons/bs";
import { useApi } from '../context/ApiContext';


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
        IsCartSidebar, 
        setIsCartSidebar
      } = useApi();

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
    <div onClick={() => {
      setToggleSidebar(!ToggleSidebar)
      if(IsCartSidebar === true){
        setIsCartSidebar(false)
      }else{
        setIsCartSidebar(true)
      }
      }} className={`fixed right-0 top-64 z-50 justify-center items-center hover:-translate-y-1 transition-all duration-300 bg-gray-700 h-16 w-12 cursor-pointer ${IsCartSidebar ? "hidden" : "flex"}`} ref={myRef}>
    <div className="cart relative ">
      <BsBagCheckFill
        className="text-3xl text-yellow-400"
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