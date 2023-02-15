import React from "react";
import Logo from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../context/CartContext";

const Topbar = () => {

  const {ToggleSidebar, setToggleSidebar} = useCart();

  return (
    <section className="flex justify-between space-x-5 items-center px-6 pt-1">
    {/* //! Main Logo */}
      <div className="w-[200px]">
        <img src={Logo} alt="Main Logo" />
      </div>
      {/* //! Search Bar */}
      <div className="relative">
        <input
          className="outline-none py-2 px-4 drop-shadow-lg w-[500px] rounded-md focus:outline-2 focus:outline-emerald-400 transition-all duration-100 ease-linear"
          type="text"
          placeholder="Search Product here"
        />
        <BsSearch className="absolute top-3 right-3 cursor-pointer text-lg" />
      </div>
      {/* //! Account and Cart */}
      <div className="flex justify-center items-center space-x-8">
        <VscAccount className="cursor-pointer text-3xl" />
        <AiOutlineShoppingCart onClick={()=>setToggleSidebar(!ToggleSidebar)} className="cursor-pointer text-3xl" />
      </div>
    </section>
  );
};

export default Topbar;
