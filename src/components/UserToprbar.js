import React from "react";
import { FiLogOut } from "react-icons/fi";

const UserToprbar = () => {
  return (
    <div className="flex justify-between items-center mx-4 mb-4">
      <h2 className="text-center text-2xl font-bold">Welcome, john</h2>
      <button className="flex justify-center items-center space-x-2 py-2 px-4 border bg-red-600 border-red-600 hover:text-black hover:bg-white text-white transition-all duration-500">
        {" "}
        <span>Logout</span> <FiLogOut />
      </button>
    </div>
  );
};

export default UserToprbar;
