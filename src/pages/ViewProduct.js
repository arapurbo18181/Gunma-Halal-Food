import React, { useEffect, useRef, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Footer from "../components/Footer";
import CartButton from "../components/CartButton";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import ProductTopbar from "../components/ProductTopbar";
import ProductDescription from "../components/ProductDescription";
import ProductReviews from "../components/ProductReviews";
import { useProduct } from "../context/ProductContext";
import { Rate } from "antd";
import Loaders from "../components/Loaders";
import { useApi } from "../context/ApiContext";
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const ViewProduct = () => {
  const [Quantity, setQuantity] = useState(0);
  const [Loader, setLoader] = useState(true);
  const [Product, setProduct] = useState();
  const [CateName, setCateName] = useState();
  const [CateSlug, setCateSlug] = useState();
  const [SubCateName, setSubCateName] = useState();
  const [SubCateSlug, setSubCateSlug] = useState();
  const { productTopbar, ToggleProductTopbar, setToggleTopbar } = useProduct();
  const {
    LargeImage,
    ShowProduct,
    addToCart,
    addToWishlist,
    removeFromCart,
    decreaseFromCart,
    IsReview,
    AllReviews,
  } = useApi();
  const myRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    const getdata = async () => {
      await axios
        .get(`/api${location.pathname}`)
        .then((res) => {
          if (res.data.status === 200) {
            // console.log(res);
            setCateName(res.data.product.sub_category.main_category.name);
            setSubCateName(res.data.product.sub_category.name);
            setCateSlug(res.data.product.sub_category.main_category.slug);
            setSubCateSlug(res.data.product.sub_category.slug);
            const discountedAmount =
              (res.data.product.price / 100) * res.data.product.discount;
            const newPrice = res.data.product.price - discountedAmount;
            setProduct(
              (res.data.product = {
                ...res.data.product,
                quantity: 0,
                discountedPrice: newPrice,
              })
            );
            setLoader(false);
          }
        })
        .catch((error) => {
          console.log(error);
          navigate("/error");
        });
    };
    getdata();
  }, [location, AllReviews]);

  const handleMouse = (e) => {
    const p = e.clientX - myRef.current.offsetLeft;
    const q = e.clientY - myRef.current.offsetTop;

    const mWidth = myRef.current.offsetWidth;
    const mHeight = myRef.current.offsetHeight;

    console.log(mWidth, mHeight);

    const x = (p / mWidth) * 100;
    const y = (q / mHeight) * 100;

    myRef.current.classList.add(
      `translate-x-[-${x}%] translate-y-[-${y}%] scale-[2]`
    );
    // myRef.current.classList.add(`origin-[${x}px_${y}px]`);
    // myRef.current.classList.add(`scale-[2]`);
    // setClassList(`origin-[${x}px_${y}px] scale-[2]`);
    // console.log(`origin-[${x}px_${y}px] scale-[2]`)

    // console.log(x, y, myRef.current.classList);
    console.log(x, y);
  };

  const leaveMouse = () => {
    // myRef.current.classList.add("origin-center");
    myRef.current.classList.remove("scale-[2]");
    myRef.current.classList.add("scale-100");
    // setClassList("origin-center scale-100")
  };
  // console.log(ShowProduct)

  const CountToAdd = (id) => {
    if (Product) {
      if (Product.id === id) {
        Product.quantity = Product.quantity + 1;
        setQuantity(Product.quantity);
      }
    }
  };

  const CountToRemove = (id) => {
    if (Product) {
      if (Product.id === id) {
        if (Product.quantity === 1) {
        } else {
          Product.quantity = Product.quantity - 1;
          setQuantity(Product.quantity);
        }
      }
    }
  };

  const handleClick = async (item) => {
    if (item.quantity === 0) {
      Swal.fire("warning", "Please add some product first", "warning");
    } else {
      if (item.cutting_system === "Yes") {
        await Swal.fire({
          title: "Do You Want to Cut The Product?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Success!", "Cutting System in implemented", "success");
            addToCart(item, "YES");
            item.quantity = 0;
            setQuantity(0);
          } else {
            addToCart(item, "NO");
            item.quantity = 0;
            setQuantity(0);
          }
        });
      } else {
        addToCart(item, "NO");
        item.quantity = 0;
        setQuantity(0);
      }
    }
  };

  return (
    <>
      {Loader ? (
        <Loaders width={"100%"} height={"80vh"} />
      ) : (
        <>
          <section className="flex justify-center items-center w-full">
            <div className="flex justify-start items-center xl:items-start w-[100%]">
              <div className="hidden w-[14vw] sticky left-0 top-[4.6rem] xl:block -mt-4">
                <CategorySidebar />
              </div>
              {Loader ? (
                <div className="w-[80vw] h-[80vh] flex justify-center items-center">
                  <Loaders width={"100%"} height={"full"} />
                </div>
              ) : (
                <>
                <div className="w-full space-y-5">
                  <BreadCrumbs
                    name={`${CateName}/${SubCateName}/${Product.name}`}
                    url={`${CateSlug}/${SubCateSlug}/${Product.slug}`}
                  />
                  <div className="h-full w-[100%] flex justify-center items-center">
                    <div className="flex flex-col md:flex-row justify-center items-start w-full xl:w-[70vw] space-x-4">
                      <CartButton />
                      <div
                        /*onMouseLeave={leaveMouse} onMouseMove={handleMouse}*/ className="flex-1 flex justify-center items-center overflow-hidden relative w-full"
                      >
                        <img
                          ref={myRef}
                          /*onMouseEnter={handleMouse} */ src={`${LargeImage}/${Product.image}`}
                          alt=""
                          className={`transition-all duration-500 w-7/12 md:w-full`}
                        />
                      </div>
                      <div className="h-[500px] flex-1 flex flex-col justify-center space-y-4">
                        <h2 className="text-base md:text-lg xl:text-xl font-bold">
                          {" "}
                          {Product.name}{" "}
                        </h2>
                        <div>
                          <Rate
                            defaultValue={4.5}
                            disabled
                            onChange={(value) => console.log(value)}
                            allowHalf
                            style={{ color: "red" }}
                            allowClear={false}
                          />
                        </div>
                        <p className="text-xs md:text-sm xl:text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid cumque consequatur recusandae dolorem
                          pariatur in nam officiis, cum temporibus doloremque?
                        </p>
                        <div className="flex justify-start items-center space-x-1">
                          <h2 className="text-2xl font-bold text-red-500">
                            ৳{Product.discountedPrice}
                          </h2>
                          <h2 className="text-base text-gray-400 line-through">
                            {`${
                              Product.discount === 0 ? "" : `৳${Product.price}`
                            }`}
                          </h2>
                        </div>

                        <div className="flex justify-start items-center space-x-2">
                          {/* //! plus minus product */}
                          <div className="flex w-20 items-center h-10 text-primary font-medium">
                            <div
                              onClick={() => CountToRemove(Product.id)}
                              className="flex-1 flex justify-center items-center cursor-pointer h-full border-l border-t border-b rounded-l-full hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                              <IoMdRemove />
                            </div>
                            <div className="h-full flex justify-center items-center px-2 border">
                              {" "}
                              {Quantity}
                            </div>
                            <div
                              onClick={() => CountToAdd(Product.id)}
                              className="flex-1 h-full flex justify-center items-center cursor-pointer border-r border-t border-b rounded-r-full hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                              <IoMdAdd />
                            </div>
                          </div>
                          {/* //! Add to Cart Button */}
                          <div className="flex justify-center items-center my-2 ">
                            <button
                              onClick={() => handleClick(Product)}
                              className="flex justify-center items-center text-xs md:text-sm xl:text-base space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-2 py-1 xl:px-4 xl:py-2 cursor-pointer w-full"
                            >
                              {" "}
                              <BsPlusLg /> <span>Cart</span>{" "}
                            </button>
                          </div>
                        </div>
                        <div
                          onClick={() => addToWishlist(Product)}
                          className="flex justify-start items-center space-x-2 cursor-pointer hover:-translate-y-1 transition-all duration-300 w-fit"
                        >
                          <div className="text-base mt-0.5">
                            <BsSuitHeart />
                          </div>
                          <div className="text-base">Wishlist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center px-4">
                    <div>
                      <ProductTopbar />
                    </div>
                    <div className="w-full">
                      {ToggleProductTopbar === 0 && <ProductDescription />}
                      {ToggleProductTopbar === 1 && (
                        <ProductReviews product={Product} />
                      )}
                    </div>
                  </div>
                  <Footer />
                </div>
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ViewProduct;
