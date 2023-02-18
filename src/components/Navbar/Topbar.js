import React from "react";
import Logo from "../../images/logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import Menubar from "./Menubar";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { ToggleSidebar, setToggleSidebar, TotalAmount, TotalWishlist } = useCart();

  return (
    <section className="flex justify-between space-x-5 items-center px-6">
      {/* //! Main Logo */}
      <Link to={"/"} className="w-[200px]">
        <img src={Logo} alt="Main Logo" />
      </Link>
      {/* //! Menu Bar */}
      <Menubar />
      {/* //! Account and Cart */}
      <div className="flex justify-center items-center space-x-8">
        <Link
          className="flex-1 text-xl font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/login"}
        >
          {" "}
          Login{" "}
        </Link>
        <Link
          className="flex-1 text-xl font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/signup"}
        >
          {" "}
          SignUp{" "}
        </Link>
        <Link to={"/useraccount"} className="flex-1">
          <VscAccount className="cursor-pointer text-3xl" />
        </Link>
        <Link to={"/wishlist"} className="flex-1 relative">
          <BsSuitHeart className="cursor-pointer text-3xl" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 flex justify-center items-center text-sm text-white">
            {" "}
            {TotalWishlist}{" "}
          </div>
        </Link>
        <div className="relative flex-1">
          <AiOutlineShoppingCart
            onClick={() => setToggleSidebar(!ToggleSidebar)}
            className="cursor-pointer text-3xl"
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 flex justify-center items-center text-sm text-white">
            {" "}
            {TotalAmount}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
