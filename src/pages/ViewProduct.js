import React, { useRef, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import { useCart } from "../context/CartContext";
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
const ViewProduct = () => {
  const { productTopbar, ToggleProductTopbar, setToggleTopbar } = useProduct();
  const {
    ShowProduct,
    addToCart,
    addToWishlist,
    removeFromCart,
    decreaseFromCart,
  } = useCart();
  const myRef = useRef();

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

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-start items-center xl:items-start w-[100%] space-x-5">
        <div className="hidden w-[14vw] sticky left-0 top-28 xl:block -mt-4">
          <CategorySidebar />
        </div>
        <div className="w-full divide-y-2 space-y-5">
          <div className="h-full w-[100%] flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-start w-full xl:w-[70vw]">
              <CartButton />
              <div
                /*onMouseLeave={leaveMouse} onMouseMove={handleMouse}*/ className="flex-1 flex justify-center items-center overflow-hidden relative w-full"
              >
                <img
                  ref={myRef}
                  /*onMouseEnter={handleMouse} */ src={ShowProduct.img}
                  alt=""
                  className={`transition-all duration-500 w-7/12 md:w-full`}
                />
                {/* <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Versace",
                      isFluidWidth: true,
                      src: ShowProduct.img1,
                      // srcSet: src.srcSet,
                    },
                    largeImage: {
                      src: ShowProduct.img,
                      width: 1200,
                      height: 1200,
                    },
                  }}
                  // {...rimProps}
                /> */}
              </div>
              <div className="h-[500px] flex-1 flex flex-col justify-center space-y-4">
                <h2 className="text-base md:text-lg xl:text-xl font-bold">
                  {" "}
                  {ShowProduct.title}{" "}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid cumque consequatur recusandae dolorem pariatur in nam
                  officiis, cum temporibus doloremque?
                </p>
                <div className="flex justify-start items-center space-x-1">
                  <h2 className="text-2xl font-bold text-red-500">৳250</h2>
                  <h2 className="text-base text-gray-400 line-through">৳300</h2>
                </div>

                <div className="flex justify-start items-center space-x-2">
                  {/* //! plus minus product */}
                  <div className="flex w-20 items-center h-10 text-primary font-medium">
                    <div
                      onClick={() => decreaseFromCart(ShowProduct)}
                      className="flex-1 flex justify-center items-center cursor-pointer h-full border-l border-t border-b rounded-l-full hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <IoMdRemove />
                    </div>
                    <div className="h-full flex justify-center items-center px-2 border">
                      {" "}
                      {/* {ShowProduct.amount}{" "} */}1
                    </div>
                    <div
                      onClick={() => addToCart(ShowProduct)}
                      className="flex-1 h-full flex justify-center items-center cursor-pointer border-r border-t border-b rounded-r-full hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <IoMdAdd />
                    </div>
                  </div>
                  {/* //! Add to Cart Button */}
                  <div className="flex justify-center items-center my-2 ">
                    <button
                      onClick={() => addToCart(ShowProduct)}
                      className="flex justify-center items-center text-xs md:text-sm xl:text-base space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-2 py-1 xl:px-4 xl:py-2 cursor-pointer w-full"
                    >
                      {" "}
                      <BsPlusLg /> <span>Cart</span>{" "}
                    </button>
                  </div>
                </div>
                <div
                  onClick={() => addToWishlist(ShowProduct)}
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
          <div className="w-full flex flex-col justify-center items-center">
            <div>
              <ProductTopbar />
            </div>
            <div className="w-full">
              {ToggleProductTopbar === 0 && <ProductDescription />}
              {ToggleProductTopbar === 1 && <ProductReviews />}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;
