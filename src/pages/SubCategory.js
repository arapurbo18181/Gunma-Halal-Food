import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import Loaders from "../components/Loaders";
import { useApi } from "../context/ApiContext";
import { useCategory } from "../context/CategoryContext";
import BreadCrumbs from "../components/BreadCrumbs";
import axios from "axios";
import CartButton from "../components/CartButton";
import SubCategoryProducts from "../components/SubCategoryProducts";

const SubCategory = () => {
  const [Loader, setLoader] = useState(false);
  const [SubCategory, setSubCategory] = useState([]);
  const [Category, setCategory] = useState([]);
  const [CatProducts, setCatProducts] = useState([]);
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
    CategoryImage1
  } = useApi();
  const navigate = useNavigate();

  const params = useParams();
  // console.log(params);

  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    const getdata = async () => {
      await axios
        .get(`/api/category/${params.id}`)
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res);
            setCategory(res.data.categories);
            setSubCategory(res.data.categories.sub_category);
            setCatProducts(res.data.products);
            
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
              <div className="hidden w-[16.5vw] h-full sticky top-[5.3rem] xl:block ">
                <CategorySidebar />
              </div>
              <div className="w-full">
                <BreadCrumbs
                  name={`${Category.name}`}
                  url={`${Category.slug}`}
                />
                <div className="h-[35vh] w-full overflow-hidden">
                  <img
                    className="hover:scale-110 transition-all duration-300 h-full w-full"
                    src={`${CategoryImage1}/${Category.banner_image}`}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-8 px-4">
                  <span className="underline decoration-red-500 underline-offset-8">
                    {Category.name ? Category.name.slice(0, 2) : ""}
                  </span>
                  {Category.name ? Category.name.slice(2) : ""}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 gap-6 w-full place-items-center">
                  {SubCategory.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/category/${Category.slug}/${item.slug}`}
                        onClick={() => {}}
                        className="border shadow-[0_2px_6px_0px_rgb(180,180,180)] hover:-translate-y-3 transition-all duration-500 rounded-md max-w-[200px] space-y-4 pb-4 rounded-t-lg"
                      >
                        <div className="overflow-hidden w-full flex justify-center items-center rounded-t-lg">
                          <img
                            className="hover:scale-110 transition-all duration-500 w-full object-cover h-full rounded-t-lg"
                            src={`${CategoryImage}/${item.image}`}
                            alt={item.name}
                          />
                        </div>
                        <h2 className="text-sm sm:text-base md:text-xl w-full text-center">{item.name}</h2>
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
