import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";

const Categories = () => {
  const { setItemCategory, categories } = useCategory();

  return (
    <div className="container">
      {/* //! Top Categories */}

      <h1 className="text-3xl font-bold text-gray-700 mt-8 mb-4 mx-4">
        <span className="underline decoration-red-500 underline-offset-8">
          To
        </span>
        p{" "}
        Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2">
        {categories.map((item) => {
          return (
            <Link
              to={`/product-category/${item.category}`}
              onClick={() => setItemCategory(item.sub_cat)}
              className="flex flex-col justify-center items-center"
            >
              <div className="overflow-hidden w-full flex justify-center items-center">
                <img
                  src={item.img}
                  className="hover:scale-110 transition-all duration-500 w-6/12 md:w-8/12 xl:w-10/12"
                />
              </div>
              <h3 className="text-xl"> {item.category} </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
