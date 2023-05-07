import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  const [CoinInput, setCoinInput] = useState(false);
  const [StripeInput, setStripeInput] = useState(false);
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
    StripeAmount
  } = useApi();
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!IsChecked) {
      setShippingAddress(BillingAddress);
    }
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
  }

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

      <section className="w-[100%] h-[100%] flex flex-col md:flex-row justify-center items-start px-4">
        <form className="flex-[2] w-full h-full">
          <div className="flex justify-center my-5 text-4xl font-bold">
            <h1>Checkout</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="px-10">
                <div className="flex justify-center my-5 text-2xl font-bold">
                  <h1>Billing Address</h1>
                </div>
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="email">Delivery Date</label>
                    <DatePicker minDate={new Date()} className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100" placeholderText="Enter Delivery Date" selected={BillingAddress.show_date} onChange={(date)=>{
                      // console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
                      console.log(date)
                      setBillingAddress({...BillingAddress , show_date: date, delivery_date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}` })}}
                      dateFormat="dd-MM-yy"
                    />
                  </div>
                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="email">First Name</label>
                    <input
                      onChange={e=>setBillingAddress({...BillingAddress ,first_name:e.target.value})}
                      value={BillingAddress.first_name}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="email">Last Name</label>
                    <input
                      onChange={e=>setBillingAddress({...BillingAddress ,last_name:e.target.value})}
                      value={BillingAddress.last_name}
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
                      onChange={e=>setBillingAddress({...BillingAddress ,email:e.target.value})}
                      value={BillingAddress.email}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      required
                    />
                  </div>
                <div className="flex flex-col items-start my-4">
                  <label htmlFor="address">Street</label>
                  <textarea
                      onChange={e=>setBillingAddress({...BillingAddress ,street:e.target.value})}
                      value={BillingAddress.street}
                    className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                    type="text"
                    name="street"
                    placeholder="Enter Your Address"
                    id="street"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="phone">Phone</label>
                    <input
                      onChange={e=>setBillingAddress({...BillingAddress ,phone:e.target.value})}
                      value={BillingAddress.phone}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="number"
                      name="phone"
                      placeholder="Enter Your phone number"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="city">City</label>
                    <input
                      onChange={e=>setBillingAddress({...BillingAddress ,city:e.target.value})}
                      value={BillingAddress.city}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="city"
                      placeholder="Enter Your city"
                      id="city"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="district">Country</label>
                    <input
                      onChange={e=>setBillingAddress({...BillingAddress ,country:e.target.value})}
                      value={BillingAddress.country}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="country"
                      placeholder="Enter Your district"
                      id="country"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="postcode">Post Code</label>
                    <input
                      onChange={e=>setBillingAddress({...BillingAddress ,zip_code:e.target.value})}
                      value={BillingAddress.zip_code}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="number"
                      name="postcode"
                      placeholder="Enter Your postcode"
                      id="postcode"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"first"}
                  id=""
                  onChange={() => handleCheck("first")}
                />{" "}
                <span> Separate Shipping Address </span>
              </div>
              {IsChecked ? (
                <div className="px-10">
                  <div className="flex justify-center my-5 text-2xl font-bold">
                    <h1>Shipping Address</h1>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col items-start my-4 w-full">
                      <label htmlFor="email">First Name</label>
                      <input
                      onChange={e=>setShippingAddress({...ShippingAddress ,first_name:e.target.value})}
                      value={ShippingAddress.first_name}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        id="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start my-4 w-full ml-4">
                      <label htmlFor="email">Last Name</label>
                      <input
                      onChange={e=>setShippingAddress({...ShippingAddress ,last_name:e.target.value})}
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
                      onChange={e=>setShippingAddress({...ShippingAddress ,email:e.target.value})}
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
                    <label htmlFor="address">Street</label>
                    <textarea
                      onChange={e=>setShippingAddress({...ShippingAddress ,street:e.target.value})}
                      value={ShippingAddress.street}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="street"
                      placeholder="Enter Your Address"
                      id="street"
                      required
                    />
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="flex flex-col items-start my-4 w-full">
                      <label htmlFor="phone">Phone</label>
                      <input
                      onChange={e=>setShippingAddress({...ShippingAddress ,phone:e.target.value})}
                      value={ShippingAddress.phone}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="number"
                        name="phone"
                        placeholder="Enter Your phone number"
                        id="phone"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start my-4 w-full ml-4">
                      <label htmlFor="city">City</label>
                      <input
                      onChange={e=>setShippingAddress({...ShippingAddress ,city:e.target.value})}
                      value={ShippingAddress.city}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="text"
                        name="city"
                        placeholder="Enter Your city"
                        id="city"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col items-start my-4 w-full">
                      <label htmlFor="district">Country</label>
                      <input
                      onChange={e=>setShippingAddress({...ShippingAddress ,country:e.target.value})}
                      value={ShippingAddress.country}
                        className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                        type="text"
                        name="country"
                        placeholder="Enter Your district"
                        id="country"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start my-4 w-full ml-4">
                      <label htmlFor="postcode">Post Code</label>
                      <input
                      onChange={e=>setShippingAddress({...ShippingAddress ,zip_code:e.target.value})}
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
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="w-fit flex text-sm sm:text-xl justify-center my-4">
              <button
                // onClick={handleSubmit}
                className="w-full bg-red-500 px-2 sm:px-4 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300"
              >
                submit
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col flex-1 border border-red-500 rounded-lg h-[420px] w-full px-10 py-5 mt-10">
          <div className="w-full text-center">
            <h2 className="text-xl font-bold"> Cart Totals </h2>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <h3 className=" font-semibold">Subtotal</h3>
            <h5 className="text-base text-gray-400">
              $ {parseFloat(TotalPrice).toFixed(2)}
            </h5>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 ">
            <h3 className="font-semibold">Shipping</h3>
            <h5 className="text-red-500 font-semibold">Calculate shipping</h5>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 ">
            <h3 className="font-semibold">
              Tax{" "}
              <span className="font-normal text-sm">(estimated for japan)</span>{" "}
            </h3>
            <h5 className="text-red-500 font-semibold">$0</h5>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 font-bold text-xl">
            <h3>Total</h3>
            <h5>$ {parseFloat(TotalPrice).toFixed(2)}</h5>
          </div>
          <div className="flex flex-col justify-center items-start mt-5">
            <div>
              <input type="radio" name="payment" value={"stripe"} onChange={(e)=>{
                setPaymentMethod(e.target.value)
                setStripeInput(true)
                setCoinInput(false)
                }} id="" />{" "}
              <span>Stripe</span> { StripeInput ? <span> <input value={StripeAmount} onChange={e=>setStripeAmount(e.target.value)} className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100" type="number" name="" id="" /> </span> : ""}
            </div>
            <div>
              <input type="radio" name="payment" id="" value={"coin"} onChange={(e)=>{
                setPaymentMethod(e.target.value)
                setCoinInput(true)
                setStripeInput(false)
                }} /> <span>Coin</span> { CoinInput ? <span> <input value={CoinAmount} onChange={e=>setCoinAmount(e.target.value)} className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100" type="number" name="" id="" /> </span> : ""}
            </div>
            <div>
              <input type="radio" name="payment" id="" value={"cash_on_delivery"} onChange={(e)=>{
                setPaymentMethod(e.target.value)
                setCoinInput(false)
                setStripeInput(false)
                }} />{" "}
              <span>Cash On Delivery</span>
            </div>
          </div>
          <div className="w-full my-10">
              <button onClick={handleSubmit} className="bg-red-500 text-white w-full py-2 border border-red-500 hover:bg-transparent hover:text-black transition-all duration-500">
                Checkout
              </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
