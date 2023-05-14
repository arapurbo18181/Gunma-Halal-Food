import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import UserSidebar from "../components/UserSidebar";
import UserToprbar from "../components/UserToprbar";
import UserDashboard from "../components/UserDashboard";
import UserProfile from "../components/UserProfile";
import UserOrders from "../components/UserOrders";
import UserSettings from "../components/UserSettings";
import { useApi } from "../context/ApiContext";
import BreadCrumbs from "../components/BreadCrumbs";
import { useNavigate } from "react-router-dom";

export default function UserAccount() {
  const { ToggleUserMenu, User, UserData } = useApi();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!User) {
  //     console.log(User)
  //     navigate("/")
  //   }
  // }, [])

  return (
    <>
      <BreadCrumbs name={"User Account"} url={"useraccount"} />
      <div className="w-screen px-2 sm:px-0 flex justify-start items-center">
          <div className="flex flex-col xl:flex-row justify-start items-start w-full">
            <div className="">
              <UserSidebar />
            </div>
            <div className="w-full">
              {ToggleUserMenu === 0 && <UserDashboard />}
              {ToggleUserMenu === 1 && <UserProfile />}
              {ToggleUserMenu === 2 && <UserOrders />}
              {ToggleUserMenu === 3 && <UserSettings />}
            </div>
          </div>
      </div>
    </>
  );
}
