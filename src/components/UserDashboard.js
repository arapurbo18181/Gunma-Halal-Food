import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const UserDashboard = () => {
  const { CardsForUserDashboard } = useUser();
  const {TotalAmount, TotalWishlist} = useCart();
  return (
    <section className="w-[100%] flex justify-start items-center mx-4">
      <div className="grid grid-cols-3 gap-4">
        {CardsForUserDashboard.map((item) => {
          return (
            <div className="border h-40 w-80 px-4 py-2 bg-gradient-to-t from-emerald-600 to-emerald-200 hover:-translate-y-1 ease-in-out transition-all duration-500">
              <div className="flex justify-start items-center space-x-2">
                <h2 className="text-3xl"> {item.amount} </h2>
                <h2 className="text-3xl"> {item.head} </h2>
              </div>
              <div>
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
