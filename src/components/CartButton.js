import React, { useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";


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
        console.log(CartCoordinate);
      }, [CartCoordinate]);
  return (
    <div className="fixed right-3 top-36 z-30" ref={myRef}>
    <div className="cart relative flex-1 hover:-translate-y-1 transition-all duration-300">
      <AiOutlineShoppingCart
        onClick={() => setToggleSidebar(!ToggleSidebar)}
        className="cursor-pointer text-5xl"
      />
      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 flex justify-center items-center text-sm text-white">
        {" "}
        {TotalAmount}{" "}
      </div>
    </div>
  </div>
  )
}

export default CartButton