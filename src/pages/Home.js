import React from "react";
import Categories from "../components/Categories";
import CategorySidebar from "../components/CategorySidebar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-200">
      <Hero />
      <div className="flex justify-start items-start">
        <CategorySidebar />
        <Categories/>
      </div>
    </section>
  );
};

export default Home;
