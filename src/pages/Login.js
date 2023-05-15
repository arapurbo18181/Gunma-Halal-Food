import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { useApi } from "../context/ApiContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

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
            className="w-[500px] h-[460px] bg-white drop-shadow-2xl rounded-lg border border-red-300 container -mt-36"
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
                <div className="flex justify-start items-center space-x-4 px-2 py-3 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                  <div className="">
                    <AiOutlineMail className="text-lg" />
                  </div>
                  <input
                    onChange={login}
                    value={Login.email}
                    className="h-full w-full outline-none"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    id=""
                    // required
                  />
                </div>
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

                <div className="flex justify-start items-center space-x-4 px-2 py-3 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                  <div className="">
                    <RiLockPasswordLine className="text-lg" />
                  </div>
                  <input
                    onChange={login}
                    value={Login.password}
                    className="h-full w-full outline-none"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    id=""
                    // required
                  />
                </div>
                {LoginValidationErrors.password ? (
                  <small className="text-red-500 ml-2">
                    {LoginValidationErrors.password}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-end">
                <Link to={"/forgotpassword"} className="cursor-pointer">Forgot Your Password?</Link>
              </div>
              <div className="w-full flex justify-center my-4">
                <button className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
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
