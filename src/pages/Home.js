import React from "react";
import CartButton from "../components/CartButton";
import Categories from "../components/Categories";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeBanner from "../components/HomeBanner";
import LatestProducts from "../components/LatestProducts";
import OrderSuccessful from "../components/OrderSuccessful";
import TopRatedProducts from "../components/TopRatedProducts";
import TopSellingProducts from "../components/TopSellingProducts";

const Home = () => {
  return (
    <section className="flex flex-col justify-center h-full items-center overflow-hidden">
      <OrderSuccessful/>
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
