import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import { useCategory } from "../context/CategoryContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import SubCategoryProducts from "../components/SubCategoryProducts";
import CartButton from "../components/CartButton";
import Loaders from "../components/Loaders";
import { useApi } from "../context/ApiContext";
import BreadCrumbs from "../components/BreadCrumbs";

const ProductsOfSubCategory = () => {
  const [Loader, setLoader] = useState(false);
  const { ProductsFromCategory, SubCatImage } = useCategory();
  const {
    SubCatProductsApi,
    SubCatProIsApi,
    SubCatname,
    SubProducts,
    Catname,
    CategorySlug,
    subCategorySlug
  } = useApi();
  const params = useParams();
  // console.log(SubProducts);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoader(false);
    // }, 1000);
  }, []);

  return (
    <>
    <BreadCrumbs name={`${Catname}/${SubCatname}`} url={`${CategorySlug}/${subCategorySlug}`} />
      {SubCatProIsApi ? (
        <section className="flex justify-center items-start w-full">
          <div className="flex justify-start items-center w-[100%] xl:items-start space-x-5">
            <div className="hidden w-[14vw] sticky left-0 top-[4.6rem] xl:block -mt-4">
              <CategorySidebar />
            </div>
            <div className="w-full">
              <div className="h-[30vh] overflow-hidden ">
                <img
                  className="hover:scale-110 transition-all duration-300 object-cover"
                  src={SubCatImage}
                  alt=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14">
                <span className="underline decoration-red-500 underline-offset-8">
                  {SubCatname.slice(0, 2)}
                </span>
                {SubCatname.slice(2)}
              </h2>
              <CartButton />
              <div className="">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
                  {Loader ? (
                    <div className="w-[80vw] flex justify-center items-center">
                      <Loaders width={"100%"} height={"full"} />
                    </div>
                  ) : (
                    SubProducts.map((item, index) => {
                      const discountedAmount = (item.price / 100) * item.discount;
                      const newPrice = item.price - discountedAmount;
                      item.discountedPrice = newPrice;
                      return <SubCategoryProducts item={item} key={index} />;
                    })
                  )}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductsOfSubCategory;
