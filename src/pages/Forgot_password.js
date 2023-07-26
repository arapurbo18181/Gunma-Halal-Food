import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useApi } from "../context/ApiContext";

const Forgot_password = () => {
  const { ForgotPass, setForgotPass, forgotPassword } = useApi();
  return (
    <div className="w-full h-[90vh] flex justify-center items-center overflow-hidden">
      <form
        onSubmit={forgotPassword}
        className="w-[500px] h-[300px] bg-white drop-shadow-2xl rounded-lg border border-red-300 container -mt-36"
      >
        <div className="px-10">
          <div className="flex justify-center my-5 text-4xl font-bold">
            <h1>Forgot Password</h1>
          </div>
          <div>
            <label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <div className="flex justify-start items-center space-x-4 px-2 py-3 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
              <div className="">
                <AiOutlineMail className="text-lg" />
              </div>
              <input
                onChange={(e) => setForgotPass(e.target.value)}
                value={ForgotPass}
                className="h-full w-full outline-none"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id=""
                // required
              />
            </div>
            <div className="w-full flex justify-center my-4">
              <button className="w-fit border border-red-500 text-red-500 py-2 px-4 rounded-sm hover:bg-red-500 hover:text-white transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forgot_password;
