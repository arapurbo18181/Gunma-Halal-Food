import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import UserDashboard from "../components/UserDashboard";
import UserOrders from "../components/UserOrders";
import UserProfile from "../components/UserProfile";
import UserSettings from "../components/UserSettings";
import UserSidebar from "../components/UserSidebar";
import { useApi } from "../context/ApiContext";
import CartButtom from "../components/CartButton"

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
      <div className="w-full px-2 sm:px-0 flex justify-start items-center overflow-hidden">
        <div className="flex flex-col xl:flex-row justify-start items-start w-full">
          <div className="w-[20vw] h-full sticky top-[4.6rem]">
            <UserSidebar />
            <CartButtom/>
          </div>
          {/* <div className="w-[20vw]">
              <UserSidebar />
            </div> */}
          <div className="w-full xl:w-[78vw]">
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
