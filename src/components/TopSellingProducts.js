import React from "react";
import { useApi } from "../context/ApiContext";
import SubCategoryProducts from "./SubCategoryProducts";

const TopSellingProducts = () => {
  const { AllProducts, SellingProducts } = useApi();
  return (
    <div className="container">
      <div className="mx-4 my-10">
        <h1 className="text-3xl font-bold text-gray-700 ">
          <span className="underline decoration-red-500 underline-offset-8">
            To
          </span>
          p Selling Products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center w-full px-2">
        {SellingProducts.map((item, index) => {
          const discountedAmount = (item.price / 100) * item.discount;
          const newPrice = item.price - Math.round(discountedAmount);
          item.discountedPrice = newPrice;
          return <SubCategoryProducts item={item} key={index} product_slug={item.slug} />;
        })}
      </div>
    </div>
  );
};

export default TopSellingProducts;
