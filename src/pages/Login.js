import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { useApi } from "../context/ApiContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    Login,
    setLogin,
    loginSubmit,
    LoginError,
    IsLoginError,
    LoginValidationErrors,
    User,
  } = useApi();
  const navigate = useNavigate();

  const login = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
  };
  if (User) {
    navigate("/");
  } else {
    return (
      <>
        <BreadCrumbs name={"Login"} url={"login"} />
        <section className="bg-[#f9fafb] w-[100%] h-[90vh] flex justify-center items-center">
          <form
            onSubmit={loginSubmit}
            className="w-[500px] h-[500px] bg-white drop-shadow-2xl rounded-lg border border-red-300 container"
          >
            <div className="flex justify-center my-5 text-4xl font-bold">
              <h1>Log In</h1>
            </div>
            <div className="px-10">
              {IsLoginError ? (
                <div className="bg-red-500 text-xl w-full text-center text-white py-4 rounded-md transition-all duration-500">
                  {LoginError}
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col items-start my-4">
                <label htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={login}
                  value={Login.email}
                  className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  id=""
                  // required
                />
                {LoginValidationErrors.email ? (
                  <small className="text-red-500 ml-2">
                    {LoginValidationErrors.email}
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
                  onChange={login}
                  value={Login.password}
                  className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  id=""
                  // required
                />
                {LoginValidationErrors.password ? (
                  <small className="text-red-500 ml-2">
                    {LoginValidationErrors.password}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-end">
                <h2 className="cursor-pointer">Forgot Your Password?</h2>
              </div>
              <div className="w-full flex justify-center my-4">
                <button className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
};

export default Login;
