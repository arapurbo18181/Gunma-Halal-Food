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
                ? "bg-white text-black border border-red-500 rounded w-full py-2 text-sm md:text-base xl:text-xl px-4"
                : "bg-gradient-to-t w-full py-2 from-red-500 to-red-200 text-sm md:text-base xl:text-xl border border-red-500 px-4"
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
