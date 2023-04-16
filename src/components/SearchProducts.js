import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";

const SearchProducts = ({ item }) => {
  const { SmallImage, setSearch, setShowProduct } = useApi();
  console.log(item)
  return (
    <>
      <div className="flex justify-start items-start space-x-5">
        <div className="">
          <img
            className="rounded-md w-full object-cover"
            src={`${SmallImage}/${item.image}`}
            alt={item.image}
          />
        </div>
        <div>
          <Link
            className="text-[0.8rem] font-bold"
            // to={`/${item.sub_category.main_category.slug}/${item.sub_category.slug}/${item.slug}`}
            onClick={() => {
              setShowProduct(item);
              setSearch("");
            }}
          >
            {" "}
            {item.name}{" "}
          </Link>
          <div className="flex justify-start items-center space-x-1">
            <h2 className="md:text-lg font-bold text-red-500">
              ৳{item.discountedPrice}
            </h2>
            <h2 className="text-sm text-gray-400 line-through">{`${
              item.discount === 0 ? "" : `৳${item.price}`
            }`}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
