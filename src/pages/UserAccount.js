import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import UserSidebar from "../components/UserSidebar";
import UserToprbar from "../components/UserToprbar";
import { useUser } from "../context/UserContext";
import UserDashboard from "../components/UserDashboard";
import UserProfile from "../components/UserProfile";
import UserOrders from "../components/UserOrders";
import UserSettings from "../components/UserSettings";

export default function UserAccount() {
  const { ToggleUserMenu, setToggleUserMenu } = useUser();
  return (
    <div className="w-full px-2 py-16 sm:px-0 flex justify-center items-center">
      <div className="w-[1440px]">
        <UserToprbar />
        <div className="flex justify-start items-start">
          <UserSidebar />
          {
            ToggleUserMenu === 0 && <UserDashboard/>
          }
          {
            ToggleUserMenu === 1 && <UserProfile/>
          }
          {
            ToggleUserMenu === 2 && <UserOrders/>
          }
          {
            ToggleUserMenu === 3 && <UserSettings/>
          }
        </div>
      </div>
    </div>
  );
}
