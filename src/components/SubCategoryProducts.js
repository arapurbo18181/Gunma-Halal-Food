import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useApi } from "../context/ApiContext";
import { useProduct } from "../context/ProductContext";
import { UseScrollPosition } from "./Hooks/UseScollPosition";
import { UseScrollPositionX } from "./Hooks/useScrollPositionX";

const SubCategoryProducts = ({ item, product_slug }) => {
  const { MyRef, setMyRef, myRefForFlyToCart } = useProduct();
  const {
    BreadCrumbs,
    setBreadCrumbs,
    LargeImage,
    ProductsApi,
    AllProducts,
    setAllProducts,
    SubProducts,
    SubCatProIsApi,
    setShowProduct,
    addToCart,
    addToWishlist,
    CartCoordinate,
    CountToAddToCart,
    setCountToAddToCart,
    CountProductToAdd,
    setCountProductToAdd,
    SubCategoryProduct,
    CuttingSystem,
    setCuttingSystem,
    AddToCartClick,
    setAddToCartClick,
    RatedProducts,
    LatestPro,
    SellingProducts,
    cart,
    increaseQuantity,
  } = useApi();

  const myRef = useRef();
  const [Quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [Count, setCount] = useState();
  const [AnimationCoodinate, setAnimationCoodinate] = useState({});
  const posY = UseScrollPosition();
  const posX = UseScrollPositionX();

  const CountToAdd = (id) => {
    if (SubCategoryProduct) {
      SubCategoryProduct.map((elem) => {
        if (elem.id === id) {
          elem.quantity = elem.quantity + 1;
          setQuantity(elem.quantity);
        }
      });
    }
    if (AllProducts) {
      AllProducts.map((elem) => {
        if (elem.id === id) {
          elem.quantity = elem.quantity + 1;
          setQuantity(elem.quantity);
        }
      });
    }
    if (RatedProducts) {
      RatedProducts.map((elem) => {
        if (elem.id === id) {
          elem.quantity = elem.quantity + 1;
          setQuantity(elem.quantity);
        }
      });
    }
    if (LatestPro) {
      LatestPro.map((elem) => {
        if (elem.id === id) {
          elem.quantity = elem.quantity + 1;
          setQuantity(elem.quantity);
        }
      });
    }
    if (SellingProducts) {
      SellingProducts.map((elem) => {
        if (elem.id === id) {
          elem.quantity = elem.quantity + 1;
          setQuantity(elem.quantity);
        }
      });
    }
  };

  const CountToRemove = (id) => {
    if (SubCategoryProduct) {
      SubCategoryProduct.map((elem) => {
        if (elem.id === id) {
          if (elem.quantity === 0) {
          } else {
            elem.quantity = elem.quantity - 1;
            setQuantity(elem.quantity);
          }
        }
      });
    }
    if (AllProducts) {
      AllProducts.map((elem) => {
        if (elem.id === id) {
          if (elem.quantity === 0) {
          } else {
            elem.quantity = elem.quantity - 1;
            setQuantity(elem.quantity);
          }
        }
      });
    }
  };

  const handleClick = async (item) => {
    // const temp = cart.find((elem) => {
    //   if (elem.name === item.name) {
    //     // increaseQuantity(item, item.quantity)
    //     return item;
    //   }
    // });
    // if (temp) {
    //   increaseQuantity(temp, Number(temp.quantity));
    // } else {
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
                CartCoordinate.x - (myRef.current.offsetLeft - posX) - 50;
              const setY =
                CartCoordinate.y - (myRef.current.offsetTop - posY) - 20;
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
                CartCoordinate.x - (myRef.current.offsetLeft - posX) - 50;
              const setY =
                CartCoordinate.y - (myRef.current.offsetTop - posY) - 20;
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
          const setX =
            CartCoordinate.x - (myRef.current.offsetLeft - posX) - 80;
          const setY = CartCoordinate.y - (myRef.current.offsetTop - posY) - 20;
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
    // }

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

  return (
    <>
      {AllProducts || SubProducts ? (
        <section
          ref={myRef}
          className="shadow-[0_2px_6px_0px_rgb(180,180,180)] rounded-md transition-all duration-500 min-w-[10vw] md:w-full max-w-[220px] max-h-[500px] relative"
        >
          {(item.status === "0" || item.stock === "0") && (
            <div className="absolute w-full h-full bg-gray-100 z-20 bg-opacity-70">
              { item.stock === "0" && <div className="absolute -right-4 -top-4 bg-blue-500 text-white py-1 px-2 border border-white rounded-full">
                <h2> Stock Out </h2>
              </div>}
            </div>
          )}
          <div className="relative w-full flex justify-center items-center rounded-t-lg group transition-all duration-500">
            <div className="absolute w-full h-full group-hover:bg-black group-hover:bg-opacity-50 rounded-t-lg transition-all duration-500">
              <div className="absolute right-3 -top-6 group-hover:top-6 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link
                  to={`/product/${product_slug}`}
                  className="w-12 h-12 bg-gray-300 flex justify-center items-center text-primary drop-shadow-xl rounded-sm"
                >
                  <AiFillEye className="text-xl transition-all duration-300" />
                </Link>
              </div>
            </div>
            <img
              className="rounded-t-lg w-full object-cover max-w-[220px] max-h-[220px] relative hover:scale-110 transition-all duration-500 -z-10"
              src={`${LargeImage}/${item.image}`}
              alt=""
            />
            {item.id === Count && isAddedToCart && (
              <motion.div
                className={`absolute top-0`}
                id="animation"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={`${LargeImage}/${item.image}`}
                  alt=""
                  className={`w-28 h-28 rounded-full z-10`}
                />
              </motion.div>
            )}
          </div>
          <div className="flex flex-col justify-between items-start my-2 px-2 md:px-5 pb-2 md:pb-5">
            <Link
              onClick={() => {
                setShowProduct(item);
                setBreadCrumbs([...BreadCrumbs, item.name]);
              }}
              to={`/product/${product_slug}`}
              className="text-[10px] md:text-base font-semibold tracking-normal text-gray-900 h-full"
            >
              {item.name}
            </Link>
            <div className="flex justify-center items-center space-x-1 my-2">
              <h2 className="text-base md:text-lg font-bold text-red-500">
                ¥ {Math.round(item.discountedPrice)}
              </h2>
              <h2 className="text-xs md:text-sm text-gray-400 line-through">{`${
                item.discount === "0.00"
                  ? ""
                  : `¥ ${Number(item.price)}`
              }`}</h2>
            </div>
            <div className="relative flex justify-between items-center w-full mt-2 h-[30px]">
              {AddToCartClick ? (
                <div className="absolute top-0 left-0 right-0 h-full w-full bg-black bg-opacity-25"></div>
              ) : (
                ""
              )}
              <button
                onClick={() => CountToRemove(item.id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full w-full border-red-600 border px-1 active:bg-white active:text-black hover:bg-red-500 hover:text-white text-xs md:text-sm transition-all duration-300"
              >
                <IoMdRemove />
              </button>
              <div className="w-full flex justify-center h-full items-center">
                <button
                  onClick={() => handleClick(item)}
                  className="flex-1 flex h-full justify-center items-center border border-red-600 px-1 active:bg-white active:text-black bg-red-500 hover:bg-red-600 transition-all duration-300 text-white cursor-pointer w-full text-xs md:text-sm"
                >
                  <h2>{Quantity} in Bag</h2>
                </button>
              </div>

              <button
                onClick={() => CountToAdd(item.id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer border-red-600 border px-1  active:bg-white active:text-black hover:bg-red-500 hover:text-white transition-all duration-300 text-xs md:text-sm"
              >
                <IoMdAdd />
              </button>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default SubCategoryProducts;
