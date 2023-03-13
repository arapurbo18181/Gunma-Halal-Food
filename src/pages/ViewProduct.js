import React, { useRef, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import { useCart } from "../context/CartContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Footer from "../components/Footer";
import CartButton from "../components/CartButton";

const ViewProduct = () => {
  const { ShowProduct, addToCart, addToWishlist } = useCart();
  const myRef = useRef();
  const [ClassList, setClassList] = useState();

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
        <div>
          <div className="h-[80vh] w-[100%] flex justify-center items-center">
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
                <p className="text-xs md:text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid cumque consequatur recusandae dolorem pariatur in nam
                  officiis, cum temporibus doloremque?
                </p>
                <div className="flex justify-start items-center space-x-1">
                  <h2 className="text-2xl font-bold text-red-500">৳250</h2>
                  <h2 className="text-base text-gray-400 line-through">৳300</h2>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-full flex justify-center items-center my-2 ">
                    <button
                      onClick={() => addToWishlist(ShowProduct)}
                      className="flex justify-center items-center text-xs md:text-sm xl:text-base space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-2 py-1 xl:px-4 xl:py-2 rounded-full cursor-pointer w-full"
                    >
                      {" "}
                      <BsSuitHeart /> <span>Wishlist</span>{" "}
                    </button>
                  </div>
                  <div className="w-full flex justify-center items-center my-2 ">
                    <button
                      onClick={() => addToCart(ShowProduct)}
                      className="flex justify-center items-center text-xs md:text-sm xl:text-base space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-2 py-1 xl:px-4 xl:py-2 rounded-full cursor-pointer w-full"
                    >
                      {" "}
                      <BsPlusLg /> <span>Cart</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;
