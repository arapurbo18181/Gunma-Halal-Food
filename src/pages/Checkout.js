import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";

const Checkout = () => {
  const [IsChecked, setIsChecked] = useState(false);
  const { TotalPrice } = useApi();
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   addProductsForOrder()
  //   setInfo({...Info ,totalAmount: Total });
  //   deleteAllDocsFromCart()
  //   setInfo({
  //     myName: "",
  //     email: "",
  //     address: "",
  //     phoneNumber: 0,
  //     city: "",
  //     district: "",
  //     postCode: 0,
  //     totalAmount: 0
  //   })
  // }

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
                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="email">Name</label>
                    <input
                      // onChange={e=>setInfo({...Info ,myName:e.target.value})}
                      // value={Info.myName}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="email">Email</label>
                    <input
                      // onChange={e=>setInfo({...Info ,email:e.target.value})}
                      // value={Info.email}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start my-4">
                  <label htmlFor="address">Address</label>
                  <textarea
                    // onChange={e=>setInfo({...Info ,address:e.target.value})}
                    // value={Info.address}
                    className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    id="address"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="phone">Phone</label>
                    <input
                      // onChange={e=>setInfo({...Info ,phoneNumber: parseInt(e.target.value)})}
                      // value={Info.phoneNumber}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
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
                      // onChange={e=>setInfo({...Info ,city:e.target.value})}
                      // value={Info.city}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
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
                    <label htmlFor="district">District</label>
                    <input
                      // onChange={e=>setInfo({...Info ,district:e.target.value})}
                      // value={Info.district}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="text"
                      name="district"
                      placeholder="Enter Your district"
                      id="district"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="postcode">Post Code</label>
                    <input
                      // onChange={e=>setInfo({...Info ,postCode:parseInt(e.target.value)})}
                      // value={Info.postCode}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
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
              { IsChecked ? "" : <div className="px-10">
                <div className="flex justify-center my-5 text-2xl font-bold">
                  <h1>Shipping Address</h1>
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="email">Name</label>
                    <input
                      // onChange={e=>setInfo({...Info ,myName:e.target.value})}
                      // value={Info.myName}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="email">Email</label>
                    <input
                      // onChange={e=>setInfo({...Info ,email:e.target.value})}
                      // value={Info.email}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start my-4">
                  <label htmlFor="address">Address</label>
                  <textarea
                    // onChange={e=>setInfo({...Info ,address:e.target.value})}
                    // value={Info.address}
                    className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    id="address"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="flex flex-col items-start my-4 w-full">
                    <label htmlFor="phone">Phone</label>
                    <input
                      // onChange={e=>setInfo({...Info ,phoneNumber: parseInt(e.target.value)})}
                      // value={Info.phoneNumber}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
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
                      // onChange={e=>setInfo({...Info ,city:e.target.value})}
                      // value={Info.city}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
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
                    <label htmlFor="district">District</label>
                    <input
                      // onChange={e=>setInfo({...Info ,district:e.target.value})}
                      // value={Info.district}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="text"
                      name="district"
                      placeholder="Enter Your district"
                      id="district"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start my-4 w-full ml-4">
                    <label htmlFor="postcode">Post Code</label>
                    <input
                      // onChange={e=>setInfo({...Info ,postCode:parseInt(e.target.value)})}
                      // value={Info.postCode}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
                      type="number"
                      name="postcode"
                      placeholder="Enter Your postcode"
                      id="postcode"
                      required
                    />
                  </div>
                </div>
              </div>}
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
              <input type="radio" name="payment" value={""} id="" />{" "}
              <span>Stripe</span>
            </div>
            <div>
              <input type="radio" name="payment" id="" /> <span>Coin</span>
            </div>
            <div>
              <input type="radio" name="payment" id="" />{" "}
              <span>Cash On Delivery</span>
            </div>
          </div>
          <div className="w-full my-10">
            <Link to={"/checkout"}>
              <button className="bg-red-500 text-white w-full py-2 border border-red-500 hover:bg-transparent hover:text-black transition-all duration-500">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
