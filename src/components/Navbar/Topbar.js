import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useApi } from "../../context/ApiContext";
import { useCategory } from "../../context/CategoryContext";
import Logo from "../../images/Gunma logo.png";
import ProfileImage from "../../images/user.png";
import Menubar from "./Menubar";

const Topbar = () => {
  const { TotalWishlist, User, UserData, setIsCategorySidebar } = useApi();

  const { toggleNav, toggleCat } = useCategory();

  return (
    <section className="flex justify-center space-x-5 items-center px-6">
      {/* //! Category bar for mobile */}
      <div className="xl:hidden flex justify-center items-center">
        {" "}
        <AiOutlineBars
          onClick={()=>setIsCategorySidebar(true)}
          className="cursor-pointer text-xl md:text-2xl mt-1"
        />{" "}
      </div>
      {/* //! Main Logo */}
      <div className="w-[80vw] xl:w-[200px] flex xl:flex-none justify-center items-center">
        <Link
          to={"/"}
          className="max-w-[300px] w-[150px] md:w-[200px] md:min-w-[100px]"
        >
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
        <div className="flex xl:hidden justify-center items-center space-x-1 md:space-x-2">
          <span>¥ </span>
          <span>{UserData ? UserData.coins : 0}</span>
        </div>
        {!User && (
          <Link
            className="hidden xl:block flex-1 text-base font-semibold hover:-translate-y-1 transition-all duration-300"
            to={"/login"}
          >
            {" "}
            Login{" "}
          </Link>
        )}
        {!User && (
          <Link
            className="hidden xl:block flex-1 text-base font-semibold hover:-translate-y-1 transition-all duration-300"
            to={"/signup"}
          >
            {" "}
            SignUp{" "}
          </Link>
        )}

        <Link
          to={"/wishlist"}
          className="hidden flex-1 hover:-translate-y-1 transition-all duration-300 w-8 xl:flex justify-center items-center"
        >
          <div className="w-8 relative">
            <BsSuitHeart className="cursor-pointer text-xl w-full" />
            <div className="absolute -top-2 right-0 w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-xs text-white">
              {TotalWishlist}
            </div>
          </div>
        </Link>
        {User && (
          <Link
            to={"/useraccount"}
            className="hidden xl:block flex-1 hover:-translate-y-1 transition-all duration-300 w-8"
          >
            <img
              className="border border-blue-600 rounded-full"
              src={ProfileImage}
              alt=""
            />
          </Link>
        )}
        
        <div className="xl:hidden flex justify-center items-center">
          {" "}
          <FaBars
            onClick={toggleNav}
            className="cursor-pointer text-xl md:text-2xl mt-1"
          />{" "}
        </div>
        <div className="hidden xl:flex justify-center items-center space-x-1 md:space-x-2">
          <span>¥ </span>
          <span>{UserData ? UserData.coins : 0}</span>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
