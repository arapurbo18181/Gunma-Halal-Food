import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useApi } from "../context/ApiContext";
import SearchProducts from "./SearchProducts";

const Searchbar = () => {
  const [IsSearch, setIsSearch] = useState(false);
  const { Search, setSearch, SearchProduct, NewSearchProducts } = useApi();
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsSearch(false);
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
    <div className="w-full flex justify-center items-center">
      <form className="relative flex w-10/12 sm:w-8/12 md:w-1/2 xl:w-10/12 items-center justify-center rounded-xl drop-shadow-md ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={Search}
          onClick={e=>setIsSearch(true)}
          type="text"
          className="w-full rounded-xl bg-gray-100 pl-3 pr-6 py-1 md:py-2 xl:py-2 text-sm sm:text-lg placeholder-gray-700 outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 xl:w-full"
          placeholder="Search"
        />
        {IsSearch ? (
          <div ref={ref} className="absolute bg-white min-h-[200px] w-full top-12 flex flex-col items-center overflow-hidden mx-4">
            <h2>
              Search Results for: "<span className="font-bold">{Search}</span>"
            </h2>
            <div className="max-h-[400px] overflow-y-auto w-full grid grid-cols-1 md:grid-cols-2 gap-7 px-2 py-4">
              {SearchProduct.map((item) => {
                const discountedAmount = (item.price / 100) * item.discount;
                const newPrice = item.price - discountedAmount;
                item.discountedPrice = Math.round(newPrice);
                return <SearchProducts item={item} />;
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        <button
          onClick={(e) => e.preventDefault()}
          type="submit"
          className="absolute h-full right-2 xl:right-4 cursor-pointer"
        >
          <FiSearch className="text-sm sm:text-lg md:text-2xl text-red-500" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
