import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import { useCategory } from "../context/CategoryContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    scale: 0.2,
    x: 300,
    y: -300,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const ProductsOfSubCategory = (props) => {
  const { ProductsFromCategory } = useCategory();
  const { setShowProduct, addToCart, addToWishlist } = useCart();
  const params = useParams();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const ref = useRef();

  const [Count, setCount] = useState();

  function handleClick(item) {
    ProductsFromCategory.find((elem) => {
      if (elem.img === item.img) {
        addToCart(item);
        setCount(item.id);
        setIsAddedToCart(true);
        setTimeout(() => {
          setIsAddedToCart(false);
        }, 4000);
      }
    });
  }

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-start w-[1440px]">
        <div className="-mt-4 w-[380px]">
          <div className="block w-[380px]"></div>
          <CategorySidebar />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14">
            <span className="underline decoration-emerald-500 underline-offset-8">
              {params.id.slice(0, 2)}
            </span>
            {params.id.slice(2)}
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {ProductsFromCategory.map((item, idx) => {
              return (
                <div className="px-4 py-4 border border-emerald-500 rounded-md hover:-translate-y-3 transition-all duration-500">
                  <div>
                    <Link
                      className="overflow-hidden relative"
                      to={`/product/${item.title}`}
                      onClick={() => setShowProduct(item)}
                    >
                      <img
                        className="hover:scale-110 cursor-pointer transition-all duration-500"
                        src={item.img}
                        alt=""
                      />
                      {item.id === Count && (
                        <motion.div
                          className="absolute top-0"
                          variants={imageVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <img
                            ref={ref}
                            src={item.img}
                            alt={props.altText}
                            className={`w-28 h-28 rounded-full animate-fly-to-cart z-50`}
                          />
                        </motion.div>
                      )}
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between items-start my-2">
                    <h2 className="text-[1.5rem] font-bold"> {item.title} </h2>
                    <div className="flex justify-center items-center space-x-1">
                      <h2 className="text-2xl font-bold text-red-500">৳250</h2>
                      <h2 className="text-base text-gray-400 line-through">
                        ৳300
                      </h2>
                    </div>
                    <div className="w-full flex justify-center items-center my-2 ">
                      <button
                        onClick={() => addToWishlist(item)}
                        className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full"
                      >
                        {" "}
                        <BsSuitHeart /> <span>Add To Wishlist</span>{" "}
                      </button>
                    </div>
                    <div className="w-full flex justify-center items-center my-2 ">
                      <button
                        onClick={() => handleClick(item)}
                        className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full"
                      >
                        {" "}
                        <BsPlusLg /> <span>Add To Cart</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ProductsOfSubCategory;
