import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Searchbar from "../Searchbar";
import { useCategory } from "../../context/CategoryContext";

const menu = [
  {
    menu: "Home",
    page: "/",
  },
  {
    menu: "About Us",
    page: "/about",
  },
  {
    menu: "Shop",
    page: "/shop",
  },
  {
    menu: "Contact",
    page: "/contact",
  },
  {
    menu: "Privacy Policy",
    page: "/privacypolicy",
  },
];

const menuForMobile = [
  {
    menu: "Home",
    page: "/",
  },
  {
    menu: "About Us",
    page: "/about",
  },
  {
    menu: "Shop",
    page: "/shop",
  },
  {
    menu: "Contact",
    page: "/contact",
  },
  {
    menu: "Privacy Policy",
    page: "/privacypolicy",
  },
  {
    menu: "Login",
    page: "/login",
  },
  {
    menu: "SignUp",
    page: "/signup",
  },
  {
    menu: "My Account",
    page: "/useraccount",
  },
  {
    menu: "My Wishlist",
    page: "/wishlist",
  },
];

const Menubar = () => {
    const {Toggle, setToggle, toggleNav} = useCategory();



  return (
    <section className="w-full flex justify-center items-center space-x-6">
      {/* //! Menu for pc */}
      <div className="w-full hidden xl:flex justify-center items-center space-x-10 px-6">
        {menu.map((item) => {
          return (
            <Link
              to={item.page}
              className="xl:text-lg 2xl:text-xl focus:border-b py-2 px-4 bg-emerald-600 text-white border-2 border-emerald-600 hover:bg-white hover:text-black transition-all duration-500 rounded-md"
            >
              {item.menu}
            </Link>
          );
        })}
      </div>
      {/* //! Search bar */}
      <div className="block xl:hidden">
        <Searchbar />
      </div>

      <div
        className={`h-[99vh] flex justify-center items-start pt-32 bg-white absolute top-0 right-0 left-0 bottom-0 z-40 ${
          Toggle ? "-translate-y-0" : "-translate-y-full"
        } transition-all duration-500`}
      >
        {/* //! Mobile menu close button */}
        <div
          onClick={toggleNav}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          X
        </div>
        {/* //! Menu For Mobile */}
        <div className="flex flex-col justify-start items-center w-full space-y-3">
          {menuForMobile.map((item) => {
            return (
              <Link
                to={item.page}
                onClick={toggleNav}
                className="border-b w-full py-2 px-2 text-center h-full text-xl"
              >
                {item.menu}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menubar;
