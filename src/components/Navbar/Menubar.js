import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Searchbar from "../Searchbar";
import { useCategory } from "../../context/CategoryContext";
import { useApi } from "../../context/ApiContext";

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
];

const Menubar = () => {
  const { Toggle, setToggle, toggleNav } = useCategory();
  const {BreadCrumbs, setBreadCrumbs} = useApi()

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full flex justify-center items-center space-x-6">
        {/* //! Menu for pc */}
        <div className="flex-1 w-full hidden xl:flex justify-center items-center space-x-10 px-6">
          {/* //! Search bar */}
          <div className="hidden xl:block flex-1">
            <Searchbar />
          </div>
          {menu.map((item) => {
            return (
              <Link
                to={item.page}
                onClick={()=>{
                  item.menu === "Home" ?  setBreadCrumbs([])  : setBreadCrumbs([item.menu])
                }}
                className="text-base font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                {item.menu}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`h-[100vh] flex justify-center items-start pt-24 bg-white absolute top-0 right-0 left-0 bottom-0 z-40 ${
          Toggle ? "-translate-y-0" : "-translate-y-[150%]"
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
