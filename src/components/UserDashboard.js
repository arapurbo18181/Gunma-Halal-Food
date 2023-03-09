import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const UserDashboard = () => {
  const { CardsForUserDashboard } = useUser();
  const {TotalAmount, TotalWishlist} = useCart();
  return (
    <section className="flex justify-start items-center xl:mx-4 w-[100%]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 place-items-center w-full">
        {CardsForUserDashboard.map((item) => {
          return (
            <div className="border flex flex-col justify-center items-center h-40 w-full xl:w-80 px-4 py-2 bg-gradient-to-t from-emerald-600 to-emerald-200 hover:-translate-y-1 ease-in-out transition-all duration-500 overflow-hidden">
              <div className="flex justify-center items-center space-x-2">
                <h2 className="text-3xl"> {item.amount} </h2>
                <h2 className="text-3xl"> {item.head} </h2>
              </div>
              <div className="flex justify-center items-center">
                <h3> {item.body} </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserDashboard;
