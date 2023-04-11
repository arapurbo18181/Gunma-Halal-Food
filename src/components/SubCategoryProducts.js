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

const SubCategoryProducts = ({ item }) => {
  // console.log(item)
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
    SubCategoryProduct
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
    // setMyRef(true);
    setCount(item.id);
    const setX = CartCoordinate.x - (myRef.current.offsetLeft - posX) - 90;
    const setY = CartCoordinate.y - (myRef.current.offsetTop - posY) - 35;
    setAnimationCoodinate({ x: setX, y: setY });
    // console.log(CartCoordinate, AnimationCoodinate, setX, setY);
    setIsAddedToCart(true);
    setTimeout(() => {
      addToCart(item);
      item.quantity = 0;
      setQuantity(0);
      setIsAddedToCart(false);
      // setMyRef(false);
    }, 2000);
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
      {(AllProducts || SubProducts) ? (
        <div
          ref={myRef}
          className="px-4 py-4 shadow-[0_2px_6px_0px_rgb(180,180,180)] rounded-md hover:-translate-y-3 transition-all duration-500 min-w-[10vw] md:w-full max-w-[220px] max-h-[300px]"
        >
          <div className="">
            <Link
              className="relative flex justify-center items-center transition-all duration-500"
              to={`/${item.sub_category.main_category.slug}/${item.sub_category.slug}/${item.slug}`}
              onClick={() => {
                setShowProduct(item);
                setBreadCrumbs([...BreadCrumbs, item.name]);
              }}
            >
              <img
                className="cursor-pointer w-full -z-10"
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
                    className={`w-28 h-28 rounded-full z-50`}
                  />
                </motion.div>
              )}
            </Link>
          </div>
          <div className="flex flex-col justify-between items-start my-2">
            <h2 className="text-[0.8rem] font-bold"> {item.name} </h2>
            <div className="flex justify-center items-center space-x-1">
              <h2 className="text-lg font-bold text-red-500">৳{item.discountedPrice}</h2>
              <h2 className="text-sm text-gray-400 line-through">{`${item.discount === 0 ? "": `৳${item.price}` }`}</h2>
            </div>
            <div className="flex justify-between items-center w-[100%] mt-2 h-[2vh]">
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
