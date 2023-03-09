import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import { useCategory } from "../context/CategoryContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import SubCategoryProducts from "../components/SubCategoryProducts";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductsOfSubCategory = () => {
  const { ProductsFromCategory } = useCategory();
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
  const params = useParams();

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-center w-[100%] xl:items-start space-x-5">
        <div className="hidden w-[14vw] sticky left-0 top-28 xl:block -mt-4">
          <CategorySidebar />
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14">
            <span className="underline decoration-emerald-500 underline-offset-8">
              {params.id.slice(0, 2)}
            </span>
            {params.id.slice(2)}
          </h2>
          <div className="">
            <div className="fixed right-3 z-50" ref={myRef}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[100%] place-items-center">
              {ProductsFromCategory.map((item) => {
                return <SubCategoryProducts item={item} />;
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ProductsOfSubCategory;
