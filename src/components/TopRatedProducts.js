import React from "react";
import { useApi } from "../context/ApiContext";
import { useCategory } from "../context/CategoryContext";
import SubCategoryProducts from "./SubCategoryProducts";

const TopRatedProducts = () => {
  const { AllProducts } = useApi();
  return (
    <div className="container">
      <div className="mx-4 my-10">
        <h1 className="text-3xl font-bold text-gray-700 ">
          <span className="underline decoration-red-500 underline-offset-8">
            To
          </span>
          p Rated Products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center w-full px-2">
        {AllProducts.map((item, index) => {
          const discountedAmount = (item.price / 100) * item.discount;
          const newPrice = item.price - Math.round(discountedAmount);
          item.discountedPrice = newPrice;
          return <SubCategoryProducts item={item} key={index} sub_category_slug={item.sub_category.slug} main_category_slug={item.sub_category.main_category.slug} product_slug={item.slug} />;
        })}
      </div>
    </div>
  );
};

export default TopRatedProducts;
