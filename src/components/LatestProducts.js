import React from "react";
import { useCategory } from "../context/CategoryContext";
import SubCategoryProducts from "./SubCategoryProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartButton from "./CartButton";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const LatestProducts = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const { product } = useCategory();
  console.log(product);

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
      <div
        onClick={scrollLeft}
        className="absolute top-[150%] left-[15%] text-3xl border rounded-full bg-white drop-shadow-lg bottom-40 cursor-pointer"
      >
        <AiOutlineLeft />
      </div>
      <div
        onClick={scrollRight}
        className="absolute top-[150%] right-0 text-3xl border rounded-full bg-white drop-shadow-lg bottom-40 cursor-pointer"
      >
        <AiOutlineRight />
      </div>
      <div
        id="carousol"
        className="flex justify-start items-center w-[100%] overflow-visible overflow-x-auto space-x-4 scroll-smooth scrollbar-hide"
      >
      
        {/* <Slider {...settings}> */}
        {product.map((item) => {
          return (
            <div className="py-10 px-2 cursor-pointer overflow-visible">
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
