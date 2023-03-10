import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const AllCategories = () => {
  const [Open, setOpen] = useState(false);
  const [Count, setCount] = useState(0);
  const { setItemCategory, categories, setProductsFromCategory, toggleCat } =
    useCategory();

  const handleCat = (cat) => {
    setItemCategory(cat);
    if (window.innerWidth < 1280) {
      toggleCat();
    }
  };

  const handleSubCat = (subCat) => {
    setProductsFromCategory(subCat);
    if (window.innerWidth < 1280) {
      toggleCat();
    }
  };
  {
    /* <Disclosure className="transition-all duration-300">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between bg-white hover:bg-red-600 px-4 py-2 text-left text-sm hover:text-base font-medium text-black hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 transition-all duration-300">
                    <Link
                    className=""
                      to={`/product-category/${item.category}`}
                      onClick={() => handleCat(item.sub_cat)}
                    >
                      {" "}
                      {item.category}{" "}
                    </Link>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500`}
                    />
                  </Disclosure.Button>
                  {item.sub_cat.map((elem) => {
                    return (
                      <Disclosure.Panel  className="flex justify-center items-center text-sm hover:text-base text-black hover:text-white hover:bg-red-500 transition-all duration-300 w-full">
                        <Link
                          className="w-full px-4 py-2"
                          to={`/product-category/${item.category}/${elem.cat}`}
                          onClick={() => handleSubCat(elem.product)}
                        >
                          {" "}
                          {elem.cat}{" "}
                        </Link>
                      </Disclosure.Panel>
                    );
                  })}
                </>
              )}
            </Disclosure> */
  }

  const openCat = (id) => {
    setCount(id);
    setOpen(!Open);
    console.log(id);
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-md rounded-2xl p-2 space-y-0 xl:space-y-2 grid grid-cols-2 xl:grid-cols-none">
        {categories.map((item) => {
          return (
            <div className="transition-all duration-300">
              <div
                onClick={() => openCat(item.id)}
                className="flex w-full justify-between bg-white hover:bg-red-600 px-4 py-2 text-left text-sm hover:text-base font-medium text-black hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 transition-all duration-300 cursor-pointer"
              >
                <Link
                  className=""
                  to={`/product-category/${item.category}`}
                  onClick={() => handleCat(item.sub_cat)}
                >
                  {" "}
                  {item.category}{" "}
                </Link>
                <ChevronDownIcon
                  className={`${
                    item.id === Count && Open ? "rotate-180 transform " : ""
                  } h-5 w-5 text-white-500 `}
                />
              </div>
              {item.id === Count && Open && (
                <div className="transition-all duration-300">
                  {item.sub_cat.map((elem) => {
                    return (
                      <div className="flex justify-center items-center text-sm hover:text-base text-black hover:text-white hover:bg-red-500 transition-all duration-300 w-full">
                        <Link
                          className="w-full px-4 py-2"
                          to={`/product-category/${item.category}/${elem.cat}`}
                          onClick={() => handleSubCat(elem.product)}
                        >
                          {" "}
                          {elem.cat}{" "}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
