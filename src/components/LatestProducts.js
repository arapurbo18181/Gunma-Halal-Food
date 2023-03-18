import React, { useEffect, useRef } from "react";
import { useCategory } from "../context/CategoryContext";
import SubCategoryProducts from "./SubCategoryProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartButton from "./CartButton";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useProduct } from "../context/ProductContext";

const LatestProducts = () => {
  const { product } = useCategory();
  const {MyRef, setMyRef, myRefForFlyToCart} = useProduct();
  



  const scrollLeft = () => {
    document.getElementById("carousol").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("carousol").scrollLeft += 400;
  };

  return (
    <div className="container">
      <div className="mx-4 my-10">
        <h1 className="text-3xl font-bold text-gray-700">
          <span className="underline decoration-red-500 underline-offset-8">
            Lat
          </span>
          est Products
        </h1>
      </div>
      <div className="relative flex justify-between">
        <div
          onClick={scrollLeft}
          className="absolute top-28 left-0 text-3xl border z-30 bg-white drop-shadow-lg bottom-40 cursor-pointer"
        >
          <AiOutlineLeft />
        </div>
        <div
          onClick={scrollRight}
          className="absolute top-28 right-0 text-3xl border z-30 bg-white drop-shadow-lg bottom-40 cursor-pointer"
        >
          <AiOutlineRight />
        </div>
      </div>
      <div
      ref={myRefForFlyToCart}
        id="carousol"
        className={`flex justify-start items-center w-[100%] overflow-x-auto space-x-4 scroll-smooth scrollbar-hide`}
      >
        {/* <Slider {...settings}> */}
        {product.map((item) => {
          return (
            <div className="px-5 py-5 cursor-pointer">
              <SubCategoryProducts item={item} />
            </div>
          );
        })}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default LatestProducts;
