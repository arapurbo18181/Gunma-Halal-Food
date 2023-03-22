import axios from "axios";
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
  const [CartCoordinate, setCartCoordinate] = useState({});
  const [CountToAddToCart, setCountToAddToCart] = useState(0);
  const [CartData, setCartData] = useState([]);
  const [CountProductToAdd, setCountProductToAdd] = useState([]);
  const [GetCartData, setGetCartData] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    const amount = cart.reduce((accumulator, currItem) => {
      return accumulator + currItem.quantity;
    }, 0);
    setTotalAmount(amount);
  }, [cart]);

  useEffect(() => {
    const amount = Wishlist.reduce((accumulator, currItem) => {
      return (accumulator += 1);
    }, 0);
    setTotalWishlist(amount);
  }, [Wishlist]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(`/api/`).then((res) => {
        setGetCartData(res.data.user_cart);
      });
    };
    getData();
  }, [CartData]);

  const addToCart = async (product) => {
    const data = {
      product_id: product.id,
      price: product.discountedPrice,
      quantity: product.quantity,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/add-to-cart`, data).then((res) => {
        console.log(res);
        setCartData(res);
      });
    });
  };

  useEffect(() => {
    // console.log(GetCartData);
    const datas = GetCartData.map((item) => {
      console.log(item);
      return {
        id: item.id,
        price: item.price,
        product_id: item.product_id,
        quantity: item.quantity,
        user_id: item.user_id,
        image: item.product[0].image,
        name: item.product[0].name,
        slug: item.product[0].slug,
      };
    });
    // console.log(datas);
    setcart(datas);
  }, [GetCartData]);

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
        if (elem.amount === 1) {
          return elem;
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

  const addToWishlist = (item) => {
    const newWish = Wishlist.find((elem) => {
      return elem.img === item.img;
    });
    if (newWish) {
      alert("You already have this item on your wishlist");
    } else {
      setWishlist([...Wishlist, item]);
    }
  };

  const removeFromWishlist = (item) => {
    const updated = Wishlist.filter((elem) => {
      return elem.img !== item.img;
    });
    setWishlist(updated);
  };

  const deleteFromCart = (item) => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/delete-cart/${item.id}`, item.quantity).then((res) => {
        setGetCartData(res.data.carts);
      });
    });
  };

  const increaseQuantity = (item) => {
    const data = {
      quantity: "plus",
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/update-cart/${item.id}`, data).then((res) => {
        setGetCartData(res.data.carts);
      });
    });
  };
  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      alert("You cann't decrease data");
    } else {
      const data = {
        quantity: "minus",
      };
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post(`/api/update-cart/${item.id}`, data).then((res) => {
          setGetCartData(res.data.carts);
        });
      });
    }
  };

  const deleteAll = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.delete(`/api/delete-cart-all/`).then((res) => {
        setGetCartData(res.data.carts);
        console.log(res)
      });
    });
  }

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
        removeFromWishlist,
        removeFromWishlist,
        CartCoordinate,
        setCartCoordinate,
        CountToAddToCart,
        setCountToAddToCart,
        CountProductToAdd,
        setCountProductToAdd,
        GetCartData,
        CartData,
        cart,
        setcart,
        increaseQuantity,
        deleteFromCart,
        decreaseQuantity,
        deleteAll
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
