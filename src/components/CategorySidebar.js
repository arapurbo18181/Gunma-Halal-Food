import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";

const CategorySidebar = () => {
  const { setItemCategory, categories } = useCategory();

  return (
    <section>
      <h2 className="text-2xl">Categories</h2>
      <div className="flex flex-col justify-start items-start">
        {categories.map((item) => {
          return (
            <Link
              onClick={() => setItemCategory(item.sub_cat)}
              to={`/${item.category}`}
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
