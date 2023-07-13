import React, { useEffect, useRef } from "react";
import { useCategory } from "../context/CategoryContext";
import AllCategories from "./AllCategories";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { useApi } from "../context/ApiContext";

const AllCategoriesSidebar = () => {
  const { IsCategorySidebar, setIsCategorySidebar } = useApi();
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsCategorySidebar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <>
      <div
        className={` flex justify-center items-center z-20 fixed top-0 ${
          IsCategorySidebar ? "left-0" : "-left-full"
        } transition-all duration-500 h-screen`}
      >
        <div
          ref={ref}
          className={` bg-white h-full shadow-2xl w-[80vw] sm:w-[60vw] md:w-[45vw] xl:w-[30vw] px-4 lg:px-[35px] pb-20 overflow-y-auto scrollbar-hide`}
        >
          {/* //! Mobile menu close button */}
          <h1 className="text-3xl font-bold text-center text-gray-700 my-4">
            <span className="underline decoration-red-500 underline-offset-8">
              Ca
            </span>
            tegories
          </h1>
          <div className="mx-2">
            <AllCategories />
          </div>
        </div>

        <div
          className={`h-full w-[20vw] sm:w-[40vw] md:w-[55vw] xl:w-[70vw] ${
            IsCategorySidebar
              ? "bg-black bg-opacity-40 transition-all duration-500 delay-300"
              : "duration-75"
          } `}
        ></div>
      </div>
    </>
  );
};

export default AllCategoriesSidebar;
