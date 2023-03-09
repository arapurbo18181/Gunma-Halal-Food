import React from "react";
import Logo from "../../images/logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineBars } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import Menubar from "./Menubar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useCategory } from "../../context/CategoryContext";

const Topbar = () => {
  const { TotalWishlist } = useCart();

  const { toggleNav, toggleCat } = useCategory();

  return (
    <section className="flex justify-center space-x-5 items-center px-6">
      {/* //! Category bar for mobile */}
      <div className="xl:hidden flex justify-center items-center">
        {" "}
        <AiOutlineBars
          onClick={toggleCat}
          className="cursor-pointer text-xl md:text-2xl mt-1"
        />{" "}
      </div>
      {/* //! Main Logo */}
      <div className="w-[80vw] xl:w-[200px] flex xl:flex-none justify-center items-center">
        <Link to={"/"} className="max-w-[300px] w-[150px] md:w-[200px] md:min-w-[100px]">
          <img className="min-w-full" src={Logo} alt="Main Logo" />
        </Link>
      </div>

      {/* //! Menu Bar */}
      <div className="hidden xl:block xl:w-full">
        <Menubar />
      </div>
      {/* //! Account and Cart */}
      <div className="flex justify-center items-center space-x-8">
        {/* //! Menubar for mobile */}
        <div className="xl:hidden flex justify-center items-center">
          {" "}
          <FaBars
            onClick={toggleNav}
            className="cursor-pointer text-xl md:text-2xl mt-1"
          />{" "}
        </div>
        <Link
          className="hidden xl:block flex-1 text-base font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/login"}
        >
          {" "}
          Login{" "}
        </Link>
        <Link
          className="hidden xl:block flex-1 text-base font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/signup"}
        >
          {" "}
          SignUp{" "}
        </Link>
        <Link
          to={"/useraccount"}
          className="hidden xl:block flex-1 hover:-translate-y-1 transition-all duration-300"
        >
          <VscAccount className="cursor-pointer text-xl" />
        </Link>
        <Link
          to={"/wishlist"}
          className="hidden xl:block flex-1 relative hover:-translate-y-1 transition-all duration-300"
        >
          <BsSuitHeart className="cursor-pointer text-xl" />
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500 flex justify-center items-center text-xs text-white">
            {" "}
            {TotalWishlist}{" "}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Topbar;
