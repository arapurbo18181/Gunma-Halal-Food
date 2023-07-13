import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import { useCategory } from "../context/CategoryContext";

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
    setCategorySlug,
    setSubCategorySlug,
    CategoryImage,
    toggleCat
  } = useApi();

  const {
    setItemCategory,
    categories,
    setProductsFromCategory,
    setIsCategorySidebar,
  } = useCategory();
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
  const location = useLocation();
  const temp = location.pathname.split("/")

  return (
    <div>
      <div className="mx-auto w-full max-w-md rounded-2xl p-2 space-y-0 xl:space-y-2 overflow-y-auto h-fit">
        {CategoryApi.map((item, index) => {
          return (
            <Disclosure key={index} className="transition-all duration-300">
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between ${temp[2] === item.slug ? "bg-red-600 text-white" : "bg-slate-100 text-black"}  hover:bg-red-600 px-4 py-2 text-left text-sm font-medium  hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 transition-all duration-300`}>
                    <Link
                      className="flex justify-center items-center space-x-2"
                      to={`/category/${item.slug}`}
                      onClick={() => {
                        handleCat(item.sub_category);
                        setCatname(item.name);
                        setCategorySlug(item.slug);
                      }}
                    >
                      <img
                        className="w-8"
                        src={`${CategoryImage}/${item.image}`}
                        alt={item.name}
                      />
                      <span>{item.name}</span>
                    </Link>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500`}
                    />
                  </Disclosure.Button>
                  {item.sub_category.map((elem, index) => {
                    return (
                      <Disclosure.Panel
                        key={index}
                        className={`flex justify-center items-center ${temp[3] === elem.slug ? "bg-red-600 text-white" : " text-black"} text-sm px-8 hover:text-white hover:bg-red-500 transition-all duration-300 w-full`}
                      >
                        <Link
                          className="w-full py-2 flex justify-start items-center space-x-2"
                          to={`/category/${item.slug}/${elem.slug}`}
                          onClick={() => {
                            handleSubCat(item.sub_category);
                          }}
                        >
                          <img
                            className="w-8"
                            src={`${CategoryImage}/${elem.image}`}
                            alt={item.name}
                          />
                          <span>{elem.name}</span>
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
