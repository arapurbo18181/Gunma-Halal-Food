import React from "react";
import AllCategoriesSidebar from "../AllCategoriesSidebar";
import CartSidebar from "../CartSidebar";
import Searchbar from "../Searchbar";
import BottomMenu from "./BottomMenu";
import Menubar from "./Menubar";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <section className="bg-gray-200 pt-4 pb-2 sticky top-0 right-0 left-0 z-30 shadow-md w-full">
      <Topbar />
      <div className="mx-4 mt-2 xl:hidden">
        <Searchbar/>
      </div>
      <div>
        <BottomMenu/>
      </div>
      <CartSidebar />

      <div className="">
        <AllCategoriesSidebar />
      </div>
    </section>
  );
};

export default Navbar;
