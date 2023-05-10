import axios from "axios";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { useApi } from "../context/ApiContext";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../components/SmallLoader";
import Loaders from "../components/Loaders";

const Signup = () => {
  const {
    Register,
    setRegister,
    registerSubmit,
    ValidationErrors,
    ConfirmPassError,
    IsConfirmError,
    User,
    IsRegister,
    setIsRegister,
  } = useApi();

  const navigate = useNavigate();

  const signUp = (e) => {
    e.persist();
    setRegister({ ...Register, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegister(true);
    registerSubmit(e);
  };

  if (User) {
    navigate("/");
  } else {
    return (
      <>
        {IsRegister ? (
          <Loaders height={"100vh"} width={"100vh"} />
        ) : (
          <>
            <BreadCrumbs name={"Sign Up"} url={"signup"} />
            <section className="bg-[#f9fafb] w-[100%] h-[90vh] flex justify-center items-center">
              <form
                className="w-[500px] h-[650px] bg-white drop-shadow-2xl rounded-lg border border-red-300 container"
              >
                <div className="flex flex-col items-center justify-center my-5 text-3xl font-bold">
                  <h1 className="">Sign Up</h1>
                </div>
                <div className="px-10">
                  {ConfirmPassError && IsConfirmError ? (
                    <div className="bg-red-500 text-xl w-full text-center text-white py-4 rounded-md transition-all duration-500">
                      {ConfirmPassError}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col items-start my-4">
                    <label htmlFor="first_name">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      onChange={signUp}
                      value={Register.first_name}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="first_name"
                      placeholder="Enter Your First Name"
                      id="first_name"
                      // required
                    />
                    {ValidationErrors.first_name ? (
                      <small className="text-red-500 ml-2">
                        {ValidationErrors.first_name}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-start my-4">
                    <label htmlFor="last_name">
                     Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      onChange={signUp}
                      value={Register.last_name}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="text"
                      name="last_name"
                      placeholder="Enter Your Last Name"
                      id="last_name"
                      // required
                    />
                    {ValidationErrors.last_name ? (
                      <small className="text-red-500 ml-2">
                        {ValidationErrors.last_name}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-start my-4">
                    <label htmlFor="email">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      onChange={signUp}
                      value={Register.email}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      // type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      // required
                    />
                    {ValidationErrors.email ? (
                      <small className="text-red-500 ml-2">
                        {ValidationErrors.email}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-start my-4">
                    <label htmlFor="passsword">
                      Password <span className="text-red-600">*</span>
                    </label>
                    <input
                      onChange={signUp}
                      value={Register.password}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      id="password"
                      // required
                    />
                    {ValidationErrors.password ? (
                      <small className="text-red-500 ml-2">
                        {ValidationErrors.password}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-start my-4">
                    <label htmlFor="passsword">
                      Confirm Password <span className="text-red-600">*</span>
                    </label>
                    <input
                      onChange={signUp}
                      value={Register.confirmPassword}
                      className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter Your Password"
                      id="password"
                      // required
                    />
                  </div>
                  <div className="w-full flex justify-center my-4">
                    <button onClick={handleRegister} className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </>
        )}
      </>
    );
  }
};

export default Signup;
