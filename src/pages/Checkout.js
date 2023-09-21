import axios from "axios";
import subDays from "date-fns/subDays";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BreadCrumbs from "../components/BreadCrumbs";
import CartButton from "../components/CartButton";
import CheckoutForm from "../components/CheckoutForm";
import { useApi } from "../context/ApiContext";
import CardImage from "../images/cards.png";

const Checkout = () => {
  const [CoinInput, setCoinInput] = useState(false);
  const [Height, setHeight] = useState(false);
  const [StripeInput, setStripeInput] = useState(false);
  const [ShowState, setShowState] = useState(false);
  const [ShowTime, setShowTime] = useState(false);
  const [ShippingShowTime, setShippingShowTime] = useState(false);
  const [ShippingShowState, setShippingShowState] = useState(false);
  const [SelectCoin, setSelectCoin] = useState();
  const [DeliveryDate, setDeliveryDate] = useState();
  const [DeliverySchedule, setDeliverySchedule] = useState();
  const [ShippingDeliverySchedule, setShippingDeliverySchedule] = useState();
  const [Coupon, setCoupon] = useState();
  const ref = useRef();
  const myref = useRef();
  const timeref = useRef();
  const timeref2 = useRef();
  const heightRef = useRef();
  const navigate = useNavigate();
  const {
    TotalPrice,
    BillingAddress,
    setBillingAddress,
    ShippingAddress,
    setShippingAddress,
    orderProduct,
    IsChecked,
    setIsChecked,
    PaymentMethod,
    setPaymentMethod,
    setStripeAmount,
    setCoinAmount,
    CoinAmount,
    StripeAmount,
    User,
    States,
    setStates,
    setUseCoins,
    applyCoin,
    UserData,
    filterStates,
    ShippingStates,
    filterShippingStates,
    cart,
    DeliveryTime,
    Note,
    setNote,
    FinalTotal,
    setFinalTotal,
    TotalVat,
    applyCoupon,
    FinalTotalWithCoupon,
    ShippingCharge,
  } = useApi();
  const location = useLocation();
  const [PrevTotalAmount, setPrevTotalAmount] = useState(TotalPrice);
  const [PrevUsedCoin, setPrevUsedCoin] = useState(0);

  const handleSubmit = (e) => {
    setStripeInput(false);
    e.preventDefault();
    if (cart.length !== 0) {
      orderProduct();
      console.log(BillingAddress);
    } else {
      Swal.fire("warning", "Please add some product first", "warning");
    }
  };

  if (!UserData && location.pathname === "/checkout") {
    window.location.replace("https://gunma.softtech-it.org/");
  }

  useEffect(() => {
    if (UserData.city && UserData.phone && UserData.zip) {
      console.log(UserData);
      setBillingAddress({
        ...BillingAddress,
        first_name: UserData.name,
        last_name: UserData.last_name,
        email: UserData.email,
        phone: UserData.phone,
        zip_code: UserData.zip,
        city: UserData.city,
        show_date: "",
        delivery_time: "",
        street_address: UserData.road_house,
        house_name_room_number: UserData.house_room,
      });
    } else {
      setBillingAddress({
        ...BillingAddress,
        first_name: UserData.name,
        last_name: UserData.last_name,
        email: UserData.email,
      });
    }
  }, [BillingAddress.state]);

  useEffect(() => {
    setShippingAddress({
      ...ShippingAddress,
      show_date: "",
      delivery_time: "",
    });
  }, [ShippingAddress.state]);

  const handleCheck = (value) => {
    if (value) {
      if (IsChecked) {
        console.log(value);
      }
    }
    setIsChecked(!IsChecked);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowState(false);
      }
      if (myref.current && !myref.current.contains(event.target)) {
        setShippingShowState(false);
      }
      if (heightRef.current && !heightRef.current.contains(event.target)) {
        setHeight(false);
      }
      if (timeref.current && !timeref.current.contains(event.target)) {
        setShowTime(false);
      }
      if (timeref2.current && !timeref2.current.contains(event.target)) {
        setShippingShowTime(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, myref, heightRef, timeref, timeref2]);

  useEffect(() => {
    const data = States.find((item) => {
      if (item.name === BillingAddress.state) {
        return item;
      }
    });
    if (data) {
      setDeliveryDate(data.delivery_time);
    }
  }, [BillingAddress.state]);

  useEffect(() => {
    const data = States.find((item) => {
      if (item.name === ShippingAddress.state) {
        return item;
      }
    });
    if (data) {
      console.log(data.delivery_time);
      setDeliveryDate(data.delivery_time);
    }
  }, [ShippingAddress.state]);

  const testRoute = async (e) => {
    e.preventDefault();
    const data = {
      token: JSON.parse(localStorage.getItem("token")),
    };

    await axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/order/management/system/payment`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    });
  };

  useEffect(() => {
    if (DeliverySchedule) {
      // const temp = DeliverySchedule.split(",");
    }
    if (ShippingDeliverySchedule) {
    }
  }, [BillingAddress.state, ShippingAddress.state]);

  return (
    <>
      <BreadCrumbs name={"Checkout"} url={"checkout"} />

      <section className="w-[100%] h-[100%] flex flex-col xl:flex-row justify-center items-center xl:items-start px-4 pb-10 pt-5 space-y-8 xl:space-y-0 space-x-0 xl:space-x-8 mb-20 xl:mb-0 overflow-hidden">
        <form className="flex-[2] w-full h-full container">
          <div className="flex justify-center mb-5 text-2xl md:text-3xl xl:text-4xl font-bold">
            <h1>Checkout</h1>
          </div>
          <div className="flex flex-col justify-center items-center h-fit">
            <CartButton />
            <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row justify-center items-center md:items-start w-full px-5 space-x-0 md:space-x-4 h-fit pb-10 md:pb-0 xl:mb-40">
              <div className="flex-1 h-full border rounded-md border-gray-300 shadow-lg px-3 w-full">
                <div className="flex justify-center my-5 text-lg md:text-xl lg:text-2xl font-bold">
                  <h1>Billing Address</h1>
                </div>

                <div className="flex flex-row justify-start items-center w-full">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="email">First Name</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          first_name: e.target.value,
                        })
                      }
                      value={BillingAddress.first_name}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-2 sm:ml-4">
                    <label htmlFor="email">Last Name</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          last_name: e.target.value,
                        })
                      }
                      value={BillingAddress.last_name}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          last_name: e.target.value,
                        })
                      }
                      value={BillingAddress.email}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      required
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-2 sm:ml-4">
                    <label htmlFor="phone">Phone</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          phone: e.target.value,
                        })
                      }
                      value={BillingAddress.phone}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="number"
                      name="phone"
                      placeholder="Enter Your phone number"
                      id="phone"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start my-4 w-full">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    onChange={(e) =>
                      setBillingAddress({
                        ...BillingAddress,
                        zip_code: e.target.value,
                      })
                    }
                    value={BillingAddress.zip_code}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outlin2-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                    type="number"
                    name="zipcode"
                    placeholder="Enter Your postcode"
                    id="zipcode"
                    required
                  />
                </div>

                <div className="flex flex-row justify-start items-center w-full">
                  <div className="flex flex-1 flex-col items-start my-4 relative">
                    <label htmlFor="state">State</label>
                    <div
                      onClick={(e) => setShowState(true)}
                      className="w-full flex justify-between items-center px-4 bg-gray-100 py-2 cursor-pointer text-sm sm:text-base"
                    >
                      <h2>
                        {BillingAddress.state
                          ? BillingAddress.state
                          : "Select State"}
                      </h2>{" "}
                      <MdOutlineKeyboardArrowDown />
                    </div>
                    {ShowState ? (
                      <div ref={ref} className="absolute w-full top-16 z-30">
                        <input
                          onChange={(e) => {
                            filterStates(e.target.value);
                          }}
                          autoComplete="off"
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-0 shadow-inner border-2 border-gray-100"
                          type="text"
                          name="state"
                          placeholder="Enter Your State"
                          id="state"
                          required
                        />
                        <div className="w-full h-[200px] bg-white overflow-y-auto border shadow-md">
                          {States.map((item) => {
                            return (
                              <div
                                onClick={(e) => {
                                  setBillingAddress({
                                    ...BillingAddress,
                                    state: item.name,
                                  });
                                  setShowState(false);
                                  const temp =
                                    item.delivery_schedule_id.split(",");
                                  setDeliverySchedule(temp);
                                }}
                                className="border-b px-2 py-2 cursor-pointer hover:bg-gray-200"
                              >
                                <h2>{item.name}</h2>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-1 flex-col items-start my-4 w-full ml-2 sm:ml-4">
                    <label htmlFor="city">City</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          city: e.target.value,
                        })
                      }
                      value={BillingAddress.city}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="text"
                      name="city"
                      placeholder="Enter Your city"
                      id="city"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="street_address">Street Address</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          street_address: e.target.value,
                        })
                      }
                      value={BillingAddress.street_address}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="text"
                      name="street_address"
                      placeholder="Road Number, House Number"
                      id="street_address"
                    />
                  </div>

                  <div className="flex flex-col items-start my-4 w-full  ml-2 sm:ml-4">
                    <label htmlFor="house_name_room_number">
                      House Name & Room Number
                    </label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          house_name_room_number: e.target.value,
                        })
                      }
                      value={BillingAddress.house_name_room_number}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                      type="text"
                      name="house_name_room_number"
                      placeholder="House Name, Room Number"
                      id="house_name_room_number"
                    />
                  </div>
                </div>
                {IsChecked && BillingAddress.state ? (
                  <>
                    <div className="flex flex-col justify-center items-center px-1">
                      <div
                        onClick={() => setHeight(true)}
                        ref={heightRef}
                        className={`${
                          IsChecked
                            ? "translate-x-0 block"
                            : "-translate-x-full hidden"
                        } transition-all duration-300 flex flex-col items-start my-4 w-64 md:w-full h-full z-20`}
                      >
                        <label htmlFor="email">Delivery Date</label>
                        <DatePicker
                          minDate={subDays(
                            new Date(),
                            `${
                              DeliveryDate == 24
                                ? -1
                                : DeliveryDate == 48
                                ? -2
                                : -3
                            }`
                          )}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100 z-20"
                          placeholderText="Enter Delivery Date"
                          selected={BillingAddress.show_date}
                          onChange={(date) => {
                            // console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
                            console.log(date);
                            setBillingAddress({
                              ...BillingAddress,
                              show_date: date,
                              delivery_date: `${
                                date.getDate() < 10
                                  ? "0" + date.getDate()
                                  : date.getDate()
                              }-${
                                date.getMonth() < 9
                                  ? "0" + (date.getMonth() + 1)
                                  : date.getMonth() + 1
                              }-${date.getFullYear()}`,
                            });
                          }}
                          dateFormat="dd-MM-yy"
                        />
                      </div>

                      <div className="flex flex-col items-start my-4 relative w-full">
                        <label htmlFor="state">Delivery Time</label>
                        <div
                          onClick={(e) => setShowTime(true)}
                          className="w-full flex justify-between items-center px-4 bg-gray-100 py-2 cursor-pointer"
                        >
                          <h2>
                            {BillingAddress.delivery_time
                              ? BillingAddress.delivery_time
                              : "Select Time"}
                          </h2>{" "}
                          <MdOutlineKeyboardArrowDown />
                        </div>
                        {ShowTime ? (
                          <div ref={timeref} className="absolute w-full top-16">
                            <div className="w-full h-fit bg-white z-10 overflow-y-auto border shadow-md">
                              {DeliveryTime.map((item, index) => {
                                return (
                                  DeliverySchedule[index] == item.id && (
                                    <div
                                      onClick={(e) => {
                                        setBillingAddress({
                                          ...BillingAddress,
                                          delivery_time: item.schedule,
                                          delivery_time_id: item.id,
                                        });
                                        setShowTime(false);
                                      }}
                                      className="border-b px-2 py-2 cursor-pointer hover:bg-gray-200"
                                    >
                                      <h2>{item.schedule}</h2>
                                    </div>
                                  )
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              {/* <div
                className={`hidden xl:block flex-[0.001] h-fit w-[1px] bg-gray-300`}
              ></div> */}
              <div
                className={`flex-1 h-full border rounded-md border-gray-300 shadow-lg px-3 pb-10 w-full`}
              >
                <div className="flex justify-center my-5 text-lg md:text-xl lg:text-2xl font-bold">
                  <h1>Shipping Address</h1>
                </div>

                <div className="flex justify-start items-start space-x-2 border border-red-600 py-2 px-4 w-full">
                  <input
                    className="h-4 md:h-5 w-4 md:w-5"
                    type="checkbox"
                    value={"first"}
                    id=""
                    checked={IsChecked}
                    onChange={(e) => handleCheck(e.target.value)}
                  />{" "}
                  <div className="text-xs md:text-base">
                    {" "}
                    Same Billing & Shipping Address{" "}
                  </div>
                </div>

                {
                  <div
                    className={`${
                      IsChecked
                        ? "translate-x-full hidden"
                        : "translate-x-0 block"
                    } transition-all duration-500`}
                  >
                    <div className="flex flex-row justify-start items-center">
                      <div className="flex flex-col items-start my-4 w-full">
                        <label htmlFor="email">First Name</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              first_name: e.target.value,
                            })
                          }
                          value={ShippingAddress.first_name}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          id="name"
                          required
                        />
                      </div>
                      <div className="flex flex-col items-start my-4 w-full ml-2 sm:ml-4">
                        <label htmlFor="email">Last Name</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              last_name: e.target.value,
                            })
                          }
                          value={ShippingAddress.last_name}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          id="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center">
                      <div className="flex flex-col items-start my-4 w-full">
                        <label htmlFor="email">Email</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              email: e.target.value,
                            })
                          }
                          value={ShippingAddress.email}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="flex flex-col items-start my-4 w-full ml-2 sm:ml-4">
                        <label htmlFor="phone">Phone</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              phone: e.target.value,
                            })
                          }
                          value={ShippingAddress.phone}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="number"
                          name="phone"
                          placeholder="Enter Your phone number"
                          id="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start my-4 w-full">
                      <label htmlFor="postcode">Zip Code</label>
                      <input
                        onChange={(e) =>
                          setShippingAddress({
                            ...ShippingAddress,
                            zip_code: e.target.value,
                          })
                        }
                        value={ShippingAddress.zip_code}
                        className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                        type="number"
                        name="postcode"
                        placeholder="Enter Your postcode"
                        id="postcode"
                        required
                      />
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-1 flex-col items-start my-4 relative">
                        <label htmlFor="state">State</label>
                        <div
                          onClick={(e) => setShippingShowState(true)}
                          className="w-full flex justify-between items-center px-4 bg-gray-100 py-2 cursor-pointer text-sm sm:text-base"
                        >
                          <h2>
                            {ShippingAddress.state
                              ? ShippingAddress.state
                              : "Select State"}
                          </h2>{" "}
                          <MdOutlineKeyboardArrowDown />
                        </div>
                        {ShippingShowState ? (
                          <div
                            ref={myref}
                            className="absolute w-full top-16 z-30"
                          >
                            <input
                              onChange={(e) => {
                                filterShippingStates(e.target.value);
                              }}
                              autoComplete="off"
                              className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 mt-0.5 mb-0 shadow-inner border-2 border-gray-100"
                              type="text"
                              name="state"
                              placeholder="Enter Your State"
                              id="state"
                              required
                            />
                            <div className="w-full h-[200px] bg-white overflow-y-auto border shadow-md">
                              {ShippingStates.map((item) => {
                                return (
                                  <div
                                    onClick={(e) => {
                                      setShippingAddress({
                                        ...ShippingAddress,
                                        state: item.name,
                                      });
                                      setShippingShowState(false);
                                      const temp =
                                        item.delivery_schedule_id.split(",");
                                      setShippingDeliverySchedule(temp);
                                    }}
                                    className=" border-b px-2 py-2 cursor-pointer hover:bg-gray-200"
                                  >
                                    <h2>{item.name}</h2>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex flex-1 flex-col items-start my-4 w-full ml-2 sm:ml-4">
                        <label htmlFor="city">City</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              city: e.target.value,
                            })
                          }
                          value={ShippingAddress.city}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="text"
                          name="city"
                          placeholder="Enter Your city"
                          id="city"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-col items-start my-4 w-full">
                        <label htmlFor="street_address">Street Address</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              street_address: e.target.value,
                            })
                          }
                          value={ShippingAddress.street_address}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="text"
                          name="street_address"
                          placeholder="Road Number, House Number"
                          id="street_address"
                        />
                      </div>

                      <div className="flex flex-col items-start my-4 w-full ml-2 sm:ml-4">
                        <label htmlFor="house_name_room_number">
                          House Name & Room Number
                        </label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              house_name_room_number: e.target.value,
                            })
                          }
                          value={ShippingAddress.house_name_room_number}
                          className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offs2t-0 focus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                          type="text"
                          name="house_name_room_number"
                          placeholder="House Name, Room Number"
                          id="house_name_room_number"
                        />
                      </div>
                    </div>

                    {ShippingAddress.state ? (
                      <div className="flex flex-col justify-center items-center px-1">
                        <div className="flex flex-col items-start my-4 w-full">
                          <label htmlFor="email">Delivery Date</label>
                          <DatePicker
                            minDate={subDays(
                              new Date(),
                              `${
                                DeliveryDate == 24
                                  ? -1
                                  : DeliveryDate == 48
                                  ? -2
                                  : -3
                              }`
                            )}
                            className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 2ocus:outline-red-500 my-1 shadow-inner border-2 border-red-100"
                            placeholderText="Enter Delivery Date"
                            selected={ShippingAddress.show_date}
                            onChange={(date) => {
                              // console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
                              console.log(date);
                              setShippingAddress({
                                ...ShippingAddress,
                                show_date: date,
                                delivery_date: `${date.getDate()}-${
                                  date.getMonth() + 1
                                }-${date.getFullYear()}`,
                              });
                            }}
                            dateFormat="dd-MM-yy"
                          />
                        </div>

                        <div className="flex flex-col items-start my-4 relative w-full">
                          <label htmlFor="state">Delivery Time</label>
                          <div
                            onClick={() => setShippingShowTime(true)}
                            className="w-full flex justify-between items-center px-4 bg-gray-100 py-2 cursor-pointer"
                          >
                            <h2>
                              {ShippingAddress.delivery_time
                                ? ShippingAddress.delivery_time
                                : "Select Time"}
                            </h2>
                            <MdOutlineKeyboardArrowDown />
                          </div>
                          {ShippingShowTime ? (
                            <div
                              ref={timeref2}
                              className="absolute w-full top-16"
                            >
                              <div className="w-full h-fit bg-white z-10 overflow-y-auto border shadow-md">
                                {DeliveryTime.map((item, index) => {
                                  return (
                                    ShippingDeliverySchedule[index] ==
                                      item.id && (
                                      <div
                                        onClick={(e) => {
                                          setShippingAddress({
                                            ...ShippingAddress,
                                            delivery_time: item.schedule,
                                            delivery_time_id: item.id,
                                          });
                                          setShippingShowTime(false);
                                        }}
                                        className="border-b px-2 py-2 cursor-pointer hover:bg-gray-200"
                                      >
                                        <h2>{item.schedule}</h2>
                                      </div>
                                    )
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                }
              </div>
            </div>
            {/* 
            <div className="w-fit flex text-sm sm:text-xl justify-center my-4">
              <button
                // onClick={handleSubmit}
                className="w-full bg-red-500 px-2 sm:px-4 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300"
              >
                submit
              </button>
            </div> */}
          </div>
        </form>
        <div className="flex-1 space-y-6 w-full container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPrevTotalAmount(TotalPrice);
              setPrevUsedCoin(SelectCoin);
              applyCoin(SelectCoin);
              setSelectCoin("");
            }}
            className="w-full border border-gray-300 bg-blue-500 flex justify-between items-center space-x-2 py-1 px-4 rounded-md text-white"
          >
            <div className="flex justify-center items-center space-x-3">
              <div className="text-sm md:text-base">Use Points : </div>{" "}
              <input
                onChange={(e) => setSelectCoin(e.target.value)}
                value={SelectCoin}
                className="bg-gray-100 focus:bg-white w-20 rounded-md px-2 py-1 text-sm md:text-base outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100 text-black"
                placeholder="Points"
                type="number"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="bg-gray-700 rounded-sm text-white w-full py-1 md:py-2 hover:bg-black transition-all duration-500 text-sm md:text-base px-2 md:px-4">
                Apply
              </button>
            </div>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              applyCoupon(Coupon);
            }}
            className="w-full border border-gray-300 bg-blue-500 flex justify-between items-center space-x-2 py-1 px-4 rounded-md text-white"
          >
            <div className="flex justify-center items-center space-x-3">
              <div className="text-sm md:text-base">Use Coupon : </div>{" "}
              <input
                onChange={(e) => setCoupon(e.target.value)}
                value={Coupon}
                className="bg-gray-100 focus:bg-white w-20 rounded-md px-2 py-1 text-sm md:text-base outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100 text-black"
                placeholder="Coupon"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="bg-gray-700 rounded-sm text-white w-full py-1 md:py-2 hover:bg-black transition-all duration-500 text-sm md:text-base px-2 md:px-4">
                Apply
              </button>
            </div>
          </form>
          <div className="flex flex-col border border-red-500 rounded-lg h-full w-full px-2 md:px-10 py-5">
            <div className="w-full text-center">
              <h2 className="text-base md:text-xl font-bold"> Cart Totals </h2>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <h3 className="text-sm md:text-base font-semibold">Coins Used</h3>
              <h5 className="text-sm md:text-base text-gray-400">
                ¥ {PrevTotalAmount} - {PrevUsedCoin} Coins
              </h5>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <h3 className="text-sm md:text-base font-semibold">Subtotal</h3>
              <h5 className="text-sm md:text-base text-gray-400">
                ¥ {TotalPrice}
              </h5>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 ">
              <h3 className="text-sm md:text-base font-semibold">
                Shipping Charge
              </h3>
              <h5 className="text-sm md:text-base text-red-500 font-semibold">
                ¥ {cart.length === 0 ? 0 : ShippingCharge}
              </h5>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 ">
              <h3 className="text-sm md:text-base font-semibold">
                Tax{" "}
                <span className="font-normal text-xs md:text-sm">
                  (estimated for japan)
                </span>{" "}
              </h3>
              <h5 className="text-sm md:text-base text-red-500 font-semibold">
                ¥ {TotalVat}
              </h5>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 font-bold text-lg md:text-xl">
              <h3>Total</h3>
              <h5>
                ¥{" "}
                {cart.length === 0
                  ? 0
                  : FinalTotalWithCoupon
                  ? FinalTotalWithCoupon
                  : FinalTotal}
              </h5>
            </div>
            <div className="flex flex-col my-3">
              <label>Note:</label>
              <textarea
                value={Note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-gray-100 focus:bg-white rounded-md px-2 py-1 text-sm md:text-base outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100 text-black"
                name="note"
                id="note"
                cols="30"
                rows="6"
                placeholder="write a note"
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-start mt-5 space-y-3">
              <div className="flex flex-1 justify-start items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  id="cash_on_delivery"
                  value={"cash_on_delivery"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setCoinInput(false);
                    setStripeInput(false);
                  }}
                  checked={PaymentMethod === "cash_on_delivery"}
                />{" "}
                <label
                  htmlFor="cash_on_delivery"
                  className="text-sm md:text-base font-semibold"
                >
                  Cash On Delivery
                </label>
              </div>
              <div className="w-full">
                <div className="flex justify-center items-center">
                  <div className="flex flex-1 justify-start items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value={"stripe"}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setStripeInput(true);
                        setCoinInput(false);
                      }}
                      id="stripe"
                      checked={PaymentMethod === "stripe"}
                    />{" "}
                    <label
                      htmlFor="stripe"
                      className="text-sm md:text-base font-semibold"
                    >
                      Stripe
                    </label>
                  </div>
                  <div className="flex-1">
                    <img src={CardImage} alt="card" />
                  </div>
                </div>
                {PaymentMethod === "stripe" ? (
                  <div className="w-full">
                    <CheckoutForm />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {PaymentMethod === "cash_on_delivery" ? (
              <div className="w-full mt-10">
                <button
                  onClick={handleSubmit}
                  className="bg-red-500 text-white w-full py-2 border border-red-500 hover:bg-transparent hover:text-black transition-all duration-500 text-sm md:text-base"
                >
                  Place Order
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
