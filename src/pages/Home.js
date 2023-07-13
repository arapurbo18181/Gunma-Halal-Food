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
import TopSellingProducts from "../components/TopSellingProducts";

const Home = () => {
  return (
    <section className="flex flex-col justify-center h-full items-center overflow-hidden">
      <div className="flex justify-start h-full items-start">
        <div className="hidden w-[14vw] h-full sticky top-0 xl:block">
          <CategorySidebar />
        </div>
        <div className="flex flex-col justify-start xl:w-[84.95vw]">
          <div className="flex justify-start items-center w-full">
            <Hero />
            <CartButton/>
          </div>
          <div className="flex flex-col justify-center items-center w-full px-3">
            <Categories />
            <TopSellingProducts/>
            <LatestProducts/>
            <HomeBanner/>
            <TopRatedProducts/>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Home;
