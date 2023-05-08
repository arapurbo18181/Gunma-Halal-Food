import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  const [CoinInput, setCoinInput] = useState(false);
  const [StripeInput, setStripeInput] = useState(false);
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
  } = useApi();
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (IsChecked) {
    // } else {
    //   setShippingAddress(BillingAddress);
    // }
    orderProduct();
    console.log(BillingAddress);
    // setBillingAddress({
    //   deliveryDate: "",
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   street: "",
    //   phone: 0,
    //   city: "",
    //   country: "",
    //   postCode: 0,
    //   totalAmount: 0
    // });
    // setShippingAddress({
    //   deliveryDate: "",
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   street: "",
    //   phone: 0,
    //   city: "",
    //   country: "",
    //   postCode: 0,
    //   totalAmount: 0
    // });
  };
  useEffect(() => {
    if (!User) {
      navigate("/");
    }
  }, []);

  const handleCheck = (value) => {
    if (value) {
      if (IsChecked) {
        console.log(value);
      }
    }
    setIsChecked(!IsChecked);
  };

  return (
    <>
      <BreadCrumbs name={"Checkout"} url={"checkout"} />

      <section className="w-[100%] h-[100%] flex flex-col lg:flex-row justify-center items-start px-4 py-10 space-x-0 md:space-x-8">
        <form className="flex-[2] w-full h-full container">
          <div className="flex justify-center my-5 text-2xl md:text-3xl xl:text-4xl font-bold">
            <h1>Checkout</h1>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start h-full w-full px-5 border rounded-md border-gray-300 shadow-lg space-x-4">
              <div className="flex-1">
                <div className="flex justify-center my-5 text-lg md:text-xl lg:text-2xl font-bold">
                  <h1>Billing Address</h1>
                </div>

                <div className="flex flex-col sm:flex-row justify-start items-center w-full">
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
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-0 sm:ml-4">
                    <label htmlFor="email">Last Name</label>
                    <input
                      onChange={(e) =>
                        setBillingAddress({
                          ...BillingAddress,
                          last_name: e.target.value,
                        })
                      }
                      value={BillingAddress.last_name}
                      className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start my-4 w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={(e) =>
                      setBillingAddress({
                        ...BillingAddress,
                        email: e.target.value,
                      })
                    }
                    value={BillingAddress.email}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    id="email"
                    required
                  />
                </div>
                <div className="flex flex-col items-start my-4">
                  <label htmlFor="address">State</label>
                  <input
                    onChange={(e) =>
                      setBillingAddress({
                        ...BillingAddress,
                        state: e.target.value,
                      })
                    }
                    value={BillingAddress.street}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="text"
                    name="state"
                    placeholder="Enter Your State"
                    id="state"
                    required
                  />
                </div>
                <div className="flex flex-col items-start my-4 w-full">
                  <label htmlFor="city">City</label>
                  <input
                    onChange={(e) =>
                      setBillingAddress({
                        ...BillingAddress,
                        city: e.target.value,
                      })
                    }
                    value={BillingAddress.city}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="text"
                    name="city"
                    placeholder="Enter Your city"
                    id="city"
                    required
                  />
                </div>

                <div className="flex flex-col items-start my-4 w-full">
                  <label htmlFor="phone">Phone</label>
                  <input
                    onChange={(e) =>
                      setBillingAddress({
                        ...BillingAddress,
                        phone: e.target.value,
                      })
                    }
                    value={BillingAddress.phone}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="number"
                    name="phone"
                    placeholder="Enter Your phone number"
                    id="phone"
                    required
                  />
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
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="number"
                    name="zipcode"
                    placeholder="Enter Your postcode"
                    id="zipcode"
                    required
                  />
                </div>
                <div className="flex flex-col items-start my-4 w-full">
                  <label htmlFor="email">Delivery Date</label>
                  <DatePicker
                    minDate={new Date()}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    placeholderText="Enter Delivery Date"
                    selected={BillingAddress.show_date}
                    onChange={(date) => {
                      // console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
                      console.log(date);
                      setBillingAddress({
                        ...BillingAddress,
                        show_date: date,
                        delivery_date: `${date.getDate()}-${
                          date.getMonth() + 1
                        }-${date.getFullYear()}`,
                      });
                    }}
                    dateFormat="dd-MM-yy"
                  />
                </div>
                <div className="flex flex-col items-start my-4 w-full">
                  <label htmlFor="delivery_time">Delivery Time</label>
                  <input
                    onChange={(e) =>
                      setBillingAddress({
                        ...BillingAddress,
                        zip_code: e.target.value,
                      })
                    }
                    value={BillingAddress.zip_code}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="number"
                    name="delivery_time"
                    placeholder="Enter Your Delivery Time"
                    id="delivery_time"
                    required
                  />
                </div>
              </div>
              <div className="flex-[0.001] h-[1000px] w-[1px] bg-gray-300"></div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-center my-5 text-lg md:text-xl lg:text-2xl font-bold">
                  <h1>Shipping Address</h1>
                </div>

                <div className="flex justify-start items-start space-x-2 border border-red-600 py-2 px-4">
                  <input
                    className="h-4 md:h-5 w-4 md:w-5"
                    type="checkbox"
                    value={"first"}
                    id=""
                    onChange={() => handleCheck("first")}
                  />{" "}
                  <div className="text-xs md:text-base">
                    {" "}
                    Same Billing & Shipping Address{" "}
                  </div>
                </div>
                {
                  <div
                    className={`${
                      IsChecked ? "translate-x-full" : "translate-x-0"
                    } transition-all duration-500 px-2`}
                  >
                    <div className="flex flex-col sm:flex-row justify-start items-center">
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
                          className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          id="name"
                          required
                        />
                      </div>
                      <div className="flex flex-col items-start my-4 w-full ml-0   sm:ml-4">
                        <label htmlFor="email">Last Name</label>
                        <input
                          onChange={(e) =>
                            setShippingAddress({
                              ...ShippingAddress,
                              last_name: e.target.value,
                            })
                          }
                          value={ShippingAddress.last_name}
                          className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          id="name"
                          required
                        />
                      </div>
                    </div>
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
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        id="email"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start my-4">
                      <label htmlFor="address">State</label>
                      <input
                        onChange={(e) =>
                          setShippingAddress({
                            ...ShippingAddress,
                            state: e.target.value,
                          })
                        }
                        value={ShippingAddress.street}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="text"
                        name="state"
                        placeholder="Enter Your State"
                        id="state"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start my-4 w-full">
                      <label htmlFor="city">City</label>
                      <input
                        onChange={(e) =>
                          setShippingAddress({
                            ...ShippingAddress,
                            city: e.target.value,
                          })
                        }
                        value={ShippingAddress.city}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="text"
                        name="city"
                        placeholder="Enter Your city"
                        id="city"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start my-4 w-full">
                      <label htmlFor="phone">Phone</label>
                      <input
                        onChange={(e) =>
                          setShippingAddress({
                            ...ShippingAddress,
                            phone: e.target.value,
                          })
                        }
                        value={ShippingAddress.phone}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="number"
                        name="phone"
                        placeholder="Enter Your phone number"
                        id="phone"
                        required
                      />
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
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="number"
                        name="postcode"
                        placeholder="Enter Your postcode"
                        id="postcode"
                        required
                      />
                    </div>
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
        <div className="flex-[0.8] space-y-2 mt-20">
          <div className="w-full border border-gray-300 bg-blue-500 flex justify-between items-center py-2 px-4 rounded-md text-white">
            <div>
              <h2 className="text-lg font-semibold">Your Points : <span className="text-2xl font-bold"> 100 </span> </h2>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div className="text-base font-semibold">Use Points : </div>{" "}
              <input
                className="bg-gray-100 focus:bg-white w-28 rounded-md px-2 py-1 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100 text-black"
                placeholder="Points"
                type="number"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="bg-gray-700 rounded-sm text-white w-full py-2 hover:bg-black transition-all duration-500 text-sm md:text-base px-4">
                Apply
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-red-500 rounded-lg h-[420px] w-full px-2 md:px-10 py-5">
            <div className="w-full text-center">
              <h2 className="text-base md:text-xl font-bold"> Cart Totals </h2>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <h3 className="text-sm md:text-base font-semibold">Subtotal</h3>
              <h5 className="text-sm md:text-base text-gray-400">
                $ {parseFloat(TotalPrice).toFixed(2)}
              </h5>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 ">
              <h3 className="text-sm md:text-base font-semibold">Shipping</h3>
              <h5 className="text-sm md:text-base text-red-500 font-semibold">
                Calculate shipping
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
                $0
              </h5>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 font-bold text-lg md:text-xl">
              <h3>Total</h3>
              <h5>$ {parseFloat(TotalPrice).toFixed(2)}</h5>
            </div>
            <div className="flex flex-col justify-center items-start mt-5">
              <div>
                <input
                  type="radio"
                  name="payment"
                  value={"stripe"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setStripeInput(true);
                    setCoinInput(false);
                  }}
                  id=""
                />{" "}
                <span className="text-sm md:text-base">Stripe</span>{" "}
                {StripeInput ? (
                  <span>
                    {" "}
                    <input
                      value={StripeAmount}
                      onChange={(e) => setStripeAmount(e.target.value)}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="number"
                      name=""
                      id=""
                    />{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id=""
                  value={"coin"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setCoinInput(true);
                    setStripeInput(false);
                  }}
                />{" "}
                <span className="text-sm md:text-base">Coin</span>{" "}
                {CoinInput ? (
                  <span>
                    {" "}
                    <input
                      value={CoinAmount}
                      onChange={(e) => setCoinAmount(e.target.value)}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="number"
                      name=""
                      id=""
                    />{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id=""
                  value={"cash_on_delivery"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setCoinInput(false);
                    setStripeInput(false);
                  }}
                />{" "}
                <span className="text-sm md:text-base">Cash On Delivery</span>
              </div>
            </div>
            <div className="w-full my-10">
              <button
                onClick={handleSubmit}
                className="bg-red-500 text-white w-full py-2 border border-red-500 hover:bg-transparent hover:text-black transition-all duration-500 text-sm md:text-base"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
