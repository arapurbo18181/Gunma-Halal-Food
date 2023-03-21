import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useApi } from "../context/ApiContext";

const AllCategories = () => {
  const {
    CategoryApi,
    setCategoryApi,
    CategorySlug,
    getProducts,
    SubCatname,
    setSubCatname,
    Catname,
    setCatname,
    BreadCrumbs,
    setBreadCrumbs,
  } = useApi();

  const { setItemCategory, categories, setProductsFromCategory, toggleCat } =
    useCategory();
  // console.log(CategoryApi);

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
      <div className="mx-auto w-full max-w-md rounded-2xl p-2 space-y-0 xl:space-y-2">
        {CategoryApi.map((item) => {
          return (
            <Disclosure className="transition-all duration-300">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between bg-slate-100 hover:bg-red-600 px-4 py-2 text-left text-sm hover:text-base font-medium text-black hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 transition-all duration-300">
                    <Link
                      className=""
                      to={`/product-category/${item.slug}`}
                      onClick={() => {
                        handleCat(item.sub_category);
                        setCatname(item.name);
                        setBreadCrumbs([item.name]);
                      }}
                    >
                      {" "}
                      {item.name}{" "}
                    </Link>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500`}
                    />
                  </Disclosure.Button>
                  {item.sub_category.map((elem) => {
                    return (
                      <Disclosure.Panel className="flex justify-center items-center text-sm hover:text-base text-black hover:text-white hover:bg-red-500 transition-all duration-300 w-full pl-4">
                        <Link
                          className="w-full px-4 py-2"
                          to={`/product-category/${item.slug}/${elem.slug}`}
                          onClick={() => {
                            getProducts(item.slug, elem.slug);
                            setSubCatname(elem.name);
                            setBreadCrumbs([
                              item.name,
                              elem.name,
                            ]);
                          }}
                        >
                          {" "}
                          {elem.name}{" "}
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
