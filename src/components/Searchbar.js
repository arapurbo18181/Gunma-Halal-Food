import React from "react";
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div>
      <form className="relative flex w-[150px] sm:w-full items-center justify-center space-x-2 rounded-xl drop-shadow-md mt-5">
        <input
          type="text"
          className="w-full rounded-xl bg-gray-100 px-6 py-4 text-base sm:text-lg placeholder-gray-700 outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500"
          placeholder="Search"
        />

        <button type="submit" className="absolute right-4 cursor-pointer">
          <FiSearch className="text-lg sm:text-2xl text-emerald-500" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
