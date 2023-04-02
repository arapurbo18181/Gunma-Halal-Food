import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
import axios from "axios";

const ProductsOfSubCategory = () => {
  const [Loader, setLoader] = useState(false);
  const [CateName, setCateName] = useState();
  const [CateSlug, setCateSlug] = useState();
  const [SubCateName, setSubCateName] = useState();
  const [SubCateSlug, setSubCateSlug] = useState();
  const [SubCategoryProduct, setSubCategoryProduct] = useState([]);
  const { ProductsFromCategory, SubCatImage } = useCategory();
  const {
    SubCatProductsApi,
    SubCatProIsApi,
    SubCatname,
    SubProducts,
    Catname,
    CategorySlug,
    subCategorySlug,
  } = useApi();
  const params = useParams();
  // console.log(SubProducts);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoader(false);
    // }, 1000);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setLoader(true)
    console.log(location)
    const getdata = async () => {
      await axios.get(`/api${location.pathname}`).then((res) => {
        setCateName(res.data.products[0].sub_category.main_category.name)
        setSubCateName(res.data.products[0].sub_category.name)
        setCateSlug(res.data.products[0].sub_category.main_category.slug)
        setSubCateSlug(res.data.products[0].sub_category.slug)
        setSubCategoryProduct(
          res.data.products.map((item) => {
            return { ...item, quantity: 0, discountedPrice: 0 };
          })
        );
        setLoader(false)
      });
    };
    getdata();
  }, [location]);

  return (
    <>
      {Loader ? (
        <Loaders width={"100%"} height={"80vh"} />
      ) : (
        <>
          { CateName && SubCateName ? <BreadCrumbs
            name={`${CateName}/${SubCateName}`}
            url={`${CateSlug}/${SubCateSlug}`}
          /> : ""}

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
                    { SubCateName ? SubCateName.slice(0, 2) : ""}
                  </span>
                  { SubCateName ? SubCateName.slice(2) : ""}
                </h2>
                <CartButton />
                <div className="">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
                    {Loader ? (
                      <div className="w-[80vw] flex justify-center items-center">
                        <Loaders width={"100%"} height={"full"} />
                      </div>
                    ) : (
                      SubCategoryProduct.map((item, index) => {
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
        </>
      )
      }
    </>
  );
};

export default ProductsOfSubCategory;
