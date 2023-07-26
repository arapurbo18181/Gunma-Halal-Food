import React, { useEffect } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { useApi } from "../context/ApiContext";
import { useParams } from "react-router-dom";

const SetNewPass = () => {
  const { SetNewPass, setSetNewPass, setPasswords, SetPassParams, setSetPassParams } = useApi();
  const params = useParams();
  useEffect(() => {
    setSetPassParams(params.id)
  }, [])
  
  return (
    <div className="w-full h-[90vh] flex justify-center items-center overflow-hidden">
      <form
        onSubmit={setPasswords}
        className="w-[500px] h-[400px] bg-white drop-shadow-2xl rounded-lg border border-red-300 container -mt-36"
      >
        <div className="px-10">
          <div className="flex justify-center my-5 text-4xl font-bold">
            <h1>Set Password</h1>
          </div>
          <div>
            <div className="flex flex-col items-start my-4">
              <label htmlFor="passsword">
                New Password <span className="text-red-600">*</span>
              </label>
              <div className="flex justify-start items-center space-x-4 px-2 py-3 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                <div className="">
                  <RiLockPasswordLine className="text-lg" />
                </div>
                <input
                  onChange={e=>setSetNewPass({...SetNewPass, new_password: e.target.value})}
                  value={SetNewPass.new_password}
                  className="h-full w-full outline-none"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  id="password"
                  // required
                />
              </div>
            </div>
            <div className="flex flex-col items-start my-4">
              <label htmlFor="passsword">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <div className="flex justify-start items-center space-x-4 px-2 py-3 w-full rounded-md bg-white outline-none transition-all duration-300 ease-in-out group-focus:outline-2 group-focus:outline-offset-0 group-focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100">
                <div className="">
                  <RiLockPasswordLine className="text-lg" />
                </div>
                <input
                  onChange={e=>setSetNewPass({...SetNewPass, confirm_password: e.target.value})}
                  value={SetNewPass.confirm_password}
                  className="h-full w-full outline-none"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Your Password"
                  id="password"
                  // required
                />
              </div>
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

export default SetNewPass;
