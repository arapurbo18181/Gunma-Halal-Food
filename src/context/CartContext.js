import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [ToggleSidebar, setToggleSidebar] = useState(false);
  const [Cart, setCart] = useState([]);
  const [TotalAmount, setTotalAmount] = useState(0);
  const [TotalWishlist, setTotalWishlist] = useState(0);
  const [Wishlist, setWishlist] = useState([]);
  const [ShowProduct, setShowProduct] = useState();

  useEffect(() => {
    const amount = Cart.reduce((accumulator, currItem) => {
      return accumulator + currItem.amount;
    }, 0);
    setTotalAmount(amount);
  }, [Cart]);

  useEffect(() => {
    const amount = Wishlist.reduce((accumulator, currItem)=>{
      return accumulator += 1
    }, 0)
    setTotalWishlist(amount)
  }, [Wishlist])
  

  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };
    const exist = Cart.find((item) => {
      return product.img === item.img;
    });

    if (exist) {
      const updated = Cart.map((item) => {
        if (item.img === exist.img) {
          item.amount += 1;
          return item;
        } else {
          return item;
        }
      });
      setCart(updated);
    } else {
      setCart([...Cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (item) => {
    const updated = Cart.filter((elem) => {
      return elem != item;
    });
    setCart(updated);
  };

  const decreaseFromCart = (item) => {
    const updated = Cart.map((elem) => {
      if (item.img === elem.img) {
        if (elem.amount === 0) {
        //   removeFromCart(elem);
          return elem
        } else {
          elem.amount -= 1;
          return elem;
        }
      } else {
        return elem;
      }
    });
    setCart(updated);
  };

  const addToWishlist = (item) =>{
    const newWish = Wishlist.find(elem=>{
        return elem.img === item.img
    });
    if (newWish) {
        alert("You already have this item on your wishlist");
    }else{
        setWishlist([...Wishlist, item]);
    }
  }

  const removeFromWishlist = (item) =>{
    const updated = Wishlist.filter(elem=>{
      return elem.img !== item.img;
    });
    setWishlist(updated);
  }

  useEffect(() => {
    console.log(Cart);
  }, [Cart])

  useEffect(() => {
    console.log(Wishlist);
  }, [Wishlist])
  

  return (
    <CartContext.Provider
      value={{
        ToggleSidebar,
        setToggleSidebar,
        ShowProduct,
        setShowProduct,
        addToCart,
        Cart,
        TotalAmount,
        clearCart,
        removeFromCart,
        decreaseFromCart,
        TotalWishlist,
        setTotalWishlist,
        Wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
