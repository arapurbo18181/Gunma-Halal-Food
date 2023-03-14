import React from "react";
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <form className="relative flex w-full items-center justify-center rounded-xl drop-shadow-md xl:mt-5">
        <input
          type="text"
          className="w-full rounded-xl bg-gray-100 pl-3 pr-6 py-1 md:py-2 xl:py-2 text-sm sm:text-lg placeholder-gray-700 outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 xl:w-full"
          placeholder="Search"
        />

        <button onClick={(e)=>e.preventDefault()} type="submit" className="absolute h-full right-2 xl:right-4 cursor-pointer">
          <FiSearch className="text-sm sm:text-lg md:text-2xl text-red-500" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
