import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const AllCategories = () => {
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

  return (
    <div>
      <div className="mx-auto w-full max-w-md rounded-2xl bg-red- p-2 space-y-2">
        {categories.map((item) => {
          return (
            <Disclosure className="transition-all duration-300">
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
                      <Disclosure.Panel className="flex justify-center items-center text-sm hover:text-base text-black hover:text-white hover:bg-red-500 transition-all duration-300 w-full">
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
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
