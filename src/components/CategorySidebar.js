import React from "react";
import Searchbar from "./Searchbar";
import AllCategories from "./AllCategories";
import { useApi } from "../context/ApiContext";

const CategorySidebar = () => {

  return (
    <section className="overflow-y-auto border-r border-r-red-200 bg-slate-100 scrollbar-hide left-0 transition-all duration-500 w-[14vw] min-h-[85vh] max-h-[90vh] mt-4">
      <div className="">
      {/* <Searchbar/> */}
      <h1 className="text-3xl font-bold text-center text-gray-700 my-4">
        <span className="underline decoration-red-500 underline-offset-8">
          Ca
        </span>
        tegories
      </h1>
        <AllCategories/>
      </div>
    </section>
  );
};

export default CategorySidebar;
