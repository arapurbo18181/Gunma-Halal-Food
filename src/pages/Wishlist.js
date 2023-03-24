import React from "react";
import Footer from "../components/Footer";
import { BsPlusLg } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import CategorySidebar from "../components/CategorySidebar";
import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";
import { useApi } from "../context/ApiContext";

const Wishlist = () => {
  const { Wishlist, setShowProduct, addToCart, removeFromWishlist } = useApi();
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-center xl:items-start w-[100%] space-x-5">
        <div className="hidden w-[14vw] sticky left-0 top-28 xl:block -mt-4">
          <CategorySidebar />
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14">
            <span className="underline decoration-red-500 underline-offset-8">
              Wi
            </span>
            sh List
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[100%] place-items-center">
          <CartButton/>
            {Wishlist.map((item) => {
              return (
                <div className="px-4 py-4 border shadow-[0_2px_6px_0px_rgb(180,180,180)] rounded-md hover:-translate-y-3 transition-all duration-500 max-w-[220px] max-h-[300px]">
                  <Link
                    className="flex justify-center items-center hover:scale-110 cursor-pointer transition-all duration-500"
                    to={`/product/${item.title}`}
                    onClick={() => setShowProduct(item)}
                  >
                    <img
                      className="w-[100px]"
                      src={item.img}
                      alt=""
                    />
                  </Link>
                  <div className="flex flex-col justify-between items-start my-2">
                    <h2 className="text-[1rem] font-bold"> {item.title} </h2>
                    <div className="flex justify-center items-center space-x-1">
                      <h2 className="text-lg font-bold text-red-500">৳250</h2>
                      <h2 className="text-sm text-gray-400 line-through">
                        ৳300
                      </h2>
                    </div>
                    <div className="flex justify-between items-center space-x-2 w-[100%]">
                      <div className="w-full flex justify-center items-center my-2">
                        <button
                          onClick={() => {
                            removeFromWishlist(item);
                          }}
                          className="flex justify-center items-center space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-3 py-1 rounded-full cursor-pointer w-full text-sm"
                        >
                          {" "}
                          <BsTrash /> <span>Remove</span>{" "}
                        </button>
                      </div>
                      <div className="w-full flex justify-center items-center my-2 ">
                        <button
                          onClick={() => addToCart(item)}
                          className="flex justify-center items-center space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-3 py-1 rounded-full cursor-pointer w-full text-sm"
                        >
                          {" "}
                          <BsPlusLg /> <span>Cart</span>{" "}
                        </button>
                      </div>
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

export default Wishlist;
