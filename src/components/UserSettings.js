import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";
import { AiOutlineClose } from "react-icons/ai";
import { SiVerizon } from "react-icons/si";

const UserSettings = () => {

  const { checkPassword, IsPassword, changePassword, ChangePassErrors, Password, setPassword } =
    useApi();

  const handlePassword = (e) => {
    e.preventDefault();
    changePassword(Password);
  };

  useEffect(() => {
    checkPassword(Password.oldPass);
  }, [Password.oldPass]);

  return (
    <section className="w-full h-full flex justify-center items-center">
      <form className="w-full h-[550px]">
        <div className="flex justify-center my-5 text-2xl md:text-4xl font-bold">
          <h1>Change Password</h1>
        </div>
        <div className="px-2 md:px-10">
          <div className="flex flex-col items-start my-4">
            <div className="flex justify-center items-center space-x-3">
              <label htmlFor="email">
                Old Password <span className="text-red-600">*</span>{" "}
              </label>
              {Password.oldPass && (
                <div>
                  {IsPassword === true ? (
                    <span className="flex justify-center items-center space-x-1">
                      {" "}
                      <SiVerizon className="text-xl text-green-600" />{" "}
                      <span> Password matched </span>
                    </span>
                  ) : (
                    <span className="flex justify-center items-center space-x-1">
                      {" "}
                      <AiOutlineClose className="text-xl text-red-600" />{" "}
                      <span>Password doesn't match</span>
                    </span>
                  )}
                </div>
              )}
            </div>
            <input
              onChange={(e) =>
                setPassword({ ...Password, oldPass: e.target.value })
              }
              value={Password.oldPass}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="password"
              placeholder="Old Password"
              id="password"
              // required
            />
            <div>
              {ChangePassErrors.old_password ? (
                <span className="text-red-500 text-sm">
                  {" "}
                  {ChangePassErrors.old_password}{" "}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="email">
              New Password <span className="text-red-600">*</span>{" "}
            </label>
            <input
              onChange={(e) =>
                setPassword({ ...Password, newPass: e.target.value })
              }
              value={Password.newPass}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="new password"
              placeholder="New Password"
              id="new password"
              // required
            />
            <div>
              {ChangePassErrors.new_password ? (
                <span className="text-red-500 text-sm">
                  {" "}
                  {ChangePassErrors.new_password}{" "}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="passsword">
              Confirm Password <span className="text-red-600">*</span>{" "}
            </label>
            <input
              onChange={(e) =>
                setPassword({ ...Password, confPass: e.target.value })
              }
              value={Password.confPass}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="confirm password"
              placeholder="Confirm Password"
              id="confirm password"
              // required
            />
            <div>
              {ChangePassErrors.confirm_password ? (
                <span className="text-red-500 text-sm">
                  {" "}
                  {ChangePassErrors.confirm_password}{" "}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full flex justify-center my-4">
            <button
              onClick={handlePassword}
              className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </section>
  );
};

export default UserSettings;
