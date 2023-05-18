import React from "react";
import Logo from "../../images/logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineBars } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import Menubar from "./Menubar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useCategory } from "../../context/CategoryContext";
import { useApi } from "../../context/ApiContext";
import ProfileImage from "../../images/user.png"

const Topbar = () => {
  const { TotalWishlist, User } = useApi();

  const { toggleNav, toggleCat } = useCategory();

  return (
    <section className="flex justify-center space-x-5 items-center px-6">
      {/* //! Category bar for mobile */}
      <div className="xl:hidden flex justify-center items-center">
        {" "}
        <FaBars
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
      <div className="xl:block xl:w-full">
        <Menubar />
      </div>
      {/* //! Account and Cart */}
      <div className="flex justify-center items-center space-x-8">
        {/* //! Menubar for mobile */}
        <div className="xl:hidden flex justify-center items-center">
          {" "}
          <AiOutlineBars
            onClick={toggleNav}
            className="cursor-pointer text-xl md:text-2xl mt-1"
          />{" "}
        </div>
        { !User && <Link
          className="hidden xl:block flex-1 text-base font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/login"}
        >
          {" "}
          Login{" "}
        </Link>}
        { !User && <Link
          className="hidden xl:block flex-1 text-base font-semibold hover:-translate-y-1 transition-all duration-300"
          to={"/signup"}
        >
          {" "}
          SignUp{" "}
        </Link>}
        
        <Link
          to={"/wishlist"}
          className="hidden flex-1 relative hover:-translate-y-1 transition-all duration-300 w-10 h-10 xl:flex justify-center items-center"
        >
          <BsSuitHeart className="cursor-pointer text-xl w-full" />
          <div className="absolute top-0 right-1 w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-xs text-white">
            {" "}
            {TotalWishlist}{" "}
          </div>
        </Link>
        { User && <Link
          to={"/useraccount"}
          className="hidden xl:block flex-1 hover:-translate-y-1 transition-all duration-300"
        >
          <img className="w-20 border border-blue-600 rounded-full" src={ProfileImage} alt="" />
        </Link>}
      </div>
    </section>
  );
};

export default Topbar;
