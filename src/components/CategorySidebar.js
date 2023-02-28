import React from "react";
import Searchbar from "./Searchbar";
import AllCategories from "./AllCategories";

const CategorySidebar = () => {


  return (
    <section className="border-r overflow-y-auto fixed transition-all duration-500">
      <div className="w-[250px] px-2 pt-4 h-[92vh]">
      <Searchbar/>
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
