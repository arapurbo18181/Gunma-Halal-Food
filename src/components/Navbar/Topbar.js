import React, { useEffect, useRef } from "react";
import Logo from "../../images/logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import Menubar from "./Menubar";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";
import { FaBars } from "react-icons/fa";
import { useCategory } from "../../context/CategoryContext";

const Topbar = () => {
  const {
    ToggleSidebar,
    setToggleSidebar,
    TotalAmount,
    TotalWishlist,
    CartCoordinate,
    setCartCoordinate,
  } = useCart();

  const {toggleNav} = useCategory()

  // const shoppingCart = document.getElementsByClassName("cart");
  // console.log(shoppingCart)
  // const xCoordinate = shoppingCart.getBoundingClientRect();
  // console.log(xCoordinate)

  return (
    <section className="flex justify-center space-x-5 items-center px-6">
      {/* //! Main Logo */}
      <Link to={"/"} className="max-w-[200px] w-[200px] md:min-w-[100px]">
        <img src={Logo} alt="Main Logo" />
      </Link>
      
      {/* //! Menu Bar */}
      <Menubar />
      {/* //! Account and Cart */}
      <div className="flex justify-center items-center space-x-8">
      {/* //! Menubar for mobile */}
      <div className="xl:hidden flex justify-center items-center">
        {" "}
        <FaBars onClick={toggleNav} className="cursor-pointer text-2xl mt-1" />{" "}
      </div>
        <Link
          className="hidden xl:block flex-1 text-xl font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/login"}
        >
          {" "}
          Login{" "}
        </Link>
        <Link
          className="hidden xl:block flex-1 text-xl font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/signup"}
        >
          {" "}
          SignUp{" "}
        </Link>
        <Link
          to={"/useraccount"}
          className="hidden xl:block flex-1 hover:-translate-y-1 transition-all duration-300"
        >
          <VscAccount className="cursor-pointer text-3xl" />
        </Link>
        <Link
          to={"/wishlist"}
          className="hidden xl:block flex-1 relative hover:-translate-y-1 transition-all duration-300"
        >
          <BsSuitHeart className="cursor-pointer text-3xl" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 flex justify-center items-center text-sm text-white">
            {" "}
            {TotalWishlist}{" "}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Topbar;
