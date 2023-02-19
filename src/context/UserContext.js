import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./CartContext";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const userAccount = [
  {
    id: 0,
    tab: "Dashboard",
  },
  {
    id: 1,
    tab: "Profile",
  },
  {
    id: 2,
    tab: "Orders",
  },
  {
    id: 3,
    tab: "Change Password",
  },
];

export const UserProvider = ({ children }) => {
  const [UserMenu, setUserMenu] = useState(userAccount);
  const [ToggleUserMenu, setToggleUserMenu] = useState(0);
  const { TotalAmount, TotalWishlist } = useCart();

  const cards = [
    {
      id: 1,
      amount: TotalAmount,
      head: "Products",
      body: "in Your Cart",
    },
    {
      id: 2,
      amount: TotalWishlist,
      head: "Products",
      body: "in Your Wishlist",
    },
    {
      id: 3,
      amount: 0,
      head: "Products",
      body: "You Ordered",
    },
    {
      id: 4,
      amount: 0,
      head: "Points",
      body: "in Your account",
    },
  ];

  const [CardsForUserDashboard, setCardsForUserDashboard] = useState(cards);

  const [UserImage, setUserImage] = useState();

  useEffect(() => {
    setCardsForUserDashboard(cards);
  }, [TotalAmount, TotalWishlist]);

  return (
    <UserContext.Provider
      value={{
        UserMenu,
        ToggleUserMenu,
        setToggleUserMenu,
        CardsForUserDashboard,
        UserImage,
        setUserImage
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
