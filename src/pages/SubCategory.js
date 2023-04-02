import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import Loaders from "../components/Loaders";
import { useApi } from "../context/ApiContext";
import { useCategory } from "../context/CategoryContext";
import BreadCrumbs from "../components/BreadCrumbs";
import axios from "axios";

const SubCategory = () => {
  const [Loader, setLoader] = useState(false);
  const [SubCategory, setSubCategory] = useState([]);
  const [Category, setCategory] = useState([]);
  const { ItemCategory, setProductsFromCategory, CatImage, setSubCatImage } =
    useCategory();
  const {
    CategorySlug,
    getProducts,
    SubCatname,
    setSubCatname,
    Catname,
    setBreadCrumbs,
    setSubCategorySlug,
  } = useApi();

  const params = useParams();
  console.log(params);

  const location = useLocation()


  useEffect(() => {
    setLoader(true);
    const getdata = async () => {
      await axios.get(`/api/${params.id}`).then((res) => {
        console.log(res.data.categories[0]);
        setCategory(res.data.categories[0]);
        setSubCategory(res.data.categories[0].sub_category);
        setLoader(false);
      });
    };
    getdata();
  }, [location]);

  return (
    <>
      {Loader ? (
        <>
          <Loaders width={"100%"} height={"80vh"} />
        </>
      ) : (
        <>
          <BreadCrumbs name={`${Category.name}`} url={`${Category.slug}`} />
          <section className="flex justify-center items-start w-full">
            <div className="flex justify-start items-start w-[100%] space-x-5">
              <div className="hidden w-[14vw] sticky top-[4.6rem] left-0 xl:block -mt-4">
                <CategorySidebar />
              </div>
              <div className="px-2 w-full">
                <div className="h-[30vh] overflow-hidden ">
                  <img
                    className="hover:scale-110 transition-all duration-300 object-cover"
                    src={CatImage}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-8">
                  <span className="underline decoration-red-500 underline-offset-8">
                    { Category.name ? Category.name.slice(0, 2) : ""}
                  </span>
                  { Category.name ? Category.name.slice(2) : ""}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {SubCategory.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/${Category.slug}/${item.slug}`}
                        onClick={() => {
                        }}
                        className="border shadow-[0_2px_6px_0px_rgb(180,180,180)] hover:-translate-y-3 transition-all duration-500 px-8 py-4 rounded-md max-w-[200px]"
                      >
                        <div className="overflow-hidden">
                          <img
                            className="w-full hover:scale-125 transition-all duration-500"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <h2 className="text-center">{item.name}</h2>
                      </Link>
                    );
                  })}
                </div>
                <Footer />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SubCategory;
