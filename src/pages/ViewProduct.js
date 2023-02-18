import React from "react";
import CategorySidebar from "../components/CategorySidebar";
import { useCart } from "../context/CartContext";
import { BsPlusLg } from "react-icons/bs";
import Footer from "../components/Footer";

const ViewProduct = () => {
  const { ShowProduct, addToCart } = useCart();

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex justify-start items-start w-[1440px]">
        <div className="-mt-4 w-[380px]">
          <div className="block w-[380px]"></div>
          <CategorySidebar />
        </div>
        <div>
          <div className="h-[80vh] w-[100%] flex justify-center items-center">
            <div className="flex justify-center items-start w-[1000px]">
              <div className="flex-1">
                <img src={ShowProduct.img} alt="" />
              </div>
              <div className="h-[500px] flex-1 flex flex-col justify-center space-y-4">
                <h2 className="text-[1.5rem] font-bold">
                  {" "}
                  {ShowProduct.title}{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid cumque consequatur recusandae dolorem pariatur in nam
                  officiis, cum temporibus doloremque?
                </p>
                <div className="flex justify-start items-center space-x-1">
                  <h2 className="text-2xl font-bold text-red-500">৳250</h2>
                  <h2 className="text-base text-gray-400 line-through">৳300</h2>
                </div>
                <div className="w-full flex justify-center items-center my-2 ">
                  <button onClick={()=>addToCart(ShowProduct)} className="flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer w-full">
                    {" "}
                    <BsPlusLg /> <span>Add To Cart</span>{" "}
                  </button>
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
