import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { useApi } from "../../context/ApiContext";

const menuForMobile = [
  {
    icon: <VscAccount className="cursor-pointer text-xl" />,
    menu: "My Account",
    page: "/useraccount",
  },
  {
    icon: <BsSuitHeart className="cursor-pointer text-xl" />,
    menu: "My Wishlist",
    page: "/wishlist",
  },
];

const menuForMobile2 = [
  {
    icon: <AiOutlineLogin className="cursor-pointer text-xl" />,
    menu: "My Account",
    page: "/useraccount",
  },
  {
    icon: <GiNotebook className="cursor-pointer text-xl" />,
    menu: "My Account",
    page: "/useraccount",
  },
  {
    icon: <BsSuitHeart className="cursor-pointer text-xl" />,
    menu: "My Wishlist",
    page: "/wishlist",
  },
];

const BottomMenu = () => {
  const location = useLocation();
  const { TotalWishlist, User } = useApi();
  return (
    <>
      { location.pathname !== "/useraccount" ? <div className="xl:hidden fixed bottom-0 left-0 right-0 w-full bg-white z-30 py-2 border-t shadow-[0_15px_20px_10px_rgba(0,0,0,0.3)]">
        {User ? (
          <div className="flex justify-center w-full">
            {/* //! Bottom Menu For Mobile */}
            <div className="w-full flex flex-col items-center">
              <Link
                to={"/useraccount"}
                className="flex-1 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <VscAccount className="cursor-pointer text-xl" />
                <h2>My Account</h2>
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <Link
                to={"/wishlist"}
                className="flex-1 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="relative w-fit">
                  <BsSuitHeart className="cursor-pointer text-xl" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-xs text-white">
                    {" "}
                    {TotalWishlist}{" "}
                  </div>
                </div>
                <h2>Wishlist</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            {/* //! Bottom Menu For Mobile */}
            <div className="w-full flex flex-col items-center">
              <Link
                to={"/login"}
                className="flex-1 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <AiOutlineLogin className="cursor-pointer text-xl" />
                <h2>Login</h2>
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <Link
                to={"/signup"}
                className="flex-1 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <GiNotebook className="cursor-pointer text-xl" />
                <h2>Signup</h2>
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <Link
                to={"/wishlist"}
                className="flex-1 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="relative w-fit">
                  <BsSuitHeart className="cursor-pointer text-xl" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-xs text-white">
                    {" "}
                    {TotalWishlist}{" "}
                  </div>
                </div>
                <h2>Wishlist</h2>
              </Link>
            </div>
          </div>
        )}
      </div> : ""}
    </>
  );
};

export default BottomMenu;
