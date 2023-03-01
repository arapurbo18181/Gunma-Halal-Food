import React from "react";
import Categories from "../components/Categories";
import CategorySidebar from "../components/CategorySidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-start w-full">
      <div className="container flex">
        <div className="hidden xl:block -mt-4 ">
          <CategorySidebar />
        </div>
        <div className="flex flex-col">
          <Hero />
          <div className="container flex flex-col justify-start items-center w-full">
            <Categories />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
