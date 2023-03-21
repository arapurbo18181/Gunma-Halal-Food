import React from 'react'
import { useApi } from '../context/ApiContext';
import { useCategory } from "../context/CategoryContext";
import SubCategoryProducts from "./SubCategoryProducts";

const TopRatedProducts = () => {
  const { product } = useCategory();
  const {ProductsApi, AllProducts} = useApi();
  // console.log(ProductsApi)
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[100%] ">
        {AllProducts.map((item) => {
          return <SubCategoryProducts item={item} />;
        })}
      </div>
    </div>
  )
}

export default TopRatedProducts