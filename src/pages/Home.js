import React from "react";
import Categories from "../components/Categories";
import CategorySidebar from "../components/CategorySidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-start w-full">
      <div className="flex">
      <div className="hidden xl:block -mt-4 w-[250px]">
          {/* <div className="block w-[320px]"></div> */}
        <CategorySidebar />
        </div>
        <Hero />
      </div>
      <div className="flex justify-center items-center xl:items-start container">

        <div className="flex flex-col justify-start items-end w-full xl:w-[900px]">
          <Categories />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Home;
