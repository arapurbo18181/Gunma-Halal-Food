import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useApi } from "../context/ApiContext";

const UserToprbar = () => {
  const {logOut, UserData} = useApi()
  return (
    <div className="flex justify-between items-center px-10 my-4 w-full">
      <h2 className="text-center text-lg md:text-2xl font-bold">Welcome, {UserData.name} </h2>
      <button className="flex justify-center items-center space-x-2 py-1 md:py-2 px-2 md:px-4 border bg-red-600 border-red-600 hover:text-black hover:bg-white text-white transition-all duration-500 text-base md:text-lg">
        {" "}
        <span onClick={logOut}>Logout</span> <FiLogOut />
      </button>
    </div>
  );
};

export default UserToprbar;
