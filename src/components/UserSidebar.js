import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import { AiFillHome } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import userImage from "../images/user.png"

const userAccount = [
  {
    id: 0,
    tab: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    id: 1,
    tab: "Profile",
    icon: <AiFillProfile />,
  },
  {
    id: 2,
    tab: "Orders",
    icon: <BsFillCartCheckFill />,
  },
  {
    id: 3,
    tab: "Settings",
    icon: <AiFillLock />,
  },
];

const UserSidebar = () => {
  const {
    UserMenu,
    ToggleUserMenu,
    setToggleUserMenu,
    UserImage,
    UserEmail,
    UserData,
  } = useApi();
  return (
    <>
      <section className="hidden w-full xl:flex xl:flex-col justify-center items-center xl:items-start space-x-2 xl:space-x-0 bg-blue-600 xl:h-screen">
        <div className="flex-1 flex flex-col justify-center items-center space-y-2 w-full xl:w-[350px] py-2 px-2">
          <div className="overflow-hidden h-24 w-24 md:h-32 md:w-32 xl:h-44 xl:w-40 ">
            <img
              className="object-cover"
              src={userImage}
              alt=""
            />
          </div>
          <h2 className="text-white font-semibold text-lg">{UserData.name}</h2>
          <h2 className="text-white font-semibold text-sm">{UserData.email}</h2>
        </div>
        <div className="w-full px-4 flex-1 flex flex-col md:flex-row xl:flex-col justify-start items-center md:space-x-6 space-y-2 xl:space-x-0">
          {userAccount.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => setToggleUserMenu(item.id)}
                className={`${
                  ToggleUserMenu === i
                    ? "bg-white text-blue-600 border border-emerald-500 rounded w-full py-2 text-sm md:text-base xl:text-xl px-4 flex justify-start items-center space-x-3 group"
                    : "text-white bg-blue-600 w-full py-2 text-sm md:text-base xl:text-xl border-emerald-500 px-4 flex justify-start items-center space-x-3 group"
                }`}
              >
                <div className="text-white bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center">
                  {" "}
                  {item.icon}{" "}
                </div>{" "}
                <h2 className="group-hover:translate-x-2 transition-all duration-300">
                  {item.tab}
                </h2>
              </button>
            );
          })}
        </div>
      </section>
      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-white z-30 py-2 border-t shadow-[0_15px_20px_10px_rgba(0,0,0,0.3)]">
        <div className="w-full px-4 flex justify-start items-center space-x-1">
          {userAccount.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => setToggleUserMenu(item.id)}
                className={`${
                  ToggleUserMenu === i
                    ? "bg-white text-blue-600 border border-blue-500 rounded w-full py-1 sm:py-2 text-xs sm:text-sm md:text-base xl:text-xl px-0 sm:px-1 flex flex-col md:flex-row justify-center items-center space-x-1 group"
                    : "text-white bg-blue-600 w-full py-1 sm:py-2 text-xs sm:text-sm md:text-base xl:text-xl border-blue-500 px-0 sm:px-1 flex flex-col md:flex-row justify-center items-center space-x-1 group"
                }`}
              >
                <div className="text-white bg-blue-600 w-6 sm:w-8 h-6 sm:h-8 rounded-full flex justify-center items-center">
                  {" "}
                  {item.icon}{" "}
                </div>{" "}
                <h2 className="transition-all duration-300">
                  {item.tab}
                </h2>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
