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
  // ! banner_images
  // ! category_image/large
  const [SliderImageRoute] = useState("http://gunma.myesdev.xyz/images/banner_images")
  const [CategoryImage] = useState("http://gunma.myesdev.xyz/images/category_image/large")
  const [LargeImage] = useState(
    "http://gunma.myesdev.xyz/images/product_images/large"
  );
  const [SmallImage] = useState(
    "http://gunma.myesdev.xyz/images/product_images/small"
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
  const [IsCart, setIsCart] = useState(false);
  const [SubCatImage, setSubCatImage] = useState();
  const [UserEmail, setUserEmail] = useState();
  const [TotalPrice, setTotalPrice] = useState();
  const [Reviews, setReviews] = useState({
    rating: 0,
    review: "",
  });
  const [IsReview, setIsReview] = useState(false);
  const [UserData, setUserData] = useState();
  const [IsPassword, setIsPassword] = useState();
  const [ChangePassErrors, setChangePassErrors] = useState({});  
  const [Password, setPassword] = useState({
    oldPass: "",
    newPass: "",
    confPass: "",
  });
  const [SmallLoading, setSmallLoading] = useState(false);
  const [AllReviews, setAllReviews] = useState();
  const [SliderImages, setSliderImages] = useState([]);
  const [SubBanner, setSubBanner] = useState();
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

  useEffect(() => {
    if (GetCookies("cookies")) {
    } else {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      function generateString(length) {
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }

        return result;
      }
      SetCookies("cookies", generateString(50));
      console.log(GetCookies("cookies"));
    }
  }, []);

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
    const amount = cart.reduce((accumulator, currItem) => {
      return accumulator + currItem.quantity * currItem.price;
    }, 0);
    setTotalPrice(amount);
  }, [cart]);

  useEffect(() => {
    const amount = Wishlist.reduce((accumulator, currItem) => {
      return (accumulator += 1);
    }, 0);
    setTotalWishlist(amount);
  }, [Wishlist]);

  const logOut = async () => {
    await axios.get(`/api/user/account/management/logout`).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        navigate("/");
        setUser(false);
        Swal.fire("Success", res.data.success_message, "success");
      }
    });
  };

  const addToCart = async (product) => {
    const data = {
      product_id: product.id,
      price: product.discountedPrice,
      quantity: product.quantity,
      cookie_id: GetCookies("cookies"),
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/cart/management/add-to-cart`, data)
        .then((res) => {
          console.log(res);
          setIsCart(!IsCart);
        })
        .catch((error) => {
          console.log(error.response);
        });
    });
  };

  const removeFromCart = (item) => {
    const updated = Cart.filter((elem) => {
      return elem !== item;
    });
    setCart(updated);
  };

  const addToWishlist = (item) => {
    const data = {
      cookie_id: GetCookies("cookies"),
      product_id: item.id,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/wishlist/management/add-to-wishlist`, data)
        .then((res) => {
          console.log(res);
          setIsCart(!IsCart);
          // setWishlist();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const removeFromWishlist = (item) => {
    axios
      .get(`api/user/wishlist/management/delete-wishlist/${item.wishlist_id}`)
      .then((res) => {
        console.log(res);
        setIsCart(!IsCart);
        // setWishlist();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFromCart = (item) => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .get(`/api/user/cart/management/delete-cart/${item.id}`)
        .then((res) => {
          // console.log(res)
          // setGetCartData(res.data.carts);
          setIsCart(!IsCart);
        });
    });
  };

  const increaseQuantity = (item) => {
    const data = {
      quantity: "plus",
      id: item.id,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/cart/management/update-cart`, data).then((res) => {
        // setGetCartData(res.data.carts);
        setIsCart(!IsCart);
      });
    });
  };
  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      alert("You cann't decrease data");
    } else {
      const data = {
        quantity: "minus",
        id: item.id,
      };
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post(`/api/user/cart/management/update-cart`, data)
          .then((res) => {
            // setGetCartData(res.data.carts);
            setIsCart(!IsCart);
          });
      });
    }
  };

  const deleteAll = () => {
    const data = {
      cookie_id: GetCookies("cookies"),
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/cart/management/delete-cart-all/`, data)
        .then((res) => {
          setGetCartData(res.data.carts);
          console.log(res);
        });
    });
    setIsCart(!IsCart);
  };
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
      await axios
        .get(`/api/product/search/management/search/${Search}`)
        .then((res) => {
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

    console.log(Register)

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/account/management/registration`, data)
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res);
            navigate("/login");
            Swal.fire("Success", res.data.success_message, "success");
            setRegister({
              email: "",
              name: "",
              password: "",
              confirmPassword: ""
            });
          }
          if (res.data.status === 204) {
            console.log(res)
            setValidationErrors(res.data.errors);
            setRegister({
              email: "",
              name: "",
              password: "",
              confirmPassword: ""
            });
          }
          if (res.data.status === 205) {
            console.log(res)
            console.log(res.data.error_message);
            setConfirmPassError(res.data.error_message);
            setIsConfirmError(true);
            setRegister({
              email: "",
              name: "",
              password: "",
              confirmPassword: ""
            });
          }
        });
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: Login.email,
      password: Login.password,
      cookie_id: GetCookies("cookies"),
    };
    console.log(Login)
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/account/management/login`, data).then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          setUserEmail(res.data.email);
          navigate("/");
          Swal.fire("Success", res.data.success_message, "success");
          setUser(true);
          setLogin({
            email: "",
            password: ""
          })
        }
        if (res.data.status === 401) {
          console.log(res.data.error_message);
          setLoginError(res.data.error_message);
          setIsLoginError(true);
          setLogin({
            email: "",
            password: ""
          })
        }
        if (res.data.status === 422) {
          setLoginValidationErrors(res.data.errors);
          setLogin({
            email: "",
            password: ""
          })
        }
      });
    });
  };

  const checkPassword = async (value) => {
    await axios
      .get(`/api/user/account/management/check-password/${value}`)
      .then((res) => {
        console.log(res);
        setIsPassword(res.data.message);
      });
  };

  const changePassword = async (value) => {
    console.log(value);
    const data = {
      old_password: value.oldPass,
      new_password: value.newPass,
      confirm_password: value.confPass,
    };
    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/account/management/change-password`, data)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            Swal.fire("success", res.data.message, "success")
            setPassword({
              oldPass: "",
              newPass: "",
              confPass: "",
            })
          }
          if (res.data.status === 204) {
            setChangePassErrors(res.data.errors);
          }
        });
    });
  };

  useEffect(() => {
    const getdata = async () => {
      // console.log(IsCart)
      await axios
        .get(`/api/get/index/all/info/${GetCookies("cookies")}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            // console.log(IsCart);
            setSubBanner(res.data.subbanner);
            setSliderImages(res.data.slider);
            setCategoryApi(res.data.categories);
            setProductsApi(res.data.products);
            setUserData(res.data.user);
            setWishlist(
              res.data.wishlist.map((item) => {
                return (item.wishlist_product[0] = {
                  ...item.wishlist_product[0],
                  quantity: 0,
                  discountedPrice: 0,
                  wishlist_id: item.id,
                });
              })
            );
            // console.log(res.data.user_cart);
            const datas = res.data.user_cart.map((item) => {
              return {
                id: item.id,
                price: item.price,
                product_id: item.product_id,
                quantity: item.quantity,
                user_id: item.user_id,
                image: item.product[0].image,
                name: item.product[0].name,
                slug: item.product[0].slug,
                sub_cat_slug: item.product[0].sub_category.slug,
                cat_slug: item.product[0].sub_category.main_category.slug
              };
            });
            setcart(datas);
            // setGetCartData(res.data.user_cart);
            if (res.data.email) {
              setUser(true);
            } else {
              setUser(false);
            }
            setAllReviews(!AllReviews);
          }
        });
        setSmallLoading(false);
    };
    getdata();
  }, [IsReview, IsCart, User]);

  // useEffect(() => {
  //   const datas = GetCartData.map((item) => {
  //     return {
  //       id: item.id,
  //       price: item.price,
  //       product_id: item.product_id,
  //       quantity: item.quantity,
  //       user_id: item.user_id,
  //       image: item.product[0].image,
  //       name: item.product[0].name,
  //       slug: item.product[0].slug,
  //     };
  //   });
  //   setcart(datas);
  // }, [GetCartData]);

  // useEffect(() => {
  //   const getdata = async () => {
  //     await axios
  //       .get(`/api/get/index/all/info/${GetCookies("cookies")}`)
  //       .then((res) => {
  //         const datas = res.data.user_cart.map((item) => {
  //           return {
  //             id: item.id,
  //             price: item.price,
  //             product_id: item.product_id,
  //             quantity: item.quantity,
  //             user_id: item.user_id,
  //             image: item.product[0].image,
  //             name: item.product[0].name,
  //             slug: item.product[0].slug,
  //           };
  //         });
  //         setcart(datas);
  //         // setGetCartData(res.data.user_cart);
  //         if (res.data.email) {
  //           setUser(true);
  //         } else {
  //           setUser(false);
  //         }
  //       });
  //   };
  //   getdata();
  // }, [IsCart, User]);

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
        TotalWishlist,
        setTotalWishlist,
        Wishlist,
        addToWishlist,
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
        User,
        Reviews,
        setReviews,
        IsReview,
        setIsReview,
        IsCart,
        setIsCart,
        TotalPrice,
        removeFromWishlist,
        UserData,
        checkPassword,
        IsPassword,
        changePassword,
        ChangePassErrors,
        Password, 
        setPassword,
        SmallLoading,
        setSmallLoading,
        AllReviews,
        setAllReviews,
        SliderImages, 
        setSliderImages,
        SubBanner,
        setSubBanner,
        SliderImageRoute,
        CategoryImage
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
