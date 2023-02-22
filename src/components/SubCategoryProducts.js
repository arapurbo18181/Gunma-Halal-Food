import React, { useEffect, useMemo, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseScrollPosition } from "./Hooks/UseScollPosition";

const SubCategoryProducts = ({ item }) => {
  const {
    setShowProduct,
    addToCart,
    addToWishlist,
    CartCoordinate,
    ImgCoordinate,
    setImgCoordinate,
  } = useCart();
  const myRef = useRef();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [Count, setCount] = useState();
  const [AnimationCoodinate, setAnimationCoodinate] = useState({});
  const pos = UseScrollPosition();

  useEffect(() => {
    setImgCoordinate({
      x: myRef.current.offsetLeft,
      y: myRef.current.offsetTop - pos,
    });
  }, [pos]);

  const handleClick = (item) => {
    setImgCoordinate({
      x: myRef.current.offsetLeft,
      y: myRef.current.offsetTop - pos,
    });
    addToCart(item);
    setCount(item.id);
    const setX = (CartCoordinate.x - ImgCoordinate.x) - 48
    const setY = (CartCoordinate.y - ImgCoordinate.y) - 30
    setAnimationCoodinate({ x: setX, y: setY });
    console.log(CartCoordinate, ImgCoordinate, AnimationCoodinate, setX, setY);
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  }

  const imageVariants = {
    hidden: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      scale: 0.5,
      x: AnimationCoodinate.x,
      y: AnimationCoodinate.y,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

//   const imgvar = useMemo(() => {

//   }, [AnimationCoodinate]);

  return (
    <div
      ref={myRef}
      className="px-4 py-4 border border-emerald-500 rounded-md hover:-translate-y-3 transition-all duration-500"
    >
      <div>
        <Link
          className="overflow-hidden relative -z-50"
          to={`/product/${item.title}`}
          onClick={() => setShowProduct(item)}
        >
          <img
            className="hover:scale-110 cursor-pointer transition-all duration-500"
            src={item.img}
            alt=""
          />
          {item.id === Count && isAddedToCart && (
            <motion.div
              className="absolute top-0 z-[999]"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={item.img}
                alt=""
                className={`w-28 h-28 rounded-full animate-fly-to-cart`}
              />
            </motion.div>
          )}
        </Link>
      </div>
      <div className="flex flex-col justify-between items-start my-2">
        <h2 className="text-[1.5rem] font-bold"> {item.title} </h2>
        <div className="flex justify-center items-center space-x-1">
          <h2 className="text-2xl font-bold text-red-500">৳250</h2>
          <h2 className="text-base text-gray-400 line-through">৳300</h2>
        </div>
        <div className="w-full flex justify-center items-center my-2 ">
          <button
            onClick={() => addToWishlist(item)}
            className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full"
          >
            {" "}
            <BsSuitHeart /> <span>Add To Wishlist</span>{" "}
          </button>
        </div>
        <div className="w-full flex justify-center items-center my-2 ">
          <button
            onClick={() => handleClick(item)}
            className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full"
          >
            {" "}
            <BsPlusLg /> <span>Add To Cart</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryProducts;
