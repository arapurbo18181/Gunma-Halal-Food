import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const UserDashboard = () => {
  const { CardsForUserDashboard } = useUser();
  const {TotalAmount, TotalWishlist} = useCart();
  return (
    <section className="container flex justify-start items-center xl:mx-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {CardsForUserDashboard.map((item) => {
          return (
            <div className="border h-40 w-96 xl:w-80 px-4 py-2 bg-gradient-to-t from-emerald-600 to-emerald-200 hover:-translate-y-1 ease-in-out transition-all duration-500">
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
