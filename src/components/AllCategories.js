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
      <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100 p-2 space-y-2">
        {categories.map((item) => {
          return (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-100 px-4 py-2 text-left text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                    <Link
                      to={`/product-category/${item.category}`}
                      onClick={() => handleCat(item.sub_cat)}
                    >
                      {" "}
                      {item.category}{" "}
                    </Link>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-emerald-500`}
                    />
                  </Disclosure.Button>
                  {item.sub_cat.map((elem) => {
                    return (
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-emerald-900">
                        <Link
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
