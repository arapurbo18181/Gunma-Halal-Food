import React from "react";
import Categories from "../components/Categories";
import CategorySidebar from "../components/CategorySidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-start w-[1440px]">
        <div className="-mt-4 w-[380px]">
          <div className="block w-[380px]"></div>
          <CategorySidebar />
        </div>
        <div className="flex flex-col justify-start items-end">
          <Hero />
          <Categories />
          <Footer/>
        </div>
      </div>
    </section>
  );
};

export default Home;
