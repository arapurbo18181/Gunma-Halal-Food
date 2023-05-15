import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
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
    CategoryImage,
  } = useApi();
  const navigate = useNavigate();

  const params = useParams();
  // console.log(params);

  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    const getdata = async () => {
      await axios
        .get(`/api/${params.id}`)
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res.data);
            setCategory(res.data.categories);
            setSubCategory(res.data.categories.sub_category);
            setLoader(false);
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
        <>
          <Loaders width={"100%"} height={"80vh"} />
        </>
      ) : (
        <>
          <section className="flex justify-center items-start w-full">
            <div className="flex justify-start items-start w-[100%]">
              <div className="hidden w-[14vw] sticky top-[4.6rem] left-0 xl:block -mt-4">
                <CategorySidebar />
              </div>
              <div className="w-full">
                <BreadCrumbs
                  name={`${Category.name}`}
                  url={`${Category.slug}`}
                />
                <div className="h-[30vh] overflow-hidden">
                  <img
                    className="hover:scale-110 transition-all duration-300"
                    src={`${CategoryImage}/${Category.image}`}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-8 px-4">
                  <span className="underline decoration-red-500 underline-offset-8">
                    {Category.name ? Category.name.slice(0, 2) : ""}
                  </span>
                  {Category.name ? Category.name.slice(2) : ""}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
                  {SubCategory.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/${Category.slug}/${item.slug}`}
                        onClick={() => {}}
                        className="border shadow-[0_2px_6px_0px_rgb(180,180,180)] hover:-translate-y-3 transition-all duration-500 px-8 py-4 rounded-md max-w-[200px]"
                      >
                        <div className="overflow-hidden">
                          <img
                            className="w-full hover:scale-125 transition-all duration-500"
                            src={`${CategoryImage}/${item.image}`}
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
