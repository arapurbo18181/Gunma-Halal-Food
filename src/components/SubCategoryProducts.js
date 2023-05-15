import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseScrollPosition } from "./Hooks/UseScollPosition";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { UseScrollPositionX } from "./Hooks/useScrollPositionX";
import { useProduct } from "../context/ProductContext";
import { useApi } from "../context/ApiContext";
import Swal from "sweetalert2";

const SubCategoryProducts = ({ item }) => {
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
  } = useApi();

  const myRef = useRef();
  const [Quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [Count, setCount] = useState();
  const [AnimationCoodinate, setAnimationCoodinate] = useState({});
  const [NewPrice, setNewPrice] = useState();
  const posY = UseScrollPosition();
  const posX = UseScrollPositionX();
  // useEffect(() => {
  //   setAllProducts(ProductsApi.map((item) => {
  //     return {...item, amount:0}
  //   }));
  // }, [])

  // setCountProductToAdd(item.id)

  const CountToAdd = (id) => {
    if (SubCategoryProduct) {
      SubCategoryProduct.map((elem) => {
        if (elem.id === id) {
          console.log(id);
          elem.quantity = elem.quantity + 1;
          setQuantity(elem.quantity);
        }
      });
    }
    if (AllProducts) {
      AllProducts.map((elem) => {
        if (elem.id === id) {
          console.log(id);
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
          console.log(id);
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
    if (item.quantity === 0) {
      Swal.fire("warning", "Please add some product first", "warning");
    } else {
      console.log(item)
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
            setTimeout(() => {
              addToCart(item, "YES");
              item.quantity = 0;
              setQuantity(0);
              setIsAddedToCart(false);
            }, 2000);
          } else {
            setCount(item.id);
            const setX =
              CartCoordinate.x - (myRef.current.offsetLeft - posX) - 50;
            const setY =
              CartCoordinate.y - (myRef.current.offsetTop - posY) - 20;
            setAnimationCoodinate({ x: setX, y: setY });
            setIsAddedToCart(true);
            setTimeout(() => {
              addToCart(item, "NO");
              item.quantity = 0;
              setQuantity(0);
              setIsAddedToCart(false);
            }, 2000);
          }
        });
      } else if(item.cutting_system === "No"){
        console.log(item)
        setCount(item.id);
        const setX =
          CartCoordinate.x - (myRef.current.offsetLeft - posX) - 50;
        const setY =
          CartCoordinate.y - (myRef.current.offsetTop - posY) - 20;
        setAnimationCoodinate({ x: setX, y: setY });
        setIsAddedToCart(true);
        setTimeout(() => {
          addToCart(item, "YES");
          item.quantity = 0;
          setQuantity(0);
          setIsAddedToCart(false);
        }, 2000);
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
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {AllProducts || SubProducts ? (
        <div
          ref={myRef}
          className="shadow-[0_2px_6px_0px_rgb(180,180,180)] rounded-md hover:-translate-y-0 xl:hover:-translate-y-3 transition-all duration-500 min-w-[10vw] md:w-full max-w-[220px] max-h-[400px]"
        >
          <div className="relative">
            <img
              className="rounded-t-lg w-full object-cover relative -z-10"
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
          <div className="flex flex-col justify-between items-start my-2 px-5 pb-5">
            <Link
              onClick={() => {
                setShowProduct(item);
                setBreadCrumbs([...BreadCrumbs, item.name]);
              }}
              to={`/${item.sub_category.main_category.slug}/${item.sub_category.slug}/${item.slug}`}
              className="text-sm md:text-base font-semibold tracking-wide text-gray-900 dark:text-white"
            >
              {" "}
              {item.name}{" "}
            </Link>
            <h2 className="text-[0.7rem] md:text-xs font-semibold">
              {" "}
              Stock: {item.stock}{" "}
            </h2>
            <div className="flex justify-center items-center space-x-1 my-2">
              <h2 className="text-base md:text-lg font-bold text-red-500">
                ৳{item.discountedPrice}
              </h2>
              <h2 className="text-xs md:text-sm text-gray-400 line-through">{`${
                item.discount === 0 ? "" : `৳${item.price}`
              }`}</h2>
            </div>
            <div className="flex justify-between items-center w-full mt-2 h-[2vh]">
              <div
                onClick={() => CountToRemove(item.id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full w-full border-red-600 border px-1 py-3 active:bg-white active:text-black hover:bg-red-500 hover:text-white text-xs md:text-sm transition-all duration-300"
              >
                <IoMdRemove />
              </div>
              <div className="w-full flex justify-center h-full items-center">
                <button
                  onClick={() => handleClick(item)}
                  className="flex-1 flex h-full justify-center items-center border border-red-600 px-1 py-3 active:bg-white active:text-black bg-red-500 hover:bg-red-600 transition-all duration-300 text-white cursor-pointer w-full text-xs md:text-sm"
                >
                  <h2>{Quantity} in Bag</h2>
                </button>
              </div>

              <div
                onClick={() => CountToAdd(item.id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer border-red-600 border px-1 py-3  active:bg-white active:text-black hover:bg-red-500 hover:text-white transition-all duration-300 text-xs md:text-sm"
              >
                <IoMdAdd />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubCategoryProducts;
