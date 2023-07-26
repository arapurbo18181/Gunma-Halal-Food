import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GetCookies from "../components/Hooks/GetCookies";
import SetCookies from "../components/Hooks/SetCookies";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [SpecialDiscount, setSpecialDiscount] = useState();
  const [FinalTotalWithCoupon, setFinalTotalWithCoupon] = useState();
  const [TotalVat, setTotalVat] = useState();
  const [FinalTotal, setFinalTotal] = useState();
  const [StripeCheckout, setStripeCheckout] = useState();
  const [Note, setNote] = useState();
  const [LatestProducts, setLatestProducts] = useState([]);
  const [LatestPro, setLatestPro] = useState([]);
  const [TopSellingProducts, setTopSellingProducts] = useState([]);
  const [SellingProducts, setSellingProducts] = useState([]);
  const [TopRatedProducts, setTopRatedProducts] = useState([]);
  const [RatedProducts, setRatedProducts] = useState([]);
  const [IsCategorySidebar, setIsCategorySidebar] = useState();
  const [CategoryApi, setCategoryApi] = useState();
  const [ProductsApi, setProductsApi] = useState([]);
  const [SubCatProductsApi, setSubCatProductsApi] = useState([]);
  const [IsApi, setIsApi] = useState(false);
  const [SubCatProIsApi, setSubCatProIsApi] = useState(false);
  const [SubCatname, setSubCatname] = useState();
  const [Catname, setCatname] = useState();
  const [BreadCrumbs, setBreadCrumbs] = useState([]);
  // const [SliderImageRoute] = useState("http://gunma.myesdev.xyz/images/banner_images")
  // const [SliderImageRoute] = useState(
  //   "http://localhost:8000/images/banner_images"
  // );
  // const [SliderImageRoute] = useState(
  //   "https://gunma-admin.getthemeplugin.com/images/banner_images"
  // );
  const [SliderImageRoute] = useState(
    "https://admin.softtech-it.org/images/banner_images"
  );
  // const [CategoryImage] = useState("http://gunma.myesdev.xyz/images/category_image/large")
  // const [CategoryImage] = useState(
  //   "http://localhost:8000/images/category_image/medium"
  // );
  // const [CategoryImage] = useState(
  //   "https://gunma-admin.getthemeplugin.com/images/category_image/medium"
  // );
  // const [CategoryImage1] = useState(
  //   "http://localhost:8000/images/category_image/large"
  // );
  const [CategoryImage1] = useState(
    "https://admin.softtech-it.org/images/category_image/large"
  );
  const [CategoryImage] = useState(
    "http://admin.softtech-it.org/images/category_image/medium"
  );
  // const [LargeImage] = useState(
  //   "http://gunma.myesdev.xyz/images/product_images/large"
  // );
  // const [LargeImage] = useState(
  //   "http://localhost:8000/images/product_images/large"
  // );
  // const [LargeImage] = useState(
  //   "https://gunma-admin.getthemeplugin.com/images/product_images/large"
  // );
  const [LargeImage] = useState(
    "https://admin.softtech-it.org/images/product_images/medium"
  );
  // const [SmallImage] = useState(
  //   "http://gunma.myesdev.xyz/images/product_images/small"
  // );
  // const [SmallImage] = useState(
  //   "http://localhost:8000/images/product_images/small"
  // );
  // const [SmallImage] = useState(
  //   "https://gunma-admin.getthemeplugin.com/images/product_images/small"
  // );
  const [SmallImage] = useState(
    "https://admin.softtech-it.org/images/product_images/small"
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
  const [TotalPrice, setTotalPrice] = useState(0);
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
  const [BillingAddress, setBillingAddress] = useState({
    delivery_date: "",
    first_name: "",
    last_name: "",
    email: "",
    state: "",
    phone: "",
    city: "",
    country: "",
    zip_code: "",
    delivery_time: "",
    street_address: "",
    house_name_room_number: "",
    delivery_time_id: "",
  });
  const [ShippingAddress, setShippingAddress] = useState({
    delivery_date: "",
    first_name: "",
    last_name: "",
    email: "",
    state: "",
    phone: "",
    city: "",
    country: "",
    zip_code: "",
    delivery_time: "",
    street_address: "",
    house_name_room_number: "",
    delivery_time_id: "",
  });
  const [IsChecked, setIsChecked] = useState(false);
  const [PaymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [CuttingSystem, setCuttingSystem] = useState("no");
  const [IsRegister, setIsRegister] = useState(false);
  const [SubCategoryProduct, setSubCategoryProduct] = useState([]);
  const [IsCartSidebar, setIsCartSidebar] = useState(false);
  const [ForgotPass, setForgotPass] = useState();
  const [UserProfile, setUserProfile] = useState({
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    zip_code: "",
  });
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
      amount: UserData ? UserData.user_orders.length : 0,
      head: "Products",
      body: "You Ordered",
    },
    {
      id: 4,
      amount: UserData ? UserData.coins : 0,
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
  const [CardsForUserDashboard, setCardsForUserDashboard] = useState([
    {
      id: 1,
      amount: TotalAmount,
      head: "Products",
      body: "in Your Cart",
      slug: "cart",
    },
    {
      id: 2,
      amount: TotalWishlist,
      head: "Products",
      body: "in Your Wishlist",
      slug: "wishlist",
    },
    {
      id: 3,
      amount: UserData ? UserData.user_orders.length : 0,
      head: "Times",
      body: "You Ordered",
      slug: "Orders",
    },
    {
      id: 4,
      amount: UserData ? UserData.coins : 0,
      head: "Points",
      body: "in Your account",
      slug: "points",
    },
  ]);
  const [CoinAmount, setCoinAmount] = useState();
  const [StripeAmount, setStripeAmount] = useState();
  const [States, setStates] = useState([]);
  const [ShippingStates, setShippingStates] = useState([]);
  const [UseCoins, setUseCoins] = useState();
  const [SetNewPass, setSetNewPass] = useState({
    new_password: "",
    confirm_password: "",
    email: "",
  });
  const [SetPassParams, setSetPassParams] = useState();
  const [AddToCartClick, setAddToCartClick] = useState(false);
  const [Orders, setOrders] = useState();
  const [DeliveryTime, setDeliveryTime] = useState();
  const [ShippingCharge, setShippingCharge] = useState();

  useEffect(() => {
    const temp = cart.filter(item=>{
      return item.shipping_cost === "1200";
    }).reduce((accumulator, currItem)=>{
      return accumulator + Number(currItem.quantity) * Number(currItem.shipping_cost)
    }, 0)
    const temp2 = cart.filter(item=>{
      return item.shipping_cost === "0";
    }).reduce((accumulator, currItem)=>{
      return accumulator + Number(currItem.quantity) * Number(currItem.price)
    }, 0)
    if (temp2 < 8500 ) {
      setShippingCharge(1200+temp)
    }else{
      setShippingCharge(temp)
    }
  }, [cart])

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
    const amount = cart.reduce((accumulator, currItem) => {
      return accumulator + Number(currItem.quantity);
    }, 0);
    setTotalAmount(amount);
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((accumulator, currItem) => {
      return accumulator + Number(currItem.total_price);
    }, 0);
    setTotalPrice(Math.round(amount));
  }, [cart]);

  useEffect(() => {
    const vat = cart.reduce((accumulator, currItem) => {
      const temp = Number(currItem.price) / 100;
      const temp2 = temp * Number(currItem.vat);
      return accumulator + temp2 * Number(currItem.quantity);
    }, 0);
    setTotalVat(Math.round(vat));
  }, [cart]);
 
  useEffect(() => {
    if (cart.length === 0) {
      setFinalTotal(0);
    } else {
        setFinalTotal(TotalPrice + ShippingCharge + TotalVat);
    }
  }, [TotalPrice, TotalVat, cart]);

  useEffect(() => {
    const amount = Wishlist.reduce((accumulator, currItem) => {
      return (accumulator += 1);
    }, 0);
    setTotalWishlist(amount);
  }, [Wishlist]);

  const logOut = async () => {
    await axios
      .get(`/api/user/logout/${JSON.parse(localStorage.getItem("token"))}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          localStorage.removeItem("token");
          navigate("/");
          setUser(false);
          Swal.fire("Success", res.data.success_message, "success");
        }
      });
  };

  const addToCart = async (product, cutting) => {
    const data = {
      product_id: product.id,
      price: Math.round(product.discountedPrice),
      quantity: product.quantity,
      cutting_system: cutting,
      cookie_id: GetCookies("cookies"),
      token: JSON.parse(localStorage.getItem("token")),
    };
    console.log(data);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/add-to-cart`, data, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          console.log(res);
          setAddToCartClick(false);
          setIsCart(!IsCart);
        })
        .catch((error) => {
          // console.log(error.response);
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
      token: JSON.parse(localStorage.getItem("token")),
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/add-to-wishlist`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
          setIsCart(!IsCart);
          if (res.data.status === 200) {
            Swal.fire("success", res.data.success_message, "success");
          }
          if (res.data.status === 401) {
            Swal.fire("warning", res.data.error_message, "warning");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const removeFromWishlist = (item) => {
    axios
      .get(`api/delete-wishlist/${item.wishlist_id}`)
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
      axios.get(`/api/delete-cart/${item.id}`).then((res) => {
        // console.log(res)
        // setGetCartData(res.data.carts);
        setIsCart(!IsCart);
      });
    });
  };

  const increaseQuantity = (item, quantity) => {
    const data = {
      quantity: Number(quantity),
      id: item.id,
      price: item.price,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/update-cart`, data)
        .then((res) => {
          // setGetCartData(res.data.carts);
          console.log(res);
          setIsCart(!IsCart);
        })
        .catch((err) => {
          Swal.fire("warning", err.response.data.message, "warning");
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
        price: item.price,
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
        .get(`/api/search/${Search}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
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
      first_name: Register.first_name,
      last_name: Register.last_name,
      email: Register.email,
      password: Register.password,
      confirm_password: Register.confirmPassword,
      cookie_id: GetCookies("cookies"),
    };

    console.log(Register);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/registration`, data).then((res) => {
        console.log(res);
        setIsRegister(false);
        if (res.data.status === 200) {
          console.log(res);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setUser(true);
          navigate("/");
          Swal.fire("Success", res.data.success_message, "success");
          setRegister({
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            confirmPassword: "",
          });
        }
        if (res.data.status === 204) {
          console.log(res);
          setValidationErrors(res.data.errors);
          setRegister({
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            confirmPassword: "",
          });
        }
        if (res.data.status === 205) {
          console.log(res);
          console.log(res.data.error_message);
          setConfirmPassError(res.data.error_message);
          setIsConfirmError(true);
          setRegister({
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            confirmPassword: "",
          });
        }
        if (res.data.status === 409) {
          console.log(res);
        }
      });
    });
  };

  // useEffect(() => {

  // }, [User])

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: Login.email,
      password: Login.password,
      cookie_id: GetCookies("cookies"),
    };
    console.log(Login);
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/login`, data).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setUser(true);
          setUserEmail(res.data.email);
          navigate("/");
          Swal.fire("Success", res.data.success_message, "success");
          setLogin({
            email: "",
            password: "",
          });
        }
        if (res.data.status === 401) {
          console.log(res.data.error_message);
          setLoginError(res.data.error_message);
          setIsLoginError(true);
          setLogin({
            email: "",
            password: "",
          });
        }
        if (res.data.status === 422) {
          setLoginValidationErrors(res.data.errors);
          setLogin({
            email: "",
            password: "",
          });
        }
      });
    });
  };

  const checkPassword = async (value) => {
    if (value) {
      await axios
        .get(
          `/api/user/check-password/${value}/${JSON.parse(
            localStorage.getItem("token")
          )}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setIsPassword(res.data.message);
        });
    }
  };

  const changePassword = async (value) => {
    console.log(value);
    const data = {
      old_password: value.oldPass,
      new_password: value.newPass,
      confirm_password: value.confPass,
      token: JSON.parse(localStorage.getItem("token")),
    };
    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/change-password/`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            Swal.fire("success", res.data.message, "success");
            setPassword({
              oldPass: "",
              newPass: "",
              confPass: "",
            });
          }
          if (res.data.status === 204) {
            setChangePassErrors(res.data.errors);
          }
        });
    });
  };

  const orderProduct = async () => {
    const data = {
      shipping_address: IsChecked ? BillingAddress : ShippingAddress,
      billing_address: BillingAddress,
      seperate_shipping: IsChecked ? false : true,
      total_amount: FinalTotalWithCoupon ? FinalTotalWithCoupon : FinalTotal,
      payment_type: PaymentMethod,
      note: Note,
      token: JSON.parse(localStorage.getItem("token")),
    };
    console.log(data);
    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/order`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
          setIsCart(!IsCart);
          // redirected("http://localhost:8000/api/order/management/system/view");
          // window.location.replace('http://localhost:8000/api/order/management/system/view');

          if (res.data.status === 422) {
            Swal.fire(
              "warning",
              "Billing & Shipping Address Required",
              "warning"
            );
          }
          if (res.data.status === 421) {
            Swal.fire("warning", res.data.message, "warning");
          }
          if (res.data.status === 423) {
            Swal.fire("warning", res.data.message, "warning");
          }
          if (res.data.status === 200) {
            navigate("/");
            Swal.fire("success", res.data.message, "success");
            setBillingAddress({
              delivery_date: "",
              state: "",
              phone: "",
              city: "",
              country: "",
              zip_code: "",
              delivery_time: "",
              street_address: "",
              house_name_room_number: "",
              delivery_time_id: "",
            });
            setShippingAddress({
              delivery_date: "",
              state: "",
              phone: "",
              city: "",
              country: "",
              zip_code: "",
              delivery_time: "",
              street_address: "",
              house_name_room_number: "",
              delivery_time_id: "",
            });
          }
          if (res.data.status === 100) {
            Swal.fire({
              title: "<strong> Are You Sure? </strong>",
              icon: "info",
              html: res.data.view,
              showCloseButton: true,
              showCancelButton: false,
              showConfirmButton: false,
              focusConfirm: false,
              // confirmButtonText:
              //   '<i class="fa fa-thumbs-up"></i> Great!',
              // confirmButtonAriaLabel: 'Thumbs up, great!',
              // cancelButtonText:
              //   '<i class="fa fa-thumbs-down"></i>',
              // cancelButtonAriaLabel: 'Thumbs down'
            });
          }
        });
    });
  };

  const applyCoin = async (coins) => {
    const data = {
      total_amount: TotalPrice,
      coin: coins,
      token: JSON.parse(localStorage.getItem("token")),
    };

    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/use-coin`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 401) {
            Swal.fire("warning", res.data.message, "warning");
          }
          if (res.data.status === 400) {
            Swal.fire("warning", res.data.error_message, "warning");
          }
          if (res.data.status === 200) {
            Swal.fire("success", res.data.message, "success");
          }
          setIsCart(!IsCart);
        });
    });
  };

  useEffect(() => {
    const getdata = async () => {
      // console.log(IsCart)
      await axios
        .get(
          `/api/index/${GetCookies("cookies")}/${
            localStorage.getItem("token")
              ? JSON.parse(localStorage.getItem("token"))
              : "test"
          }`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            // console.log(IsCart);
            setSubBanner(res.data.subbanner);
            setSliderImages(res.data.slider);
            setCategoryApi(res.data.categories);
            // setProductsApi(res.data.products);
            setUserData(res.data.user);
            setStates(res.data.states);
            setShippingStates(res.data.states);
            setOrders(res.data.orders);
            setCardsForUserDashboard([
              {
                id: 1,
                amount: TotalAmount,
                head: "Products",
                body: "in Your Cart",
                slug: "cart",
              },
              {
                id: 2,
                amount: TotalWishlist,
                head: "Products",
                body: "in Your Wishlist",
                slug: "wishlist",
              },
              {
                id: 3,
                amount: UserData ? UserData.user_orders.length : 0,
                head: "Times",
                body: "You Ordered",
                slug: "Orders",
              },
              // {
              //   id: 4,
              //   amount: UserData ? UserData.coins : 0,
              //   head: "Points",
              //   body: "in Your account",
              //   slug: "points"
              // },
            ]);
            setLatestProducts(res.data.latest_products);
            setTopSellingProducts(res.data.top_selling_products);
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
            setDeliveryTime(res.data.schedule);
            setTopRatedProducts(res.data.top_rated_products);
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
                // sub_cat_slug: item.product[0].sub_category.slug,
                // cat_slug: item.product[0].sub_category.main_category.slug,
                total_price: item.total_price,
                vat: item.product[0].vat,
                shipping_cost: item.product[0].attribute.shipping_cost,
              };
            });
            setcart(datas);
            setGetCartData(res.data.user_cart);
            if (res.data.email) {
              setUser(true);
            } else {
              setUser(false);
            }
            setAllReviews(!AllReviews);
            if (res.data.user.coupon_discount !== null && FinalTotal > 1200) {
              const temp = FinalTotal / 100;
              const temp2 =
                temp * Number(res.data.user.coupon_discount.discount);
              const temp3 = Math.round(FinalTotal - temp2);
              setFinalTotalWithCoupon(temp3);
            }
            if (res.data.user.special_discount !== null && FinalTotal > 1200) {
              const temp = FinalTotal / 100;
              const temp2 = temp * Number(res.data.user.special_discount.discount)
              setFinalTotalWithCoupon( Math.round(FinalTotal - temp2));
            }
          }   
        });
      setSmallLoading(false);
    };
    getdata();
  }, [IsReview, IsCart, User, TotalAmount, TotalWishlist, FinalTotal]);

  // useEffect(() => {
  //   setAllProducts(
  //     ProductsApi.map((item) => {
  //       return { ...item, quantity: 1, discountedPrice: 0 };
  //     })
  //   );
  // }, [ProductsApi]);

  useEffect(() => {
    setRatedProducts(
      TopRatedProducts.map((item) => {
        return { ...item, quantity: 1, discountedPrice: 0 };
      })
    );
  }, [TopRatedProducts]);

  useEffect(() => {
    setLatestPro(
      LatestProducts.map((item) => {
        return { ...item, quantity: 1, discountedPrice: 0 };
      })
    );
  }, [LatestProducts]);

  useEffect(() => {
    setSellingProducts(
      TopSellingProducts.map((item) => {
        return { ...item, quantity: 1, discountedPrice: 0 };
      })
    );
  }, [TopSellingProducts]);

  useEffect(() => {
    setSubProducts(
      SubCatProductsApi.map((item) => {
        return { ...item, quantity: 1, discountedPrice: 0 };
      })
    );
  }, [SubCatProductsApi]);

  const getProducts = async (category, sub_category) => {
    await axios.get(`/api/${category}/${sub_category}`).then((res) => {
      setSubCatProductsApi(res.data.products);
    });
  };

  const filterStates = async (value) => {
    await axios.get(`/api/state/${value}`).then((res) => {
      console.log(res);
      setStates(res.data);
    });
  };
  const filterShippingStates = async (value) => {
    await axios
      .get(`/api/state/search/management/state/${value}`)
      .then((res) => {
        console.log(res);
        setShippingStates(res.data);
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

  const forgotPassword = async (e) => {
    e.preventDefault();

    const data = {
      email: ForgotPass,
    };

    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/forget-password`, data).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          Swal.fire("success", res.data.message, "success");
        }
        if (res.data.status === 401) {
          Swal.fire("warning", res.data.message, "warning");
        }
      });
    });
  };

  const setPasswords = async (e) => {
    e.preventDefault();
    const data = {
      new_password: SetNewPass.new_password,
      confirm_password: SetNewPass.confirm_password,
      email: SetPassParams,
    };

    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/user/set-password`, data).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/");
          Swal.fire("success", res.data.message, "success");
          setUser(true);
        }
      });
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    const data = {
      first_name: UserProfile.first_name,
      last_name: UserProfile.last_name,
      email: UserProfile.email,
      phone: UserProfile.phone,
      state: UserProfile.state,
      city: UserProfile.city,
      zip_code: UserProfile.zip_code,
      token: JSON.parse(localStorage.getItem("token")),
    };
    console.log(data);

    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/user/change-profile`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
          // setIsCart(!IsCart);
        });
    });
  };

  const toggleCat = () => {
    if (ToggleCategory === true) {
      setIsCategorySidebar(false);
    } else {
      setIsCategorySidebar(false);
    }
  };

  const applyCoupon = async (coupon_code) => {
    const data = {
      code: coupon_code,
      token: JSON.parse(localStorage.getItem("token")),
    };

    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/use-coupon`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
          setIsCart(!IsCart);
          if (res.data.status === 200) {
            Swal.fire("success", res.data.message, "success");
          }
          if (res.data.status === 401) {
            Swal.fire("warning", res.data.message, "warning");
          }
        });
    });
  };

  return (
    <ApiContext.Provider
      value={{
        applyCoupon,
        toggleCat,
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
        CategoryImage,
        BillingAddress,
        setBillingAddress,
        ShippingAddress,
        setShippingAddress,
        IsChecked,
        setIsChecked,
        PaymentMethod,
        setPaymentMethod,
        orderProduct,
        CuttingSystem,
        setCuttingSystem,
        IsRegister,
        setIsRegister,
        setStripeAmount,
        setCoinAmount,
        CoinAmount,
        StripeAmount,
        SubCategoryProduct,
        setSubCategoryProduct,
        States,
        setStates,
        setUseCoins,
        applyCoin,
        UserData,
        filterStates,
        ShippingStates,
        filterShippingStates,
        IsCartSidebar,
        setIsCartSidebar,
        ForgotPass,
        setForgotPass,
        forgotPassword,
        SetNewPass,
        setSetNewPass,
        setPasswords,
        SetPassParams,
        setSetPassParams,
        AddToCartClick,
        setAddToCartClick,
        UserProfile,
        setUserProfile,
        updateProfile,
        CategoryImage1,
        Orders,
        setOrders,
        DeliveryTime,
        IsCategorySidebar,
        setIsCategorySidebar,
        TopRatedProducts,
        setTopRatedProducts,
        RatedProducts,
        setRatedProducts,
        SellingProducts,
        setSellingProducts,
        LatestPro,
        setLatestPro,
        Note,
        setNote,
        StripeCheckout,
        setStripeCheckout,
        FinalTotal,
        setFinalTotal,
        TotalVat,
        setTotalVat,
        FinalTotalWithCoupon,
        setFinalTotalWithCoupon,
        ShippingCharge, 
        setShippingCharge
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
