import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const CategorySidebar = () => {
  const { setItemCategory, categories, setProductsFromCategory } =
    useCategory();

  console.log(categories);

  return (
    <section className="border-r px-2 overflow-y-auto fixed">
      <div className="w-[340px] pr-3 pt-4 h-[85vh]">
      <h1 className="text-3xl font-bold text-center text-gray-700 my-4">
        <span className="underline decoration-emerald-500 underline-offset-8">
          Ca
        </span>
        tegories
      </h1>
        <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100 p-2 space-y-2">
          {categories.map((item) => {
            return (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-100 px-4 py-2 text-left text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                      <Link
                        to={`/product-category/${item.category}`}
                        onClick={() => setItemCategory(item.sub_cat)}
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
                            onClick={() =>
                              setProductsFromCategory(elem.product)
                            }
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
    </section>
  );
};

export default CategorySidebar;
