import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Loaders from "../components/Loaders";
import { useApi } from "../context/ApiContext";

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
            <div>
              <BreadCrumbs name={"Sign Up"} url={"signup"} />
            </div>
            <section className="w-full h-5/6 flex flex-col justify-center items-center py-5">
              <div className="flex justify-center items-center px-2 md:px-0 w-full md:w-1/2 xl:w-1/3 mb-5 space-x-2">
                <Link
                  to={"/login"}
                  className="w-full border border-red-500 text-red-500 py-2 rounded-full transition-all duration-300 text-center"
                >
                  Log In
                </Link>
                <Link
                  to={"/signup"}
                  className="w-full border border-red-500 py-2 rounded-full bg-red-500 text-white transition-all duration-300 text-center"
                >
                  Sign Up
                </Link>
              </div>
              <form className="w-full md:w-1/2 xl:w-1/3 h-fit bg-white drop-shadow-2xl rounded-lg border border-red-300 container mx-4 md:mx-0 pb-5">
                <div className="flex flex-col items-center justify-center my-2 md:my-2 xl:my-3 text-xl md:txt-3xl xl:text-3xl font-bold">
                  <h1 className="">Sign Up</h1>
                </div>
                <div className="px-2 md:px-5 xl:px-10 space-y-1">
                  {ConfirmPassError && IsConfirmError ? (
                    <div className="bg-red-500 text-xl w-full text-center text-white py-4 rounded-md transition-all duration-500">
                      {ConfirmPassError}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex h-full flex-row justify-start items-center w-full">
                    <div className="flex h-full flex-col justify-center items-start">
                      <label className="text-sm" htmlFor="first_name">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <div className="flex justify-start items-center space-x-4 text-sm px-1 py-1 md:px-2 md:py-2 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                        <div className="">
                          <MdDriveFileRenameOutline className="text-base" />
                        </div>
                        <input
                          onChange={signUp}
                          value={Register.first_name}
                          className="h-full w-full outline-none"
                          type="text"
                          name="first_name"
                          placeholder="Enter Your First Name"
                          id="first_name"
                          // required
                        />
                      </div>
                      {ValidationErrors.first_name ? (
                        <small className="text-red-500 ml-2">
                          {ValidationErrors.first_name}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex h-full flex-col items-start ml-2 sm:ml-4">
                      <label className="text-sm" htmlFor="last_name">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <div className="flex justify-start items-center space-x-4 text-sm px-1 py-1 md:px-2 md:py-2 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                        <div className="">
                          <MdDriveFileRenameOutline className="text-base" />
                        </div>
                        <input
                          onChange={signUp}
                          value={Register.last_name}
                          className="h-full w-full outline-none"
                          type="text"
                          name="last_name"
                          placeholder="Enter Your Last Name"
                          id="last_name"
                          // required
                        />
                      </div>
                      {ValidationErrors.last_name ? (
                        <small className="text-red-500 ml-2">
                          {ValidationErrors.last_name}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-sm" htmlFor="email">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <div className="flex justify-start items-center space-x-4 text-sm px-1 py-1 md:px-2 md:py-2 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                      <div className="">
                        <AiOutlineMail className="text-base" />
                      </div>
                      <input
                        onChange={signUp}
                        value={Register.email}
                        className="h-full w-full outline-none"
                        // type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        id="email"
                        // required
                      />
                    </div>
                    {ValidationErrors.email ? (
                      <small className="text-red-500 ml-2">
                        {ValidationErrors.email}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-sm" htmlFor="passsword">
                      Password <span className="text-red-600">*</span>
                    </label>
                    <div className="flex justify-start items-center space-x-4 text-sm px-1 py-1 md:px-2 md:py-2 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                      <div className="">
                        <RiLockPasswordLine className="text-base" />
                      </div>
                      <input
                        onChange={signUp}
                        value={Register.password}
                        className="h-full w-full outline-none"
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        id="password"
                        // required
                      />
                    </div>
                    {ValidationErrors.password ? (
                      <small className="text-red-500 ml-2">
                        {ValidationErrors.password}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-sm" htmlFor="passsword">
                      Confirm Password <span className="text-red-600">*</span>
                    </label>
                    <div className="flex justify-start items-center space-x-4 text-sm px-1 py-1 md:px-2 md:py-2 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                      <div className="">
                        <RiLockPasswordLine className="text-base" />
                      </div>
                      <input
                        onChange={signUp}
                        value={Register.confirmPassword}
                        className="h-full w-full outline-none"
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter Your Password"
                        id="password"
                        // required
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center pt-2 pb-5">
                    <button
                      onClick={handleRegister}
                      className="w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
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
