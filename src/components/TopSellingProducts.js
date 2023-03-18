import React from 'react'
import { useCategory } from "../context/CategoryContext";
import SubCategoryProducts from "./SubCategoryProducts";

const TopSellingProducts = () => {
  const { product } = useCategory();
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[100%] place-items-center">
        {product.map((item) => {
          return <SubCategoryProducts item={item} />;
        })}
      </div>
    </div>
  )
}

export default TopSellingProducts