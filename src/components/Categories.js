import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import { useCategory } from "../context/CategoryContext";
import CateBanner from "../images/cat-banner.webp";

const Categories = () => {
  const { setItemCategory, categories, CatImage, setCatImage } = useCategory();
  const {CategoryApi, LargeImage, setCatname, CategoryImage} = useApi()

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 ">
        {CategoryApi.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item.slug}`}
              onClick={() => {
                setItemCategory(item.sub_category)
                setCatname(item.name)
                }}
              className="flex flex-col justify-center items-center w-[45vw] md:w-full max-w-[300px] "
            >
              <div className="overflow-hidden w-full flex justify-center items-center">
                <img
                  src={`${CategoryImage}/${item.image}`}
                  alt={item.name}
                  className="hover:scale-110 transition-all duration-500 w-6/12 md:w-8/12 xl:w-10/12"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl"> {item.name} </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
