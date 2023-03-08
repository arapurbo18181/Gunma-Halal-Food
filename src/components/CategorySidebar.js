import React from "react";
import Searchbar from "./Searchbar";
import AllCategories from "./AllCategories";

const CategorySidebar = () => {


  return (
    <section className="overflow-y-auto scrollbar-hide left-0 transition-all duration-500 w-[14vw] h-[85vh]">
      <div className="">
      {/* <Searchbar/> */}
      <h1 className="text-3xl font-bold text-center text-gray-700 my-4">
        <span className="underline decoration-emerald-500 underline-offset-8">
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
