import React from "react";
import { Link, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import { useCategory } from "../context/CategoryContext";

const SubCategory = () => {
  const { ItemCategory, setProductsFromCategory } = useCategory();

  const params = useParams();

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-start w-[100%] space-x-5">
        <div className="hidden w-[14vw] sticky top-28 left-0 xl:block -mt-4">
          <CategorySidebar />
        </div>
        <div className="px-2 w-full">
          <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-8">
            <span className="underline decoration-emerald-500 underline-offset-8">
              {params.id.slice(0, 2)}
            </span>
            {params.id.slice(2)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ItemCategory.map((item) => {
              return (
                <Link
                  to={`/product-category/${params.id}/${item.cat}`}
                  onClick={() => setProductsFromCategory(item.product)}
                  className="border shadow-[0_2px_6px_0px_rgb(180,180,180)] hover:-translate-y-3 transition-all duration-500 px-8 py-4 rounded-md max-w-[200px]"
                >
                  <div className="overflow-hidden">
                    <img className="w-full hover:scale-125 transition-all duration-500" src={item.img} />
                  </div>
                  <h2 className="text-center">{item.cat}</h2>
                </Link>
              );
            })}
          </div>
          <Footer/>
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
