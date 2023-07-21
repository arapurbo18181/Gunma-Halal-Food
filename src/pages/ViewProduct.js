import { Rate } from "antd";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg, BsSuitHeart } from "react-icons/bs";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BreadCrumbs from "../components/BreadCrumbs";
import CartButton from "../components/CartButton";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import { UseScrollPosition } from "../components/Hooks/UseScollPosition";
import { UseScrollPositionX } from "../components/Hooks/useScrollPositionX";
import Loaders from "../components/Loaders";
import ProductReviews from "../components/ProductReviews";
import ProductTopbar from "../components/ProductTopbar";
import { useApi } from "../context/ApiContext";
import { useProduct } from "../context/ProductContext";
import ProductDescription from "../components/ProductDescription"

const ViewProduct = () => {
  const [Quantity, setQuantity] = useState(1);
  const [Loader, setLoader] = useState(true);
  const [Product, setProduct] = useState();
  const [CateName, setCateName] = useState();
  const [CateSlug, setCateSlug] = useState();
  const [SubCateName, setSubCateName] = useState();
  const [SubCateSlug, setSubCateSlug] = useState();
  const [AverageRating, setAverageRating] = useState(0);
  const [AnimationCoodinate, setAnimationCoodinate] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [Count, setCount] = useState();
  const posY = UseScrollPosition();
  const posX = UseScrollPositionX();
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
    setAddToCartClick,
    CartCoordinate,
  } = useApi();
  const myRef = useRef();
  const ref = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get(`/api${location.pathname}`)
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res);
            // setCateName(res.data.product.sub_category.main_category.name);
            // setSubCateName(res.data.product.sub_category.name);
            // setCateSlug(res.data.product.sub_category.main_category.slug);
            // setSubCateSlug(res.data.product.sub_category.slug);
            const discountedAmount =
              (Number(res.data.product.price) / 100) *
              Number(res.data.product.discount);
            const newPrice = Number(res.data.product.price) - discountedAmount;
            setProduct(
              (res.data.product = {
                ...res.data.product,
                quantity: 1,
                discountedPrice: Math.round(newPrice),
              })
            );
            let count = 0;
            res.data.product.reviews.map((item) => {
              count = count + item.rating;
            });
            const average = count / res.data.product.reviews.length;
            setAverageRating(average);
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
        console.log(Product);
      }
    }
  };

  const CountToRemove = (id) => {
    if (Product) {
      if (Product.id === id) {
        if (Product.quantity === 0 || Product.quantity === 1) {
        } else {
          Product.quantity = Product.quantity - 1;
          setQuantity(Product.quantity);
        }
      }
    }
  };

  // const handleClick = async (item) => {
  //   if (item.quantity === 0) {
  //     Swal.fire("warning", "Please add some product first", "warning");
  //   } else {
  //     if (item.cutting_system === "Yes") {
  //       await Swal.fire({
  //         title: "Do You Want to Cut The Product?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes",
  //         cancelButtonText: "No",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire("Success!", "Cutting System in implemented", "success");
  //           addToCart(item, "YES");
  //           item.quantity = 0;
  //           setQuantity(0);
  //         } else {
  //           addToCart(item, "NO");
  //           item.quantity = 0;
  //           setQuantity(0);
  //         }
  //       });
  //     } else {
  //       addToCart(item, "NO");
  //       item.quantity = 0;
  //       setQuantity(0);
  //     }
  //   }
  // };

  const handleClick = async (item) => {
    console.log(item.quantity);
    if (item.quantity === 0) {
      Swal.fire("warning", "Please add some product first", "warning");
    } else {
      if (item.cutting_system === "Yes") {
        Swal.fire({
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
            setCount(item.id);
            const setX =
              CartCoordinate.x - (ref.current.offsetLeft - posX) - 50;
            const setY = CartCoordinate.y - (ref.current.offsetTop - posY) - 20;
            setAnimationCoodinate({ x: setX, y: setY });
            setIsAddedToCart(true);
            setAddToCartClick(true);
            addToCart(item, "YES");
            setTimeout(() => {
              item.quantity = 1;
              setQuantity(1);
              setIsAddedToCart(false);
            }, 1000);
          } else {
            setCount(item.id);
            const setX =
              CartCoordinate.x - (ref.current.offsetLeft - posX) - 50;
            const setY = CartCoordinate.y - (ref.current.offsetTop - posY) - 20;
            setAnimationCoodinate({ x: setX, y: setY });
            setIsAddedToCart(true);
            setAddToCartClick(true);
            addToCart(item, "NO");
            setTimeout(() => {
              item.quantity = 1;
              setQuantity(1);
              setIsAddedToCart(false);
            }, 1000);
          }
        });
      } else if (item.cutting_system === "No") {
        setCount(item.id);
        const setX = CartCoordinate.x - (ref.current.offsetLeft - posX) - 50;
        const setY = CartCoordinate.y - (ref.current.offsetTop - posY) - 20;
        setAnimationCoodinate({ x: setX, y: setY });
        setIsAddedToCart(true);
        setAddToCartClick(true);
        addToCart(item, "NO");
        setTimeout(() => {
          item.quantity = 1;
          setQuantity(1);
          setIsAddedToCart(false);
        }, 1000);
      }
    }

    // setMyRef(true);
  };

  const imageVariants = {
    hidden: {
      opacity: 1,
      scale: 1,
      zIndex: 1,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      scale: 0.5,
      x: AnimationCoodinate.x,
      y: AnimationCoodinate.y,
      zIndex: 100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  // console.log(Product);

  return (
    <>
      {Loader ? (
        <Loaders width={"100%"} height={"80vh"} />
      ) : (
        <>
          <section className="flex justify-center items-center w-full">
            <div className="flex justify-start items-center xl:items-start w-full">
              <div className="hidden w-[16.5vw] h-full sticky top-0 xl:block">
                <CategorySidebar />
              </div>
              <div className="w-full">
                <BreadCrumbs
                  name={`${Product.name}`}
                  url={`product/${Product.slug}`}
                />
                <div className="h-full w-[100%] flex justify-center items-center">
                  <div className="flex flex-col md:flex-row justify-center items-start w-full xl:w-[70vw] space-x-0 md:space-x-4">
                    <CartButton />
                    <div
                      /*onMouseLeave={leaveMouse} onMouseMove={handleMouse}*/ className="flex-1 flex flex-col justify-center items-center relative w-full"
                    >
                      <img
                        ref={myRef}
                        /*onMouseEnter={handleMouse} */ src={`${LargeImage}/${Product.image}`}
                        alt=""
                        className={`transition-all duration-500 w-7/12 md:w-full`}
                      />
                    </div>
                    <div className="h-[500px] flex-1 flex flex-col justify-start mt-10 space-y-5 px-4 md:px-0">
                      <div>
                        <h2 className="text-base md:text-lg xl:text-xl font-bold">
                          {Product.name}
                        </h2>
                        <h3>
                          {Product.attribute.weight}{" "}
                          {Product.attribute.weight_unit}
                        </h3>
                      </div>
                      <div>
                        <Rate
                          defaultValue={Math.round(AverageRating)}
                          disabled
                          onChange={(value) => console.log(value)}
                          allowHalf
                          style={{ color: "red" }}
                          allowClear={false}
                        />
                      </div>
                      <p className="text-xs md:text-sm xl:text-base">
                        {Product.attribute.meta_description}
                      </p>
                      <div className="flex justify-start items-center space-x-1">
                        <h2 className="text-2xl font-bold text-red-500">
                          ¥{Product.discountedPrice}
                        </h2>
                        <h2 className="text-base text-gray-400 line-through">
                          {`${
                            Product.discount === "0.00"
                              ? ""
                              : `¥${Product.price}`
                          }`}
                        </h2>
                      </div>

                      <div className="flex justify-start items-center space-x-2">
                        {/* //! plus minus product */}
                        <div className="flex w-20 items-center h-10 text-primary font-medium">
                          <button
                            onClick={() => CountToRemove(Product.id)}
                            className="flex-1 flex justify-center items-center cursor-pointer h-full border-l border-t border-b rounded-l-full hover:bg-red-500 hover:text-white transition-all duration-300"
                          >
                            <IoMdRemove />
                          </button>
                          <div className="h-full flex justify-center items-center px-2 border">
                            {" "}
                            {Quantity}
                          </div>
                          <button
                            onClick={() => CountToAdd(Product.id)}
                            className="flex-1 h-full flex justify-center items-center cursor-pointer border-r border-t border-b rounded-r-full hover:bg-red-500 hover:text-white transition-all duration-300"
                          >
                            <IoMdAdd />
                          </button>
                        </div>
                        {/* //! Add to Cart Button */}
                        <div
                          ref={ref}
                          className="flex justify-center items-center my-2 relative"
                        >
                          <button
                            onClick={() => {
                              Product.quantity = Quantity;
                              handleClick(Product);
                            }}
                            className="flex justify-center items-center text-xs md:text-sm xl:text-base space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-2 py-1 xl:px-4 xl:py-2 cursor-pointer w-full"
                          >
                            {" "}
                            <BsPlusLg /> <span>Add To Cart</span>{" "}
                          </button>
                          {Product.id === Count && isAddedToCart && (
                            <motion.div
                              className={`absolute top-0`}
                              id="animation"
                              variants={imageVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <img
                                src={`${LargeImage}/${Product.image}`}
                                alt=""
                                className={`w-28 h-28 rounded-full z-10`}
                              />
                            </motion.div>
                          )}
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
                      <div className=" text-center text-red-500 bg-yellow-300 w-fit px-8 py-3 border-2 border-red-500">
                        <h2 className="font-bold text-xl">
                          {" "}
                          You will get{" "}
                          {Math.round(Product.discountedPrice / 100)} points for
                          this product{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center px-4">
                  <div>
                    <ProductTopbar />
                  </div>
                  <div className="w-full">
                    {ToggleProductTopbar === 0 && <ProductDescription desc={Product.attribute} />}
                    {ToggleProductTopbar === 1 && (
                      <ProductReviews product={Product} />
                    )}
                  </div>
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

export default ViewProduct;
