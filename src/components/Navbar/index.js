import React from "react";
import AllCategoriesSidebar from "../AllCategoriesSidebar";
import CartSidebar from "../CartSidebar";
import Searchbar from "../Searchbar";
import Menubar from "./Menubar";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <section className="bg-gray-200 py-4 sticky top-0 right-0 left-0 z-10 shadow-md w-full">
      <Topbar />
      <div className="mx-4 mt-2 xl:hidden">
        <Searchbar/>
      </div>
      <CartSidebar />

      <div className="">
        <AllCategoriesSidebar />
      </div>
    </section>
  );
};

export default Navbar;
