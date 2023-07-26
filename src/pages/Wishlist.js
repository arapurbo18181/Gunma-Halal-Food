import React from "react";
import Footer from "../components/Footer";
import { BsPlusLg } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import CategorySidebar from "../components/CategorySidebar";
import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";
import { useApi } from "../context/ApiContext";
import BreadCrumbs from "../components/BreadCrumbs";
import Swal from "sweetalert2";

const Wishlist = () => {
  const {
    Wishlist,
    setShowProduct,
    addToCart,
    removeFromWishlist,
    SmallImage,
    LargeImage,
  } = useApi();

  const handleCart = (item) => {
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
          item.quantity = 1;
          addToCart(item, "YES");
        } else {
          item.quantity = 1;
          addToCart(item, "NO");
        }
      });
    } else if (item.cutting_system === "No") {
      item.quantity = 1;
      addToCart(item, "NO");
    }
  };

  return (
    <>
      {Wishlist && (
        <>
          <section className="flex justify-center items-start w-full overflow-hidden">
            <div className="flex justify-start items-center xl:items-start w-full">
              <div className="hidden w-[16.5vw] h-full sticky top-[5.3rem] xl:block ">
                <CategorySidebar />
              </div>
              <div className="w-full">
                <BreadCrumbs name={"Wishlist"} url={"wishlist"} />
                <h2 className="text-3xl font-bold text-gray-700 mt-4 mb-14 mx-4">
                  <span className="underline decoration-red-500 underline-offset-8">
                    Wi
                  </span>
                  sh List
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full place-items-center">
                  <CartButton />
                  {Wishlist.map((item, i) => {
                    const discountedAmount = (item.price / 100) * item.discount;
                    const newPrice = item.price - discountedAmount;
                    item.discountedPrice = Math.round(newPrice);
                    return (
                      <>
                        <div class="w-full max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-4  hover:-translate-y-3 transition-all duration-500">
                          <Link
                            to={`/product/${item.slug}`}
                          >
                            <img
                              class="rounded-t-lg"
                              src={`${LargeImage}/${item.image}`}
                              alt={item.name}
                            />
                          </Link>
                          <div class="px-5 pb-5">
                            <Link
                              to={`/product/${item.slug}`}
                            >
                              <h5 class="text-sm md:text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                              </h5>
                            </Link>
                            <div class="flex flex-col items-start justify-between">
                              <div className="flex justify-center items-center space-x-1 mt-2">
                                <h2 className="text-lg font-bold text-red-500">
                                  ৳{item.discountedPrice}
                                </h2>
                                <h2 className="text-sm text-gray-400 line-through">
                                  {`${
                                    item.discount === 0 ? "" : `৳${item.price}`
                                  }`}
                                </h2>
                              </div>
                              <div className="flex justify-between items-center space-x-2 w-[100%] mt-4 mb-2">
                                <div className="w-full flex justify-center items-center">
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
                                <div className="w-full flex justify-center items-center ">
                                  <button
                                    onClick={() => handleCart(item)}
                                    className="flex justify-center items-center space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-3 py-1 rounded-full cursor-pointer w-full text-sm"
                                  >
                                    {" "}
                                    <BsPlusLg /> <span>Cart</span>{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
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

export default Wishlist;
