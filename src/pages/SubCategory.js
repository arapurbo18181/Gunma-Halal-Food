import React from "react";
import { Link, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import { useCategory } from "../context/CategoryContext";

const SubCategory = () => {
  const { ItemCategory, setProductsFromCategory } = useCategory();

  const params = useParams();

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-start w-[1440px]">
        <div className="-mt-4 w-[380px]">
          <div className="block w-[380px]"></div>
          <CategorySidebar />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-700 my-4">
            <span className="underline decoration-emerald-500 underline-offset-8">
              {params.id.slice(0, 2)}
            </span>
            {params.id.slice(2)}
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {ItemCategory.map((item) => {
              return (
                <Link
                  to={`/product-category/${params.id}/${item.cat}`}
                  onClick={() => setProductsFromCategory(item.product)}
                  className="border border-emerald-400 px-8 py-4 rounded-md"
                >
                  <div className="overflow-hidden">
                    <img className="w-full hover:scale-125 transition-all duration-500" src={item.img} />
                  </div>
                  <h2 className="text-center">{item.cat}</h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
