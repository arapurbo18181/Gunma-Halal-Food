import React from "react";
import { useApi } from "../context/ApiContext";
import UserToprbar from "./UserToprbar";

const UserDashboard = () => {
  const { CardsForUserDashboard, UserData } = useApi();
  return (
    <section className="flex flex-col justify-start items-center w-full px-2 mb-20">
      <div className="w-full">
        <UserToprbar />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 place-items-center w-full">
        {CardsForUserDashboard.map((item, i) => {
          return (
            <div
              key={i}
              className="border flex flex-col justify-center items-center h-40 w-full xl:w-80 px-4 py-2 bg-blue-500 hover:-translate-y-1 ease-in-out transition-all duration-500 overflow-hidden text-white"
            >
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
