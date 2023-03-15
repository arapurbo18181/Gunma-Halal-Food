import React from "react";
import Categories from "../components/Categories";
import CategorySidebar from "../components/CategorySidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import LatestProducts from "../components/LatestProducts";
import CartButton from "../components/CartButton";
import TopRatedProducts from "../components/TopRatedProducts";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex justify-start items-start">
        <div className="hidden w-[14vw] sticky top-28 xl:block -mt-4">
          <CategorySidebar />
        </div>
        <div className="flex flex-col justify-start xl:w-[84.95vw]">
          <div className="flex justify-start items-center w-full">
            <Hero />
            <CartButton/>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <Categories />
            <LatestProducts/>
            <TopRatedProducts/>
            <HomeBanner/>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Home;
