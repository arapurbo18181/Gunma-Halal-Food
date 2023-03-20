import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import { useCategory } from "../context/CategoryContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import SubCategoryProducts from "../components/SubCategoryProducts";
import CartButton from "../components/CartButton";
import Loaders from "../components/Loaders";
import { useApi } from "../context/ApiContext";

const ProductsOfSubCategory = () => {
  const [Loader, setLoader] = useState(false);
  const { ProductsFromCategory, SubCatImage } = useCategory();
  const {SubCatProductsApi, SubCatProIsApi, SubCatname, BreadCrumbs, setBreadCrumbs} = useApi()
  const params = useParams();
  // console.log(SubCatProductsApi);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoader(false);
    // }, 1000);
  }, []);

  return (
    <>
{ SubCatProIsApi ? <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-center w-[100%] xl:items-start space-x-5">
        <div className="hidden w-[14vw] sticky left-0 top-28 xl:block -mt-4">
          <CategorySidebar />
        </div>
        <div className="w-full">
          <div className="h-[30vh] overflow-hidden ">
            <img className="hover:scale-110 transition-all duration-300 object-cover" src={SubCatImage} alt="" />
          </div>
          <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14">
            <span className="underline decoration-red-500 underline-offset-8">
              {SubCatname.slice(0, 2)}
            </span>
            {SubCatname.slice(2)}
          </h2>
          <CartButton/>
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
            {Loader ? (
                <div className="w-[80vw] flex justify-center items-center">
                  <Loaders width={"100%"} height={"full"} />
                </div>
              ) : (
                SubCatProductsApi.map((item) => {
                return <SubCategoryProducts item={item} />;
              })
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>: ""}
    </>
  );
};

export default ProductsOfSubCategory;
