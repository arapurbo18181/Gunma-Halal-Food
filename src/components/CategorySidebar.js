import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";

const CategorySidebar = () => {
  const { setItemCategory, categories } = useCategory();

  return (
    <section>
    {/* //! Header */}
      <h2 className="text-2xl">Categories</h2>
      <div className="flex flex-col justify-start items-start">
        {/* //! All Categories */}
        {categories.map((item) => {
          return (
            <Link
              onClick={() => setItemCategory(item.sub_cat)}
              to={`/product-category/${item.category}`}
            >
              {item.category}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySidebar;
