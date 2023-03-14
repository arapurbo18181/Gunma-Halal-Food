import React from "react";
import { useProduct } from "../context/ProductContext";

const ProductTopbar = () => {
  const { productTopbar, ToggleProductTopbar, setToggleTopbar } = useProduct();
  return (
    <div className="flex justify-center items-center">
      {productTopbar.map((item, i) => {
        return (
          <button
            onClick={() => setToggleTopbar(item.id)}
            className={`${
                ToggleProductTopbar === i
                ? "bg-white text-black border-t-2 border-t-red-500 shadow-inner w-full py-2 text-sm md:text-base xl:text-xl px-4 transition-all duration-100 ease-in-out"
                : "bg-gradient-to-t w-full py-2 text-sm md:text-base xl:text-xl drop-shadow-2xl px-4 transition-all duration-100 ease-in-out"
            }`}
          >
            {item.tag}
          </button>
        );
      })}
    </div>
  );
};

export default ProductTopbar;
