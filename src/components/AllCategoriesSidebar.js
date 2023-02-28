import React from "react";
import { useCategory } from "../context/CategoryContext";
import AllCategories from "./AllCategories";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AllCategoriesSidebar = () => {
  const { ToggleCategory, toggleCat } = useCategory();
  return (
    <div
      className={`absolute top-0 left-0 h-[100vh] w-[90vw] py-20 ${
        ToggleCategory ? "left-0" : "-left-full"
      } transition-all duration-500 bg-white overflow-auto`}
    >
      {/* //! Mobile menu close button */}
      <div
        onClick={toggleCat}
        className="absolute top-4 right-4 text-3xl cursor-pointer"
      >
        <AiOutlineArrowLeft />
      </div>
      <div className="mx-2">
        <AllCategories />
      </div>
    </div>
  );
};

export default AllCategoriesSidebar;
