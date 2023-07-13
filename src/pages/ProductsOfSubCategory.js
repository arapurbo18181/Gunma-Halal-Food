import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
import Swal from "sweetalert2";

const ProductsOfSubCategory = () => {
  const [Loader, setLoader] = useState(false);
  const [CateName, setCateName] = useState();
  const [CateSlug, setCateSlug] = useState();
  const [SubCateName, setSubCateName] = useState();
  const [SubCateSlug, setSubCateSlug] = useState();
  const [BannerImage, setBannerImage] = useState();
  const [Message,setMessage] = useState();
  const { ProductsFromCategory, SubCatImage } = useCategory();
  const {
    SubCatProductsApi,
    SubCatProIsApi,
    SubCatname,
    SubProducts,
    Catname,
    CategorySlug,
    subCategorySlug,
    CategoryImage,
    SubCategoryProduct,
    setSubCategoryProduct,
    CategoryImage1
  } = useApi();
  const params = useParams();
  // console.log(SubProducts);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoader(false);
    // }, 1000);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    const getdata = async () => {
      await axios
        .get(`/api${location.pathname}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 500) {
            setMessage(res.data.message);
            setLoader(false);
          }
          if (res.data.status === 200) {
            setBannerImage(res.data.subcategory.banner_image);
            setCateName(res.data.subcategory.main_category.name);
            setSubCateName(res.data.subcategory.name);
            setCateSlug(res.data.subcategory.main_category.slug);
            setSubCateSlug(res.data.subcategory.slug);  
            setSubCategoryProduct(
              res.data.subcategory.product.map((item) => {
                return { ...item, quantity: 0, discountedPrice: 0 };
              })
            );
            setLoader(false);
            setMessage("");
          }
        })
        .catch((error) => {
          console.log(error);
          navigate("/error");
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
          <section className="flex justify-center items-start w-full">
            <div className="flex justify-start items-center w-[100%] xl:items-start">
              <div className="hidden w-[16.5vw] h-full sticky top-[5.3rem] xl:block ">
                <CategorySidebar />
              </div>
              {
                Message ? <div className="w-full h-full flex justify-center items-center">
                  <h2 className="text-2xl mt-20"> No Product available....... </h2>
                </div> : <div className="w-full">
                {CateName  ? (
                  <BreadCrumbs
                    name={`${CateName}'\'${SubCateName}`}
                    url={`${CateSlug}'\'${SubCateSlug}`}
                  />
                ) : (
                  ""
                )}
                <div className="h-[35vh] overflow-hidden w-full">
                  <img
                    className="hover:scale-110 transition-all duration-300 object-cover h-full"
                    src={`${CategoryImage1}/${BannerImage}`}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14 px-4">
                  <span className="underline decoration-red-500 underline-offset-8">
                    {SubCateName ? SubCateName.slice(0, 2) : ""} 
                  </span>
                  {SubCateName ? SubCateName.slice(2) : ""}
                </h2>
                <CartButton />
                <div className="px-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
                    {Loader ? (
                      <div className="w-[80vw] flex justify-center items-center">
                        <Loaders width={"100%"} height={"full"} />
                      </div>
                    ) : (
                      SubCategoryProduct.map((item, index) => {
                        const discountedAmount =
                          (item.price / 100) * item.discount;
                        const newPrice = item.price - Math.round(discountedAmount);
                        item.discountedPrice = newPrice;
                        return <SubCategoryProducts item={item} key={index} product_slug={item.slug} />;
                      })
                    )}
                  </div>
                </div>
                <Footer />
              </div>
              }
              
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductsOfSubCategory;
