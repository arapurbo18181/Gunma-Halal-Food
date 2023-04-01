import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import GetCookies from "../components/Hooks/GetCookies";
import SetCookies from "../components/Hooks/SetCookies";
import RemoveCookies from "../components/Hooks/RemoveCookies";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [CategoryApi, setCategoryApi] = useState();
  const [ProductsApi, setProductsApi] = useState([]);
  const [SubCatProductsApi, setSubCatProductsApi] = useState([]);
  const [IsApi, setIsApi] = useState(false);
  const [SubCatProIsApi, setSubCatProIsApi] = useState(false);
  const [SubCatname, setSubCatname] = useState();
  const [Catname, setCatname] = useState();
  const [BreadCrumbs, setBreadCrumbs] = useState([]);
  const [LargeImage] = useState(
    "http://localhost:8000/images/product_images/large"
  );
  const [SmallImage] = useState(
    "http://localhost:8000/images/product_images/small"
  );
  const [AllProducts, setAllProducts] = useState([]);
  const [SubProducts, setSubProducts] = useState([]);
  const [Register, setRegister] = useState({});
  const [Login, setLogin] = useState({});
  const [ValidationErrors, setValidationErrors] = useState({});
  const [ConfirmPassError, setConfirmPassError] = useState();
  const [IsConfirmError, setIsConfirmError] = useState(false);
  const [LoginError, setLoginError] = useState();
  const [LoginValidationErrors, setLoginValidationErrors] = useState({});
  const [IsLoginError, setIsLoginError] = useState(false);
  const [Search, setSearch] = useState();
  const [SearchProduct, setSearchProduct] = useState([]);
  const [NewSearchProducts, setNewSearchProducts] = useState([]);
  const [ToggleUserMenu, setToggleUserMenu] = useState(0);
  const [UserImage, setUserImage] = useState();
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
  const [User, setUser] = useState(false);
  const [UserId, setUserId] = useState();
  const [CategorySlug, setCategorySlug] = useState();
  const [SubCategorySlug, setSubCategorySlug] = useState();

  const [Toggle, setToggle] = useState(false);
  const [ToggleCategory, setToggleCategory] = useState(false);
  const [ItemCategory, setItemCategory] = useState([]);
  const [ProductsFromCategory, setProductsFromCategory] = useState([]);
  const [CatImage, setCatImage] = useState();
  const [SubCatImage, setSubCatImage] = useState();
  const [UserEmail, setUserEmail] = useState();
  const navigate = useNavigate();

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
  const [UserMenu, setUserMenu] = useState(userAccount);
  const [CardsForUserDashboard, setCardsForUserDashboard] = useState(cards);
  const location = useLocation();
  const params = useParams();

  // useEffect(() => {
  //   if (GetCookies("cookies")) {
  //     console.log(GetCookies("cookies"))
  //   }else{
  //     SetCookies("cookies", Math.random() * 100000000);
  //     console.log(GetCookies("cookies"))
  //   }
  // }, [])


  useEffect(() => {

    if (GetCookies("cookies")) {
      console.log(GetCookies("cookies"))
    }else{
    
    
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
      function generateString(length) {
          let result = ' ';
          const charactersLength = characters.length;
          for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
      
          return result;
      }
      SetCookies("cookies", generateString(50));
      console.log(GetCookies("cookies"))
    }



  }, [])

  useEffect(() => {
    setCardsForUserDashboard(cards);
  }, [TotalAmount, TotalWishlist]);

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
        // console.log(res);
      });
    };
    getData();
  }, [CartData]);

  const logOut = async () => {
    await axios.get(`/api/user/account/management/logout`).then((res) => {
      // setGetCartData(res.data.user_cart);
      console.log(res);
      setUser(false);
    });
  };

  const addToCart = async (product) => {
    const data = {
      product_id: product.id,
      price: product.discountedPrice,
      quantity: product.quantity,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/cart/management/add-to-cart`, data).then((res) => {
        console.log(res);
        setCartData(res);
      });
    });
  };

  useEffect(() => {
    // console.log(GetCartData);
    const datas = GetCartData.map((item) => {
      // console.log(item);
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

  const removeFromCart = (item) => {
    const updated = Cart.filter((elem) => {
      return elem !== item;
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
      axios.post(`/api/user/cart/management/delete-cart/${item.id}`, item.quantity).then((res) => {
        setGetCartData(res.data.carts);
      });
    });
  };

  const increaseQuantity = (item) => {
    const data = {
      quantity: "plus",
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/cart/management/update-cart/${item.id}`, data).then((res) => {
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
        axios.post(`/api/user/cart/management/update-cart/${item.id}`, data).then((res) => {
          setGetCartData(res.data.carts);
        });
      });
    }
  };

  const deleteAll = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.delete(`/api/user/cart/management/delete-cart-all/`).then((res) => {
        setGetCartData(res.data.carts);
        console.log(res);
      });
    });
  };

  useEffect(() => {
    // console.log(ValidationErrors)
  }, [ValidationErrors]);
  useEffect(() => {
    setTimeout(() => {
      setIsConfirmError(false);
    }, 5000);
  }, [IsConfirmError]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoginError(false);
    }, 5000);
  }, [IsLoginError]);

  useEffect(() => {
    const getdata = async () => {
      await axios.get(`/api/product/search/management/search/${Search}`).then((res) => {
        // console.log(res.data);
        setSearchProduct(
          res.data.map((item) => {
            return { ...item, discountedPrice: 0 };
          })
        );
      });
    };
    getdata();
  }, [Search]);

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: Register.name,
      email: Register.email,
      password: Register.password,
      confirm_password: Register.confirmPassword,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/account/management/registration`, data).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          // setRegSuccessText(res.data.success_message);
          navigate("/login");
          Swal.fire("Success", res.data.success_message, "success");
          // localStorage.setItem("auth_token", res.data.token);
          // localStorage.setItem("auth_email", res.data.email);
        }
        if (res.data.status === 204) {
          setValidationErrors(res.data.errors);
        }
        if (res.data.status === 205) {
          console.log(res.data.error_message);
          setConfirmPassError(res.data.error_message);
          setIsConfirmError(true);
        }
      });
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: Login.email,
      password: Login.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/account/management/login`, data).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          setUserEmail(res.data.email);
          // setGetCartData(res.data.user_cart);
          // setUserId(res.data.user.id);
          navigate("/");
          // alert(res.data.success_message);
          setUser(true);
        }
        if (res.data.status === 401) {
          console.log(res.data.error_message);
          setLoginError(res.data.error_message);
          setIsLoginError(true);
        }
        if (res.data.status === 204) {
          setLoginValidationErrors(res.data.errors);
        }
      });
    });
  };

  useEffect(() => {
    const getdata = async () => {
      await axios.get(`/api/`).then((res) => {
        // console.log(res.data);
        setCategoryApi(res.data.categories);
        setProductsApi(res.data.products);
      });
    };
    getdata();
  }, []);

  useEffect(() => {
    setAllProducts(
      ProductsApi.map((item) => {
        return { ...item, quantity: 0, discountedPrice: 0 };
      })
    );
  }, [ProductsApi]);

  useEffect(() => {
    setSubProducts(
      SubCatProductsApi.map((item) => {
        return { ...item, quantity: 0, discountedPrice: 0 };
      })
    );
  }, [SubCatProductsApi]);

  const getProducts = async (category, sub_category) => {
    await axios.get(`/api/${category}/${sub_category}`).then((res) => {
      setSubCatProductsApi(res.data.products);
    });
  };

  useEffect(() => {
    if (CategoryApi && ProductsApi) {
      setIsApi(true);
    }
    if (SubProducts) {
      setSubCatProIsApi(true);
    }
  }, [CategoryApi, SubProducts]);

  useEffect(() => {
    if (SubCatProductsApi) {
      setSubCatProIsApi(true);
    }
  }, [SubCatProductsApi]);

  return (
    <ApiContext.Provider
      value={{
        CategoryApi,
        setCategoryApi,
        IsApi,
        ProductsApi,
        getProducts,
        SubCatProductsApi,
        SubCatProIsApi,
        SubCatname,
        setSubCatname,
        Catname,
        setCatname,
        BreadCrumbs,
        setBreadCrumbs,
        LargeImage,
        AllProducts,
        setAllProducts,
        SmallImage,
        SubProducts,
        Register,
        setRegister,
        registerSubmit,
        Login,
        setLogin,
        loginSubmit,
        ValidationErrors,
        ConfirmPassError,
        IsConfirmError,
        LoginError,
        IsLoginError,
        LoginValidationErrors,
        Search,
        setSearch,
        SearchProduct,
        setSearchProduct,
        NewSearchProducts,
        ToggleSidebar,
        setToggleSidebar,
        ShowProduct,
        setShowProduct,
        addToCart,
        Cart,
        TotalAmount,
        removeFromCart,
        decreaseFromCart,
        TotalWishlist,
        setTotalWishlist,
        Wishlist,
        addToWishlist,
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
        deleteAll,
        logOut,
        UserId,
        UserMenu,
        ToggleUserMenu,
        setToggleUserMenu,
        CardsForUserDashboard,
        UserImage,
        setUserImage,
        CategorySlug,
        setCategorySlug,
        SubCategorySlug,
        setSubCategorySlug,
        ItemCategory,
        setItemCategory,
        ProductsFromCategory,
        setProductsFromCategory,
        Toggle,
        setToggle,
        ToggleCategory,
        setToggleCategory,
        CatImage,
        setCatImage,
        SubCatImage,
        setSubCatImage,
        UserEmail,
        User
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
